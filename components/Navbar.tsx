'use client';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { animateScroll } from 'react-scroll';
import { Button } from './ui/button';

const links = [
  {
    name: 'Home',
    Href: '#Home',
    id: 'Home',
  },
  {
    name: 'About',
    Href: '#About',
    id: 'About',
  },
  {
    name: ' Services',
    Href: '#Services',
    id: 'Services',
  },
  {
    name: 'Contact',
    Href: '#Contact',
    id: 'Contact',
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuAnimationCompleted, setMenuAnimationCompleted] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when the menu is open
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
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
      <div className=" container mb-8 mt-7 overflow-x-hidden px-8 2xl:px-32  ">
        <nav className="relative flex items-center justify-between border-b border-[#5E4AD3]/70 z-50 pb-2">
          <div className={` z-50`}>
            <div
              className="flex space-x-4"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <p className="text-3xl  font-bold text-yellow-600 sm:text-4xl">
                John
              </p>
              <p className="mr-4  text-3xl font-bold text-[#5E4AD3] sm:text-4xl">
                Kioko
              </p>
            </div>
          </div>
          <div className="z-50 flex justify-end sm:hidden ">
            <Button className="bg-yellow-500/30 p-2  " onClick={toggleMenu}>
              <Menu className="" />
            </Button>
          </div>

          {isOpen && (
            <div className="fixed left-0 top-0 z-10 h-screen w-full bg-black bg-opacity-95 sm:hidden">
              <div
                className={`flex h-full flex-col items-center justify-center space-y-24 transition-opacity duration-500 ${
                  menuAnimationCompleted ? 'menu-open' : ''
                }`}
                onAnimationEnd={() => setMenuAnimationCompleted(true)}
              >
                {links.map((link, index) => (
                  <div
                    key={link.id}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    className={`opacity-0 ${
                      menuAnimationCompleted ? 'opacity-100' : ''
                    }`}
                    onClick={() => {
                      animateScroll.scrollTo(
                        document.getElementById(link.id)!.offsetTop,
                      );
                      toggleMenu();
                    }}
                  >
                    <p className="cursor-pointer text-xl text-white">
                      {link.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className=" hidden flex-wrap items-center justify-end  space-x-12 sm:flex lg:space-x-12 ">
            <div
              data-aos-delay="400"
              data-aos="fade-down"
              className=""
              onClick={() => {
                animateScroll.scrollTo(
                  document.getElementById('Home')!.offsetTop,
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
                  document.getElementById('About')!.offsetTop,
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
                  document.getElementById('Services')!.offsetTop,
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
                  document.getElementById('Contact')!.offsetTop,
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
