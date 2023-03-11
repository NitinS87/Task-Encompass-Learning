import React from "react";

const Overline = () => {
  return (
    <div className="h-full w-[90%] lg:w-[70%] mx-auto my-5 flex flex-col bg-[#18143b]">
      <div>
        <h1 className="text-blue-500 uppercase text-center my-10 text-3xl">
          Overline
        </h1>
      </div>
      <div className="font-semibold text-white text-center">
        <span className="text-4xl">
          Your memory makes you what you are. Preserve it
        </span>
      </div>
      <div className="mx-auto my-10">
        <button className="relative rounded px-5 py-2.5 overflow-hidden bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
          <span className="relative">Read More</span>
        </button>
      </div>
    </div>
  );
};

export default Overline;
