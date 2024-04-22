"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";

const links = [
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className=" mt-7 mb-8 container px-4 sm:px-32 overflow-x-hidden">
        <nav className="relative flex justify-between items-center border-b-[0.5px] pb-2 border-gray-300/20">
          <div>
            <div
              className="flex space-x-4"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <p className="text-4xl font-bold text-yellow-600">John</p>
              <p className="text-4xl mr-4 font-bold text-red-500">Kioko</p>
            </div>
          </div>
          <div className="sm:hidden w-20">
            <Menu />
          </div>

          <div className=" hidden sm:flex space-x-12 lg:space-x-12  items-center justify-end flex-wrap ">
            <div
              data-aos-delay="400"
              data-aos="fade-down"
              className=""
              onClick={() => {
                animateScroll.scrollTo(
                  document.getElementById("Home")!.offsetTop
                );
              }}
            >
              <p className="cursor-pointer">Home</p>
            </div>
            <div
              data-aos-delay="500"
              data-aos="fade-down"
              className=""
              onClick={() => {
                animateScroll.scrollTo(
                  document.getElementById("About")!.offsetTop
                );
              }}
            >
              <p className="cursor-pointer">About</p>
            </div>
            <div
              data-aos-delay="600"
              data-aos="fade-down"
              className=""
              onClick={() => {
                animateScroll.scrollTo(
                  document.getElementById("Services")!.offsetTop
                );
              }}
            >
              <p className="cursor-pointer">Services</p>
            </div>
            <div
              data-aos-delay="700"
              data-aos="fade-down"
              className=""
              onClick={() => {
                animateScroll.scrollTo(
                  document.getElementById("Contact")!.offsetTop
                );
              }}
            >
              <p className="cursor-pointer">Contact</p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
