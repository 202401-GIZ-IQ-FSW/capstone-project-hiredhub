import React from "react";
import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footerDiv p-8 mb-4 bg-[#263238] w-full md:w-3/4 rounded-lg gap-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 m-auto items-center justify-center">
      <div className="logoIcon col-span-1">
        <h1 className="logo text-25 text-white pb-6">
          <strong className="text-white">Hired</strong>Hub
        </h1>
      </div>
      <div className="quick-links col-span-1">
        <span className="text-18 font-semibold pb-6 text-white">
          Quick Links
        </span>
        <ul className="list-none grid gap-3">
          <li className="text-white opacity-70 hover:opacity-100">About Us</li>
          <li className="text-white opacity-70 hover:opacity-100">Employers</li>
          <li className="text-white opacity-70 hover:opacity-100">
            Candidates
          </li>
          <li className="text-white opacity-70 hover:opacity-100">Sign Up</li>
        </ul>
      </div>
      <div className="resources col-span-1">
        <span className="text-18 font-semibold pb-6 text-white">Resources</span>
        <ul className="list-none grid gap-3">
          <li className="text-white opacity-70 hover:opacity-100">Support</li>
          <li className="text-white opacity-70 hover:opacity-100">FAQ</li>
          <li className="text-white opacity-70 hover:opacity-100">Our Team</li>
        </ul>
      </div>
      <div className="find-us gap-5 col-span-1">
        <span className="text-18 font-semibold pb-6 text-white">Find Us!</span>
        <div className="icons flex gap-8">
          <FaMeta className="bg-white p-4 h-9 w-9 rounded-full icon text-[#40A578]" />
          <FaInstagram className="bg-white p-4 h-9 w-9 rounded-full icon text-[#40A578]" />
          <FaSquareXTwitter className="bg-white p-4 h-9 w-9 rounded-full icon text-[#40A578]" />
          <FaLinkedin className="bg-white p-4 h-9 w-9 rounded-full icon text-[#40A578]" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
