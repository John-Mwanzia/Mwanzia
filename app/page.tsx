import About from "@/components/About";
import Canvas from "@/components/Canvas";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/Navbar";
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
  return (
    <div className="overflow-hidden flex min-h-screen flex-col items-center  ">
      
      <Canvas />
      <NavBar />
       <HeroSection />
         <About />
        <Projects />
        <Services />
        <Skills />
        <Footer />
    </div>
  );
}
