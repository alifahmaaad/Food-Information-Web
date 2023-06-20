import { useState } from "react";

const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar flex flex-wrap justify-between w-full py-4 px-10 border-b-2 border-gray-200">
      <div className="flex items-center font-bold py-[0.5rem]">mealapp</div>
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
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Food Category</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComp;
