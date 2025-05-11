import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Stats from '@/components/sections/Stats';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}