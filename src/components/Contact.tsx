
import React from 'react';
import { Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-accent mb-4">
            Book Your Appointment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your look? Get in touch with us to schedule your beauty session 
            or ask any questions about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="font-heading text-2xl font-semibold text-accent mb-6">
              Send us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-accent mb-2 block">First Name</label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-accent mb-2 block">Last Name</label>
                  <Input placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-accent mb-2 block">Phone Number</label>
                <Input placeholder="Your phone number" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-accent mb-2 block">Email (Optional)</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-accent mb-2 block">Service Interested In</label>
                <select className="w-full p-3 border border-input rounded-md bg-background">
                  <option>Select a service</option>
                  <option>Body Waxing</option>
                  <option>Hair Weaving</option>
                  <option>Hair Retouch</option>
                  <option>Bridal Services</option>
                  <option>Hair Plaiting</option>
                  <option>Hair Treatment</option>
                  <option>Braiding</option>
                  <option>Nail Services</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-accent mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your preferred date, time, or any special requirements..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full gradient-bg text-white text-lg py-6">
                Book Appointment
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white">
              <h3 className="font-heading text-2xl font-semibold mb-6">
                Get in Touch
              </h3>
              <p className="text-white/90 mb-8">
                We're here to help you look and feel your best. Contact us through any 
                of these convenient methods.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-white/80">Available during business hours</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-white/80">Quick responses guaranteed</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Walk-ins Welcome</p>
                    <p className="text-white/80">Monday - Sunday</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-accent text-lg mb-4">Why Choose Sarina?</h4>
              <ul className="space-y-3">
                {[
                  'Professional and experienced staff',
                  'High-quality products and equipment',
                  'Hygienic and comfortable environment',
                  'Competitive and transparent pricing',
                  'Flexible appointment scheduling',
                  'Customer satisfaction guarantee'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <h4 className="font-semibold text-accent text-lg mb-2">Emergency Bookings</h4>
              <p className="text-muted-foreground mb-4">
                Need an urgent appointment? Call us directly and we'll do our best 
                to accommodate your needs.
              </p>
              <Button variant="outline" className="w-full">
                <Phone className="w-4 h-4 mr-2" />
                Call for Emergency Booking
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
