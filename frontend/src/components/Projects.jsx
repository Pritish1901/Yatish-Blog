import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
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

  const handleViewProject = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 mb-16">
            A selection of my recent work on Behance
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-center gap-2 hover:bg-gray-100"
                    onClick={() => handleViewProject(project.url)}
                  >
                    View on Behance
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
