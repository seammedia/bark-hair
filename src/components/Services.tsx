import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
             <span className="text-sm font-bold tracking-[0.3em] uppercase text-rose-400">Our Curated Menu</span>
             <h2 className="text-5xl font-serif text-neutral-900">Expert Services</h2>
          </div>
          <p className="max-w-md text-neutral-500 text-lg leading-relaxed">
            Elevate your hair game with our premium techniques. We specialize in lived-in color, precision cutting, and high-performance treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-white p-10 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:-translate-y-2">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-colors">
                <span className="text-lg font-serif italic">{service.id}</span>
              </div>
              <h4 className="text-2xl font-serif mb-4 text-neutral-900">{service.title}</h4>
              <p className="text-neutral-500 mb-8 leading-relaxed">{service.description}</p>
              <div className="flex justify-between items-center pt-6 border-t border-neutral-50">
                <span className="text-sm font-bold tracking-widest uppercase text-neutral-900">{service.price}</span>
                <a href="https://phorest.com/book/salons/barkhairptyltd" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-neutral-50 group-hover:bg-rose-400 group-hover:text-white transition-all">
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
