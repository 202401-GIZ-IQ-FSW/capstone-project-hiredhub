import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JobCard = () => {
  return (
    <div className="job-card xl:max-w-2xl md:max-w-2xl bg-[#243238] rounded-lg shadow-md min-w-[400px]  overflow-hidden m-4 flex flex-col md:flex-row">
      <div className="p-4 flex-grow">
        <h2 className="text-2xl font-semibold text-white">Job Title</h2>
        <p className="text-white mt-2">Employer Company</p>
        <p className="text-[#9ea5a8] text-sm mt-1">City/Location</p>
        <p className="text-white my-4">
          DESCRIPTION Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Tempora iste veniam nesciunt, cum doloribus laboriosam voluptates ipsa
          sunt, expedita iure,.
        </p>
      </div>
      <div className="px-6 my-4 flex md:items-end items-center justify-center">
        <Button className="w-[100px]" variant="secondary">Apply</Button>
      </div>
    </div>
  );
};
export default JobCard;
