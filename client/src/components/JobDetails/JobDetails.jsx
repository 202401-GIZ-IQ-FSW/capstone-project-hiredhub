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

  return (
    <div className="flex flex-col w-screen h-screen mt-10 items-center">
      <div className="xl:w-[700px] w-[300px] md:w-[600px] grid grid-col gap-5 items-center justify-center p-8">
        <div className="flex flex-col gap-3">
          <div className="text-2xl font-poppins">{data.title}</div>

          <div className="text-xl flex gap-2 font-lato">
            <div>{data.companyId.name}</div> <Dot />
            <div className="flex flex-row">
              <MapPin size={20} />
              {data.location}
            </div>
          </div>
          <div className="flex flex-row gap-1 font-lato">
            <Badge> {data.status} </Badge>
            <Badge>{data.category.name}</Badge>
            {data.jobType ? "" : <Badge>{data.jobType}</Badge>}
          </div>
        </div>
        <div>
          <div className="font-xl mb-2">About this job</div>
          {data.description}
        </div>
        <div>
          <div>Details</div>
          <div>Skills</div>
          <div>Years of experience: {data.requirements.yearsOfExperience}</div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Button
          tyep="submit"
          className="w-[200px] bg-[#263238] hover:bg-[#3f4f56] font-lato mt-14"
        >
          Apply for this job
        </Button>
      </form>
    </div>
  );
}
