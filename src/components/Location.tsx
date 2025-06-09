
import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-accent mb-4">
            Visit Our Salon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conveniently located in Nsambya along Ggaba Road. Easy to find and accessible 
            with ample parking space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location Info */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-6 hover-glow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-accent text-lg mb-2">Our Address</h3>
                  <p className="text-muted-foreground">
                    Nsambya - Ggaba Road<br />
                    Shop No. 32, 33 & 34<br />
                    Kampala, Uganda
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover-glow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-accent text-lg mb-2">Opening Hours</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Monday - Saturday: 8:00 AM - 7:00 PM</p>
                    <p>Sunday: 10:00 AM - 6:00 PM</p>
                    <p className="text-primary font-medium">Walk-ins welcome!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover-glow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-accent text-lg mb-2">Contact Info</h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">Call us to book your appointment</p>
                    <Button variant="outline" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-6 text-white">
              <h3 className="font-semibold text-lg mb-2">Easy to Find</h3>
              <p className="text-white/90 mb-4">
                Look for our distinctive purple and orange signage along Ggaba Road. 
                We're situated in a busy commercial area with plenty of landmarks.
              </p>
              <Button variant="secondary" className="bg-white text-accent hover:bg-white/90">
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-accent text-xl mb-2">Find Us Here</h3>
                <p className="text-muted-foreground mb-6">
                  Interactive map showing our exact location on Ggaba Road
                </p>
                <Button className="gradient-bg text-white">
                  Open in Maps
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-semibold text-accent mb-2">Parking Available</h3>
            <p className="text-muted-foreground">Convenient parking space for all our customers</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-accent mb-2">Public Transport</h3>
            <p className="text-muted-foreground">Easily accessible by taxi and boda boda</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-accent mb-2">Safe Environment</h3>
            <p className="text-muted-foreground">Secure and well-maintained premises</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
