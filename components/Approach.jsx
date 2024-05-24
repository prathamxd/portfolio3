import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineTouchApp } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Approach = () => {
  return (
    <div className="px-36 mt-36">
      <h1 className="text-3xl font-bold mb-10">MY APPROACH</h1>
      <div className="flex gap-10">
        <div className="border-t-[1px] border-gray-600 bg-[#1A1A1A] rounded-3xl p-5 space-y-3">
          <HiOutlineUsers size={35} className="text-blue-500" />
          <p className="text-xl font-semibold">User centred</p>
          <p className="leading-7 text-gray-500 font-mono">
            As a frontend developer, my primary focus is to{" "}
            <span className="text-theme-primary-accentColor">
              prioritize the preferences of the end users
            </span>
            . This involves thorough research and understanding of user
            behavior, ensuring that the website is intuitive and responsive. My
            goal is to create a{" "}
            <span className="text-theme-primary-accentColor">
              seamless user interface
            </span>{" "}
            that enhances the overall user experience.
          </p>
        </div>
        <div className="border-t-[1px] border-gray-600 bg-[#1A1A1A] rounded-3xl p-5 space-y-3">
          <MdOutlineTouchApp size={35} className="text-green-600" />
          <p className="text-xl font-semibold">Functional</p>
          <p className="leading-7 text-gray-500 font-mono">
            As a frontend developer, I concentrate on building websites and
            applications that not only look{" "}
            <span className="text-theme-primary-accentColor">
              visually appealing
            </span>{" "}
            but also provide seamless functionality and performance. Balancing
            <span className="text-theme-primary-accentColor">
              design aesthetics
            </span>{" "}
            with usability ensures that the final product serves its intended
            purpose efficiently for its target audience.
          </p>
        </div>
        <div className="border-t-[1px] border-gray-600 bg-[#1A1A1A] rounded-3xl p-5 space-y-3">
          <IoRocketOutline size={35} className="text-purple-400" />
          <p className="text-xl font-semibold">Innovative</p>
          <p className="leading-7 text-gray-500 font-mono">
            A key aspect of my role as a frontend developer is fostering
            innovation and{" "}
            <span className="text-theme-primary-accentColor">creativity</span>.
            By pushing boundaries and thinking outside the box, I can create
            unique and{" "}
            <span className="text-theme-primary-accentColor">
              intuitive user interfaces
            </span>{" "}
            that set applications apart from competitors and meet emerging user
            experience standards.
          </p>
        </div>
        <div className="border-t-[1px] border-gray-600 bg-[#1A1A1A] rounded-3xl p-5 space-y-3">
          <FaRegHeart size={35} className="text-red-500" />
          <p className="text-xl font-semibold">Ethical</p>
          <p className="leading-7 text-gray-500 font-mono">
            I am increasingly focusing on creating{" "}
            <span className="text-theme-primary-accentColor">
              sustainable and socially responsible web applications
            </span>{" "}
            as a frontend developer. This involves considering the entire
            development lifecycle, from{" "}
            <span className="text-theme-primary-accentColor">
              code efficiency and resource management
            </span>
            to the overall impact on user experience and accessibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Approach;
