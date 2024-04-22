import React from "react";

export default function Services() {
  return (
    <>
      <div data-aos="fade-up" className="mb-20 mt-8 px-4 sm:px-32 overflow-hidden container" id="Services">
        <h1 className="text-4xl font-semibold mt-12 mb-10 text-center lg:text-left underline decoration-sky-500">
          Services
        </h1>
        <div className="flex flex-wrap gap-4 justify-center items-center  ">
          <div
            data-aos="flip-left"
            className="ground-color p-4 text-center rounded-lg"
          >
            <h1 className="text-3xl mb-4">Web Development</h1>
            <p className="max-w-sm xl:max-w-xs">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia,molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum
            </p>
          </div>
          <div
            data-aos="flip-left"
            className="ground-color p-4 text-center rounded-lg"
          >
            <h1 className="text-3xl mb-4">Video editing</h1>
            <p className="max-w-sm xl:max-w-xs ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia,molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum
            </p>
          </div>
          <div
            data-aos="flip-left"
            className="ground-color p-4 text-center rounded-lg"
          >
            <h1 className="text-3xl mb-4">Figma Web design</h1>
            <p className="max-w-sm xl:max-w-xs">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia,molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
