import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ScrollToTop from './components/ScrollToTop';
import Seo from './components/Seo';

// Service Pages
import Haircuts from './pages/Haircuts';
import BlowDrys from './pages/BlowDrys';
import Barbering from './pages/Barbering';
import HairTattooing from './pages/HairTattooing';
import ExecutiveShave from './pages/ExecutiveShave';
import Colouring from './pages/Colouring';
import VividColour from './pages/VividColour';
import HairBotox from './pages/HairBotox';
import Nanoplasty from './pages/Nanoplasty';
import Perm from './pages/Perm';
import HairExtensions from './pages/HairExtensions';
import HairSystems from './pages/HairSystems';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-bark-cream selection:text-bark-copper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />

        {/* Gallery Preview Section */}
        <section id="gallery" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square bg-neutral-100 rounded-3xl overflow-hidden group">
                <img src="/img/client-stylist.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Client and stylist" />
              </div>
              <div className="aspect-square bg-neutral-100 rounded-3xl overflow-hidden group mt-12">
                <img src="/img/hair-cutting.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Hair cutting" />
              </div>
              <div className="aspect-square bg-neutral-100 rounded-3xl overflow-hidden group">
                <img src="/img/mens-cut.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Men's haircut" />
              </div>
              <div className="aspect-square bg-neutral-100 rounded-3xl overflow-hidden group mt-12">
                <img src="/img/products.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Hair products" />
              </div>
            </div>
            <div className="text-center mt-16">
              <a href="https://www.instagram.com/bark_hair/?hl=en" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest border-b-2 border-neutral-900 pb-2 hover:text-bark-copper hover:border-bark-copper transition-all">
                View Full Instagram Feed
              </a>
            </div>
          </div>
        </section>

        <Reviews />

        {/* Newsletter / CTA Section */}
        <section className="py-24 bg-bark-pink">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 italic">
              Stay in the loop
            </h2>
            <p className="text-neutral-500 text-lg">Sign up for news, offers, and all things <span className="font-bark">Bark Hair</span>.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:w-80 px-8 py-5 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-bark-copper/30 outline-none"
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

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Seo />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/haircuts" element={<Haircuts />} />
        <Route path="/services/blow-drys" element={<BlowDrys />} />
        <Route path="/services/barbering" element={<Barbering />} />
        <Route path="/services/hair-tattooing" element={<HairTattooing />} />
        <Route path="/services/executive-shave" element={<ExecutiveShave />} />
        <Route path="/services/colouring" element={<Colouring />} />
        <Route path="/services/vivid-colour" element={<VividColour />} />
        <Route path="/services/hair-botox" element={<HairBotox />} />
        <Route path="/services/nanoplasty" element={<Nanoplasty />} />
        <Route path="/services/perm" element={<Perm />} />
        <Route path="/services/hair-extensions" element={<HairExtensions />} />
        <Route path="/services/hair-systems" element={<HairSystems />} />
      </Routes>
      <Analytics />
    </Router>
  );
};

export default App;
