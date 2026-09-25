import React from 'react';
import { ArrowLeft, Check, Clock, MessageCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Perm: React.FC = () => {
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
                  <span className="italic">Perm</span>
                </h1>
              </div>

              <p className="text-xl text-neutral-600 leading-relaxed">
                Modern texture, redefined. Our contemporary perm techniques are designed to create natural-looking waves and curls with movement and softness. Whether you're after effortless beachy texture, loose lived-in bends or more defined, structured curls, we tailor the shape and finish to suit your features and lifestyle.
              </p>
              <p className="text-lg text-neutral-500 leading-relaxed">
                Every perm is customised to complement your haircut, face shape and desired level of volume - ensuring the result feels current, wearable and uniquely yours.
              </p>
              <p className="text-base text-neutral-400 italic">
                Texture with intention.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock size={16} className="text-bark-copper" />
                  <span className="text-sm font-medium">2-3 hours</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Sparkles size={16} className="text-bark-copper" />
                  <span className="text-sm font-medium">Consultation Required</span>
                </div>
              </div>

              <a href="https://apps.kitomba.com/bookings/barkhair" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl hover:-translate-y-1">
                Book a Consultation
              </a>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-bark-cream/50 rounded-[60px] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-serif italic text-bark-copper/30">Curls</span>
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
              <h3 className="text-2xl font-serif text-neutral-900">Consultation</h3>
              <p className="text-neutral-500 leading-relaxed">
                We begin with an in-depth consultation to understand the type of curl or wave you're envisioning. We assess your hair's condition, density and history, then determine the ideal rod size, technique and structure to achieve a modern, wearable result.
              </p>
            </div>

            <div className="bg-bark-purple/20 p-10 rounded-[40px] space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-serif italic text-bark-copper">02</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900">Custom Wrapping & Setting</h3>
              <p className="text-neutral-500 leading-relaxed">
                Your hair is carefully wrapped using a technique tailored to your desired texture - whether that's soft beachy movement or more defined curls. The perm solution is then applied and processed, followed by neutralising to set the new shape securely and evenly.
              </p>
            </div>

            <div className="bg-bark-cream/50 p-10 rounded-[40px] space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-serif italic text-bark-copper">03</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900">Refine & Style</h3>
              <p className="text-neutral-500 leading-relaxed">
                Once complete, your curls are gently rinsed and styled to reveal the final result. We'll guide you through styling techniques and recommend products to help enhance definition, reduce frizz and maintain long-term curl health.
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
                  Modern curls, <span className="italic">naturally</span>
                </h2>
              </div>

              <ul className="space-y-4">
                {[
                  'Modern, wearable perm techniques',
                  'Custom curl design tailored to your features',
                  'Focus on maintaining hair health and integrity',
                  'From soft texture to defined curls',
                  'Detailed styling and maintenance guidance included',
                  'Experienced stylists trained in contemporary perm methods'
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
                  <span className="text-5xl font-serif italic text-bark-copper/20">Waves</span>
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
            Perms are personal, and we want to make sure you get the perfect result. Book a consultation and we'll assess your hair, discuss your curl goals, and create a plan tailored to you.
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
            Ready for effortless curls?
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Book your perm appointment and discover your perfect wave.
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

export default Perm;
