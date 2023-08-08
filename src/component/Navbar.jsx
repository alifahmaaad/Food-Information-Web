import { useState } from "react";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar flex flex-wrap justify-between w-full py-4 px-10 border-b-2 border-gray-200 bg-white fixed z-10">
      <div className="flex items-center font-bold py-[0.5rem] text-xl">
        mealapp<p className="text-[#FFB100]">.</p>
      </div>
      <div className="flex items-center">
        <button onClick={handleOpenNav}>
          <svg
            xmlns="<http://www.w3.org/2000/svg>"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className={(!isOpen && "hidden ") + "md:flex w-full md:w-auto"}>
        <ul className="md:flex md:justify-between gap-3">
          <li className="flex items-center hover:scale-105">
            <Link
              to="/"
              className="bg-[#FFB100] font-semibold text-white p-2 px-7 rounded-full hover:bg-transparent hover:text-[#FFB100] border border-[#FFB100]"
            >
              Food Category
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComp;
