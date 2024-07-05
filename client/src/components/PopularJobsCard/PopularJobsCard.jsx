import React from "react";

const PopularJobsCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div className="bg-[#263238] text-white p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold">Job Title</h3>
        <p className="mt-2">Number of Listed Jobs</p>
      </div>
    </div>
  );
};
export default PopularJobsCard;
