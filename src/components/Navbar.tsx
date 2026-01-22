import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bark-pink/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav Links Left */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.slice(0, 3).map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium hover:text-rose-400 transition-colors uppercase tracking-widest">
              {item.label}
            </a>
          ))}
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-3xl font-serif font-bold tracking-tighter">bark hair</h1>
        </div>

        {/* Desktop Nav Links Right + Book Now */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-8 mr-8">
            {NAV_ITEMS.slice(3).map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium hover:text-rose-400 transition-colors uppercase tracking-widest">
                {item.label}
              </a>
            ))}
          </div>
          <a href="https://phorest.com/book/salons/barkhairptyltd" target="_blank" rel="noopener noreferrer" className="bg-black text-white text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-full hover:bg-neutral-800 transition-all transform hover:scale-105">
            Book Now
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t p-6 shadow-xl animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium tracking-widest text-center"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
