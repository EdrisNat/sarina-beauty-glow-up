
import React from 'react';
import { Scissors, Crown, Sparkles, Hand, Brush, Heart, Star, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const handleBooking = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Hand,
      title: 'Body Waxing',
      description: 'Professional full-body waxing services for smooth, silky skin that lasts.',
      price: 'Starting from 50k',
      features: ['Full Body', 'Bikini Wax', 'Facial Hair', 'Underarm']
    },
    {
      icon: Scissors,
      title: 'Hair Weaving',
      description: 'Premium hair weaving services with high-quality extensions and expert styling.',
      price: 'Starting from 150k',
      features: ['Brazilian Hair', 'Peruvian Hair', 'Malaysian Hair', 'Closure Install']
    },
    {
      icon: Brush,
      title: 'Hair Retouch',
      description: 'Maintain your perfect look with professional hair retouch services.',
      price: 'Starting from 80k',
      features: ['Root Touch-up', 'Color Refresh', 'Style Maintenance', 'Treatment']
    },
    {
      icon: Crown,
      title: 'Bridal Services',
      description: 'Complete bridal makeover packages for your special day.',
      price: 'Starting from 300k',
      features: ['Bridal Makeup', 'Hair Styling', 'Manicure', 'Trial Session']
    },
    {
      icon: Star,
      title: 'Hair Plaiting',
      description: 'Beautiful traditional and modern braiding styles for every occasion.',
      price: 'Starting from 40k',
      features: ['Box Braids', 'Cornrows', 'Twists', 'Ghana Weaving']
    },
    {
      icon: Heart,
      title: 'Hair Treatment',
      description: 'Restorative treatments to repair and nourish damaged hair.',
      price: 'Starting from 60k',
      features: ['Deep Conditioning', 'Protein Treatment', 'Scalp Care', 'Hot Oil']
    },
    {
      icon: Sparkles,
      title: 'Braiding',
      description: 'Expert braiding services with creative patterns and styles.',
      price: 'Starting from 35k',
      features: ['French Braids', 'Dutch Braids', 'Fish Tail', 'Crown Braids']
    },
    {
      icon: Gem,
      title: 'Nail Services',
      description: 'Professional manicure and pedicure services for perfect nails.',
      price: 'Starting from 25k',
      features: ['Manicure', 'Pedicure', 'Gel Polish', 'Nail Art']
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-accent mb-4">
            Our Beauty Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of beauty services designed to enhance 
            your natural beauty and boost your confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="service-card group hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-accent mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-primary font-bold text-lg">
                  {service.price}
                </div>
                
                <ul className="space-y-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={handleBooking}
                  className="w-full mt-4 gradient-bg text-white hover:opacity-90"
                  size="sm"
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-card border border-border rounded-lg p-6">
            <h3 className="font-heading text-2xl font-semibold text-accent mb-2">
              Need a Custom Package?
            </h3>
            <p className="text-muted-foreground mb-4">
              Contact us for personalized beauty packages tailored to your needs.
            </p>
            <Button onClick={handleBooking} className="gradient-bg text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
