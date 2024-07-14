"use client";

import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dot } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ({ data }) {
  const params = useParams();
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const application = {
      jobId: params.id,
    };

    const res = await fetch("/api/applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(application),
    });

    if (res.ok) {
      router.push("/application-success");
    } else {
      alert("Failed to submit application.");
    }
  }

  let margin = "";
  if (data.description.length < 200) margin = "mb-24";

  return (
    <div className={`flex flex-row min-h-0.5 w-screen  relative  px-20 ${margin}`}>
      <div className="xl:w-[700px] w-[300px] md:w-[600px] min-w-0.5 grid grid-col gap-5 items-center justify-center p-8">
        <div className="flex flex-row justify-between gap-10">
          <div className="flex flex-col gap-3">
            <div className="text-2xl font-poppins">{data.title}</div>

            <div className="text-xl flex gap-2 font-lato">
              <div>{data.companyId.name}</div> <Dot />
              <div className="flex flex-row text-gray-600">
                <MapPin size={20} />
                {data.location}
              </div>
            </div>
            <div className="flex flex-row gap-1 font-lato">
              <Badge variant="outline"> {data.status} </Badge>
              <Badge variant="outline">{data.category.name}</Badge>
              <span>
                {data.jobType ? (
                  <Badge variant="outline"> {data.jobType} </Badge>
                ) : (
                  <Badge> </Badge>
                )}
              </span>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <Button
              tyep="submit"
              className="w-[150px] bg-[#263238] hover:bg-[#3f4f56] font-lato mt-14"
            >
              Apply for this job
            </Button>
          </form>
        </div>
        <div>
          <div className="font-xl mb-2">About this job</div>
          {data.description}
        </div>
      </div>
      <div className="flex flex-col absolute top-6 gap-3 right-20 justify-start font-poppins">
        <div class="block w-full max-w-[18rem] rounded-lg bg-slate-100 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
          <ul class="w-full">
            <li class="w-full border-b-2 border-slate-200 border-opacity-100 p-4 font-semibold dark:border-white/10">
              Salary
            </li>
            <li class="w-full border-b-2 border-slate-200  border-opacity-100 p-4  dark:border-white/10">
              {data.wage}$
            </li>
          </ul>
        </div>
        <div class="block w-full max-w-[18rem] rounded-lg bg-slate-100 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
          <ul class="w-full">
            <li class="w-full border-b-2 border-slate-200 border-opacity-100 p-4 font-semibold dark:border-white/10">
              Job requirements
            </li>
            <li class="w-full border-b-2 border-slate-200  border-opacity-100 p-4  dark:border-white/10">
              {data.requirements.skills}
            </li>
            <li class="w-full border-b-2 border-slate-200  border-opacity-100 p-4  dark:border-white/10">
              Degree: {data.requirements.certifications}
            </li>
            <li class="w-full p-4">{data.requirements.yearsOfExperience}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
