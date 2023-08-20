import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      <div data-aos="fade-right" className="max-w-[85%]" id="About">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo aute
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
