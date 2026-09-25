import React from 'react';
import { ArrowLeft, Check, Clock, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Nanoplasty: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-bark-pink overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-bark-purple/20 rounded-bl-[200px] -z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-bark-copper hover:text-bark-copper/70 transition-colors mb-8">
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-sm font-bold tracking-[0.3em] uppercase text-bark-copper">Our Services</span>
                <h1 className="text-5xl md:text-6xl font-serif text-neutral-900 leading-tight">
                  Nano<span className="italic">plasty</span>
                </h1>
              </div>

              <p className="text-xl text-neutral-600 leading-relaxed">
                A next-generation smoothing treatment designed for long-lasting frizz control and radiant shine. Nanoplasty works to smooth and soften the hair while enhancing strength, manageability and overall condition.
              </p>
              <p className="text-lg text-neutral-500 leading-relaxed">
                Ideal for frizz-prone, unruly or hard-to-manage hair, this treatment delivers a natural, smooth, polished finish without compromising movement. Formulated without harsh straightening chemicals, it offers a gentler approach to smoothing, leaving hair glossy, healthy-looking and easier to style day after day.
              </p>
              <p className="text-base text-neutral-500 leading-relaxed">
                Bark Hair is one of the first salons in Canberra to train in and offer Nanoplasty - no more having to leave the ACT and travel interstate for this treatment.
              </p>
              <p className="text-base text-neutral-400 italic">
                Effortless smoothness. Elevated results.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock size={16} className="text-bark-copper" />
                  <span className="text-sm font-medium">3-4 hours</span>
                </div>
              </div>

              <a href="https://apps.kitomba.com/bookings/barkhair" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl hover:-translate-y-1">
                Book Now
              </a>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-bark-cream/50 rounded-[60px] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-serif italic text-bark-copper/30">Smooth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-bark-copper">The Process</span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">What to Expect</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bark-pink/30 p-10 rounded-[40px] space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-serif italic text-bark-copper">01</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900">Preparation</h3>
              <p className="text-neutral-500 leading-relaxed">
                We begin by thoroughly cleansing the hair with a clarifying shampoo to remove product build-up and impurities. This gently opens the cuticle, creating the ideal foundation for the treatment to penetrate effectively.
              </p>
            </div>

            <div className="bg-bark-purple/20 p-10 rounded-[40px] space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-serif italic text-bark-copper">02</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900">Application</h3>
              <p className="text-neutral-500 leading-relaxed">
                Your Nanoplasty formula is carefully applied section by section to ensure complete, even saturation. The hair is then processed and sealed with controlled heat, allowing the smoothing ingredients to bond within the hair structure for long-lasting results.
              </p>
            </div>

            <div className="bg-bark-cream/50 p-10 rounded-[40px] space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-serif italic text-bark-copper">03</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900">Finishing</h3>
              <p className="text-neutral-500 leading-relaxed">
                Once complete, the hair is rinsed, dried and styled to reveal the transformation. Expect immediately smoother, shinier, more manageable hair with significantly reduced frizz and enhanced softness. Beautiful, naturally looking straight hair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-bark-cream/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-sm font-bold tracking-[0.3em] uppercase text-bark-copper">Why Bark Hair</span>
                <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
                  Smooth without <span className="italic">compromise</span>
                </h2>
              </div>

              <ul className="space-y-4">
                {[
                  'Smooth results without compromise',
                  'Organic, formaldehyde-free formula',
                  'Long-lasting frizz control',
                  'Noticeable shine and silky softness',
                  'Suitable for most hair types and textures',
                  'Can last up to 8-12 months'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-bark-purple/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-bark-copper" />
                    </div>
                    <span className="text-neutral-600 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-square bg-bark-pink rounded-[60px] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-serif italic text-bark-copper/20">Shine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Consultation for Questions */}
      <section className="py-24 bg-bark-pink/30">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-4">
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-bark-copper">Questions</span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">Have Questions?</h2>
          </div>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Every hair type is different, and we want to make sure Nanoplasty is the right fit for you. Book a consultation and we'll assess your hair, answer your questions, and create a personalised plan.
          </p>
          <a href="https://apps.kitomba.com/bookings/barkhair" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-neutral-900 px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-100 transition-all shadow-xl hover:-translate-y-1">
            <MessageCircle size={18} />
            Book a Consultation
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-bark-purple/30">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 italic">
            Ready for smooth, healthy hair?
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Book a Nanoplasty treatment and say goodbye to frizz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://apps.kitomba.com/bookings/barkhair" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl hover:-translate-y-1">
              Book Now
            </a>
            <Link to="/" className="bg-white text-neutral-900 px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-100 transition-all shadow-xl hover:-translate-y-1">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link to="/" className="inline-block">
            <img src="/img/bark-hair-wordmark.png" alt="Bark Hair" className="h-9 md:h-12 mx-auto" />
          </Link>
          <p className="text-sm text-neutral-400 mt-4">
            &copy; {new Date().getFullYear()} Bark Hair. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Nanoplasty;
