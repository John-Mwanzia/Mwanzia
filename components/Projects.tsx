import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div data-aos="fade-up" className="px-8 2xl:px-32 overflow-x-hidden container">
        <h1 className="text-4xl font-semibold mt-10 mb-20 text-center lg:text-left underline decoration-sky-500">
          Projects
        </h1>
        <div className="flex justify-center items-center ">
          <div className="grid  lg:grid-cols-2  mt-12 space-x-20 space-y-20">
            <div>
              <Link href="https://terra-bloom.vercel.app/">
                <Image
                  src="/images/Macbook-Air-terra-bloom.vercel.app.png"
                  alt="project-pic-item1"
                  width={430}
                  height={350}
                />
              </Link>
            </div>
            <div>
              <Link href="https://smart-tech-stores.vercel.app/">
                <Image
                  src="/images/Macbook-Air-study-buddy-ai.vercel.app.png"
                  alt="project-pic-item1"
                  width={430}
                  height={350}
                />
              </Link>
            </div>
            <div>
              <Link href="https://proud-forest-09d2d6e10.3.azurestaticapps.net/">
                <Image
                  src="/images/mobile1.png"
                  alt="project-pic-item1"
                  width={430}
                  height={350}
                />
              </Link>
            </div>

            <div>
              <Link href="https://smart-tech-stores.vercel.app/">
                <Image
                  src="/images/mobile.png"
                  alt="project-pic-item1"
                  width={430}
                  height={350}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
