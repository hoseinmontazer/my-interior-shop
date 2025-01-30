import { useState } from "react";
import { FaPhoenixSquadron } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import PageLinks from "./PageLinks";
import IconNavbar from "./IconNavbar";

const MyHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-light flex xl:flex-row justify-around items-center p-4">
      <h1 className="flex flex-row items-center font-bold text-4xl">
        <FaPhoenixSquadron className="m-1" /> Cozy Home
      </h1>
      <nav className="hidden lg:flex">
        <PageLinks />
      </nav>
      <nav className="hidden lg:flex">
        <IconNavbar />
      </nav>
      <nav className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-3xl focus:outline-none float-right"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      {isOpen && (
        <nav className="absolute border-t top-16 left-0 w-full bg-white shadow-md z-50 lg:hidden animate-slide-down">
          <PageLinks />
          <div className="border-t border-gray-200 mt-2">
            <IconNavbar />
          </div>
        </nav>
      )}
    </header>
  );
};

export default MyHeader;
