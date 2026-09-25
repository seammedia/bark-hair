import React, { useEffect } from 'react';
import { ArrowLeft, Check, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Haircuts: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: 'How long does a haircut appointment take?',
      answer: 'Most appointments take between 45 minutes and 1.5 hours, depending on your hair type, length, and the style you\'re after. Every service includes a consultation so we\'re aligned before we begin.'
    },
    {
      question: 'Do I need to wash my hair before my appointment?',
      answer: 'No need. You\'re welcome to arrive with clean or day-old hair - either works perfectly. Your service includes a wash and prep so your hair is ready for the cut.'
    },
    {
      question: 'How is pricing determined?',
      answer: 'We are a tiered salon, meaning pricing reflects the experience and training level of your stylist, along with the time required for your service. Our pricing is gender-neutral and based on expertise - not identity. Your stylist will confirm the cost during your consultation before starting.'
    },
    {
      question: 'What if I\'m not sure what style I want?',
      answer: 'That\'s absolutely fine. Our stylists are here to guide you. Whether you bring reference images or prefer to explore options together, we\'ll collaborate during your consultation to find a cut that feels right for you.'
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
                  Hair<span className="italic">cuts</span>
                </h1>
              </div>

              <p className="text-xl text-neutral-600 leading-relaxed">
                We believe hair isn't about gender - it's about length, texture, and what works for you. Our pricing reflects the time and skill needed for your hair, not labels. Every appointment includes a thoughtful consultation to ensure your cut feels right for you.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock size={16} className="text-bark-copper" />
                  <span className="text-sm font-medium">45 mins - 1.5 hours</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <DollarSign size={16} className="text-bark-copper" />
                  <span className="text-sm font-medium">From $80</span>
                </div>
              </div>

              <a href="https://apps.kitomba.com/bookings/barkhair" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl hover:-translate-y-1">
                Book Now
              </a>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-bark-cream/50 rounded-[60px] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-serif italic text-bark-copper/30">Haircuts</span>
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
                Every haircut starts with an in-depth conversation. We listen carefully to your needs, taking the time to understand your lifestyle, hair goals, and personal style, so the result feels authentic and truly tailored to you.
              </p>
            </div>

            <div className="bg-bark-purple/20 p-10 rounded-[40px] space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-serif italic text-bark-copper">02</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900">The Cut</h3>
              <p className="text-neutral-500 leading-relaxed">
                Using precision and intention, your stylist creates a cut that complements your natural features. We focus on technique, texture, and movement, designing hair that not only looks great on the day but grows out beautifully too.
              </p>
            </div>

            <div className="bg-bark-cream/50 p-10 rounded-[40px] space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-serif italic text-bark-copper">03</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900">Styling & Care</h3>
              <p className="text-neutral-500 leading-relaxed">
                We finish with a professional style and share practical tips to help you recreate the look at home. You'll leave feeling confident, knowing how to care for and maintain your cut between appointments.
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
                  Cuts that feel <span className="italic">right</span>
                </h2>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  Hair that works with your natural texture, your lifestyle, and the way you want to feel - now and as it grows.
                </p>
              </div>

              <ul className="space-y-5">
                {[
                  { title: 'Gender-neutral pricing', desc: 'Our pricing is based on time, length, and expertise, not identity. Simple, transparent, and fair.' },
                  { title: 'A thorough consultation, every time', desc: 'We listen first. Every cut includes a considered consultation so your stylist fully understands your hair and your goals.' },
                  { title: 'Stylists trained across all hair types', desc: 'Our team is skilled in working with all hair types and textures, with a focus on technique, precision, and care.' },
                  { title: 'A relaxed, welcoming space', desc: 'Bark is a calm, inclusive environment where everyone is welcome and comfortable.' },
                  { title: 'Kevin Murphy products', desc: 'We use Kevin Murphy products to support healthy hair, performance, and sustainability.' },
                  { title: 'Honest advice that fits your life', desc: 'No upselling, no pressure - just genuine recommendations tailored to your routine and lifestyle.' }
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
                  <span className="text-5xl font-serif italic text-bark-copper/20">Precision</span>
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
            Ready for your new look?
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Book your haircut today and experience the Bark Hair difference.
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

export default Haircuts;
