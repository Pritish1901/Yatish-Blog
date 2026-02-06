import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

function Projects() {
  const sectionRef = useRef(null);
  const visibleState = useState(false);
  const isVisible = visibleState[0];
  const setIsVisible = visibleState[1];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
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
  }, [setIsVisible]);

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/8 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-foreground transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-lg text-muted-foreground mb-16 transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            A selection of my recent work on Behance
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className={`group overflow-hidden border-border hover:shadow-2xl transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                <img 
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a1fb87239691179.67be9f1e58d16.png"
                  alt="Investment App Redesign"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                  Investment App Redesign (iVector)
                </h3>
                <p className="text-muted-foreground mb-4">
                  A complete redesign of an investment platform focused on improving user experience and accessibility
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">Mobile App</span>
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">Finance</span>
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">UI/UX</span>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open('https://www.behance.net/gallery/239691179/Investment-app-redesign-(iVector)', '_blank')}
                >
                  View on Behance
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className={`group overflow-hidden border-gray-200 hover:shadow-2xl transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '150ms' }}>
              <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                <img 
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6c7e9a234626967.67a6e9fe4d0b5.png"
                  alt="Mens App"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                  Mens App
                </h3>
                <p className="text-muted-foreground mb-4">
                  Modern e-commerce experience tailored for mens fashion and lifestyle products
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">E-commerce</span>
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">Mobile App</span>
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">Fashion</span>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open('https://www.behance.net/gallery/234626967/Mens-App', '_blank')}
                >
                  View on Behance
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className={`group overflow-hidden border-gray-200 hover:shadow-2xl transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '300ms' }}>
              <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                <img 
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c9e1b9236550631.673c0fbaa7f9e.png"
                  alt="Formula 1 by Redbull"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                  Formula 1 by Redbull
                </h3>
                <p className="text-muted-foreground mb-4">
                  Immersive racing experience design for Formula 1 enthusiasts
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">Sports</span>
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">Interactive</span>
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">UI/UX</span>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open('https://www.behance.net/gallery/236550631/Formula-1-by-Redbull', '_blank')}
                >
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
