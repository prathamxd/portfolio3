import React from "react";

const Hero = () => {
  return (
    <div className="w-[60%] space-y-10 pl-36 my-28">
      <div className="border-t-[1px] border-gray-600 rounded-full items-center w-auto inline-flex gap-3 px-5 py-1 bg-[#1A1A1A]">
        <p className="h-2 w-2 bg-green-400 rounded-full"></p>
        <p className="text-sm">Availible for hire</p>
      </div>
      <p className="text-6xl font-bold w-[70%] ">
        Hi, I&apos;m Narayan, a product designer from Ireland.
      </p>
      <p className="leading-8 w-[70%] ">
        With a background in industrial design and a keen eye for detail, I
        excel at transforming concepts into tangible realities by seamlessly
        integrating aesthetics with practical functionality.
      </p>
    </div>
  );
};

export default Hero;
