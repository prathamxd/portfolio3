import RecentWork from "@/components/RecentWork";
import Socials from "@/components/Socials";
import React from "react";

const Work = () => {
  return (
    <div className="md:space-y-32 space-y-28 my-28">
      <div className="md:pl-28 pl-7 space-y-7">
        <p className="md:text-6xl text-5xl font-bold">Work.</p>
        <p className="md:text-3xl text-xl md:w-[35%] w-[90%] font-mono">
          Here are some of my{" "}
          <span className="text-theme-primary-accentColor">projects</span> from
          the last few months.
        </p>
      </div>
      <RecentWork noOfProjects={20} />
      <Socials />
    </div>
  );
};

export default Work;
