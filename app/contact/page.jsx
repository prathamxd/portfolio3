import Socials from "@/components/Socials";
import React from "react";

const Contact = () => {
  return (
    <div className="space-y-32 my-28">
      <div className="pl-36 space-y-6">
        <p className="text-6xl font-bold">Contact.</p>
        <p className="text-lg w-[37%] font-mono">
          I'm always{" "}
          <span className="text-theme-primary-accentColor">
            excited to connect
          </span>{" "}
          with fellow creatives, potential collaborators, and anyone interested
          in my work. Whether you have a project in mind, want to{" "}
          <span className="text-theme-primary-accentColor">discuss ideas</span>,
          or just want to say hello, feel free to reach out!
        </p>
        <p className="text-lg w-[35%] font-mono">
          Thank you for visiting my portfolio. I look forward to connecting with
          you!
        </p>
      </div>
      <Socials />
    </div>
  );
};

export default Contact;
