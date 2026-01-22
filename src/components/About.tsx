import React from 'react';
import { STATS } from '../constants';

const About: React.FC = () => {
  return (
    <>
      {/* About Us Section */}
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
                  At Bark Hair, we are a boutique salon passionate about crafting beautiful, effortless hairstyles and delivering a truly luxurious experience for every client. Renowned for our innovative and fresh approach to colour and styling, we continually stay ahead of industry trends and techniques.
                </p>
                <p className="text-neutral-400 leading-relaxed text-lg max-w-md">
                  Our carefully selected team is not only highly skilled but also deeply passionate about hair. We guarantee you will leave Bark Hair looking and feeling exceptional, with a salon committed to a healthier planet.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="bg-neutral-900/50 border border-neutral-800 p-8 md:p-10 rounded-[40px] flex flex-wrap justify-between items-center gap-6 backdrop-blur-sm">
                {STATS.map((stat, idx) => (
                  <div key={idx} className={`flex items-baseline space-x-2 ${idx !== STATS.length - 1 ? 'md:border-r border-neutral-800 md:pr-6' : ''}`}>
                    <span className="text-2xl md:text-3xl font-serif font-bold">{stat.value}</span>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold max-w-[70px] leading-tight">
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
                    src="/img/salon-styling.png"
                    alt="Salon styling"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
               </div>
               <div className="w-[160px] md:w-[220px] h-[350px] md:h-[500px] overflow-hidden rounded-full border border-neutral-800 shadow-2xl">
                  <img
                    src="/img/client-stylist.png"
                    alt="Client and stylist"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
               </div>
               <div className="hidden md:block w-[120px] h-[250px] overflow-hidden rounded-full transform -translate-y-12 border border-neutral-800 opacity-50">
                  <img
                    src="/img/hair-dryer.png"
                    alt="Hair treatment"
                    className="w-full h-full object-cover"
                  />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sustainable Salon Section */}
      <section id="about" className="py-24 md:py-32 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-serif italic text-neutral-900 mb-16">
            Sustainable Salon
          </h2>

          <div className="space-y-10 text-neutral-500 text-lg md:text-xl leading-relaxed">
            <p className="italic">We Recycle up to 95% of our salons waste.</p>

            <p>
              <span className="font-bold not-italic text-neutral-900">Hair Booms</span>
              <span className="italic"> - Hair under 20cm creates Hair booms which soak up oil spills.</span>
            </p>

            <p>
              <span className="font-bold not-italic text-neutral-900">Plastic</span>
              <span className="italic"> - We recycle ALL 7 types of plastic in Australia and turn it back into long term plastic, even Glasses Frames!</span>
            </p>

            <p>
              <span className="font-bold not-italic text-neutral-900">Ponytails</span>
              <span className="italic"> - Sustainable Salons and our members are the largest donator of medical wigs in the Southern Hemisphere!! 80,000 Ponytails donated to date, to help people suffering from hair loss due to cancer treatment and Alopecia.</span>
            </p>

            <p className="italic pt-4">There will be a fee of $3 per visit!</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
