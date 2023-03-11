import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white text-sm text-center p-6 !-z-10 pt-10">
      <div className="flex justify-center items-center p-5">
        <ul className="flex flex-wrap lg:gap-6 mx-auto gap-2 justify-center">
          <li className="border-b border-dotted cursor-pointer hover:scale-105 duration-300 ease-in-out">
            About Us
          </li>
          <span className="italic">|</span>
          <li className="border-b border-dotted cursor-pointer hover:scale-105 duration-300 ease-in-out">
            Blog
          </li>
          <span className="italic">|</span>
          <li className="border-b border-dotted cursor-pointer hover:scale-105 duration-300 ease-in-out">
            Contact
          </li>
          <span className="italic">|</span>
          <li className="border-b border-dotted cursor-pointer hover:scale-105 duration-300 ease-in-out">
            Download
          </li>
          <span className="italic">|</span>
          <li className="border-b border-dotted cursor-pointer hover:scale-105 duration-300 ease-in-out">
            Memory can fail faster than you think
          </li>
        </ul>
      </div>
      <span>
        Copyright ©2023 MyMemoryMentor . All rights reserved. Powered by
        WordPress & Designed by Bizberg Themes
      </span>
    </div>
  );
};

export default Footer;
