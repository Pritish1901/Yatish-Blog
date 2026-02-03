import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index, isVisible }) => {
  return (
    <Card 
      className={`group overflow-hidden border-gray-200 hover:shadow-2xl transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <Button 
          variant="ghost" 
          className="w-full justify-center gap-2 hover:bg-gray-900 hover:text-white transition-all duration-300"
          onClick={() => window.open(project.url, '_blank')}
        >
          View on Behance
          <ExternalLink className="w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

function Projects() {
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

  const projects = [
    {
      id: 1,
      title: 'Investment App Redesign (iVector)',
      description: 'A complete redesign of an investment platform focused on improving user experience and accessibility',
      url: 'https://www.behance.net/gallery/239691179/Investment-app-redesign-(iVector)',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a1fb87239691179.67be9f1e58d16.png',
      tags: ['Mobile App', 'Finance', 'UI/UX']
    },
    {
      id: 2,
      title: 'Mens App',
      description: 'Modern e-commerce experience tailored for mens fashion and lifestyle products',
      url: 'https://www.behance.net/gallery/234626967/Mens-App',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6c7e9a234626967.67a6e9fe4d0b5.png',
      tags: ['E-commerce', 'Mobile App', 'Fashion']
    },
    {
      id: 3,
      title: 'Formula 1 by Redbull',
      description: 'Immersive racing experience design for Formula 1 enthusiasts',
      url: 'https://www.behance.net/gallery/236550631/Formula-1-by-Redbull',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c9e1b9236550631.673c0fbaa7f9e.png',
      tags: ['Sports', 'Interactive', 'UI/UX']
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-gradient-to-b from-slate-50 via-white to-stone-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-br from-amber-50 to-transparent rounded-full blur-3xl opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-gray-900 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-lg text-gray-600 mb-16 transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            A selection of my recent work on Behance
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;