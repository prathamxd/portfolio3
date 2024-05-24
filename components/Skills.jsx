import { skills } from "@/data";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="px-36">
      <h1 className="text-3xl font-bold mb-10">SKILLS</h1>
      <div className="grid grid-cols-3 gap-5">
        {skills.map((item, idx) => (
          <div
            key={idx}
            className="flex gap-5 text-xl font-semibold py-5 px-8 items-center border-t-[1px] border-gray-800 bg-[#1A1A1A] rounded-xl"
          >
            <>{item.icon}</>
            <p>{item.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
