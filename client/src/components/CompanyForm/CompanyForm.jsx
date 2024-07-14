"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

async function onSubmit(values, router) {
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
}

export default function Profile() {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    website: "",
    description: "",
    location: "",
    CEO: "",
    mission: "",
    values: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!values.name) newErrors.name = "Name is required";
    if (!values.website) newErrors.website = "Website is required";
    if (!values.description) newErrors.description = "Description is required";
    if (!values.location) newErrors.location = "Location is required";
    if (!values.CEO) newErrors.CEO = "CEO is required";
    if (!values.mission) newErrors.mission = "Mission is required";
    if (!values.values) newErrors.values = "Values are required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      await onSubmit(values, router);
    }
  };

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
                onChange={handleChange}
                value={values.name}
                type="text"
                id="name"
                name="name"
                placeholder="name"
              />
              {errors.name && <p className="text-red-600">{errors.name}</p>}
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="website">Website</Label>
              <Input
                onChange={handleChange}
                value={values.website}
                type="text"
                id="website"
                name="website"
                placeholder="Website"
              />
              {errors.website && (
                <p className="text-red-600">{errors.website}</p>
              )}
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="description">Description</Label>
              <Input
                onChange={handleChange}
                value={values.description}
                type="text"
                id="description"
                name="description"
                placeholder="Description"
              />
              {errors.description && (
                <p className="text-red-600">{errors.description}</p>
              )}
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="location">Location</Label>
              <Input
                onChange={handleChange}
                value={values.location}
                type="text"
                id="location"
                name="location"
                placeholder="Location"
              />
              {errors.location && (
                <p className="text-red-600">{errors.location}</p>
              )}
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="CEO">CEO</Label>
              <Input
                onChange={handleChange}
                value={values.CEO}
                type="text"
                id="CEO"
                name="CEO"
                placeholder="CEO"
              />
              {errors.CEO && <p className="text-red-600">{errors.CEO}</p>}
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="mission">Mission</Label>
              <Input
                onChange={handleChange}
                value={values.mission}
                type="text"
                id="mission"
                name="mission"
                placeholder="Mission"
              />
              {errors.mission && (
                <p className="text-red-600">{errors.mission}</p>
              )}
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="values">Values</Label>
              <Input
                onChange={handleChange}
                value={values.values}
                type="text"
                id="values"
                name="values"
                placeholder="Values"
              />
              {errors.values && <p className="text-red-600">{errors.values}</p>}
            </div>

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
