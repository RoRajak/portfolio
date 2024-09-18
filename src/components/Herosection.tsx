"use client";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode, 
} from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import hero from "@/assets/images/hero.webp";

const Herosection = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background:{
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ff0000",
        },
        links: {
          color: "#ff0000",
          distance: 150,
          enable: true,
          opacity: 0.7,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.bounce,
          },
          random: false,
          speed: 3.8,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 7 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <section className="relative flex flex-col md:flex-row-reverse mx-4 sm:my-5 sm:mx-28 sm:px-11 overflow-hidden">
      {/* Particle container */}
      <div className="absolute inset-0 z-0">
        {init && <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />}
      </div>

      {/* Content Section */}
      <div className="relative z-10 w-full sm:w-1/2 flex justify-center items-center px-5">
        <Image src={hero} alt="hero" className="rounded-2xl" />
      </div>
      <div className="relative z-10 w-full sm:w-1/2 mt-10 px-5 h-auto space-y-4 sm:space-y-8">
        <h1 className="text-4xl sm:text-7xl font-bold text-center sm:text-left sm:pr-4 sm:leading-relaxed">
          Hi, <span className="wave inline-block">👋</span> I&apos;m{" "}
          <span className="text-red-500">
            <ReactTyped
              strings={["Rohit Rajak"]}
              typeSpeed={100}
              showCursor={false}
            />
          </span>
        </h1>
        <p className="text-2xl sm:text-4xl font-bold text-center sm:text-start sm:pl-4">
          <ReactTyped
            strings={[
              "Full Stack Developer",
              "Frontend Developer",
              "Backend Developer",
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </p>
        <div className="flex items-center justify-center space-x-3 sm:justify-start sm:pl-4">
          <div className="relative rounded-full h-3 w-3 animate-pulse bg-green-400 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:m-auto before:h-6 before:w-6 before:rounded-full before:bg-green-200 before:opacity-0 before:animate-ping"></div>
          <p className="text-green-400 animate-fadeIn">
            Available for opportunities
          </p>
        </div>
        <div className="flex justify-center sm:justify-start sm:pl-4">
          <a 
          href="https://drive.google.com/file/d/1Ge5JQAn6B5Lq3P9CiYFqmexeYenn0P5p/view?usp=drive_link"
          target="_blank"
          className="border-2 border-red-700 px-5 py-3 rounded-full text-white hover:bg-red-600 text-center transition duration-300 ease-in-out hover:scale-110 min-w-max">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Herosection;