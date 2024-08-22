import Image from 'next/image';
import React from 'react';

export default function Skills() {
  return (
    <>
      <div
        data-aos="fade-down"
        className=" container mt-8 overflow-hidden px-8 lg:mt-16 2xl:px-32"
      >
        <h1 className="mb-10 mt-8 text-center text-4xl font-semibold underline decoration-sky-500 lg:text-left">
          SKILL SET
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-20 lg:gap-48">
          <div>
            <h1 className="front-back-color mb-8 text-center text-4xl lg:text-5xl">
              Frontend
            </h1>
            <Image
              data-aos="zoom-in-left"
              data-aos-delay="300"
              src="/skill-set.svg"
              alt="skill set image"
              width={578}
              height={586}
            />
          </div>
          <div>
            <h1 className="front-back-color mb-10 text-center text-4xl lg:text-5xl">
              Backend
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <Image
                data-aos="zoom-in-left"
                src="/nodejs.svg"
                alt="nodejs icon"
                width={93}
                height={82}
              />
              <h2>Nodejs</h2>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 ">
              <Image
                data-aos="zoom-in-left"
                src="/mongodb.svg"
                alt="nodejs icon"
                width={93}
                height={82}
              />
              <h2>Mongodb</h2>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Image
                data-aos="zoom-in-left"
                src="/mongoose-icon.svg"
                alt="nodejs icon"
                width={93}
                height={82}
              />
              <h2>Mongoose</h2>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Image
                data-aos="zoom-in-left"
                src="/images/download.png"
                alt="nodejs icon"
                width={93}
                height={82}
                className="rounded-full"
              />
              <h2>PlanetScale</h2>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Image
                data-aos="zoom-in-left"
                src="/images/icons8-prisma-orm-48.png"
                alt="nodejs icon"
                width={93}
                height={82}
              />
              <h2>Prisma</h2>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
