import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div className="searchBox grid gap-10 rounded-xl p-6">
      <form action="">
        <div className="flex flex-col md:flex-row justify-between items-center rounded-[8px] gap-4 bg-white p-2  shadow-lg shadow-gray-400 border-8 border-[#CAF4FF]">
          <div className="flex gap-2 items-center  w-full md:w-auto">
            <IoSearch className="searchIcon text-[25px] cursor-pointer" />
            <input
              type="text"
              className="bg-transparent text-blue-500 ml-4 m-auto focus:outline-none w-full md:w-auto"
              placeholder="Browse Jobs ..."
            />
          </div>
          <button className="searchButton bg-[#3081D0] h-full p-3 px-10 rounded-[10px] text-white hover:bg-[#A0DEFF] hover:text-gray-700 mt-4 mr-4 md:mt-0 ">
            Find Job!
          </button>
        </div>
      </form>
    </div>
  );
};
export default SearchBox;
