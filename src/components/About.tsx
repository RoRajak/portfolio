import { techSkills } from "@/constants";
import TechComp from "@/helpers/TechComp";
import React from "react";

const About = () => {
  return (
    <section id="about" className="z-10 bg-black  px-5 md:px-44">
      <h1 className="text-2xl text-center mt-10 md:text-4xl ">About me</h1>
      <h4 className="text-xl mt-4 px-5 text-red-600 md:text-3xl">
        A Bit About me
      </h4>
      <div className="flex flex-col px-5 mt-2">
        <p className="text-md md:text-2xl">
          Hi, I&apos;m Rohit Rajak, a passionate Full Stack Web Developer with a
          deep interest in building robust and scalable web applications. I have
          experience working with both frontend and backend technologies,
          allowing me to create seamless user experiences. My journey started
          with a strong foundation in debugging code as a support engineer, but
          my passion for development pushed me to transition into full-time web
          development.
        </p>

        <p className="hidden md:block md:text-2xl md:mt-8">
          I love solving complex problems, bringing ideas to life, and
          continuously learning new technologies to improve my skills. I enjoy
          the challenge of debugging and optimizing code to ensure performance
          and user satisfaction. When I&apos;m not coding, you&apos;ll find me
          watching anime, reading books, or diving into podcasts to fuel my
          curiosity about technology and life.
        </p>
      </div>

      <h4 className="text-xl mt-4 px-5 text-red-600 md:text-3xl">
        Tech Stack Section
      </h4>
      <div
      
       className="w-full inline-flex flex-nowrap px-5 mt-4 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
        <ul className="flex items-center w-max justify-center px-10 md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll animation-paused">
          {techSkills.map((skill) => (
            <li key={skill.name} className="bg-[#E4830F] py-1 px-4 rounded-xl ">
              <TechComp key={skill.name} src={skill.img} title={skill.name} imgSize="35px" />
            </li>
          ))}
          {techSkills.map((skill) => (
            <li key={skill.name + '-duplicate'} className="bg-[#E4830F] py-1 px-4 rounded-xl">
              <TechComp key={skill.name + '-duplicate'} src={skill.img} title={skill.name} imgSize="35px" />
            </li>
          ))}
        </ul>
        
      </div>
    </section>
  );
};

export default About;
