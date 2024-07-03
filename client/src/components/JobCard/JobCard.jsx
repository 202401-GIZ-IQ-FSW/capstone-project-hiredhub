import React from "react";

const JobCard = () => {
  return (
    <div class="job-card max-w-2xl bg-[#243238] rounded-lg shadow-md hover:shadow-xl hover:bg-slate-600 overflow-hidden m-4 flex flex-col md:flex-row">
      <div class="p-4 flex-grow">
        <h2 class="text-xl font-semibold text-white">Job Title</h2>
        <p class="text-white mt-2">Employer Company</p>
        <p class="text-[#9ea5a8] text-sm mt-1">City/Location</p>
        <p class="text-[#9ea5a8] mt-4">
          DESCRIPTION Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Tempora iste veniam nesciunt, cum doloribus laboriosam voluptates ipsa
          sunt, expedita iure, et saepe ex repellat itaque natus eius suscipit.
          Accusantium, dolore.
        </p>
      </div>
      <div class="p-4 flex md:items-end items-center justify-center">
        <button class="bg-[#fafdfc] text-[#243238] py-2 px-4 rounded-lg hover:bg-[#243238] hover:text-white">
          Apply
        </button>
      </div>
    </div>
  );
};
export default JobCard;
