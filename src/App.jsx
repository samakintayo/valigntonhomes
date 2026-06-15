import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Properties from './components/Properties';
import WhyChooseUs from './components/WhyChooseUs';
import Calculator from './components/Calculator';
import Heatmap from './components/Heatmap';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import { Compass, ShieldCheck } from 'lucide-react';

export default function App() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100 selection:bg-gold/30 selection:text-gold-light antialiased">
      {/* Dynamic light accent bars */}
      <div className="fixed top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent z-50 pointer-events-none" />

      {/* Sticky Header */}
      <Navbar />

      {/* Core Landing Page Sections */}
      <main className="space-y-0">
        <Hero />
        <Stats />
        <Services />
        <Properties />
        <WhyChooseUs />
        <Calculator />
        <Heatmap />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>

      {/* Floating AI Assistant Chat Bot */}
      <AIAssistant />

      {/* Premium Corporate Footer */}
      <footer className="relative bg-neutral-950 border-t border-white/5 pt-16 pb-8 overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo & Corporate Summary */}
          <div className="md:col-span-5 space-y-4 text-left">
            <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-gold-dark via-gold to-gold-light p-[1px]">
                <div className="w-full h-full bg-neutral-950 rounded-[7px] flex items-center justify-center">
                  <span className="font-serif font-black text-xl text-gold-light tracking-widest text-shadow-gold">V</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg tracking-wider text-gold-light leading-tight">
                  VALINGTON
                </span>
                <span className="text-[10px] text-neutral-400 tracking-[0.25em] uppercase leading-none font-light">
                  Homes & Properties
                </span>
              </div>
            </a>
            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              Valington Homes & Properties Ltd is Abuja’s leading high-end real estate developer, consultant, and facility manager. Empowering diaspora and domestic investors with secure, high-yield land and luxury estates.
            </p>
            <div className="flex items-center space-x-2 text-[10px] text-neutral-500 font-mono">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>RC Number: RC-1847321 &bull; AGIS Registered Partner</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Asset Explorer
            </h4>
            <ul className="space-y-2 text-xs font-light text-neutral-400">
              <li>
                <a href="#properties" onClick={(e) => handleLinkClick(e, '#properties')} className="hover:text-gold transition-colors">Luxury Mansions</a>
              </li>
              <li>
                <a href="#properties" onClick={(e) => handleLinkClick(e, '#properties')} className="hover:text-gold transition-colors">Lakeside Villas</a>
              </li>
              <li>
                <a href="#properties" onClick={(e) => handleLinkClick(e, '#properties')} className="hover:text-gold transition-colors">Penthouse Suites</a>
              </li>
              <li>
                <a href="#properties" onClick={(e) => handleLinkClick(e, '#properties')} className="hover:text-gold transition-colors">Residential Land Plots</a>
              </li>
            </ul>
          </div>

          {/* District Highlights */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Abuja Prime Sectors
            </h4>
            <ul className="space-y-2 text-xs font-light text-neutral-400">
              <li>
                <a href="#heatmap" onClick={(e) => handleLinkClick(e, '#heatmap')} className="hover:text-gold transition-colors">Maitama District (Diplomatic Node)</a>
              </li>
              <li>
                <a href="#heatmap" onClick={(e) => handleLinkClick(e, '#heatmap')} className="hover:text-gold transition-colors">Asokoro Hills (Premium Residential)</a>
              </li>
              <li>
                <a href="#heatmap" onClick={(e) => handleLinkClick(e, '#heatmap')} className="hover:text-gold transition-colors">Guzape District (High Appreciation)</a>
              </li>
              <li>
                <a href="#heatmap" onClick={(e) => handleLinkClick(e, '#heatmap')} className="hover:text-gold transition-colors">Jabi District (Lakeview Enclave)</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower legal & copyright statement */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 font-light space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-1.5">
            <Compass className="w-3.5 h-3.5 text-gold" />
            <span>&copy; {currentYear} Valington Homes & Properties Ltd. All Rights Reserved.</span>
          </div>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-neutral-300 transition-colors">Investment Terms</a>
            <a href="#disclaimer" className="hover:text-neutral-300 transition-colors">AGIS Document Disclaimer</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
