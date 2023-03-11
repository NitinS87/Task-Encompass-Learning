import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row w-[90%] lg:w-[75%] mx-auto justify-between gap-10 bg-gray-900 py-6 rounded-md text-white my-10">
      <div className="flex flex-col lg:flex-row gap-2 mx-16">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Get inspired weekly
          </h1>
          <span className="text-lg">
            Join <span className="underline">986,124</span> like minded people
            and get our{" "}
            <span className="border-b border-dotted">
              weekly inspiration and mindfull techniques
            </span>{" "}
            in your inbox.
          </span>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-2 flex-col">
            <span className="text-start lg:text-end">
              Sign up with newsletter
            </span>
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded-sm outline-none text-black lg:w-[80%]"
              />
              <button className="relative rounded px-5 mx-auto lg:w-[20%] py-2.5 overflow-hidden bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 z-1">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg lg:text-end text-center">
              Connect with us on our social
            </span>
            <div className="flex lg:justify-end justify-start">
              <div className="flex items-center p-2 ">
                <div className="flex items-center hover:bg-blue-600 p-2 rounded-md duration-300 ease-in-out gap-1">
                  <FaFacebookF className="text-lg" />
                </div>
              </div>
              <div className="flex items-center p-2">
                <div className="flex items-center hover:bg-[#1c99e6] p-2 rounded-md duration-300 ease-in-out gap-1">
                  <FaTwitter className="text-lg" />
                </div>
              </div>
              <div className="flex items-center p-2">
                <div className="flex items-center hover:bg-pink-500 p-2 rounded-md duration-300 ease-in-out gap-1">
                  <FaInstagram className="text-lg" />
                </div>
              </div>
              <div className="flex items-center p-2">
                <div className="flex items-center hover:bg-red-600 p-2 rounded-md duration-300 ease-in-out gap-1">
                  <FaYoutube className="text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
