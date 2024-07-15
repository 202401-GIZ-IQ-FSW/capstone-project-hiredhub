"use client";
import React, { useEffect, useState } from "react";
import JobCard from "@/components/JobCard/JobCard";

const SavedJobs = ({ jobs, token }) => {
  const [jobDetails, setJobDetails] = useState([]);

  useEffect(() => {
    if (jobs && token) {
      fetchJobDetails();
    }
  }, [jobs, token]);

  const fetchJobDetails = async () => {
    try {
      const jobData = await Promise.all(
        jobs.map(async (id) => {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/jobs/${id}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          if (res.ok) {
            return res.json();
          } else {
            console.error(`Error fetching job data for job id ${id}:`, res.statusText);
            return null;
          }
        })
      );
      setJobDetails(jobData.filter(job => job !== null));
    } catch (error) {
      console.error('Error fetching job details:', error);
    }
  };

  if (!jobs || jobs.length === 0) {
    return <p className="font-light mt-8 text-center">Saved jobs is empty</p>;
  }

  return (
    <div className="my-6 px-12">
      {jobDetails.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default SavedJobs;
