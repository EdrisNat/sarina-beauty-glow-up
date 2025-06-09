
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Camera, Star, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Gallery = () => {
  const galleryImages = [
    {
      category: 'Hair Styling',
      images: [
        { id: 1, alt: 'Beautiful braided hairstyle' },
        { id: 2, alt: 'Professional hair weaving' },
        { id: 3, alt: 'Elegant bridal hairstyle' },
        { id: 4, alt: 'Creative hair plaiting' }
      ]
    },
    {
      category: 'Bridal Services',
      images: [
        { id: 5, alt: 'Stunning bridal makeup' },
        { id: 6, alt: 'Complete bridal transformation' },
        { id: 7, alt: 'Bridal hair and makeup combo' },
        { id: 8, alt: 'Wedding day perfection' }
      ]
    },
    {
      category: 'Nail Art',
      images: [
        { id: 9, alt: 'Artistic nail designs' },
        { id: 10, alt: 'Elegant manicure' },
        { id: 11, alt: 'Creative nail art' },
        { id: 12, alt: 'Perfect pedicure' }
      ]
    },
    {
      category: 'Body Care',
      images: [
        { id: 13, alt: 'Professional waxing results' },
        { id: 14, alt: 'Smooth skin treatment' },
        { id: 15, alt: 'Body care services' },
        { id: 16, alt: 'Beauty treatments' }
      ]
    }
  ];

  const handleBooking = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Camera className="w-12 h-12 mr-4" />
              <h1 className="font-heading text-5xl md:text-6xl font-bold">
                Our Gallery
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Discover the artistry and excellence of Sarina Beauty Salon through our 
              stunning portfolio of transformations and beauty services.
            </p>
            <Button 
              onClick={() => window.location.href = '/'}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-accent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {galleryImages.map((category, categoryIndex) => (
            <div key={category.category} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent mb-4">
                  {category.category}
                </h2>
                <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.images.map((image, imageIndex) => (
                  <div 
                    key={image.id}
                    className="group relative aspect-square overflow-hidden rounded-lg bg-muted hover-glow cursor-pointer"
                    style={{ animationDelay: `${imageIndex * 0.1}s` }}
                  >
                    {/* Placeholder for actual images */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center">
                        <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">{image.alt}</p>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm font-medium">{image.alt}</p>
                        <div className="flex items-center mt-2">
                          <Star className="w-4 h-4 text-secondary mr-1" />
                          <span className="text-white/80 text-xs">Sarina Beauty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center bg-card border border-border rounded-2xl p-12 max-w-4xl mx-auto">
            <Heart className="w-16 h-16 gradient-bg rounded-full p-4 text-white mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent mb-4">
              Ready for Your Transformation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have experienced the magic of Sarina Beauty Salon. 
              Book your appointment today and let us bring out your natural beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleBooking}
                size="lg"
                className="gradient-bg text-white px-8 py-6 text-lg font-semibold"
              >
                Book Your Appointment
              </Button>
              <Button 
                onClick={() => window.location.href = '/#services'}
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg font-semibold"
              >
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
