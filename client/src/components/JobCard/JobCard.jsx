import React from "react";

const JobCard = () => {
  return (
    <div>
      <div className=" jobCarddiv flex gap-10 justify-center flex-wrap items-center py-10">
        <div
          key={id}
          className=" w-[250px] p-[20px] bg-white rounded hover:bg-blue-500 shadow-BlueShadow hover:shadow-lg "
        ></div>
        <span className="flex justify-between items-center gap-4">
          <h1 className="text-[16px] font-semibold text-black group-hover:text-white">
            Job Title {title}
          </h1>
        </span>
        <h6 className="text-[#ccc] ">City/Location {location}</h6>
        <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
          {description}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
          officia.
        </p>

        <div className="employerCompany flex items-center gap-2">
          <img src={image} alt="Company Logo" className="w-[10%]" />
          <span className="text-[14px] py-[1rem] block group-hover:text-LightBlue">
            Company Name {company}
          </span>
        </div>
        <button className="border-[2px] rounded-[1opx] block p-[10px] w-full text-[14px] font-semibold text-black hover:bg-white group-hover/item:text-BlueColor ">
          {" "}
          Apply Now!
        </button>
      </div>
    </div>
  );
};
export default JobCard;
