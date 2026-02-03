import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Maximize2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
      title: "Men's App",
      description: "Modern e-commerce experience tailored for men's fashion and lifestyle products",
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
                className="group overflow-hidden border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
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
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.url, '_blank');
                    }}
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

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button 
                  className="w-full bg-gray-900 hover:bg-gray-800"
                  onClick={() => window.open(selectedProject.url, '_blank')}
                >
                  View Full Project on Behance
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;