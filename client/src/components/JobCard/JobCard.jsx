import React from "react";

const JobCard = () => {
  return (
    <div className="job-card max-w-sm bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-blue-100 overflow-hidden m-4">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">title</h2>
        <p className="text-gray-600 mt-2">Employer Company</p>
        <p className="text-gray-500 text-sm mt-1">City/Location</p>
        <p className="text-gray-700 mt-4">
          DESCRIPTION Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Tempora iste veniam nesciunt, cum doloribus laboriosam voluptates ipsa
          sunt, expedita iure, et saepe ex repellat itaque natus eius suscipit.
          Accusantium, dolore.
        </p>
        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Apply Now
        </button>
      </div>
    </div>
  );
};
export default JobCard;
