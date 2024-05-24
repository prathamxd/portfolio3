import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import React from "react";

const About = () => {
  return (
    <div className="space-y-32 my-28">
      <div className="pl-36 space-y-6">
        <p className="text-6xl font-bold">About.</p>
        <p className="text-3xl w-[35%] font-mono">
          I&apos;m a{" "}
          <span className="text-theme-primary-accentColor">
            software developer
          </span>{" "}
          from New Delhi, India with a passion for music.
        </p>
        <p className="text-lg w-[37%] font-mono">
          I have a deep passion for{" "}
          <span className="text-theme-primary-accentColor">
            music and nature
          </span>
          . I enjoy exploring all genres and artists from around the world. I
          love spending time outdoors, whether hiking through scenic trails or
          simply enjoying a peaceful walk in the park. These hobbies help me
          maintain a balanced and fulfilling lifestyle.
        </p>
      </div>
      <Approach />
      <Skills />
      <Experience />
      <Socials />
    </div>
  );
};

export default About;
