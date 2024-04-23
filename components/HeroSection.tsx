import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <>
      <div
        className="flex flex-col sm:flex-row gap-x-16 lg:gap-x-20 mt-20 lg:mt-40 justify-center  relative  px-8 2xl:px-32 overflow-hidden container xl:gap-4 2xl:gap-x-36"
        id="Home"
      >
        <div data-aos="flip-right">
          <div>
            <p className=" text-4xl sm:text-3xl lg:text-4xl  lg:px-0 px-4 sm:px-0 font-semibold  mb-8">
              Hello
            </p>
            <p className=" text-5xl sm:text-4xl lg:text-6xl  lg:px-0 px-4 sm:px-0 font-bold mb-4">
              I’m a web developer
            </p>
            <p className=" max-w-xl  text-base font-semibold px-4 sm:px-0 lg:px-0">
              with passion for creating responsive, user-friendly websites. With
              expertise in front-end and back-end development, I deliver
              high-quality work that exceeds client expectations.
            </p>
          </div>

          <button className=" flex-1 mt-5 ml-4 sm:ml-0 py-2 lg:py-3 pl-9 pr-10 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 rounded-3xl text-2xl ">
            Hire me
          </button>
        </div>

        <div data-aos="fade-up">
          <Image
            src="/images/freelancer.png"
            alt="young freelancer programmer working on laptop"
            width={419}
            height={407}
          />
        </div>
      </div>
    </>
  );
}
