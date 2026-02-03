import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

function Projects() {
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
            <Card className="group overflow-hidden border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a1fb87239691179.67be9f1e58d16.png"
                  alt="Investment App Redesign"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Investment App Redesign (iVector)</h3>
                <p className="text-gray-600 mb-4">A complete redesign of an investment platform focused on improving user experience and accessibility</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Mobile App</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Finance</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">UI/UX</span>
                </div>
                <Button variant="ghost" className="w-full justify-center gap-2 hover:bg-gray-100" onClick={() => window.open('https://www.behance.net/gallery/239691179/Investment-app-redesign-(iVector)', '_blank')}>
                  View on Behance
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6c7e9a234626967.67a6e9fe4d0b5.png"
                  alt="Mens App"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Mens App</h3>
                <p className="text-gray-600 mb-4">Modern e-commerce experience tailored for mens fashion and lifestyle products</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">E-commerce</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Mobile App</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Fashion</span>
                </div>
                <Button variant="ghost" className="w-full justify-center gap-2 hover:bg-gray-100" onClick={() => window.open('https://www.behance.net/gallery/234626967/Mens-App', '_blank')}>
                  View on Behance
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c9e1b9236550631.673c0fbaa7f9e.png"
                  alt="Formula 1 by Redbull"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Formula 1 by Redbull</h3>
                <p className="text-gray-600 mb-4">Immersive racing experience design for Formula 1 enthusiasts</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Sports</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Interactive</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">UI/UX</span>
                </div>
                <Button variant="ghost" className="w-full justify-center gap-2 hover:bg-gray-100" onClick={() => window.open('https://www.behance.net/gallery/236550631/Formula-1-by-Redbull', '_blank')}>
                  View on Behance
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
