'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  company: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
      }
    }
  };
  
  return (
    <motion.div 
      variants={item}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Card className="overflow-hidden h-full flex flex-col border-primary/10 hover:border-primary/30 transition-colors duration-300">
        <div className="relative h-60 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <Badge variant="outline" className="bg-background/30 backdrop-blur-sm">
              {project.company}
            </Badge>
          </div>
        </div>
        
        <CardContent className="flex flex-col flex-1 p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => (
              <Badge key={idx} variant="secondary" className="font-mono text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <Button asChild variant="outline" className="group">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Visit Project
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}