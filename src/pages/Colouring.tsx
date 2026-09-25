import React from 'react';
import { ArrowLeft, Check, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Colouring: React.FC = () => {
  const faqs = [
    {
      question: 'How long does a colour appointment take?',
      answer: 'Timing depends on the service and the complexity of your colour. A root refresh may take around 1-2 hours, while balayage, highlights or transformative colour can take 3-4 hours or more. During your consultation, we\'ll provide a personalised time estimate so you know exactly what to expect.'
    },
    {
      question: 'What products do you use?',
      answer: 'We use KEVIN.MURPHY styling and care products, along with COLOR.ME by KEVIN.MURPHY - an ammonia-free, PPD-free professional colour range. Chosen for both performance and eco-conscious values, our products support the health, shine and longevity of your colour while being mindful of their environmental footprint.'
    },
    {
      question: 'How do I maintain my colour at home?',
      answer: 'Maintaining your colour starts with the right routine. We\'ll recommend professional products tailored to your specific tone and hair needs. In general, using colour-safe shampoo and conditioner, limiting heat styling, and protecting your hair from sun exposure will help preserve vibrancy and condition between visits.'
    },
    {
      question: 'Can you colour over previous colour or correct work from another salon?',
      answer: 'Yes - with care and strategy. Colour correction often requires an in-depth consultation to assess your hair\'s condition and history. From there, we create a tailored plan to safely achieve your desired result while protecting the integrity of your hair.'
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
                  Colour<span className="italic">ing</span>
                </h1>
              </div>

              <p className="text-xl text-neutral-600 leading-relaxed">
                We proudly use COLOR.ME by KEVIN.MURPHY - an ammonia-free, PPD-free professional colour range enriched with naturally derived ingredients to help protect and nourish the hair.
              </p>
              <p className="text-lg text-neutral-500 leading-relaxed">
                Chosen for its performance and alignment with eco-conscious values, it allows us to create elevated, dimensional colour with a gentler approach.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock size={16} className="text-bark-copper" />
                  <span className="text-sm font-medium">1-4 hours</span>
                </div>
              </div>

              <a href="https://apps.kitomba.com/bookings/barkhair" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl hover:-translate-y-1">
                Book Now
              </a>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-bark-cream/50 rounded-[60px] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-serif italic text-bark-copper/30">Colour</span>
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
                Every colour journey begins with intention. We take the time to understand your goals, assess the current condition of your hair, and design a personalised colour plan. Your skin tone, lifestyle, and maintenance preferences are all carefully considered to ensure a result that feels effortless and sustainable between visits.
              </p>
            </div>

            <div className="bg-bark-purple/20 p-10 rounded-[40px] space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-serif italic text-bark-copper">02</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900">Application</h3>
              <p className="text-neutral-500 leading-relaxed">
                Your custom formula is expertly crafted and applied with precision - whether you're refreshing an all-over colour, adding dimension through highlights or balayage, or creating a complete transformation. Throughout the process, we prioritise the integrity and health of your hair.
              </p>
            </div>

            <div className="bg-bark-cream/50 p-10 rounded-[40px] space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-serif italic text-bark-copper">03</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900">Finish & Care</h3>
              <p className="text-neutral-500 leading-relaxed">
                Once your colour has developed, we refine the tone, cleanse, and style your hair to reveal the result. You'll leave not only with beautifully finished colour, but with tailored product recommendations and guidance to maintain its longevity, shine, and condition at home.
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
                  Colour that <span className="italic">lasts</span>
                </h2>
              </div>

              <ul className="space-y-5">
                {[
                  { title: 'Colour that lasts', desc: 'We create considered, dimensional colour designed to evolve beautifully - maintaining tone, shine and integrity between visits.' },
                  { title: 'Kind to your hair, kinder to the planet', desc: 'We proudly use KEVIN.MURPHY products and COLOR.ME - chosen for their performance and alignment with eco-conscious values.' },
                  { title: 'Skilled colourists, always evolving', desc: 'Our team is committed to ongoing education and advanced training, ensuring we stay at the forefront of modern colour techniques and trends.' },
                  { title: 'Custom, never cookie-cutter', desc: 'Every formula is individually crafted to suit your tone, texture and long-term hair goals.' },
                  { title: 'From subtle to statement', desc: 'Whether you\'re after soft balayage, seamless highlights, rich all-over colour or a bold transformation, we tailor every result to feel uniquely yours.' },
                  { title: 'Colour correction specialists', desc: 'Complex transformations are approached with care, strategy and expertise - restoring balance, tone and confidence.' }
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
                  <span className="text-5xl font-serif italic text-bark-copper/20">Beautiful</span>
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
            Ready for your new colour?
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Book a colour appointment and discover your perfect shade.
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

export default Colouring;
