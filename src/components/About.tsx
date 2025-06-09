
import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Expert Professionals',
      description: 'Our skilled beauticians are trained in the latest techniques and trends.'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Every service is tailored to meet your unique beauty needs and preferences.'
    },
    {
      icon: Clock,
      title: 'Convenient Hours',
      description: 'Flexible scheduling to fit your busy lifestyle and commitments.'
    },
    {
      icon: Heart,
      title: 'Premium Quality',
      description: 'We use only the finest products and maintain the highest standards.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-accent mb-6">
              About Sarina Beauty Salon
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Located in the heart of Nsambya along Ggaba Road, Sarina Beauty Salon has been 
              the premier destination for beauty services in the area. Our spacious salon spans 
              across three shops (32, 33 & 34) to provide you with a comfortable and luxurious 
              beauty experience.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We specialize in a comprehensive range of beauty services, from traditional hair 
              braiding to modern bridal makeovers. Our team of experienced professionals is 
              dedicated to enhancing your natural beauty while ensuring you feel pampered and relaxed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex items-start space-x-3">
                  <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual Section */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-3xl">S</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-accent mb-4">
                  Excellence in Beauty
                </h3>
                <p className="text-muted-foreground">
                  Where professional expertise meets personalized care
                </p>
                
                {/* Decorative Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-secondary">1000+</div>
                    <div className="text-sm text-muted-foreground">Clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
