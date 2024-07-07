import About from '@/components/About';
import Canvas from '@/components/Canvas';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import NavBar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center overflow-hidden text-white ">
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
