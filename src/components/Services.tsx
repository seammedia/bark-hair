import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

// Map service titles to their URL slugs
const getServiceSlug = (title: string): string => {
  const slugMap: Record<string, string> = {
    'Haircuts': 'haircuts',
    'Blow Drys': 'blow-drys',
    'Barbering': 'barbering',
    'Hair Tattooing (Tracks)': 'hair-tattooing',
    'Executive Head & Face Shave': 'executive-shave',
    'Colouring': 'colouring',
    'Vivid Colour': 'vivid-colour',
    'Hair Botox': 'hair-botox',
    'Nanoplasty': 'nanoplasty',
    'Perm': 'perm',
    'Hair Extensions': 'hair-extensions',
    'Hair Systems': 'hair-systems',
  };
  return slugMap[title] || title.toLowerCase().replace(/\s+/g, '-');
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-bark-pink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="space-y-4">
             <span className="text-sm font-bold tracking-[0.3em] uppercase text-bark-copper">What We Do</span>
             <h2 className="text-5xl font-serif text-neutral-900">Our Services</h2>
          </div>
          <div className="max-w-md space-y-2">
            <p className="text-neutral-500 text-lg leading-relaxed">
              We are a tier and level based salon, so prices vary per service and stylist depending on their experience. Click any service to learn more.
            </p>
            <p className="text-neutral-500 text-base">
              You can view our full pricing through the{' '}
              <a href="https://apps.kitomba.com/bookings/barkhair" target="_blank" rel="noopener noreferrer" className="text-bark-copper font-medium underline underline-offset-2 hover:text-bark-copper/70">
                online booking link
              </a>.
            </p>
          </div>
        </div>

        {/* Gender Neutral Pricing */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-white/50">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-bark-purple/30 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">💜</span>
            </div>
            <div>
              <h3 className="text-xl font-serif text-neutral-900 mb-2">Gender Neutral Pricing</h3>
              <p className="text-neutral-600 leading-relaxed">
                Hair is about length, not gender. Our pricing is based on the time and expertise your hair needs, not who you are. <span className="font-bark">Bark Hair</span> is a safe, welcoming space for everyone - including the LGBTQIA+ community. We see you, we welcome you, and we are here for you.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              to={`/services/${getServiceSlug(service.title)}`}
              className="group bg-white p-10 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:-translate-y-2 block"
            >
              <div className="w-12 h-12 rounded-2xl bg-bark-cream flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-colors">
                <span className="text-lg font-serif italic">{service.id}</span>
              </div>
              <h4 className="text-2xl font-serif mb-4 text-neutral-900">{service.title}</h4>
              <p className="text-neutral-500 mb-8 leading-relaxed">{service.description}</p>
              <div className="flex justify-between items-center pt-6 border-t border-neutral-50">
                <span className="text-sm font-bold tracking-widest uppercase text-neutral-900">{service.price}</span>
                <span className="p-3 rounded-full bg-neutral-50 group-hover:bg-bark-purple group-hover:text-neutral-900 transition-all">
                  <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
