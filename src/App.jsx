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

      {/* Floating WhatsApp Quick Connect Button */}
      <a 
        href="https://wa.me/2347037092049?text=Hello%20Valington%20Homes,%20I%20am%20interested%20in%20your%20properties."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg shadow-[#25D366]/35 hover:scale-110 active:scale-95 transition-transform duration-300 animate-pulse-slow cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7.5 h-7.5 fill-white">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.81 11.81 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634L4.027 19.91l3.627-1.717zm9.563-5.494c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.521.074-.793.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
        </svg>
      </a>

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
