import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-rose-100 selection:text-rose-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />

        {/* Gallery Preview Section */}
        <section id="gallery" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square bg-neutral-100 rounded-3xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1590540179852-211d6b45e390?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Gallery" />
              </div>
              <div className="aspect-square bg-neutral-100 rounded-3xl overflow-hidden group mt-12">
                <img src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Gallery" />
              </div>
              <div className="aspect-square bg-neutral-100 rounded-3xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1593121925328-369ec8459c08?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Gallery" />
              </div>
              <div className="aspect-square bg-neutral-100 rounded-3xl overflow-hidden group mt-12">
                <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Gallery" />
              </div>
            </div>
            <div className="text-center mt-16">
              <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-neutral-900 pb-2 hover:text-rose-400 hover:border-rose-400 transition-all">
                View Full Instagram Feed
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter / CTA Section */}
        <section className="py-24 bg-rose-50/50">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 italic">
              Experience the art of <br /> conscious hair care
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <input
                type="email"
                placeholder="Join our mailing list"
                className="w-full sm:w-80 px-8 py-5 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-rose-200 outline-none"
              />
              <button className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
