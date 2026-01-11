import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Twitter, Linkedin, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Cloud className="w-6 h-6 text-primary-500" />
              <span className="text-2xl font-bold text-white">Gloria Cloud</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              We craft exceptional digital experiences that merge beauty with functionality. Helping brands soar above the competition.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
              <li><span className="hover:text-primary-400 transition-colors cursor-pointer">Privacy Policy</span></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li className="hover:text-primary-400 transition-colors cursor-pointer">Web Design</li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">Brand Identity</li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">SEO Optimization</li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">Cloud Hosting</li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">Maintenance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-1" />
                <span>123 Innovation Dr, Tech Valley, CA 94043</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <a href="mailto:hello@gloriacloud.com" className="hover:text-white transition-colors">hello@gloriacloud.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Gloria Cloud Digital Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;