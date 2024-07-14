"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { signUpSchema } from "@/validations/validationSchema";
import { RiInformation2Line } from "react-icons/ri";
import { Loader2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { signUp } from "@/services/authService";

const initialValues = {
  email: "",
  password: "",
  password2: "",
};

const SignUpForm = ({ role, redirectURL }) => {
  const router = useRouter()
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await signUp({ ...values, role });
      localStorage.setItem("access_token", response.access_token);
      resetForm();
      router.push(redirectURL)
    } catch (err) {
      console.error("Error signing up:", err.message);
    }
  };
  return (
    <>
      <Card className="mx-auto max-w-md font-lato">
        <CardHeader>
          <CardTitle className="text-2xl font-lato">
            Create your Account
          </CardTitle>
          <CardDescription className="text-md">
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={signUpSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">
                      Email<span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Field name="email">
                      {({ field }) => (
                        <Input
                          {...field}
                          id="email"
                          type="email"
                          placeholder="m@example.com"
                          required
                        />
                      )}
                    </Field>
                    <div className="min-h-5">
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex flex-row items-center justify-between">
                      <Label htmlFor="password" className="flex">
                        Password<span className="text-red-500 ml-1">*</span>
                      </Label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="flex text-sky-600 items-center">
                            <RiInformation2Line className="w-5 h-5 mr-1" />
                            help?
                          </TooltipTrigger>
                          <TooltipContent className="max-w-[300px] text-muted-foreground">
                            <p>
                              Password should contain at least 8 characters,
                              upper and lowercase letters, at least one number
                              and at least one special character
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <Field name="password">
                      {({ field }) => (
                        <Input
                          {...field}
                          id="password"
                          type="password"
                          placeholder="***********"
                        />
                      )}
                    </Field>
                    <div className="min-h-5">
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password2">
                      Confirm Password
                      <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Field name="password2">
                      {({ field }) => (
                        <Input
                          {...field}
                          id="password2"
                          type="password"
                          placeholder="***********"
                        />
                      )}
                    </Field>
                    <div className="min-h-5">
                      <ErrorMessage
                        name="password2"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full text-md font-lato bg-[#263238] hover:bg-[#3f4f56]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Please wait
                      </>
                    ) : (
                      "Create an Account"
                    )}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
          <div class="relative flex py-5  items-center">
            <div class="flex-grow border-t border-gray-400"></div>
            <span class="flex-shrink mx-4 text-sm text-gray-700">or</span>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>
          <Button variant="outline" className="w-full font-lato">
            <FcGoogle className="mr-2 h-4 w-4" />
            Sign up with Google
          </Button>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline font-bold ml-1 text-[#263238]">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SignUpForm;
