"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./../../ui/select";

export const FilterJobBrowse = () => {
  const [category, setCategory] = useState("");
  const [jobType, setJobType] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (category) params.set("category", category);
    if (jobType) params.set("jobType", jobType);
    if (education) params.set("education", education);
    if (experience) params.set("experience", experience);

    router.push(`${pathname}?${params.toString()}`);
  }, [category, jobType, education, experience]);

  return (
    <>
      <div className="flex mt-10 flex-col text-center md:flex-row md:items-center text-[#6F7482] mb-14">
        <h5 className="pb-2 mr-10">Filter By: </h5>
        <div className="md:flex">
          <div className="flex justify-between mt-3 mb-4 space-x-4 md:mr-4">
            <Select onValueChange={setCategory}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Category1">Category1</SelectItem>
                <SelectItem value="Category2">Category2</SelectItem>
                {/* Add more categories as needed */}
              </SelectContent>
            </Select>
            {/*  */}
            <Select onValueChange={setJobType}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Full-Time">Full Time</SelectItem>
                <SelectItem value="Part-Time">Part Time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
                <SelectItem value="Internship">Internship</SelectItem>
                <SelectItem value="Temporary">Temporary</SelectItem>
                <SelectItem value="Freelance">Freelance</SelectItem>
                <SelectItem value="On-site">On site</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-between mt-3 mb-6 space-x-4">
            <Select onValueChange={setEducation}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Education" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="High School">High School</SelectItem>
                <SelectItem value="Associate">Associate</SelectItem>
                <SelectItem value="Bachelor">Bachelor</SelectItem>
                <SelectItem value="Master">Master</SelectItem>
                <SelectItem value="Doctorate">Doctorate</SelectItem>
              </SelectContent>
            </Select>
            {/*  */}
            <Select onValueChange={setExperience}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-3 years">1-3 years</SelectItem>
                <SelectItem value="3-5 years">3-5 years</SelectItem>
                <SelectItem value="5-7 years">5-7 years</SelectItem>
                <SelectItem value="7+ years">7+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="border-black border-[1px] w-full fill-[#000000]">
       
      </div>
    </>
  );
};

export default FilterJobBrowse;
