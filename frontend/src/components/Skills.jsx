import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { Figma, Palette, Users, Layout, Smartphone, Layers } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const tools = [
    { name: 'Figma', icon: Figma },
    { name: 'Adobe XD', icon: Palette },
    { name: 'Framer', icon: Layout }
  ];

  const skills = [
    { name: 'User Research', icon: Users },
    { name: 'Wireframing', icon: Layout },
    { name: 'Prototyping', icon: Smartphone },
    { name: 'Visual Design', icon: Layers }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/8 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-foreground text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Skills & Tools
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Tools */}
            <div>
              <h3 className={`text-2xl font-bold mb-8 text-foreground transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>Design Tools</h3>
              <div className="grid gap-4">
                {tools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <Card 
                      key={index} 
                      className={`p-6 border-border hover:border-accent hover:shadow-xl transition-all duration-500 cursor-pointer group transform ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                      }`}
                      style={{ transitionDelay: `${200 + index * 100}ms` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-muted rounded-lg group-hover:bg-primary transition-all duration-300 group-hover:scale-110">
                          <Icon className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>
                        <span className="text-lg font-semibold text-foreground">{tool.name}</span>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className={`text-2xl font-bold mb-8 text-foreground transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>Core Skills</h3>
              <div className="grid gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <Card 
                      key={index} 
                      className={`p-6 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-500 cursor-pointer group transform ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                      }`}
                      style={{ transitionDelay: `${200 + index * 100}ms` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-muted rounded-lg group-hover:bg-primary transition-all duration-300 group-hover:scale-110">
                          <Icon className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>
                        <span className="text-lg font-semibold text-gray-900">{skill.name}</span>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
