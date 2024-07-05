import React from "react";

function page({ params }) {
  console.log(params);
  const job = {
    title: "UIUX",
    company: "DIT",
    location: "100 meter , Erbil",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum repellat illo laudantium eius ex doloribus, enim exercitationem amet fuga id, fugit assumenda magnam voluptate, possimus nisi perspiciatis similique! Tempora? ",
  };
  return (
    <div className='m-10 flex flex-col content-around justify-between font-mono sm:flex  sm:flex-row  '>
      {/* JOb */}
      <div className=' max-w-lg'>
        <h1 className='text-start'>{job.title}</h1>
        <div>
          <p>company: {job.company}</p>
          <p>Locaion: {job.location}</p>
          <p>Job description : {job.description}</p>
        </div>

        <button className='border rounded p-2  shadow hover:bg-white hover:text-teal-500 bg-teal-500'>
          {" "}
          Apply{" "}
        </button>
      </div>
      {/* Skill job */}
      <div className='my-2   p-2 border rounded border-slate-300 min-w-36'>
        <h2 className='text-teal-600'>Skill</h2>
        <div className='border rounded max-h-full min-h-48   bg-zinc-100 '></div>
      </div>
    </div>
  );
}

export default page;
