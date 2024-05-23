import { SlCalender } from "react-icons/sl";
import { GoBriefcase } from "react-icons/go";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const ProjectDetails = ({ project }) => {
  return (
    <div className="flex flex-col items-center gap-20 pt-20 pb-36">
      <h1 className="text-5xl font-bold">{project.title}</h1>

      <div className="flex items-center gap-5 text-base font-semibold">
        <div className="rounded-full bg-[#1A1A1A] border-t-[1px] border-gray-600 px-5 py-2 flex items-center gap-4">
          <GoBriefcase />
          <p>{project.tag}</p>
        </div>
        <div className="rounded-full bg-[#1A1A1A] border-t-[1px] border-gray-600 px-5  py-2 flex items-center gap-4">
          <SlCalender />
          <p>{project.year}</p>
        </div>
      </div>
 
      <Image
        src={project.img1}
        width={1200}
        height={1200}
        className="rounded-3xl"
      />

      <div className="w-[50%]">
        <h1 className="text-3xl font-bold mb-7">Description</h1>
        <p className="leading-7">{project.description}</p>
      </div>

      <Image
        src={project.img2}
        width={1200}
        height={1200}
        className="rounded-3xl"
      />

      <div className="w-[50%]">
        <h1 className="text-3xl font-bold mb-7">Tech Stack </h1>
        <div className="space-y-3">
          {project.techStack.map((item) => (
            <div className="flex items-center gap-3 text-lg">
              <Image src={item.icon} width={20} height={20} />
              <p>{item.tech}</p>
            </div>
          ))}
        </div>
      </div>

      <Image
        src={project.img3}
        width={1200}
        height={1200}
        className="rounded-3xl"
      />

      <div className="w-[50%]">
        <h1 className="text-3xl font-bold mb-7">Links</h1>
        <div className="flex flex-col space-y-2  text-lg">
          <div className="flex items-center gap-3">
            <FaExternalLinkAlt size={17} />
            <a href={project.link} target="_blank" className="hover:underline">
              View Website
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaExternalLinkAlt size={17} />
            <a
              href={project.github}
              target="_blank"
              className="hover:underline"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
