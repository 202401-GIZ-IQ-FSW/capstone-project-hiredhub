import { Butterfly_Kids } from "next/font/google";
import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div class="searchBox grid rounded-lg p-6 md:p-12 ">
      <form action="">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 rounded-lg bg-white p-4 md:p-6 shadow-lg">
          <div class="flex items-center w-full md:w-auto gap-2">
            <IoSearch class="searchIcon cursor-pointer text-2xl md:text-3xl" />
            <input
              type="text"
              class="w-full md:w-auto flex-grow bg-transparent text-green-700 focus:outline-none text-lg md:text-xl"
              placeholder="Browse Jobs ..."
            />
          </div>
          <button class="w-full md:w-auto rounded-lg bg-white py-2 md:py-3 px-6 md:px-10 text-gray-900 hover:bg-green-700 hover:text-gray-100 font-bold">
            Find Job!
          </button>
        </div>
      </form>
    </div>
  );
};
export default SearchBox;
