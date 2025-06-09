
import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">SARINA</h3>
                <p className="text-xs text-white/70">BEAUTY SALON</p>
              </div>
            </div>
            <p className="text-white/80 text-sm">
              Your premier destination for professional beauty services in Nsambya. 
              We bring out your natural radiance with expert care.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                'Body Waxing',
                'Hair Weaving',
                'Hair Retouch',
                'Bridal Services',
                'Hair Plaiting',
                'Hair Treatment',
                'Braiding',
                'Nail Services'
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/70 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Location', href: '#location' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary" />
                <div>
                  <p className="text-white/90">Nsambya - Ggaba Road</p>
                  <p className="text-white/70">Shop No. 32, 33 & 34</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-secondary" />
                <p className="text-white/90">Call for appointments</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-0.5 text-secondary" />
                <div>
                  <p className="text-white/90">Mon - Sat: 8:00 AM - 7:00 PM</p>
                  <p className="text-white/70">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/70 text-sm flex items-center justify-center">
            © 2024 Sarina Beauty Salon. Made with 
            <Heart className="w-4 h-4 mx-1 text-secondary" />
            for beautiful you.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
