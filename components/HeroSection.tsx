'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function HeroSection() {
  const phrases = [
    'Software Engineer',
    'web developer',
    'freelancer',
    'fullStack Dev',
  ];

  const [currentText, setCurrentText] = useTypewriter({
    words: phrases,
    typeSpeed: 100,
    loop: true,
  });

  return (
    <>
      <div
        className="relative mt-20 flex flex-col   justify-center gap-x-16 overflow-hidden px-3 sm:container sm:flex-row  sm:px-0 lg:mt-40 lg:gap-x-20 xl:gap-4 2xl:gap-x-36 2xl:px-32"
        id="Home"
      >
        <div data-aos="flip-right">
          <div>
            <p className=" mb-8 px-4 text-4xl  font-semibold sm:px-0 sm:text-3xl lg:px-0  lg:text-5xl">
              &lt;Hello /&gt;
            </p>
            <p className=" mb-4 px-4 text-4xl  font-bold sm:px-0 sm:text-4xl lg:px-0 lg:text-5xl">
              <span className="mr-2">I’m a</span>
              <span className="text-[#5E4AD3]">{currentText}</span>
              <span className="text-[#EF4444]">
                <Cursor />
              </span>
            </p>
            <p className=" max-w-xl  px-4 text-base font-semibold sm:px-0 lg:px-0">
              With a strong foundation in software engineering, I am passionate
              about building innovative and efficient solutions. My expertise
              spans across front-end and back-end development, mobile
              applications, and intuitive UI/UX design. I strive to deliver
              high-quality work that not only meets but exceeds client
              expectations.
            </p>
          </div>

          <button
            onClick={() => {
              // scroll to the contact section
              document.getElementById('Contact')!.scrollIntoView({
                behavior: 'smooth',
              });
            }}
            className=" ml-4 mt-5 flex-1 rounded-3xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 py-2 pl-9 pr-10 text-2xl sm:ml-0 lg:py-3 "
          >
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
