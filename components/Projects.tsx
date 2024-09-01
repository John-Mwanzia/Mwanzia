import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Projects() {
  return (
    <div className="container overflow-x-hidden mt-16 px-8 2xl:px-32">
      <h2 className="text-3xl font-medium tracking-tight text-white sm:text-center">
        My Work in Action
      </h2>
      <p className="mt-2 text-lg text-white sm:text-center mb-12">
        Here are some of the projects I have worked on. Click on any of the
        images to view the project.
      </p>
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center space-x-8 animate-marqueeHorizontal">
          {/* Repeat each project item twice to create the infinite loop */}
          {[...Array(2)].map((_, index) => (
            <React.Fragment key={index}>
              <div className="flex-none">
                <Link href="https://terra-bloom.vercel.app/">
                  <Image
                    src="/images/Macbook-Air-terra-bloom.vercel.app.png"
                    alt="project-pic-item1"
                    width={430}
                    height={350}
                  />
                </Link>
              </div>
              <div className="flex-none">
                <Link href="https://study-buddy-ai.vercel.app/">
                  <Image
                    src="/images/Macbook-Air-study-buddy-ai.vercel.app.png"
                    alt="project-pic-item2"
                    width={430}
                    height={350}
                  />
                </Link>
              </div>
              <div className="flex-none">
                <Link href="https://clinicalforex.com/">
                  <Image
                    src="/images/Macbook-Air-www.clinicalforex.com.png"
                    alt="project-pic-item3"
                    width={430}
                    height={350}
                  />
                </Link>
              </div>
              <div className="flex-none">
                <Link href="/">
                  <Image
                    src="/images/Macbook-Air-localhost.png"
                    alt="project-pic-item4"
                    width={430}
                    height={350}
                  />
                </Link>
              </div>
              <div className="flex-none">
                <Link href="https://proud-forest-09d2d6e10.3.azurestaticapps.net/">
                  <Image
                    src="/images/mobile1.png"
                    alt="project-pic-item5"
                    width={430}
                    height={350}
                  />
                </Link>
              </div>
              <div className="flex-none">
                <Link href="https://smart-tech-stores.vercel.app/">
                  <Image
                    src="/images/mobile.png"
                    alt="project-pic-item6"
                    width={430}
                    height={350}
                  />
                </Link>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
