import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';

const About = () => {
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

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/8 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-foreground transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            My Creative Journey
          </h2>
          
          <Card className={`p-8 md:p-12 border-border shadow-sm hover:shadow-xl transition-all duration-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6 transition-all duration-700 delay-100">
                Hi! I'm a designer who loves turning ideas into easy-to-use digital experiences. 
                My journey started with a passion for creativity and a curiosity about how things 
                work — and led me into the world of UI/UX design.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6 transition-all duration-700 delay-200">
                I studied Product Design at Vishwakarma University, Pune, where I learned the basics 
                of design thinking, problem-solving, and building with users in mind. Over time, I got 
                more interested in how digital products are made — apps, websites, tools — and how 
                design can make them simple, useful, and even fun to use.
              </p>
              
              <p className="text-gray-700 leading-relaxed transition-all duration-700 delay-300">
                That's when I dove deep into UI/UX. I started using tools like Figma, Adobe XD, and 
                Framer, took on projects, did freelance work, and kept learning from real users and 
                feedback.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
