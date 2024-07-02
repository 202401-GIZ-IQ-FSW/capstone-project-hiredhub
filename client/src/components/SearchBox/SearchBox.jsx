import { Butterfly_Kids } from "next/font/google";
import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div className="searchBox grid gp-10 bg-[#CAF4FF] rounded-[10px] p-[3rem]">
      <form action="">
        <div className=" flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-gray-400">
          <div className="flex gap-2 items-center">
            <IoSearch className="searchIcon text-[25px] cursor-pointer" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Browse Jobs ..."
            />
          </div>
          <button className="searchButton bg-[#3081D0] h-full p-5 px-10 rounded-[10px] text-white hover:bg-[#A0DEFF] hover:text-gray-700">

            Find Job!
          </button>
        </div>
      </form>
    </div>
  );
};
export default SearchBox;
