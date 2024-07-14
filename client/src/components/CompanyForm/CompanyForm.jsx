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
import { companyFormSchema } from "@/validations/validationSchema";

async function onSubmit(values, actions, router) {
  const token = localStorage.getItem("access_token");

  const formData = new FormData();
  formData.append("name", values.name);
  formData.append("website", values.website);
  formData.append("description", values.description);
  formData.append("location", values.location);
  formData.append("CEO[name]", values.CEO);
  formData.append("history", values.history);
  formData.append("mission", values.mission);
  formData.append("values", values.values);

  try {
    const response = await fetch(
      "https://hiredhub-api.onrender.com/api/companies/",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
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
      name: "",
      website: "",
      description: "",
      location: "",
      CEO: "",
      mission: "",
      values: "",
    },
    validationSchema: companyFormSchema,
    onSubmit: (values, actions) => onSubmit(values, actions, router),
  });

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    formik;

  return (
    <div>
      <Card className="mx-auto max-w-md font-lato">
        <CardHeader>
          <CardTitle className="text-2xl font-lato">
            Set up your company
          </CardTitle>
          <CardDescription className="text-md">
            Fill out your company information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                type="text"
                id="name"
                name="name"
                placeholder="name"
              />
            </div>
            {errors.name && touched.name && (
              <p className="text-red-600">{errors.name}</p>
            )}
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="website">Website</Label>
              <Input
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.website}
                type="text"
                id="website"
                name="website"
                placeholder="Website"
              />
            </div>
            {errors.website && touched.website && (
              <p className="text-red-600">{errors.website}</p>
            )}
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="description">Description</Label>
              <Input
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                type="text"
                id="description"
                name="description"
                placeholder="Description"
              />
            </div>
            {errors.description && touched.description && (
              <p className="text-red-600">{errors.description}</p>
            )}

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
              <Label htmlFor="ceo">CEO</Label>
              <Input
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.CEO}
                type="text"
                id="CEO"
                name="CEO"
                placeholder="CEO"
              />
            </div>
            {errors.ceo && touched.ceo && (
              <p className="text-red-600">{errors.ceo}</p>
            )}

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="mission">Mission</Label>
              <Input
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mission}
                type="text"
                id="mission"
                name="mission"
                placeholder="Mission"
              />
            </div>
            {errors.mission && touched.mission && (
              <p className="text-red-600">{errors.mission}</p>
            )}

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="values">Values</Label>
              <Input
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.values}
                type="text"
                id="values"
                name="values"
                placeholder="Values"
              />
            </div>
            {errors.values && touched.values && (
              <p className="text-red-600">{errors.values}</p>
            )}

            <Button
              type="submit"
              className="w-full font-lato bg-[#263238] hover:bg-[#3f4f56]"
            >
              Create Company
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
