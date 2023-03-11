import React from "react";
import { FaBook, FaGlobeAfrica, FaTag } from "react-icons/fa";

const Section = () => {
  return (
    <div className="h-full w-[90%] lg:w-[70%] mx-auto my-5">
      <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text animate-bounce">
        Memory can fail faster than you think. Take action now.
      </h1>
      <div className="w-16 border border-gray-500 my-2"></div>

      <div className="flex lg:flex-row flex-col justify-between w-full my-10 border rounded-md shadow-md p-10 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="w-full lg:w-[65%]">
          <h1 className="text-5xl lg:text-8xl font-semibold text-gray-700 mb-10">
            Memory makes us who we are?
          </h1>
          <button className="p-3 rounded-md bg-[#32373c] text-white lg:block hidden my-5 hover:scale-110 duration-200 ease-in-out">
            Request a demo
          </button>
        </div>
        <div className="w-full lg:w-[35%] flex flex-col gap-2">
          <span className="text-gray-800">
            Memory loss can disrupt the lives of our loved ones. Whether it is
            the normal age-related decline or due to a more serious condition,
            it does impact their ability to work productively and continue to
            have normal social interactions. Memory decline that is not
            <span className="italic"> ‘normal-for-the-age’</span> is incredibly
            difficult to detect. Unless it starts impacting some parts of our
            lives visibly, we might not see it as a problem. Research indicates
            that it is possible to detect these small changes and delay the
            onset of serious symptoms.
          </span>
          <span className="text-gray-800">
            Our platform is based on this principle of{" "}
            <span className="italic">‘baselining’</span> of your memory
            processes so that we can self-assess any significant changes without
            lining up a clinical visit.
          </span>
        </div>
        <button className="p-4 rounded-full bg-[#32373c] text-white block lg:hidden mt-10 hover:scale-110 duration-200 ease-in-out">
          Request a demo
        </button>
      </div>

      <div className="w-full my-10 border rounded-md shadow-md p-10 bg-gradient-to-r from-violet-600 to-blue-500">
        <h1 className="text-5xl font-semibold text-white mb-10 text-center">
          Assess & improve your memory from the comfort of your home
        </h1>
        <div className="flex items-center justify-center text-white">
          <span className="text-center text-lg">
            Cliche ethical gochujang literally cardigan snackwave enamel piape
            chia butcher mixtape kickstarter edison bulb, marfa flexitarian
            gastropub
          </span>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 mt-16">
          <div className="w-full lg:w-1/3 flex flex-col h-full gap-5">
            <div className="mx-auto rounded-full p-4 bg-white">
              <FaGlobeAfrica className="text-[#4c34fb] text-6xl" />
            </div>
            <span className="text-center text-2xl text-white font-semibold">
              Memory screening at home
            </span>
            <span className="text-white text-lg text-center">
              Mymemorymentor app can be used on your personal mobile devices to
              assess the memory ability for audio, visuals, numbers, faces, text
              in a unique but fun manner. All tests are scientifically
              validated.
            </span>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col h-full gap-5">
            <div className="mx-auto rounded-full p-4 bg-white">
              <FaBook className="text-[#4c34fb] text-6xl" />
            </div>
            <span className="text-center text-2xl text-white font-semibold">
              Best practices healthy memory
            </span>
            <span className="text-white text-lg text-center">
              Subscribing to our blog & newsletter can provide you with life
              hacks, nutritional tips and exercises for a fit mind and brain.
            </span>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col h-full gap-5">
            <div className="mx-auto rounded-full p-4 bg-white">
              <FaTag className="text-[#4c34fb] text-6xl" />
            </div>
            <span className="text-center text-2xl text-white font-semibold">
              Seek expert support
            </span>
            <span className="text-white text-lg text-center">
              Contact us if you’d like to consult one of our neurocognitive
              experts, psychologists should you feel there are issues that might
              require detailed clinical investigation.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
