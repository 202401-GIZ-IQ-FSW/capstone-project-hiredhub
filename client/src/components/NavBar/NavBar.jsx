import React from "react";

const NavBar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoIcon">
        <h1 className="logo text-[25px] text-BlueColor">
          <strong className="text-LightBlue">Hired</strong>Hub
        </h1>
      </div>
      <div className=" menu flex gap-8">
        <li className="menuList text-black hover:text-BlueColor list-none cursor-pointer relative ">
          HOME
        </li>
        <li className="menuList text-black hover:text-BlueColor list-none cursor-pointer relative ">
          JOBS
        </li>
        <li className="menuList text-black hover:text-BlueColor list-none cursor-pointer relative ">
          EMPLOYERS
        </li>
        <li className="menuList text-black hover:text-BlueColor list-none cursor-pointer relative ">
          ABOUT
        </li>
        <li className="menuList text-black hover:text-BlueColor list-none cursor-pointer relative ">
          CONTACTS
        </li>
      </div>
    </div>
  );
};
export default NavBar;
