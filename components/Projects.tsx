import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <div
        data-aos="fade-up"
        className="container overflow-x-hidden mt-16 px-8 2xl:px-32"
      >
        <h2  className="text-3xl font-medium tracking-tight text-white sm:text-center">
        My Work in Action
        </h2>
        <p className="mt-2 text-lg text-white sm:text-center mb-12">
          
            Here are some of the projects I have worked on. Click on any of the
            images to view the project.
        </p>
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
              <Link href="https://clinicalforex.com/">
                <Image
                  src="/images/Macbook-Air-www.clinicalforex.com.png"
                  alt="project-pic-item1"
                  width={430}
                  height={350}
                />
              </Link>
            </div>
            <div>
              <Link href="/">
                <Image
                  src="/images/Macbook-Air-localhost.png"
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
