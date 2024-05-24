import RecentWork from "@/components/RecentWork";
import Socials from "@/components/Socials";
import React from "react";

const Work = () => {
  return (
    <div className="space-y-32 my-28">
      <div className="pl-28 space-y-7">
        <p className="text-6xl font-bold">Work.</p>
        <p className="text-3xl w-[35%] font-mono">
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
