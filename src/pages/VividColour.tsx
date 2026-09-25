import React from 'react';
import { ArrowLeft, Check, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const VividColour: React.FC = () => {
  const faqs = [
    {
      question: 'What colours can you create?',
      answer: 'From bold brights like electric blue, hot pink and neon green to soft pastels such as lavender, rose gold and mint. We can create a shade that reflects your individuality. During your consultation, we\'ll help refine the perfect tone to complement your skin tone, personal style and overall vision.'
    },
    {
      question: 'How long does vivid colour last?',
      answer: 'Vivid shades typically last between 4-8 weeks, depending on the tone chosen, your hair\'s porosity and your at-home care routine. We provide personalised aftercare guidance to help maintain vibrancy and extend the life of your colour.'
    },
    {
      question: 'Do I need to lighten my hair first?',
      answer: 'For the most vibrant and true-to-tone results, pre-lightening is often required. Creating a clean, even canvas allows vivid shades to appear brighter and last longer. During your consultation, we\'ll assess your hair and design the safest approach to achieve your desired result while maintaining hair integrity.'
    },
    {
      question: 'How do I care for vivid colour at home?',
      answer: 'To preserve brightness, we recommend using colour-safe, sulphate-free products, or colour conditioner that we custom make, washing with cooler water, minimising heat styling and protecting your hair from prolonged sun exposure. You\'ll leave with a tailored maintenance plan to keep your colour looking fresh between visits.'
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
                  Vivid <span className="italic">Colour</span>
                </h1>
              </div>

              <p className="text-xl text-neutral-600 leading-relaxed">
                High-impact colour, custom created for you. From bold brights and soft pastels to subtle pop-of-colour details, our vivid work is designed around expression and individuality. Every shade is thoughtfully formulated to complement your skin tone, personal style and long-term hair goals.
              </p>
              <p className="text-lg text-neutral-500 leading-relaxed">
                While creative freedom is at the heart of vivid colour, we never compromise on hair integrity. Our approach prioritises colour longevity, shine and overall hair health - ensuring your statement shade looks as beautiful weeks later as it does on day one.
              </p>
              <p className="text-base text-neutral-400 italic">
                Expressive. Considered. Unapologetically you.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock size={16} className="text-bark-copper" />
                  <span className="text-sm font-medium">3-5 hours</span>
                </div>
              </div>

              <a href="https://apps.kitomba.com/bookings/barkhair" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl hover:-translate-y-1">
                Book Now
              </a>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-bark-cream/50 rounded-[60px] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-serif italic text-bark-copper/30">Vivid</span>
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
                Every vivid transformation begins with a detailed consultation. We explore your colour vision, level of boldness, and long-term commitment, while considering your skin tone, lifestyle and maintenance preferences. From there, we design a customised plan to achieve your ideal result safely and beautifully.
              </p>
            </div>

            <div className="bg-bark-purple/20 p-10 rounded-[40px] space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-serif italic text-bark-copper">02</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900">Preparation & Colour</h3>
              <p className="text-neutral-500 leading-relaxed">
                For many vivid shades, creating the perfect canvas is essential. If required, we gently pre-lighten the hair to achieve clarity and vibrancy. Your bespoke vivid formula is then expertly applied, with careful attention to saturation, placement and longevity - ensuring maximum impact without compromising hair health.
              </p>
            </div>

            <div className="bg-bark-cream/50 p-10 rounded-[40px] space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-serif italic text-bark-copper">03</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900">Style & Care</h3>
              <p className="text-neutral-500 leading-relaxed">
                Once your colour is complete, we refine, tone where needed, and style your hair to reveal the full transformation. You'll leave with a personalised aftercare plan and professional product recommendations to help maintain vibrancy, shine and condition between visits.
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
                  Bold and <span className="italic">beautiful</span>
                </h2>
              </div>

              <ul className="space-y-4">
                {[
                  'Bold, beautifully considered colour',
                  'Focused on colour longevity and hair health',
                  'Custom formulas designed around your vision',
                  'From subtle pops to full vivid transformations',
                  'Vibrancy balanced with hair integrity',
                  'Detailed, personalised aftercare guidance included'
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
                  <span className="text-5xl font-serif italic text-bark-copper/20">Express</span>
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
            Ready to go vivid?
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Book your vivid colour appointment and let your personality shine.
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

export default VividColour;
