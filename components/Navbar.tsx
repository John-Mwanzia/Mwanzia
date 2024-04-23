"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import { Button } from "./ui/button";

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
  const [menuAnimationCompleted, setMenuAnimationCompleted] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when the menu is open
    document.body.style.overflow = isOpen ? "auto" : "hidden";
    // Reset menu animation state when closing the menu
    if (!isOpen) {
      setMenuAnimationCompleted(false);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Once the menu is open, wait for a short delay before starting the animation
      setTimeout(() => {
        setMenuAnimationCompleted(true);
      }, 200);
    }
  }, [isOpen]);

  return (
    <>
      <div className=" mt-7 mb-8 container px-8 2xl:px-32 overflow-x-hidden">
        <nav className="relative flex justify-between items-center border-b-[0.5px] pb-2 border-gray-300/20">
          <div className={` z-50`}>
            <div
              className="flex space-x-4"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <p className="text-3xl  sm:text-4xl font-bold text-yellow-600">John</p>
              <p className="text-3xl  sm:text-4xl mr-4 font-bold text-red-500">Kioko</p>
            </div>
          </div>
          <div className="sm:hidden flex justify-end z-50 ">
            <Button 
            className="p-2 bg-yellow-500/30  "
            onClick={toggleMenu}>
              <Menu className="" />
            </Button>
          </div>

          {isOpen && (
        <div className="sm:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 z-10">
          <div
            className={`flex flex-col space-y-24 items-center justify-center h-full transition-opacity duration-500 ${
              menuAnimationCompleted ? "menu-open" : ""
            }`}
            onAnimationEnd={() => setMenuAnimationCompleted(true)}
          >
            {links.map((link, index) => (
              <div
                key={link.id}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`opacity-0 ${
                  menuAnimationCompleted ? "opacity-100" : ""
                }`}
                onClick={() => {
                  animateScroll.scrollTo(
                    document.getElementById(link.id)!.offsetTop
                  );
                  toggleMenu();
                }}
              >
                <p className="cursor-pointer text-white text-xl">{link.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
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
