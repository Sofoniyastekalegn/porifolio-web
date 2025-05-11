'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent, Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SkillBar from '@/components/ui/SkillBar';

// Skill data organized by category
const skillsData = {
  frontend: [
    { name: 'React.js', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Vue.js', level: 75 },
    { name: 'JavaScript', level: 95 },
    { name: 'TailwindCSS', level: 90 },
    { name: 'HTML5/CSS3', level: 95 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 80 },
    { name: 'Auth.js', level: 75 },
    { name: 'RESTful APIs', level: 90 },
    { name: 'Strapi', level: 85 },
  ],
  cms: [
    { name: 'Strapi', level: 90 },
    { name: 'WordPress', level: 75 },
    { name: 'Shopify', level: 70 },
  ],
  tools: [
    { name: 'Git', level: 85 },
    { name: 'Netlify', level: 90 },
    { name: 'Vercel', level: 90 },
    { name: 'Docker', level: 60 },
    { name: 'Postman', level: 85 },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="text-primary">Stack</span> & Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Over 5 years of experience has allowed me to master various technologies
            and tools to build powerful, responsive, and scalable web applications.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto">
          {isInView && (
            <Tabs defaultValue="frontend" onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="frontend">Frontend</TabsTrigger>
                  <TabsTrigger value="backend">Backend</TabsTrigger>
                  <TabsTrigger value="cms">CMS</TabsTrigger>
                  <TabsTrigger value="tools">Tools</TabsTrigger>
                </TabsList>
              </div>

              {Object.keys(skillsData).map((category) => (
                <TabsContent key={category} value={category} className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-center capitalize">{category} Skills</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {skillsData[category as keyof typeof skillsData].map((skill, index) => (
                          <SkillBar
                            key={skill.name}
                            name={skill.name}
                            percentage={skill.level}
                            delay={index * 0.1}
                          />
                        ))}
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </div>
    </section>
  );
}