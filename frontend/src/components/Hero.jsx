import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

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
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-stone-100"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl opacity-60 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-50 to-transparent rounded-full blur-3xl opacity-60 animate-float-delayed"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={textRef} className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900 tracking-tight">
            <span className="inline-block animate-slide-in-left">Yatish</span>{' '}
            <span className="inline-block animate-slide-in-right">Kapila</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light animate-fade-in-delayed">
            Product and UI/UX Designer
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed-2">
            Creating intuitive digital experiences that blend creativity with functionality
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in-delayed-3">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-300 hover:border-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Yatish_Kapila_Resume.pdf';
                link.click();
              }}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;