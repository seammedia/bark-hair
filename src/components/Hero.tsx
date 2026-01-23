import React from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden soft-gradient">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
        {/* Content Column */}
        <div className="lg:col-span-6 space-y-8 z-10">
          <div className="flex items-center space-x-4">
            <div className="h-[2px] w-16 bg-black"></div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
              Acton, Canberra
            </span>
          </div>

          <h2 className="text-6xl md:text-8xl font-serif leading-[1.1] text-neutral-900">
            Where <span className="italic">care</span> <br />
            meets <br />
            <span className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]">creativity</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
            <a href="https://phorest.com/book/salons/barkhairptyltd" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl hover:-translate-y-1 text-center">
              Book Now
            </a>
            <button className="flex items-center space-x-4 group">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play fill="black" size={20} className="ml-1" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1 group-hover:text-rose-500 group-hover:border-rose-500 transition-colors">
                See the workflow
              </span>
            </button>
          </div>
        </div>

        {/* Image Column */}
        <div className="lg:col-span-6 relative flex justify-center items-end h-full">
          {/* Abstract Circle Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-rose-100/50 rounded-full blur-3xl -z-10"></div>

          <div className="relative w-full max-w-lg">
            {/* Arched image container */}
            <div className="arch-mask aspect-[4/5] bg-neutral-200 overflow-hidden shadow-2xl relative">
              <img
                src="/img/Bark HAir.avif"
                alt="Bark Hair Salon"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Detail Card */}
            <div className="absolute -bottom-8 -left-8 md:-left-12 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50">
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-400 mb-1">Eco-friendly</p>
              <p className="text-xl font-serif font-bold text-neutral-900 leading-tight">Sustainable <br />Salon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
