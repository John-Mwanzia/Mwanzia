import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      <div data-aos="fade-right" className="px-8 2xl:px-32 overflow-x-hidden container" id="About">
        <h1 className=" text-4xl font-semibold mt-16 lg:mt-8 text-center sm:text-left underline decoration-sky-500">
          About Me
        </h1>
        <div className="flex flex-col sm:flex-row justify-center mt-8  items-center xl:gap-0 2xl:gap-48">
          <div className="sm:max-w-md  lg:max-w-xl">
            <Image
              data-aos="zoom-in-right"
              src="/images/mypic.png"
              alt="my pic"
              className="sm:w-md lg:max-w-xl"
              width={465}
              height={370}
            />
          </div>

          <div>
            <p className="sm:max-w-sm  2xl:max-w-lg font-semibold  lg:px-0 ">
              Im a web developer well-versed in the art of crafting seamless
              digital experiences. My expertise spans both frontend and backend
              realms, allowing me to bring holistic and efficient solutions to
              life. Im committed to building visually stunning interfaces
              backed by robust technical architecture. My passion lies in
              transforming ideas into engaging and functional websites, where
              every pixel and line of code plays a crucial role. Join me in
              creating the next generation of captivating online experiences.
            </p>
            <button className=" flex-1 py-3 pl-4 pr-4 border-2 ml-4 lg:ml-0 rounded-3xl border-indigo-900 text-2xl font-semibold mt-4">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
