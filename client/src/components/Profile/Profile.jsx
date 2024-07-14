"use client";
import { useRouter } from "next/navigation";
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
import { useFormik } from "formik";
import { profileSchema } from "@/validations/validationSchema";

async function onSubmit(values, actions, router) {
  const token = localStorage.getItem("access_token");

  const formData = new FormData();
  formData.append("firstName", values.firstName);
  formData.append("lastName", values.lastName);
  formData.append("phoneNumber", values.phoneNumber);
  formData.append("location", values.location);
  formData.append("resume", values.resume);
  formData.append("profilePicture", values.profilePicture);

  try {
    const response = await fetch(
      "https://hiredhub-api.onrender.com/api/profile/create-profile",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log(result);

    router.push("/");
  } catch (error) {
    console.error("Error submitting the form:", error);
  }

  actions.setSubmitting(false);
}

export default function Profile() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      location: "",
      resume: "",
      profilePicture: "",
    },
    validationSchema: profileSchema,
    onSubmit: (values, actions) => onSubmit(values, actions, router),
  });

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = formik;

  return (
    <div>
      <Card className="mx-auto max-w-md font-lato">
        <CardHeader>
          <CardTitle className="text-2xl font-lato">
            Set up your profile
          </CardTitle>
          <CardDescription className="text-md">
            Fill out your profile information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="firstName">First name</Label>
              <Input
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name"
              />
            </div>
            {errors.firstName && touched.firstName && (
              <p className="text-red-600">{errors.firstName}</p>
            )}
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="lastName">Last name</Label>
              <Input
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name"
              />
            </div>
            {errors.lasttName && touched.lastName && (
              <p className="text-red-600">{errors.lastName}</p>
            )}
            {errors.name && touched.email && (
              <p className="text-red-600">{errors.name}</p>
            )}

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="phoneNumber">Phone number</Label>
              <Input
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phoneNumber}
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone number"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="location">Location</Label>
              <Input
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.location}
                type="text"
                id="location"
                name="location"
                placeholder="Location"
              />
            </div>
            {errors.location && touched.location && (
              <p className="text-red-600">{errors.location}</p>
            )}
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="profilePicture">Profile picture</Label>
              <Input
                id="profilePicture"
                name="profilePicture"
                type="file"
                onChange={(event) => {
                  setFieldValue("profilePicture", event.currentTarget.files[0]);
                }}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="resume">Resume (CV)</Label>
              <Input
                id="resume"
                name="resume"
                type="file"
                onChange={(event) => {
                  setFieldValue("resume", event.currentTarget.files[0]);
                }}
              />
            </div>
            <Button
              type="submit"
              className="w-full font-lato bg-[#263238] hover:bg-[#3f4f56]"
            >
              Create profile
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
