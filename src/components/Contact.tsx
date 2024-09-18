import Image from "next/image";
import github from "@/assets/Icons/Github-contact.svg";
import linkdin from "@/assets/Icons/linkdin.svg";
import discord from "@/assets/Icons/Discord.svg";
import RotatingGlobe from "@/helpers/RotateGlobe";

const Contact = () => {
  return (
    <section id="contact" className="bg-black px-5 md:px-44 py-10  z-10">
      <h1 className="text-3xl md:text-4xl text-center text-white mb-6">
        Contact
      </h1>
      <div className="flex flex-col-reverse md:flex-row p-3 md:items-center md:gap-x-4 ">
        <div className="md:w-1/2 space-y-5 ">
          <div className="flex justify-center items-center">
            <h3 className="text-[#6CC04A] text-lg md:text-3xl font-semibold border-b-2 md:border-b-4 border-[#6CC04A]">
              Get in touch
            </h3>
          </div>

          <p className="text-base md:text-2xl px-4 md:px-10">
            I&apos;m always happy to help or just have a conversation! 
            <br />
            Reach out anytime.
          </p>
          <p className="text-base px-4 md:text-2xl md:px-10">
            Email:{" "}
            <span className="text-lg md:text-xl text-blue-500">
              rohit1999rajak@gmail.com
            </span>{" "}
          </p>
          <div className="flex gap-4 px-4 md:px-10 justify-center md:justify-start">
            <div className="size-16 md:size-20 bg-slate-500 rounded-full flex justify-center items-center">
              <a href="https://github.com/rorajak" target="_blank">
                <Image src={github} alt="github" className="size-10 md:size-16" />
              </a>
            </div>
            <div className="size-16 md:size-20 bg-slate-500 rounded-full flex justify-center items-center">
              <a
                href="https://www.linkedin.com/in/rohit-rajak-44163514b/"
                target="_blank"
              >
                <Image src={linkdin} alt="linkdin" className="size-10 md:size-16" />
              </a>
            </div>
            <div className="size-16 md:size-20 bg-slate-500 rounded-full flex justify-center items-center">
              <a href="https://discord.com/channels/@rorajak" target="_blank">
                <Image src={discord} alt="discord" className="size-10 md:size-16" />
              </a>
            </div>
          </div>
        </div>
        
        <RotatingGlobe/>

        
      </div>
    </section>
  );
};

export default Contact;
