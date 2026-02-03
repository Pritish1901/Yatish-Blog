import React from 'react';
import { Card } from './ui/card';
import { Figma, Palette, Users, Layout, Smartphone, Layers } from 'lucide-react';

const Skills = () => {
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
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 text-center">
            Skills & Tools
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Tools */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Design Tools</h3>
              <div className="grid gap-4">
                {tools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <Card 
                      key={index} 
                      className="p-6 border-gray-200 hover:border-gray-400 hover:shadow-md transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-gray-900 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="text-lg font-semibold text-gray-900">{tool.name}</span>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Core Skills</h3>
              <div className="grid gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <Card 
                      key={index} 
                      className="p-6 border-gray-200 hover:border-gray-400 hover:shadow-md transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-gray-900 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors duration-300" />
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