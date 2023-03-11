import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="!sticky flex items-center justify-between w-[80%] mx-auto my-5 top-0 overflow-hidden">
      <Link to="/">
        <img src={logo} alt="My Memory Mentor" className="w-14" />
      </Link>
      <ul className="md:flex h-full items-center gap-4 hidden">
        <li>
          <div className="p-2 hover:bg-[#2caca2] hover:border-b-[#ffc069] hover:border-b-2 text-xl hover:text-white h-full rounded cursor-pointer hover:scale-110 duration-300 ease-in-out font-mono">
            About Us
          </div>
        </li>
        <li>
          <div className="p-2 hover:bg-[#2caca2] hover:border-b-[#ffc069] hover:border-b-2 text-xl hover:text-white h-full rounded cursor-pointer hover:scale-110 duration-300 ease-in-out font-mono">
            Blog
          </div>
        </li>
        <li>
          <div className="p-2 hover:bg-[#2caca2] hover:border-b-[#ffc069] hover:border-b-2 text-xl hover:text-white h-full rounded cursor-pointer hover:scale-110 duration-300 ease-in-out font-mono">
            Contact
          </div>
        </li>
        <li>
          <div className="p-2 hover:bg-[#2caca2] hover:border-b-[#ffc069] hover:border-b-2 text-xl hover:text-white h-full rounded cursor-pointer hover:scale-110 duration-300 ease-in-out font-mono">
            Download
          </div>
        </li>
      </ul>
      {/* <div className="p-2 hover:border rounded-md cursor-pointer block md:hidden">
        <HiOutlineMenuAlt3 className="text-xl" />
      </div> */}
      {/* Menu Icon */}
      <div className="md:hidden">
        <HiMenuAlt3
          className="z-20 cursor-pointer"
          size={25}
          onClick={handleNav}
        />
        <div
          className={
            nav
              ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
              : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <ul className="flex flex-col text-gray-300 left-0 top-0 w-full h-full items-center justify-center z-50">
            <li
              className="font-bold text-3xl p-6 font-mono"
              onClick={() => setNav(!nav)}
            >
              About Us
            </li>
            <li
              className="font-bold text-3xl p-6 font-mono"
              onClick={() => setNav(!nav)}
            >
              Blog
            </li>
            <li
              className="font-bold text-3xl p-6 font-mono"
              onClick={() => setNav(!nav)}
            >
              Contact
            </li>
            <li
              className="font-bold text-3xl p-6 font-mono"
              onClick={() => setNav(!nav)}
            >
              Download
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
