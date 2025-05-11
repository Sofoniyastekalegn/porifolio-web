'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock5, Briefcase, Code, Database } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  delay: number;
}

const StatItem = ({ icon, value, label, delay }: StatItemProps) => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="text-primary mb-2">{icon}</div>
    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono">
      <AnimatedCounter value={value} />
    </h3>
    <p className="text-muted-foreground text-sm mt-2">{label}</p>
  </motion.div>
);

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {isInView && (
            <>
              <StatItem 
                icon={<Clock5 size={32} />} 
                value={5} 
                label="Years Experience" 
                delay={0}
              />
              <StatItem 
                icon={<Briefcase size={32} />} 
                value={25} 
                label="Projects Completed" 
                delay={0.1}
              />
              <StatItem 
                icon={<Code size={32} />} 
                value={8} 
                label="Tech Stacks" 
                delay={0.2}
              />
              <StatItem 
                icon={<Database size={32} />} 
                value={12} 
                label="Happy Clients" 
                delay={0.3}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}