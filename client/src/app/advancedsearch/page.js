"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdvancedSearch() {
  const jobTypes = [
    "Full-Time",
    "Part-Time",
    "Contract",
    "Internship",
    "Temporary",
    "Freelance",
    "On-site",
    "Hybrid",
    "Remote",
  ];
  const educationLevels = [
    "High School",
    "Associate",
    "Bachelor",
    "Master",
    "Doctorate",
  ];
  const yearsOfExperience = [
    "0-1 years",
    "1-3 years",
    "3-5 years",
    "5-7 years",
    "7+ years",
  ];
  const jobCategories = [
    "Software Development",
    "Web Development",
    "Data Science",
    "Accounting",
    "Finance",
    "Administrative",
    "Architecture",
    "Engineering",
    "Art & Design",
    "Customer Service",
    "Education",
    "Healthcare",
    "Human Resources",
    "Legal",
    "Logistics",
    "Marketing",
    "Media",
    "Non-Profit",
    "Operations Management",
    "Project Management",
    "Research",
    "Retail",
    "Sales",
    "Security",
    "Social Services",
    "Writing",
  ];

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [yearsOfExp, setYearsOfExp] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = {};

    if (title) query.title = title;
    if (location) query.location = location;
    if (jobType) query.jobType = jobType;
    if (educationLevel) query.educationLevel = educationLevel;
    if (yearsOfExp) query.yearsOfExp = yearsOfExp;
    if (category) query.category = category;

    const queryString = new URLSearchParams(query).toString();

    router.push(`/search?${queryString}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="overflow-hidden bg-[#F5F7F8]">
        <div className="mt-14 my-20 flex flex-col w-screen container h-screen items-center ">
          <div className="input-fields grid grid-cols xl:grid-cols-2  md:grid-cols-2 gap-5 mb-8 justify-center">
            <div className="grid w-[300px] max-w-sm  gap-1.5">
              <Label htmlFor="Title">Title</Label>
              <Input
                type="text"
                id="Title"
                placeholder="Title "
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="Location">Location</Label>
              <Input
                type="text"
                id="Location"
                placeholder="Location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="selects justify-center grid grid-cols xl:grid-cols-2 md:grid-cols-2  gap-6">
            {/* Job Type */}
            <div>
              <Select
                value={jobType}
                onValueChange={(value) => setJobType(value)}
              >
                <SelectTrigger className="xl:w-[300px] md:w-[300px] w-[180px]">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  {jobTypes.map((type) => (
                    <SelectItem
                      key={type}
                      value={type.toLowerCase().replace(" ", "-")}
                    >
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Education Level */}
            <div>
              <Select
                select
                value={educationLevel}
                onValueChange={(value) => setEducationLevel(value)}
              >
                <SelectTrigger className="xl:w-[300px] md:w-[300px] w-[180px]">
                  <SelectValue placeholder="Education Level" />
                </SelectTrigger>
                <SelectContent>
                  {educationLevels.map((level) => (
                    <SelectItem
                      key={level}
                      value={level.toLowerCase().replace(" ", "-")}
                    >
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Years of Experience */}
            <div>
              <Select
                value={yearsOfExp}
                onValueChange={(value) => setYearsOfExp(value)}
              >
                <SelectTrigger className="xl:w-[300px] md:w-[300px] w-[180px]">
                  <SelectValue placeholder="Years of Experience" />
                </SelectTrigger>
                <SelectContent>
                  {yearsOfExperience.map((years) => (
                    <SelectItem
                      key={years}
                      value={years.toLowerCase().replace(" ", "-")}
                    >
                      {years}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* Category */}
            <div>
              <Select
                select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <SelectTrigger className="xl:w-[300px] md:w-[300px] w-[180px]">
                  <SelectValue placeholder="Job Category" />
                </SelectTrigger>
                <SelectContent>
                  {jobCategories.map((category) => (
                    <SelectItem
                      key={category}
                      value={category.toLowerCase().replace(" ", "-")}
                    >
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            className="mt-10 w-[200px] bg-[#263238] hover:bg-[#3f4f56]"
            type="submit"
          >
            {" "}
            Find job{" "}
          </Button>
        </div>
      </div>
    </form>
  );
}
