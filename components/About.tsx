import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <>
      <div
        data-aos="fade-right"
        className="container overflow-x-hidden px-8 2xl:px-32"
        id="About"
      >
        <h1 className=" mt-16 text-center text-4xl font-semibold underline decoration-sky-500 sm:text-left lg:mt-8">
          About Me
        </h1>
        <div className="mt-8 flex flex-col items-center justify-center  gap-16 sm:flex-row xl:gap-0 2xl:gap-48">
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
            <p className="font-semibold  sm:max-w-sm lg:px-0  2xl:max-w-lg ">
              Im a web developer well-versed in the art of crafting seamless
              digital experiences. My expertise spans both frontend and backend
              realms, allowing me to bring holistic and efficient solutions to
              life. Im committed to building visually stunning interfaces backed
              by robust technical architecture. My passion lies in transforming
              ideas into engaging and functional websites, where every pixel and
              line of code plays a crucial role. Join me in creating the next
              generation of captivating online experiences.
            </p>
            <button className=" z-30 ml-4 mt-4 flex-1 rounded-3xl border-2 border-indigo-500 py-3 pl-4 pr-4 text-2xl font-semibold lg:ml-0">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
