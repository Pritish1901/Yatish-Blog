import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Mail, Phone } from 'lucide-react';
import { Card } from './ui/card';

const Contact = () => {
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
    <section ref={sectionRef} id="contact" className="py-24 bg-gradient-to-b from-white via-slate-50 to-stone-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-50 to-transparent rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-gray-900 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            Let's Work Together
          </h2>
          <p className={`text-lg text-gray-600 mb-12 transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Have a project in mind? I'd love to hear about it.
          </p>

          <Card className={`p-8 md:p-12 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="mailto:kapilayatish@gmail.com"
                className="block group"
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full h-auto p-6 flex-col gap-3 border-gray-300 hover:border-gray-900 hover:bg-gray-50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
                >
                  <Mail className="w-8 h-8 text-gray-900 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <div className="text-base font-semibold text-gray-900">kapilayatish@gmail.com</div>
                  </div>
                </Button>
              </a>

              <a 
                href="tel:+918007895556"
                className="block group"
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full h-auto p-6 flex-col gap-3 border-gray-300 hover:border-gray-900 hover:bg-gray-50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
                >
                  <Phone className="w-8 h-8 text-gray-900 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Phone</div>
                    <div className="text-base font-semibold text-gray-900">+91 8007895556</div>
                  </div>
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;