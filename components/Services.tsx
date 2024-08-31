import React from 'react';
import { FaMobileAlt, FaCode, FaPalette } from 'react-icons/fa';

export default function Services() {
  return (
    <>
      <div
        data-aos="fade-up"
        className="container mb-20 mt-28 overflow-hidden px-8 2xl:px-32"
        id="Services"
      >
        <h2   className="text-3xl font-medium tracking-tight text-white sm:text-center">
          Services
        </h2>
        <p className="mt-2 text-lg text-white sm:text-center mb-12">
        What I Offer & Deliver
        </p>
        <div className="flex flex-wrap  items-center justify-center gap-8">
          {/* Mobile Development Card */}
          <div
            data-aos="flip-left"
            className=" relative transform rounded-2xl  py-6 text-center shadow-2xl transition-transform hover:-translate-y-2 hover:shadow-2xl max-w-xs bg-gradient-to-r from-[rgba(253,45,45,0.5)] to-70%  to-[rgba(8,16,102,0.7)]"
          >
            <div className="mb-4 flex items-center justify-center">
              <FaMobileAlt className="text-4xl text-white" />
            </div>
            <h1 className="mb-4 text-3xl font-semibold text-white">
              Mobile Development <br /> (React Native)
            </h1>
            <p className="text-white">
              Creating cross-platform mobile applications with seamless user
              experiences using React Native.
            </p>
          </div>

          {/* Web Development Card */}
          <div
            data-aos="flip-left"
            className=" relative transform  py-6 px-4 text-center shadow-2xl rounded-2xl transition-transform hover:-translate-y-2 hover:shadow-2xl max-w-xs bg-gradient-to-r from-[rgba(34,193,195,1)] to-[rgba(8,16,102,1)]"
          >
            <div className="mb-4 flex items-center justify-center">
              <FaCode className="text-4xl text-white" />
            </div>
            <h1 className="mb-4 text-3xl font-semibold text-white">
              Web Development
            </h1>
            <p className="text-white">
              Developing comprehensive web applications that integrate robust
              front-end interfaces with efficient back-end systems
            </p>
          </div>

          {/* UI/UX Design Card */}
          <div
            data-aos="flip-left"
            className=" relative max-w-xs transform rounded-2xl bg-gradient-to-r from-[rgba(195,34,193,0.5)] to-[rgba(45,87,253,0.7)] py-6 text-center shadow-2xl  transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-center">
              <FaPalette className="text-4xl text-white" />
            </div>
            <h1 className="mb-4 text-3xl font-semibold text-white">
              UI/UX Design with Figma
            </h1>
            <p className="text-white px-2">
              Designing intuitive and visually appealing interfaces with a focus
              on user experience using Figma.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
