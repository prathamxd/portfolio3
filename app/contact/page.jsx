import Socials from "@/components/Socials";
import React from "react";

const Contact = () => {
  return (
    <div className="md:space-y-32 space-y-24 my-28">
      <div className="md:pl-36 pl-7 space-y-6">
        <p className="md:text-6xl text-5xl font-bold">Contact.</p>
        <p className="text-lg md:w-[37%] w-[90%] text-zinc-400 font-mono">
          I&apos;m always{" "}
          <span className="text-theme-primary-accentColor">
            excited to connect
          </span>{" "}
          with fellow creatives, potential collaborators, and anyone interested
          in my work. Whether you have a project in mind, want to{" "}
          <span className="text-theme-primary-accentColor">discuss ideas</span>,
          or just want to say hello, feel free to reach out!
        </p>
        <p className="text-lg md:w-[35%] font-mono">
          Thank you for visiting my portfolio. I look forward to connecting with
          you!
        </p>
      </div>
      <Socials />
    </div>
  );
};

export default Contact;
