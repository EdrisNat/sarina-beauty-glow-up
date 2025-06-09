
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Star } from 'lucide-react';

const Hero = () => {
  const handleBooking = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewServices = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      <div className="absolute top-20 left-10 text-white/20">
        <Sparkles className="w-8 h-8 animate-float" />
      </div>
      <div className="absolute bottom-32 right-16 text-white/20">
        <Star className="w-6 h-6 animate-float" style={{ animationDelay: '2s' }} />
      </div>
      <div className="absolute top-1/3 right-10 text-white/20">
        <Sparkles className="w-10 h-10 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Content */}
          <div className="animate-fade-in-up">
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
              SARINA
              <span className="block text-3xl md:text-4xl font-normal text-white/90">
                BEAUTY SALON
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Your destination for premium beauty services. From body waxing to bridal makeovers, 
              we bring out your natural radiance.
            </p>

            {/* Service Highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm md:text-base">
              {['Body Waxing', 'Hair Plaiting', 'Bridal Services', 'Nail Care'].map((service, index) => (
                <span 
                  key={service}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {service}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleBooking}
                size="lg" 
                className="bg-white text-accent hover:bg-white/90 px-8 py-6 text-lg font-semibold hover-glow"
              >
                Book Appointment
              </Button>
              <Button 
                onClick={handleViewServices}
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent px-8 py-6 text-lg font-semibold"
              >
                View Services
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">5+</h3>
              <p className="text-white/80">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">1000+</h3>
              <p className="text-white/80">Happy Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">8</h3>
              <p className="text-white/80">Beauty Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
