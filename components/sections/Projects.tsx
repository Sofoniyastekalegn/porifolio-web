'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from '@/components/ui/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Oxygen Manufacturing Website',
    company: 'Edget Gas',
    description: 'Developed a clean, fast-loading site for a manufacturing company, showcasing their industrial solutions with a performance-optimized front end.',
    image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Next.js', 'TailwindCSS', 'Responsive Design'],
    link: 'https://edgetgas.com',
  },
  {
    id: 2,
    title: 'Import-Export Blog',
    company: 'Metbel Trading',
    description: 'Built an import-export blog-style website for showcasing Ethiopian beans and coffee, complete with product galleries, dynamic content, and SEO optimization.',
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['WordPress', 'SEO', 'Custom Theme', 'E-commerce'],
    link: 'https://metbeltrading.com',
  },
  {
    id: 3,
    title: 'Enterprise Resource Planning System',
    company: 'Hisab ERP',
    description: 'Architected a full-featured ERP system supporting multi-company accounting, HR, payroll, invoicing, CRM, inventory, and projects. Integrated with a government e-invoicing portal.',
    image: 'https://images.pexels.com/photos/7821473/pexels-photo-7821473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'SaaS'],
    link: 'https://hisabportal.netlify.app/',
  },
  {
    id: 4,
    title: 'Youth Engagement Platform',
    company: 'Youth Print',
    description: 'Developed and deployed youth engagement platforms using Next.js and Strapi, focusing on headless CMS solutions to empower real-time content updates.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'Strapi', 'Headless CMS', 'Responsive'],
    link: 'https://staging.theyouthprint.net',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A selection of my most impactful work across various industries.
            Each project represents a unique set of challenges and solutions.
          </p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}