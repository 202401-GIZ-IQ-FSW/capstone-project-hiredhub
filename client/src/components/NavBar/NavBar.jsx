"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/HiredhubLogo.svg";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Browse",
    },
    {
      id: 2,
      link: "jobs",
    },
    {
      id: 3,
      link: "Post Jobs",
    },
    {
      id: 4,
      link: "about us",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  const linksMobile = [
    {
      id: 1,
      link: "Browse",
    },
    {
      id: 2,
      link: "jobs",
    },
    {
      id: 3,
      link: "Post Jobs",
    },
    {
      id: 4,
      link: "about us",
    },
    {
      id: 5,
      link: "contact",
    },
    { id: 6, link: "Log in" },
    {
      id: 7,
      link: "Sign up",
    },
  ];

  return (
    <div className="flex justify-between items-center border-b-2 border-gray-400 w-full h-20 px-4 text-white bg-white fixed nav">
      <div>
        <Link href={"/"}>
          <div>
            <Image
              className="w-[150px] md:m-10 md:w-[200px]"
              src={logo}
              width={200}
              height={200}
            />
          </div>
        </Link>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:underline duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex flex-row gap-4">
        <Button>Log in</Button>
        <Button>Sign up</Button>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-gray-500">
          {linksMobile.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
