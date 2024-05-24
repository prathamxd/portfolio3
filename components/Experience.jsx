import { experience } from "@/data";
import { MdOutlineDateRange } from "react-icons/md";

const Experience = () => {
  return (
    <div className="px-36">
      <h1 className="text-3xl font-bold mb-10">EXPERIENCE</h1>
      <div className="flex flex-col gap-8">
        {experience.map((item, idx) => (
          <div
            key={idx}
            className="flex pl-10 pr-36 py-7 items-center justify-between border-t-[1px] border-gray-800 bg-[#1A1A1A] rounded-3xl"
          >
            <div className="flex items-center gap-5 font-semibold">
              <MdOutlineDateRange style={{ color: "#B4A068" }} size={30} />
              <div className="text-xl ">{item.duration}</div>
            </div>
            <div className="text-xl font-semibold text-theme-primary-accentColor">
              {item.role}
            </div>
            <div className="text-xl text-gray-500 font-semibold">
              {item.company}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
