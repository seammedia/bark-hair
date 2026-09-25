import React from 'react';
import { ArrowLeft, Check, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HairExtensions: React.FC = () => {
  const faqs = [
    {
      question: 'How long do hair extensions last?',
      answer: 'With proper care and regular maintenance, premium hair extensions can last approximately 3-6 months. Maintenance appointments are typically required every 6-8 weeks for Wefts, and around 10-16 weeks for K-Tips, depending on growth and method. We\'ll create a personalised maintenance schedule based on the extensions you choose.'
    },
    {
      question: 'Will extensions damage my natural hair?',
      answer: 'When professionally applied and properly maintained, extensions should not damage your natural hair. We use precise placement, balanced tension and health-first techniques to protect the integrity of your hair at every stage.'
    },
    {
      question: 'How do I care for my extensions at home?',
      answer: 'You\'ll receive a detailed aftercare guide at your appointment. This includes using sulphate-free products, brushing gently with a loop or extension brush, avoiding tension when wet, and protecting your hair while sleeping. Proper care significantly extends the life of both your extensions and your natural hair.'
    },
    {
      question: 'Can I colour or heat style my extensions?',
      answer: 'Yes - our premium 100% human hair extensions can be heat styled and, in many cases, toned or adjusted. We recommend consulting your stylist before any colour changes to ensure the longevity and quality of the hair is maintained.'
    }
  ];

  const hairFaqs = [
    {
      question: 'What does 100% human hair mean?',
      answer: 'Some extension manufacturers "bulk out" their products with synthetic or animal fibres. Our extensions are made from 100% ethically sourced human hair, with no fillers - ensuring a natural look, feel and long-term performance.'
    },
    {
      question: 'How is the hair processed?',
      answer: 'The hair is collected in ponytails to keep the cuticle aligned in the same downward direction. This prevents tangling and preserves smoothness. It is gently lightened slowly and carefully to maintain integrity, then toned using a method that does not aggressively lift the cuticle. The hair is sanitised, refined and crafted into the selected application method - ensuring strength, shine and consistency in every strand.'
    },
    {
      question: 'What does "virgin hair" mean?',
      answer: 'Virgin hair has not been chemically processed - meaning it hasn\'t been previously coloured or chemically altered. Our premium collection uses carefully selected virgin hair, chosen for its superior quality and long-term durability.'
    },
    {
      question: 'Where does the hair come from?',
      answer: 'Hair is ethically sourced from donors who grow and sell their hair commercially. It is graded and selected according to thickness, texture and quality standards.'
    },
    {
      question: 'What does "draw" mean?',
      answer: '"Draw" refers to how consistent the hair lengths are throughout the bundle. A higher draw means the strands are more uniform in length, resulting in thicker, fuller ends and a more luxurious finish.'
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
                  Hair <span className="italic">Extensions</span>
                </h1>
              </div>

              <p className="text-xl text-neutral-600 leading-relaxed">
                Length. Volume. Seamless confidence. We offer premium-quality hair extensions to enhance length, fullness and movement - all custom designed to blend effortlessly with your natural hair.
              </p>
              <p className="text-lg text-neutral-500 leading-relaxed">
                At Bark, we specialise in K-Tips and Wefts, selecting the most suitable method based on your hair type, lifestyle, density and desired result. Every application is carefully placed for comfort, longevity and a completely natural finish.
              </p>
              <p className="text-base text-neutral-400 italic">
                Enhancement, done properly.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock size={16} className="text-bark-copper" />
                  <span className="text-sm font-medium">2-4 hours</span>
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
                  <span className="text-6xl font-serif italic text-bark-copper/30">Extensions</span>
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
              <h3 className="text-2xl font-serif text-neutral-900">Consultation & Method Selection</h3>
              <p className="text-neutral-500 leading-relaxed">
                We begin with a personalised consultation to understand your goals - whether you're seeking subtle fullness or dramatic length. We assess your natural hair, colour match precisely, and determine the best method for you: K-Tips or Wefts, based on your lifestyle and maintenance preferences.
              </p>
            </div>

            <div className="bg-bark-purple/20 p-10 rounded-[40px] space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-serif italic text-bark-copper">02</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900">Custom Application</h3>
              <p className="text-neutral-500 leading-relaxed">
                Your extensions are expertly installed with precision placement to ensure natural movement and minimal strain on your hair. We prioritise hair health, comfort and seamless blending.
              </p>
            </div>

            <div className="bg-bark-cream/50 p-10 rounded-[40px] space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-serif italic text-bark-copper">03</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900">Blend, Style & Maintenance Plan</h3>
              <p className="text-neutral-500 leading-relaxed">
                Once applied, we trim and shape the extensions to integrate flawlessly with your haircut. You'll leave with a personalised maintenance plan, including brushing techniques, product guidance and refit timing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Hair Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-bark-copper">The Hair</span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">100% Human Hair</h2>
            <p className="max-w-2xl mx-auto text-neutral-500 text-lg leading-relaxed">
              We use premium 100% human hair extensions for superior quality, longevity and natural movement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hairFaqs.map((item, index) => (
              <div key={index} className={`bg-bark-pink/30 p-8 rounded-3xl space-y-3 ${index === 1 ? 'lg:col-span-2' : ''}`}>
                <h3 className="text-lg font-serif text-neutral-900">{item.question}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">{item.answer}</p>
              </div>
            ))}
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
                  Extensions done <span className="italic">right</span>
                </h2>
              </div>

              <ul className="space-y-4">
                {[
                  'Extensions, done properly',
                  'Premium-quality hair selected for longevity and natural movement',
                  'Expert colour matching for a seamless, undetectable blend',
                  'K-Tips and Wefts - tailored to suit your lifestyle',
                  'Precision application focused on protecting your natural hair',
                  'Ongoing maintenance guidance and refit support',
                  'Honest, experience-led advice',
                  'Ongoing long-term support'
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
                  <span className="text-5xl font-serif italic text-bark-copper/20">Quality</span>
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
            Ready for your transformation?
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Book a consultation to discuss your extension goals. We'll create a personalised plan just for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://apps.kitomba.com/bookings/barkhair" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl hover:-translate-y-1">
              Book a Consultation
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

export default HairExtensions;
