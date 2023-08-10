import Image from "next/image";
import { Inter } from "next/font/google";
import Canvas from "../components/Canvas";
import Link from "next/link";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NavBar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";


export default function Home() {
  const collapseItems = [
    {
      name: "Home",
      Href: "#Home",
      id: "Home",
    },
    {
      name: "About",
      Href: "#About",
      id: "About",
    },
    {
      name: " Services",
      Href: "#Services",
      id: "Services",
    },
    {
      name: "Contact",
      Href: "#Contact",
      id: "Contact",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center  ">
        <Canvas />
        <NavBar collapseItems={collapseItems} />
        <HeroSection />
        {/* About section */}
       <About />
        {/* Project section */}
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
                  src="/images/mobile.png"
                  alt="project-pic-item1"
                  className="xl:max-w-[360px] 2xl:max-w-[430px] xl:max-h-[305px] 2xl:max-h-[370px]"
                  width={430}
                  height={350}
                />
              </Link>
            </div>
          </div>
        </div>
        {/* Service section */}
        <div
          data-aos="fade-up"
          className="mb-20 mt-8 max-w-[85%]"
          id="Services"
        >
          <h1 className="text-4xl font-semibold mt-12 mb-10 text-center lg:text-left underline decoration-sky-500">
            Services
          </h1>
          <div className="flex flex-wrap gap-4 justify-center items-center  ">
            <div
              data-aos="flip-left"
              className="ground-color p-4 text-center rounded-lg"
            >
              <h1 className="text-3xl mb-4">Web Development</h1>
              <p className="max-w-sm xl:max-w-xs 2xl:max-w-sm">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia,molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum
              </p>
            </div>
            <div
              data-aos="flip-left"
              className="ground-color p-4 text-center rounded-lg"
            >
              <h1 className="text-3xl mb-4">Video editing</h1>
              <p className="max-w-sm xl:max-w-xs 2xl:max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia,molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum
              </p>
            </div>
            <div
              data-aos="flip-left"
              className="ground-color p-4 text-center rounded-lg"
            >
              <h1 className="text-3xl mb-4">Figma Web design</h1>
              <p className="max-w-sm xl:max-w-xs 2xl:max-w-sm">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia,molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum
              </p>
            </div>
          </div>
        </div>
        {/* Skill section */}
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
      </main>

      <footer data-aos="fade-up" className="mt-20" id="Contact">
        <h1 className="text-center text-4xl font-semibold  mt-12 mb-10">
          Contact
        </h1>
        <div className="flex flex-wrap justify-around pb-8 gap-4 mt-10 bg-blue-900 rounded-tl-3xl rounded-tr-3xl">
          <div className="mt-8 px-4">
            <p className="text-6xl font-bold ">Get in touch</p>
            <form>
              <div className="flex flex-wrap gap-4 mt-8">
                <input
                  className="rounded-md p-2 outline-none text-black bg-white w-full sm:w-auto"
                  placeholder="Name..."
                  required
                />
                <input
                  className="rounded-md p-2 outline-none text-black bg-white w-full sm:w-auto"
                  placeholder="Email..."
                  required
                />
              </div>
              <textarea
                id="message"
                className=" mt-4 p-2.5 w-full text-sm rounded-lg outline-none text-black bg-white"
                placeholder="Your message..."
              ></textarea>
              <button className=" button-color float-right p-2 pr-4 pl-4 mb-6 rounded-lg font-semibold  ">
                Submit
              </button>
            </form>
          </div>

          <div className=" flex flex-col  items-center mt-8">
            <p className="text-4xl text-red-500">Quick Access</p>
            <div className="flex flex-wrap justify-center flex-1  gap-x-4 mt-6">
              <h3 className="text-xl">Email :</h3>
              <h3 className="text-xl">johnmwanzia277@gmail.com</h3>
            </div>
            <div className="flex gap-4  flex-wrap flex-1">
              <h3 className="text-xl">Phone No : </h3>
              <h3 className="text-xl"> 0707979247</h3>
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-around lg:flex-col  mt-8">
            <Link href="https://github.com/John-Mwanzia">
              <Image
                src="/github-icon.svg"
                width={66}
                height={57}
                alt="github icon"
              />
            </Link>
            <Link href="https://twitter.com/John_Mwanzia144">
              <Image
                src="/twitter-icon.svg"
                width={66}
                height={57}
                alt="github icon"
              />
            </Link>
            <Link href="">
              <Image
                src="/linkedin.svg"
                width={66}
                height={57}
                alt="github icon"
              />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
