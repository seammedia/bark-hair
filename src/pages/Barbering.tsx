import React from 'react';
import { ArrowLeft, Check, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Barbering: React.FC = () => {
  const faqs = [
    {
      question: 'Is your barbering service for all genders?',
      answer: 'Yes. Our barbering services are gender-neutral and designed for everyone. We focus on the craft of short hair and grooming - tailoring each service to the individual, not labels.'
    },
    {
      question: 'What styles can you create?',
      answer: 'From clean fades and timeless, classic shapes to modern textured cuts and more expressive styles, our barbers are trained across a wide range of techniques to suit your preference and features.'
    },
    {
      question: 'Do you offer beard trims?',
      answer: 'We do. Beard shaping and grooming can be added to your service, with careful sculpting and detailing to complement your haircut. For a more elevated grooming experience, including hot towel rituals and traditional techniques, please visit our Executive Head & Face Shave page for full details.'
    },
    {
      question: 'How often should I come in for maintenance?',
      answer: 'For sharp, defined lines, we recommend every 3-4 weeks. For softer or more grown-in styles, 4-6 weeks is ideal. Your barber will guide you based on your cut and how it grows.'
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
                  Barber<span className="italic">ing</span>
                </h1>
              </div>

              <p className="text-xl text-neutral-600 leading-relaxed">
                Precision barbering for shorter lengths, using a combination of clippers and scissors to create clean, tailored shapes. Every service includes a relaxing shampoo, delivered in an inclusive and welcoming space.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock size={16} className="text-bark-copper" />
                  <span className="text-sm font-medium">30-60 minutes</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <DollarSign size={16} className="text-bark-copper" />
                  <span className="text-sm font-medium">From $50</span>
                </div>
              </div>

              <a href="https://apps.kitomba.com/bookings/barkhair" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl hover:-translate-y-1">
                Book Now
              </a>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-bark-cream/50 rounded-[60px] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-serif italic text-bark-copper/30">Barbering</span>
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
                Our barbering services are gender-neutral and tailored to the individual. We begin with a focused conversation about your style goals, routine, and preferences - creating a look that suits your features, lifestyle, and sense of self.
              </p>
            </div>

            <div className="bg-bark-purple/20 p-10 rounded-[40px] space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-serif italic text-bark-copper">02</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900">Precision Cutting</h3>
              <p className="text-neutral-500 leading-relaxed">
                Using a combination of clippers, scissors, and razors where needed, your barber crafts clean lines and balanced shapes with precision and care. From classic finishes to modern, expressive styles, every cut is considered and refined.
              </p>
            </div>

            <div className="bg-bark-cream/50 p-10 rounded-[40px] space-y-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-serif italic text-bark-copper">03</span>
              </div>
              <h3 className="text-2xl font-serif text-neutral-900">Finishing Touches</h3>
              <p className="text-neutral-500 leading-relaxed">
                We complete your service with detailed edging and styling, using premium products from Truefitt & Hill and Kevin Murphy to support healthy hair and a polished finish. You'll leave with a sharp, fresh look - plus simple advice on maintaining it at home.
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
                  Grooming, done <span className="italic">properly</span>
                </h2>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  Thoughtful barbering that balances precision, style, and wearability.
                </p>
              </div>

              <ul className="space-y-5">
                {[
                  { title: 'Inclusive barbering for all genders', desc: 'Our services are gender-neutral and tailored to the individual - never defined by labels.' },
                  { title: 'Skilled across styles', desc: 'From sharp fades and textured crops to timeless, classic cuts, our barbers are trained in technique and detail.' },
                  { title: 'Beard shaping & grooming', desc: 'Clean lines, balanced shaping, and considered grooming to complement your cut.' },
                  { title: 'A relaxed, welcoming space', desc: 'An environment where everyone feels comfortable and looked after.' },
                  { title: 'Precision in every detail', desc: 'We focus on clean finishes, balanced shapes, and cuts that grow out well.' },
                  { title: 'Style advice tailored to you', desc: 'Honest recommendations that suit your features, routine, and lifestyle.' }
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
                  <span className="text-5xl font-serif italic text-bark-copper/20">Sharp</span>
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
            Ready for a fresh cut?
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Book your barbering appointment and experience precision grooming.
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

export default Barbering;
