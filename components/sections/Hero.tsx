'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDownCircle, Github, Linkedin, Mail, Twitter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typewriterElement = typewriterRef.current;
    if (typewriterElement) {
      typewriterElement.classList.add('typewriter');
    }
    
    return () => {
      if (typewriterElement) {
        typewriterElement.classList.remove('typewriter');
      }
    };
  }, []);

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-mono text-lg mb-2">🚀 Full-Stack Web Developer</p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hello, I'm{' '}
              <span className="text-primary font-mono block mt-2" ref={typewriterRef}>
                Sofoniyas Tekalegn
              </span>
            </h1>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
              A seasoned full-stack developer with over five years of experience crafting responsive, 
              scalable, and innovative digital solutions. I build web platforms that solve real 
              business problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="gap-2">
                <a href="#projects">
                  View Projects
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="gap-2">
                
                <a href="/Sofoniyas Tekalegn Resume" download="Sofoniyas Tekalegn Resume.pdf">
                  

                  <Download size={16} />

                  Download CV
                </a>
              </Button>
            </div>
            
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <motion.a 
                href="https://github.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-card/80 p-3 rounded-full"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-card/80 p-3 rounded-full"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://twitter.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-card/80 p-3 rounded-full"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="mailto:sofoniyastekalegn@gmail.com" 
                className="bg-card hover:bg-card/80 p-3 rounded-full"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="animated-border rounded-full w-64 h-64 md:w-80 md:h-80 overflow-hidden">
              <Image
                src="/portfoilo photo.jpg"
                alt="Sofoniyas Tekalegn"
                width={320}
                height={320}
                className="rounded-full object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a href="#about" aria-label="Scroll down">
            <ArrowDownCircle className="text-primary w-10 h-10" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}