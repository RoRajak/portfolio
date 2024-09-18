import Image from "next/image";
import xcom from "@/assets/Icons/twitter.svg";
import github from "@/assets/Icons/github.svg";

const Navbar = () => {
  return (
    <nav className="bg-black w-full z-10 ">
    <div className="mt-9 mb-7 mx-8 md:mx-28 border-2 border-white rounded-full flex justify-between items-center p-3 ">
      <h1 className="text-3xl ml-3 md:text-4xl nav-logo">RR</h1>
      <div className="hidden md:flex justify-around text-2xl md:w-full">
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </div>
      <div className="flex gap-x-4 mr-3 items-center md:gap-x-6">
        <a href="https://x.com/rorajak" target="_blank" className="icon-btn">
          <Image src={xcom} alt="x.com" className="size-5 md:size-8" />
        </a>
        <a href="https://github.com/rorajak" target="_blank" className="icon-btn">
          <Image src={github} alt="github" className="size-6 md:size-8" />
        </a>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
