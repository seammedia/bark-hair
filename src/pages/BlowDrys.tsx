import React from 'react';
import { ArrowLeft, Check, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlowDrys: React.FC = () => {
  const faqs = [
    {
      question: 'How long does a blow dry appointment take?',
      answer: 'Most blow dry appointments take between 30-45 minutes, depending on your hair length, thickness, and the style you\'re after. We take the time needed to ensure a polished, long-lasting finish.'
    },
    {
      question: 'Should I wash my hair before coming in?',
      answer: 'There\'s no need. Your blow dry includes a relaxing shampoo and condition, so simply arrive as you are.'
    },
    {
      question: 'How long will my blow dry last?',
      answer: 'With the right care, your style can last two to three days or longer. We\'ll share simple tips for maintaining your look, including how to sleep on it and refresh it between days.'
    },
    {
      question: 'Can I request a specific style?',
      answer: 'Of course. Whether you prefer sleek and smooth, soft volume, defined curls, or effortless waves, we\'ll tailor the finish to suit you. Feel free to bring reference images, or we can create something together.'
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
                  Blow <span className="italic">Drys</span>
                </h1>
              </div>

              <p className="text-xl text-neutral-600 leading-relaxed">
                Enjoy a professional blow dry and style that leaves your hair feeling fresh, polished, and ready for anything. Perfect for events or simply treating yourself.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock size={16} className="text-bark-copper" />
                  <span className="text-sm font-medium">30-45 minutes</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <DollarSign size={16} className="text-bark-copper" />
                  <span className="text-sm font-medium">From $55</span>
                </div>
              </div>

              <a href="https://apps.kitomba.com/bookings/barkhair" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl hover:-translate-y-1">
                Book Now
              </a>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-bark-cream/50 rounded-[60px] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-serif italic text-bark-copper/30">Blow Dry</span>
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
                We begin with a considered conversation about the look you want to achieve. Whether it's for a special occasion or everyday polish, we listen to your needs and plan a style that suits you.
              </p>
            </div>

            <div className="bg-bark-purple/20 p-10 rounded-[40px] space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-serif italic text-bark-copper">02</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900">Wash & Prep</h3>
              <p className="text-neutral-500 leading-relaxed">
                Relax with a shampoo and conditioning ritual using Kevin Murphy products. Your hair is then prepped with the right products to support your desired finish.
              </p>
            </div>

            <div className="bg-bark-cream/50 p-10 rounded-[40px] space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-serif italic text-bark-copper">03</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900">Style & Finish</h3>
              <p className="text-neutral-500 leading-relaxed">
                Using professional tools and techniques, we create your look with care and precision. We finish with tailored product selection to ensure your style lasts beautifully.
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
                  Salon-fresh, <span className="italic">every time</span>
                </h2>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  Polished, effortless styles that leave you feeling confident and put together.
                </p>
              </div>

              <ul className="space-y-5">
                {[
                  { title: 'A luxurious wash included', desc: 'Every service begins with a relaxing shampoo and condition using premium Kevin Murphy products.' },
                  { title: 'Tailored to you', desc: 'We style with intention, considering your face shape, features, and personal aesthetic.' },
                  { title: 'Long-lasting results', desc: 'Professional technique and product knowledge ensure your style holds beautifully.' },
                  { title: 'Heat protection, always', desc: 'We prioritise the health of your hair, using heat protection and quality products to maintain shine and strength.' },
                  { title: 'Premium Kevin Murphy products', desc: 'Chosen for performance, sustainability, and healthy hair.' },
                  { title: 'Perfect for any occasion', desc: 'From events and date nights to a little self-care, we\'ll have you leaving feeling your best.' }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-bark-purple/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-bark-copper" />
                    </div>
                    <div>
                      <span className="text-neutral-900 font-medium">{item.title}</span>
                      <p className="text-neutral-500 text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-square bg-bark-pink rounded-[60px] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-serif italic text-bark-copper/20">Glamour</span>
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
            Treat yourself today
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Book a blow dry and leave feeling fabulous.
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

export default BlowDrys;
