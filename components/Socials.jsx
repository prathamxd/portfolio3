import { FaArrowRightLong } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="px-36 my-36">
      <h1 className="text-3xl font-bold mb-8">LET&apos;S WORK TOGETHER</h1>
      <div className="h-32 flex gap-10">
        <div className="border-t-[1px] border-gray-600 bg-[#1A1A1A] rounded-2xl w-[60%] flex justify-between px-8 items-center">
          <div className="space-y-3">
            <p>Say hello!</p>
            <p className="text-xl font-semibold">prathamluker@gmail.com</p>
          </div>
          <a href="mailto:prathamluker@gmail.com">
            <FaArrowRightLong size={30} />
          </a>
        </div>
        <a
          href="https://www.linkedin.com/in/pratham-luker-444226202/"
          target="_blank"
          className="border-t-[1px] border-gray-600 bg-[#1A1A1A] rounded-2xl w-[12.5%] flex items-center justify-center"
        >
          <FaLinkedin size={38} />
        </a>
        <a
          href="https://github.com/prathamxd"
          target="_blank"
          className="border-t-[1px] border-gray-600 bg-[#1A1A1A] rounded-2xl w-[12.5%] flex items-center justify-center"
        >
          <FaGithub size={38} />
        </a>
        <a
          href="https://discord.com/users/769982191689269248"
          target="_blank"
          className="border-t-[1px] border-gray-600 bg-[#1A1A1A] rounded-2xl w-[12.5%] flex items-center justify-center"
        >
          <FaDiscord size={38} />
        </a>
      </div>
    </div>
  );
};

export default Socials;
