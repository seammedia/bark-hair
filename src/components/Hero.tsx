import React from 'react';

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
            <span className="text-bark-copper italic">creativity</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
            <a href="https://apps.kitomba.com/bookings/barkhair" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl hover:-translate-y-1 text-center">
              Book Now
            </a>
            <a href="https://www.instagram.com/bark_hair/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <span className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1 group-hover:text-bark-copper group-hover:border-bark-copper transition-colors">
                See our work
              </span>
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="lg:col-span-6 relative flex justify-center items-end h-full">
          {/* Abstract Circle Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-bark-cream/50 rounded-full blur-3xl -z-10"></div>

          <div className="relative w-full">
            {/* Team image container */}
            <div className="aspect-[4/3] bg-neutral-200 overflow-hidden shadow-2xl relative rounded-[40px]">
              <img
                src="/img/team-hero.jpg"
                alt="Bark Hair Team"
                className="absolute inset-0 w-full h-full object-cover object-center"
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
