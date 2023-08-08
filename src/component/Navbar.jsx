import { useState } from "react";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar flex flex-wrap justify-between w-full py-4 px-10 border-b-2 border-gray-200 bg-white fixed z-10">
      <Link to="/">
        <div className="flex items-center font-bold py-[0.5rem] text-xl">
          mealapp<p className="text-[#FFB100]">.</p>
        </div>
      </Link>
      <div className="flex items-center">
        <button onClick={handleOpenNav} className="transition duration-700 ">
          <span
            className={
              (isOpen ? " " : "icon-animation ") +
              "material-symbols-outlined md:hidden "
            }
          >
            {isOpen ? "close" : "lunch_dining"}
          </span>
        </button>
      </div>
      <div
        className={
          (!isOpen && "hidden ") +
          "md:flex w-full md:w-auto py-3 md:py-0 transition duration-700"
        }
      >
        <ul className="md:flex md:justify-between gap-3">
          <li className="flex items-center hover:scale-105">
            <Link
              to="/"
              className="bg-[#FFB100] font-semibold text-white p-2 px-7 rounded-full hover:bg-transparent hover:text-[#FFB100] border border-[#FFB100]"
              onClick={handleOpenNav}
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
