'use client';
import Image from 'next/image';
import React from 'react';

export default function About() {
  const HandleCvDownload = () => {
    window.open('/John Mwanzia Resume.pdf', '_blank');
  };
  return (
    <>
      <div
        className="container overflow-hidden px-8 2xl:px-32"
        id="About"
      >
        <h1 className=" mt-16 text-center text-4xl font-semibold underline decoration-sky-500 sm:text-left lg:mt-8">
          About Me
        </h1>
        <div className="mt-8 flex flex-col items-center justify-center  gap-16 sm:flex-row xl:gap-0 2xl:gap-48">
          <div className="sm:max-w-md  lg:max-w-xl">
            <Image
              data-aos="fade-up"
              src="/images/about-photo.svg"
              alt="my pic"
              className="sm:w-md lg:max-w-xl"
              width={465}
              height={370}
            />
          </div>

          <div>
            <p className="font-semibold  sm:max-w-sm lg:px-0  2xl:max-w-lg ">
              I'm a software engineer with a diverse skill set, encompassing
              both front-end and back-end development as well as mobile
              applications and AI-driven solutions. My expertise extends beyond
              web development, allowing me to tackle complex challenges and
              deliver comprehensive, high-quality solutions. Whether it's
              designing intuitive user interfaces, optimizing system
              performance, or implementing cutting-edge technologies, I'm driven
              by a passion for innovation and excellence. Let's collaborate to
              build transformative digital experiences that push the boundaries
              of what's possible.
            </p>
            <button
              onClick={HandleCvDownload}
              className=" z-30 ml-4 mt-4 flex-1 rounded-3xl border-2 border-indigo-500 py-3 pl-4 pr-4 text-2xl font-semibold lg:ml-0"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
