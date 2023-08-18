import Image from "next/image";
import Canvas from "../components/Canvas";
import Link from "next/link";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NavBar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

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
        <About />
        <Projects />
        <Services />
        <Skills />
      </main>


    </>
  );
}
