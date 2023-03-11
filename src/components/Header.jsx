import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="flex flex-col relative overflow-hidden">
      {/* logo headers */}
      <div className="bg-[#2caca2] h-14 flex justify-evenly items-center">
        {/* left socials div */}
        <div className="flex p-2 h-full w-1/2">
          <div className="flex items-center group p-2 border-r-[1px] border-r-gray-500">
            <div className="flex items-center hover:bg-blue-600 p-2 rounded-md hover:text-white duration-300 ease-in-out gap-1">
              <FaFacebookF className="text-lg" />
              <span className="hidden lg:group-hover:block">Facebook</span>
            </div>
          </div>
          <div className="flex items-center group p-2 border-r-[1px] border-r-gray-500">
            <div className="flex items-center hover:bg-[#1c99e6] p-2 rounded-md hover:text-white duration-300 ease-in-out gap-1">
              <FaTwitter className="text-lg" />
              <span className="hidden lg:group-hover:block">Twitter</span>
            </div>
          </div>
          <div className="flex items-center group p-2 border-r-[1px] border-r-gray-500">
            <div className="flex items-center hover:bg-pink-500 p-2 rounded-md hover:text-white duration-300 ease-in-out gap-1">
              <FaInstagram className="text-lg" />
              <span className="hidden lg:group-hover:block">Instagram</span>
            </div>
          </div>
          <div className="flex items-center group p-2">
            <div className="flex items-center hover:bg-red-600 p-2 rounded-md hover:text-white duration-300 ease-in-out gap-1">
              <FaYoutube className="text-lg" />
              <span className="hidden lg:group-hover:block">Youtube</span>
            </div>
          </div>
        </div>
        {/* right connect div */}
        <div className="flex p-2 h-full">
          <div className="flex items-center p-2 border-r-[1px] border-r-gray-500">
            <a
              href={`tel:+1 609 917 5630`}
              className="flex items-center hover:bg-white p-2 rounded-md hover:text-[#2caca2] duration-300 ease-in gap-1"
            >
              <BsPhone className="text-lg" />
              <span className="hidden lg:block">+1 609 917 5630</span>
            </a>
          </div>
          <div className="flex items-center p-2 border-r-[1px] border-r-gray-500">
            <a
              href={`mailto:connect@mymemorymentor.com`}
              className="flex items-center hover:bg-white hover:text-[#2caca2] p-2 rounded-md duration-300 ease-in gap-1"
            >
              <HiMail className="text-lg" />
              <span className="hidden lg:block">
                connect@mymemorymentor.com
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* navbar */}
      <Navbar />
    </div>
  );
};

export default Header;
