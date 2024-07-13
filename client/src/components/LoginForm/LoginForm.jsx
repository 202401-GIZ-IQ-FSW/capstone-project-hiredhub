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
import { loginSchema } from "@/validations/validationSchema";
import { Loader2 } from "lucide-react";
import { ToastAction, ToastProvider } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { login } from "@/services/authService";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { toast } = useToast();
  const router = useRouter()
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const response = await login({ ...values });
      localStorage.setItem("access_token", response.access_token);
      router.push('/')
      resetForm();
    } catch (err) {
      console.error("Error signing up:", err.message);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };
  return (
    <>
      <Card className="mx-auto max-w-md font-lato">
        <CardHeader>
          <CardTitle className="text-2xl font-lato">
            Log in to your Account
          </CardTitle>
          <CardDescription className="text-md">
            Enter your email and password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
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
                    <div className="flex flex-row">
                      <Label htmlFor="password" className="flex">
                        Password
                      </Label>
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
                      "Log in"
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
          <Button variant="outline" className="w-full text-md font-lato">
            <FcGoogle className="mr-2 h-4 w-4" />
            Log in with Google
          </Button>
          <div className="mt-4 text-center text-sm">
            Don't have an account yet?{" "}
            <Link href="/signup" className="underline font-bold ml-1 text-[#263238]">
              Sign up
            </Link>
          </div>{" "}
        </CardContent>
      </Card>
    </>
  );
};

export default LoginForm;
