import Image ,{StaticImageData}from "next/image";

import { twMerge } from "tailwind-merge";

interface ProjectCompProps {
  src: StaticImageData;
  title: string;
  desc: string;
  repo: string;
  live: string;
  className?: string;
}

const ProjectComp = ({ desc, live, repo, src, title, className }: ProjectCompProps) => {
  return (
    <div className="w-full bg-black rounded-2xl py-7 px-6 shadow-[0px_0px_18px_22px_rgba(176,_29,_41,_0.25)]"
      
      >
      <div className={twMerge("flex flex-col  gap-6 ",className)}>
        <div className="w-full md:w-1/2">
          <Image src={src} alt={title} width={400} height={300} className="rounded-2xl object-cover w-full h-auto" />
        </div>
        <div className="flex flex-col justify-between w-full md:w-1/2">
          <div>
            <h1 className="text-[#AFF4C6] text-xl font-bold mb-4 text-center">{title}</h1>
            <p className="text-white mb-6 md:px-12">{desc}</p>
          </div>
          <div className="flex gap-4 md:px-12 justify-center items-center">
            <a href={repo} className="bg-[#539E43] text-white px-6 py-2 rounded-xl text-center hover:bg-green-400" target="_blank" rel="noopener noreferrer">
              Repo
            </a>
            <a href={live} className="bg-[#3178C6] text-white px-6 py-2 rounded-xl text-center hover:bg-blue-400" target="_blank" rel="noopener noreferrer">
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComp;