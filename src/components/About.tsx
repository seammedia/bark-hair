import React from 'react';
import { STATS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="team" className="bg-black text-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Text */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-serif">
                <span className="text-neutral-600 block mb-2">02 /</span>
                About Us
              </h3>
              <p className="text-neutral-400 leading-relaxed text-lg max-w-md">
                Bark Hair is a boutique Paddington hair salon with a focus on sustainable luxury.
                Our team of dedicated professionals craft personalized styles that highlight your natural beauty
                while using the world's finest eco-conscious products.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="bg-neutral-900/50 border border-neutral-800 p-10 rounded-[40px] flex justify-between items-center backdrop-blur-sm">
              {STATS.map((stat, idx) => (
                <div key={idx} className={`flex items-baseline space-x-2 ${idx !== STATS.length - 1 ? 'border-r border-neutral-800 pr-8' : ''}`}>
                  <span className="text-3xl md:text-4xl font-serif font-bold">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold max-w-[60px] leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Gallery - Arched Images */}
          <div className="lg:col-span-7 flex flex-wrap gap-4 md:gap-8 justify-end items-end h-full">
             <div className="w-[140px] md:w-[200px] h-[300px] md:h-[400px] overflow-hidden rounded-full transform translate-y-20 border border-neutral-800">
                <img
                  src="https://images.unsplash.com/photo-1620331311520-246422ff83f9?auto=format&fit=crop&q=80&w=800"
                  alt="Salon interior"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
             </div>
             <div className="w-[160px] md:w-[220px] h-[350px] md:h-[500px] overflow-hidden rounded-full border border-neutral-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522337363553-5605d9d78179?auto=format&fit=crop&q=80&w=800"
                  alt="Hair styling"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
             </div>
             <div className="hidden md:block w-[120px] h-[250px] overflow-hidden rounded-full transform -translate-y-12 border border-neutral-800 opacity-50">
                <img
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800"
                  alt="Salon detail"
                  className="w-full h-full object-cover"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
