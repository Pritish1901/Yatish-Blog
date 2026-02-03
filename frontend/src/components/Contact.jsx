import React from 'react';
import { Button } from './ui/button';
import { Mail, Phone } from 'lucide-react';
import { Card } from './ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Have a project in mind? I'd love to hear about it.
          </p>

          <Card className="p-8 md:p-12 border-gray-200 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="mailto:kapilayatish@gmail.com"
                className="block"
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full h-auto p-6 flex-col gap-3 border-gray-300 hover:border-gray-900 hover:bg-gray-50 transition-all duration-300"
                >
                  <Mail className="w-8 h-8 text-gray-900" />
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <div className="text-base font-semibold text-gray-900">kapilayatish@gmail.com</div>
                  </div>
                </Button>
              </a>

              <a 
                href="tel:+918007895556"
                className="block"
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full h-auto p-6 flex-col gap-3 border-gray-300 hover:border-gray-900 hover:bg-gray-50 transition-all duration-300"
                >
                  <Phone className="w-8 h-8 text-gray-900" />
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