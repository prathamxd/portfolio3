import { experience } from "@/data";
import { MdOutlineDateRange } from "react-icons/md";

const Experience = () => {
  return (
    <div className="md:px-36 px-7">
      <h1 className="md:text-3xl text-xl font-bold mb-10">EXPERIENCE</h1>
      <div className="flex flex-col gap-8">
        {experience.map((item, idx) => (
          <div
            key={idx}
            className="flex md:flex-row flex-col gap-4 md:gap-0 md:pl-10 md:pr-36 py-7 items-center justify-between border-t-[1px] border-gray-800 bg-[#1A1A1A] rounded-3xl"
          >
            <div className="flex md:flex-row flex-col items-center gap-4 md:gap-5 font-semibold">
              <MdOutlineDateRange style={{ color: "#B4A068" }} size={30} />
              <div className="md:text-xl">{item.duration}</div>
            </div>
            <div className="md:text-xl font-semibold text-theme-primary-accentColor">
              {item.role}
            </div>
            <div className="md:text-xl text-gray-500 font-semibold">
              {item.company}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
