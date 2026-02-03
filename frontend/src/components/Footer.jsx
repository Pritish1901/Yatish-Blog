import React from 'react';
import { Linkedin, Github, Dribbble, Behance } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Behance, url: 'https://www.behance.net/yatishkapila', label: 'Behance' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: Dribbble, url: '#', label: 'Dribbble' },
    { icon: Github, url: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Yatish Kapila</h3>
              <p className="text-gray-400">Product and UI/UX Designer</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© {currentYear} Yatish Kapila. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;