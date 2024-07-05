import JobInfo from "@/components/JobInfo/JobInfo";
import React from "react";

function page({ params }) {
  console.log(params);
  const job = {
    title: "UIUX",
    company: "DIT",
    location: "100 meter , Erbil",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum repellat illo laudantium eius ex doloribus, enim exercitationem amet fuga id, fugit assumenda magnam voluptate, possimus nisi perspiciatis similique! Tempora? ",
    qualification: "  BSC in computer science or related field ",
    expirence: "3 years",
  };
  return (
    <div className='m-10 flex flex-col content-around justify-between font-mono sm:flex  sm:flex-row  '>
      {/* JOb */}
      <JobInfo job={job} />
      {/* Skill job */}
      <div className='my-2   p-2 border rounded border-slate-300 min-w-36'>
        <h2 className='text-teal-600'>Skill</h2>
        <div className='border rounded max-h-full min-h-48   bg-zinc-100 '></div>
      </div>
    </div>
  );
}

export default page;
