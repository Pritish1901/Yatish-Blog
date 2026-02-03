import React from 'react';
import { Card } from './ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">
            My Creative Journey
          </h2>
          
          <Card className="p-8 md:p-12 border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Hi! I'm a designer who loves turning ideas into easy-to-use digital experiences. 
                My journey started with a passion for creativity and a curiosity about how things 
                work — and led me into the world of UI/UX design.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                I studied Product Design at Vishwakarma University, Pune, where I learned the basics 
                of design thinking, problem-solving, and building with users in mind. Over time, I got 
                more interested in how digital products are made — apps, websites, tools — and how 
                design can make them simple, useful, and even fun to use.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
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