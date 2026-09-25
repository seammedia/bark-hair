import React from 'react';
import { ArrowLeft, Check, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HairTattooing: React.FC = () => {
  const faqs = [
    {
      question: 'What is hair tattooing?',
      answer: 'Hair tattooing is precision clipper artistry. We create custom shaved designs - from bold graphics and clean line work to subtle undercuts and detailed artwork. It\'s creative expression, carved into your cut.'
    },
    {
      question: 'How long do hair tattoos last?',
      answer: 'Most designs last around 2-4 weeks, depending on how quickly your hair grows. As it grows, the design naturally softens and fades - making it completely temporary and commitment-free. Change it. Refresh it. Reimagine it.'
    },
    {
      question: 'Can I add colour to my design?',
      answer: 'Absolutely. We can enhance your design with temporary colour for added depth, contrast, or bold impact. It fades naturally as your hair grows out.'
    }
  ];

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
                  Hair Tattooing <span className="italic">(Tracks)</span>
                </h1>
              </div>

              <p className="text-xl text-neutral-600 leading-relaxed">
                Custom shaved designs created with precision and care. From full buzz cuts with graphic detailing and colour, to subtle statement undercuts designed to be seen - or hidden - this service is all about intentional detail and personal expression.
              </p>
              <p className="text-lg text-neutral-500 leading-relaxed">
                Every design is tailored to suit your style, features, and vision, with a focus on clean execution and sharp finish.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock size={16} className="text-bark-copper" />
                  <span className="text-sm font-medium">15 minutes</span>
                </div>
                <div className="flex items-center gap-2 bg-bark-copper/10 border border-bark-copper/30 px-4 py-2 rounded-full">
                  <Zap size={16} className="text-bark-copper" />
                  <span className="text-sm font-bold text-bark-copper">Easy Add-On</span>
                </div>
              </div>

              <a href="https://apps.kitomba.com/bookings/barkhair" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl hover:-translate-y-1">
                Book Now
              </a>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-bark-cream/50 rounded-[60px] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-serif italic text-bark-copper/30">Tracks</span>
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
              <h3 className="text-2xl font-serif text-neutral-900">The Vision</h3>
              <p className="text-neutral-500 leading-relaxed">
                It starts with a conversation. We sit down, talk through your ideas, scroll reference images, and map out a design that feels uniquely you. Placement, size, flow - we make sure it works perfectly with your haircut and personal style.
              </p>
              <p className="text-neutral-500 leading-relaxed">
                Ally can create just about any pattern or picture you can imagine - from delicate flowers to detailed spaceships, bold graphics to fine-line artwork. If you can dream it, she can carve it. Very cool, always custom, always precise.
              </p>
            </div>

            <div className="bg-bark-purple/20 p-10 rounded-[40px] space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-serif italic text-bark-copper">02</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900">The Craft</h3>
              <p className="text-neutral-500 leading-relaxed">
                This is where precision meets creativity. Using expert clipper work and a steady hand, your stylist brings the design to life with sharp lines, clean detail, and intentional movement. Every cut is considered. Every line has purpose.
              </p>
            </div>

            <div className="bg-bark-cream/50 p-10 rounded-[40px] space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-serif italic text-bark-copper">03</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900">The Finish</h3>
              <p className="text-neutral-500 leading-relaxed">
                Want to level it up? We can add colour to make your design stand out even more. Then we refine, sharpen, and perfect the final look - making sure you leave with something bold, clean, and unmistakably you.
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
                  Express <span className="italic">yourself</span>
                </h2>
              </div>

              <ul className="space-y-4">
                {[
                  'Easy add-on to any barbering service - just 15 minutes',
                  'Skilled, precision clipper work',
                  'Temporary and commitment-free',
                  'Optional colour enhancement',
                  'Hidden or visible placement options',
                  'Creative collaboration with your stylist'
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
                  <span className="text-5xl font-serif italic text-bark-copper/20">Creative</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-bark-pink/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-bark-copper">Questions</span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">Frequently Asked</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="text-xl font-serif text-neutral-900 mb-3">{faq.question}</h3>
                <p className="text-neutral-500 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-bark-purple/30">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 italic">
            Ready to make a statement?
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Book your appointment and let's create something bold.
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

export default HairTattooing;
