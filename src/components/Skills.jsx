import React from 'react'

export default function Skills() {
  return (
    <>
        <div data-aos="fade-down" className=" mt-8 lg:mt-16  max-w-[85%]">
          <h1 className="text-4xl font-semibold mt-8 mb-10 text-center lg:text-left underline decoration-sky-500">
            SKILL SET
          </h1>
          <div className="flex flex-wrap gap-20 lg:gap-48 justify-center items-center">
            <div>
              <h1 className="text-center text-4xl lg:text-5xl mb-8 front-back-color">
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
              <h1 className="text-center mb-10 text-4xl lg:text-5xl front-back-color">
                Backend
              </h1>
              <div className="flex flex-wrap gap-4 items-center">
                <Image
                  data-aos="zoom-in-left"
                  src="/nodejs.svg"
                  alt="nodejs icon"
                  width={93}
                  height={82}
                />
                <h2>Nodejs</h2>
              </div>
              <div className="flex flex-wrap gap-4 items-center mt-8 ">
                <Image
                  data-aos="zoom-in-left"
                  src="/mongodb.svg"
                  alt="nodejs icon"
                  width={93}
                  height={82}
                />
                <h2>Mongodb</h2>
              </div>
              <div className="flex flex-wrap gap-4 items-center mt-8">
                <Image
                  data-aos="zoom-in-left"
                  src="/mongoose-icon.svg"
                  alt="nodejs icon"
                  width={93}
                  height={82}
                />
                <h2>Mongoose</h2>
              </div>
              <div className="flex flex-wrap gap-4 items-center mt-8">
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
              <div className="flex flex-wrap gap-4 items-center mt-8">
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
  )
}
