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
    <section ref={sectionRef} id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-20 left-20 w-96 h-96 bg-accent/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-foreground transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            Let's Work Together
          </h2>
          <p className={`text-lg text-muted-foreground mb-12 transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Have a project in mind? I'd love to hear about it.
          </p>

          <Card className={`p-8 md:p-12 border-border shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
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
                  className="w-full h-auto p-6 flex-col gap-3 border-border hover:border-accent hover:bg-muted transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
                >
                  <Mail className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <div className="text-base font-semibold text-foreground">kapilayatish@gmail.com</div>
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
                  className="w-full h-auto p-6 flex-col gap-3 border-border hover:border-accent hover:bg-muted transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
                >
                  <Phone className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Phone</div>
                    <div className="text-base font-semibold text-foreground">+91 8007895556</div>
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
