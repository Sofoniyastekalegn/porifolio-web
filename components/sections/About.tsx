'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Rocket, Users, Code2 } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1, 
        duration: 0.5 
      }
    })
  };
  
  const platforms = [
    { name: "FreeCodeCamp", icon: <Code2 size={20} /> },
    { name: "W3Schools", icon: <Code2 size={20} /> },
    { name: "Harvard's CS50", icon: <GraduationCap size={20} /> },
    { name: "CodeWithMosh", icon: <Code2 size={20} /> },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Web Development <span className="text-primary">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column: Journey description */}
          <div ref={ref}>
            {isInView && (
              <>
                <motion.p 
                  className="text-lg mb-6"
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                >
                  From humble beginnings to mastering modern frameworks and technologies, 
                  my journey has been shaped by both academic rigor and hands-on experience.
                </motion.p>
                
                <motion.div
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Rocket className="mr-2 text-primary" size={24} />
                    Learning Platforms
                  </h3>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {platforms.map((platform, index) => (
                      <div 
                        key={platform.name}
                        className="flex items-center bg-card p-3 rounded-lg"
                      >
                        <span className="mr-2 text-primary">{platform.icon}</span>
                        <span>{platform.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Users className="mr-2 text-primary" size={24} />
                    Vision & Mission
                  </h3>
                  <p className="mb-6">
                    I build web platforms that <strong>solve real business problems</strong>. 
                    Whether it's enhancing e-commerce experiences, automating internal 
                    business workflows, or improving access to youth development resources, 
                    I strive to bridge technology with human impact.
                  </p>
                </motion.div>
                
                <motion.p
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                >
                  Currently, I'm focused on improving the Hisab ERP platform and gathering 
                  real-world feedback from business owners, professionals, and organizations 
                  committed to <span className="text-primary font-semibold">digital transformation and transparency</span>.
                </motion.p>
              </>
            )}
          </div>
          
          {/* Right column: Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 rounded-full"></div>
            
            {isInView && (
              <>
                {[
                  {
                    year: "2018",
                    title: "Beginning the Journey",
                    description: "Started learning web development through online platforms and courses."
                  },
                  {
                    year: "2019",
                    title: "First Professional Role",
                    description: "Joined my first development team, working on responsive websites and e-commerce solutions."
                  },
                  {
                    year: "2020",
                    title: "Expanding Skill Set",
                    description: "Mastered modern JavaScript frameworks and began working with backend technologies."
                  },
                  {
                    year: "2021",
                    title: "Youth Print Internship",
                    description: "Developed youth engagement platforms using Next.js and Strapi."
                  },
                  {
                    year: "2022-Present",
                    title: "Hisab ERP Development",
                    description: "Leading development of a comprehensive ERP system with government integrations."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className={`flex items-start mb-8 ${index % 2 === 0 ? 'justify-end' : ''}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <div className={`relative ${index % 2 === 0 ? 'text-right mr-6' : 'ml-6'} bg-card p-4 rounded-lg shadow-md max-w-[80%]`}>
                      <div className="absolute top-4 w-4 h-4 rounded-full bg-primary z-10"
                        style={{ 
                          [index % 2 === 0 ? 'right' : 'left']: '-10px',
                        }}
                      ></div>
                      <h4 className="text-primary font-mono">{item.year}</h4>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}