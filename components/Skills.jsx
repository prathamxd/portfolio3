import { skills } from "@/data";

const Skills = () => {
  return (
    <div className="md:px-36 px-7">
      <h1 className="md:text-3xl text-xl font-bold mb-10">SKILLS</h1>
      <div className="md:grid grid-cols-3 flex flex-col gap-5">
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
