"use client";
import { useRouter } from "next/navigation";
import { projects } from "@/data";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const RecentWork = () => {
  const router = useRouter();

  return (
    <div className="px-28 mt-36">
      <h1 className="text-3xl font-bold mb-7">RECENT WORK</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {projects.map((project) => (
          <Link href={`/${project.route}`}>
            <div className="bg-[#1A1A1A] space-y-5 rounded-2xl p-5 border-t-[1px] border-gray-600">
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <p className="text-2xl font-semibold">{project.title}</p>
                  <p className="">{project.tag}</p>
                </div>
                <button onClick={() => router.push(`/${project.route}`)}>
                  <FaArrowRightLong size={28} />
                </button>
              </div>
              <Image
                className="rounded-2xl"
                src={project.img1}
                width={1000}
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
