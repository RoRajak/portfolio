import Image, { StaticImageData } from "next/image";

interface ExpComponetProps {
  src: StaticImageData;
  title: string;
  desc: string;
  date: string;
  company: string;
}

const ExpComponet = ({ src, title, desc, date, company }: ExpComponetProps) => {
  return (
    <div className="w-full bg-black rounded-2xl py-6 px-8 shadow-[0px_0px_10px_12px_rgba(176,_29,_41,_0.25)]">
      <div className=" hodden md:flex gap-x-4 md:gap-x-10">
        <div className="w-44  ">
        <Image
          src={src}
          alt={company}
          
          className="hidden md:block rounded-full w-16 h-16 "
        />

        </div>
       
        <div className="flex flex-col gap-3">
          <div className="flex gap-x-4 items-center">
            <Image
              src={src}
              alt={company}
              className="size-14 rounded-full md:hidden"
            />

            <h3 className="text-[#6CC04A] text-base md:text-2xl font-semibold">{title}</h3>
          </div>
          <div className="flex justify-between mt-2 font-semibold">
            <h5 className="text-sm md:text-base">{company}</h5>
            <h5 className="text-sm md:text-base">{date}</h5>
          </div>

          <p className="text-xs md:text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpComponet;
