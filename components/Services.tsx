import React from 'react';

export default function Services() {
  return (
    <>
      <div
        data-aos="fade-up"
        className="container mb-20 mt-8 overflow-hidden px-8 2xl:px-32"
        id="Services"
      >
        <h1 className="mb-10 mt-12 text-center text-4xl font-semibold underline decoration-sky-500 lg:text-left">
          Services
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4  ">
          <div
            data-aos="flip-left"
            className="ground-color rounded-lg p-4 text-center"
          >
            <h1 className="mb-4 text-3xl">Web Development</h1>
            <p className="max-w-sm xl:max-w-xs">
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia,molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum
            </p>
          </div>
          <div
            data-aos="flip-left"
            className="ground-color rounded-lg p-4 text-center"
          >
            <h1 className="mb-4 text-3xl">Video editing</h1>
            <p className="max-w-sm xl:max-w-xs ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia,molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum
            </p>
          </div>
          <div
            data-aos="flip-left"
            className="ground-color rounded-lg p-4 text-center"
          >
            <h1 className="mb-4 text-3xl">Figma Web design</h1>
            <p className="max-w-sm xl:max-w-xs">
              {' '}
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
