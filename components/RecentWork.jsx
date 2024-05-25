"use client";
import { useRouter } from "next/navigation";
import { projects } from "@/data";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const RecentWork = ({ noOfProjects }) => {
  const router = useRouter();

  return (
    <div className="md:px-28 px-7 mt-20 md:mt-36">
      <h1 className="md:text-3xl text-lg font-bold mb-7">RECENT WORK</h1>
      <div className="md:grid md:grid-cols-2 md:grid-rows-2 flex flex-col gap-4 ">
        {projects.slice(0, noOfProjects).map((project, idx) => (
          <Link key={idx} href={`/${project.route}`}>
            <div className="bg-[#1A1A1A] space-y-5 rounded-2xl p-5 border-t-[1px] border-gray-600">
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <p className="md:text-2xl text-lg font-semibold">
                    {project.title}
                  </p>
                  <p className="font-mono">{project.tag}</p>
                </div>
                <button onClick={() => router.push(`/${project.route}`)}>
                  <FaArrowRightLong size={28} />
                </button>
              </div>
              <Image
                className="rounded-2xl"
                src={project.img1}
                width={1000}
                alt={project.tag}
                height={1000}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentWork;
