import React from "react";

const Hero = () => {
  return (
    <div className="w-[60%] space-y-10 pl-36 my-28">
      <div className="border-t-[1px] border-gray-600 rounded-full items-center w-auto inline-flex gap-3 px-5 py-1 bg-[#1A1A1A]">
        <p className="h-2 w-2 bg-green-400 rounded-full"></p>
        <p className="text-sm">Availible for hire</p>
      </div>
      <p className="text-6xl font-semibold font-unbounded">
        Hi, I&apos;m <span className="text-green-400">Pratham</span>, a software
        developer.
      </p>
      <p className="leading-8 w-[70%] text-xl text-balance font-mono text-zinc-500">
        With a background in software development and a keen eye for detail, I
        excel at transforming concepts into tangible realities by seamlessly
        integrating user interfaces with practical functionality.
      </p>
    </div>
  );
};

export default Hero;
