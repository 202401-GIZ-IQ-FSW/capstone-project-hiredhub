import { useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navBar flex justify-between items-center p-6 md:p-12 bg-white shadow-lg">
      <div className="logoIcon">
        <h1 className="logo text-30 text-blue-500">
          <strong className="text-blue-700">Hired</strong>Hub
        </h1>
      </div>

      <div class="menu hidden md:flex gap-8">
        <li class="menuList text-black hover:text-[#40A578] hover:font-bold list-none cursor-pointer">
          HOME
        </li>
        <li class="menuList text-[#263238] hover:text-[#40A578] hover:font-bold list-none cursor-pointer">
          JOBS
        </li>
        <li class="menuList text-[#263238] hover:text-[#40A578] hover:font-bold list-none cursor-pointer">
          EMPLOYERS
        </li>
        <li class="menuList text-[#263238] hover:text-[#40A578] hover:font-bold list-none cursor-pointer">
          ABOUT
        </li>
        <li class="menuList text-[#263238] hover:text-[#40A578] hover:font-bold list-none cursor-pointer">
          CONTACTS
        </li>
      </div>

      <div class="md:hidden flex items-center">
        <button
          onClick={handleToggle}
          class="text-[#40A578] focus:outline-none"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div class="menu flex-col items-center bg-white p-4 md:hidden absolute top-16 left-0 right-0 shadow-lg z-10">
          <li class="menuList text-[#263238] hover:text-[#40A578] hover:font-bold list-none cursor-pointer py-2">
            HOME
          </li>
          <li class="menuList text-[#263238] hover:text-[#40A578] hover:font-bold list-none cursor-pointer py-2">
            JOBS
          </li>
          <li class="menuList text-[#263238] hover:text-[#40A578] hover:font-bold list-none cursor-pointer py-2">
            EMPLOYERS
          </li>
          <li class="menuList text-[#263238] hover:text-[#40A578] hover:font-bold list-none cursor-pointer py-2">
            ABOUT
          </li>
          <li class="menuList text-[#263238] hover:text-[#40A578] hover:font-bold list-none cursor-pointer py-2">
            CONTACTS
          </li>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
