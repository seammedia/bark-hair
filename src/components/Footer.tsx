import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 pb-20 border-b border-neutral-100">

          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-4xl font-serif font-bold">bark hair</h2>
            <p className="text-neutral-500 max-w-sm text-lg leading-relaxed">
              Crafting conscious beauty in the heart of Acton. Join us for a unique styling experience that respects your hair and the planet.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/bark_hair/?hl=en" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/BarkHair" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-900">Visit Us</h4>
            <ul className="space-y-4 text-neutral-500">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-rose-400 shrink-0" />
                <span>Carpark, Kingsley St, <br />Acton ACT 2610</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-rose-400 shrink-0" />
                <span>0433 414 463</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-rose-400 shrink-0" />
                <span>hello@barkhair.com.au</span>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-900">Hours</h4>
            <ul className="space-y-2 text-neutral-500">
              <li className="flex justify-between"><span>Mon</span> <span className="font-medium text-neutral-900">We Rest</span></li>
              <li className="flex justify-between"><span>Tue</span> <span className="font-medium text-neutral-900">10am - 8pm</span></li>
              <li className="flex justify-between"><span>Wed</span> <span className="font-medium text-neutral-900">10am - 8pm</span></li>
              <li className="flex justify-between"><span>Thu</span> <span className="font-medium text-neutral-900">10am - 8:30pm</span></li>
              <li className="flex justify-between"><span>Fri</span> <span className="font-medium text-neutral-900">9am - 5pm</span></li>
              <li className="flex justify-between"><span>Sat</span> <span className="font-medium text-neutral-900">8:30am - 1:30pm</span></li>
              <li className="flex justify-between"><span>Sun</span> <span className="font-medium text-neutral-900">We Rest</span></li>
            </ul>
          </div>

        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-400">
          <p>&copy; 2024 Bark Hair Salon. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
