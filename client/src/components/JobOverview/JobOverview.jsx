import React from "react";

const JobOverview = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#263238] hover:text-[#40A578]">
            Position title{" "}
          </h2>
          <p className="text-[#40A578] mt-2">Company</p>
          <p className="text-gray-500">Location City,Country</p>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-[#263238]">
              Job Description
            </h3>
            <p className="text-gray-700 mt-2">
              Description example, we are looking for a well skilled frontend
              developer with 3 years experience in REACT and NEXT js, CSS,
              TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobOverview;
