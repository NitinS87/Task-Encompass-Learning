import React from "react";

const Parallax = () => {
  return (
    <div className="bg-image text-white bg-cover bg-center min-h-screen relative bg-fixed bg-no-repeat -z-30">
      <div className="bg-black/80 absolute h-full w-full flex flex-col items-center justify-center gap-10">
        <h1 className="text-6xl uppercase text-center">Memory is everything</h1>
        <div className="text-4xl flex flex-col text-center font-mono w-[80%]">
          <span>Memories are precious.</span>
          <span>Human memory can be fragile.</span>
        </div>

        <div className="text-4xl w-[70%] font-mono hidden lg:block">
          <span className="text-center">
            Find neuroscience-backed ways to assess and delay the onset of
            memory decline and preserve your memories for longer.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
