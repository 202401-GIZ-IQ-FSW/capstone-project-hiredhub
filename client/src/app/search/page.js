"use client";
import FilterJobBrowse from "../../components/BrowseJob/FilterJobBrowse/FilterJobBrowse.jsx";
import JobCard from "../../components/JobCard/JobCard.jsx";
import jobsData from "./../../dummyJobData.json";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

const BrowseJob = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const jobType = searchParams.get("jobType");
  const education = searchParams.get("education");
  const experience = searchParams.get("experience");

  const [loadMore, setLoadMore] = useState(false);
  const [jobCards, setJobCards] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const applyFilters = () => {
    let filtered = jobsData;

    if (category) {
      filtered = filtered.filter((job) => job.category === category);
    }

    if (jobType) {
      filtered = filtered.filter((job) => job.jobType.includes(jobType));
    }

    if (education) {
      filtered = filtered.filter(
        (job) => job.requirements.educationalLevel === education
      );
    }

    if (experience) {
      filtered = filtered.filter(
        (job) => job.requirements.yearsOfExperience === experience
      );
    }

    return filtered;
  };

  useEffect(() => {
    const filtered = applyFilters();
    setFilteredJobs(filtered);
    setJobCards(filtered.slice(0, 10));
  }, [category, jobType, education, experience]);

  const clicked = () => {
    setLoadMore(true);
  };

  useEffect(() => {
    if (loadMore) {
      setJobCards((prevJobCards) => [
        ...prevJobCards,
        ...filteredJobs.slice(prevJobCards.length, prevJobCards.length + 10),
      ]);
      setLoadMore(false);
    }
  }, [loadMore, filteredJobs]);

  return (
    <div className=" flex items-center flex-col pt-8 bg-[#F5F7F8]">
      <h1 className="font-semibold md:text-4xl  font-poppins">Browse Jobs</h1>
      <FilterJobBrowse />
      <div className="self-center grid grid-cols-1 mt-10 md:grid-cols-2 md:px-20 md:gap-x-7">
        {jobCards.map((job, i) => (
          <JobCard key={i} job={job} />
        ))}
      </div>

      {jobCards.length < filteredJobs.length && (
        <Button
          variant="outline"
          onClick={clicked}
          className="mb-5 mt-2 px-6 border-black rounded-lg"
        >
          Load More...
        </Button>
      )}
    </div>
  );
};

export default BrowseJob;
