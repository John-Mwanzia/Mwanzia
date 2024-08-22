import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <div
        data-aos="fade-up"
        className="container overflow-x-hidden px-8 2xl:px-32"
      >
        <h1 className="mb-20 mt-10 text-center text-4xl font-semibold underline decoration-sky-500 lg:text-left">
          Projects
        </h1>
        <div className="flex items-center justify-center ">
          <div className="grid  gap-32 lg:grid-cols-2">
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
