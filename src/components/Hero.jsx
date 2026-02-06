import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (heroRef.current && textRef.current) {
        const opacity = Math.max(0, 1 - scrolled / 500);
        const translateY = scrolled * 0.5;
        textRef.current.style.opacity = opacity;
        textRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-20">
      {/* Premium gradient background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={textRef} className="max-w-5xl mx-auto text-center animate-fade-in-up">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 hover:border-accent/60 transition-colors duration-300">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-foreground">Product & UI/UX Designer</span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground tracking-tight leading-tight">
            <span className="inline-block animate-slide-in-left">Crafting</span>{' '}
            <span className="inline-block animate-slide-in-right text-accent">Digital</span>
            <br />
            <span className="inline-block animate-slide-in-left delay-100">Experiences</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-delayed">
            I design intuitive, beautiful interfaces that solve real problems and delight users. From concept to launch, let's create something extraordinary.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center flex-col sm:flex-row animate-fade-in-delayed-2">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-secondary text-primary-foreground px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              Explore My Work
              <ArrowDown className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-y-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border text-foreground hover:bg-muted px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="flex flex-col items-center">
          <p className="text-xs text-muted-foreground mb-2">Scroll to explore</p>
          <ArrowDown className="w-5 h-5 text-accent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
