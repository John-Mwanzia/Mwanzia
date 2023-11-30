import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects() {
  return (
    <>
      <div data-aos="fade-up" className="max-w-[85%]">
        <h1 className="text-4xl font-semibold mt-10 mb-20 text-center lg:text-left underline decoration-sky-500">
          Projects
        </h1>
        <div className="flex flex-wrap justify-center items-center mt-12 gap-6  lg:gap-0">
          <div>
            <Link href="https://smart-tech-stores.vercel.app/">
              <Image
                data-aos="zoom-in-left"
                src="/images/mobile.png"
                alt="project-pic-item1"
                className="xl:max-w-[360px] 2xl:max-w-[430px] xl:max-h-[305px] 2xl:max-h-[370px]"
                width={430}
                height={350}
              />
            </Link>
          </div>
          <div>
            <Link href="https://proud-forest-09d2d6e10.3.azurestaticapps.net/">
              <Image
                data-aos="zoom-in-left"
                src="/images/mobile1.png"
                alt="project-pic-item1"
                className="xl:max-w-[360px] 2xl:max-w-[430px] xl:max-h-[305px] 2xl:max-h-[370px]"
                width={430}
                height={350}
              />
            </Link>
          </div>
          <div>
            <Link href="https://smart-tech-stores.vercel.app/">
              <Image
                data-aos="zoom-in-left"
                src="/images/TerraBloom.png"
                alt="project-pic-item1"
                className="xl:max-w-[360px] 2xl:max-w-[430px] xl:max-h-[305px] 2xl:max-h-[370px]"
                width={430}
                height={350}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
