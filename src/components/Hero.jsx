import { motion } from 'framer-motion';
import { Search, MapPin, Compass, Building2, Key } from 'lucide-react';
import abujaMansion from '../assets/abuja_luxury_mansion.webp';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offset = 80;
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Premium Hero Visual Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={abujaMansion} 
          alt="Valington Luxury Mansion Maitama" 
          fetchPriority="high"
          loading="eager"
          width="1024"
          height="1024"
          className="w-full h-full object-cover scale-[1.02] filter brightness-[0.4] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950/60" />
        {/* Subtle animated light sweep overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-dark/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Left Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm"
          >
            <Compass className="w-4 h-4 text-gold animate-spin-slow" />
            <span className="text-xs font-semibold text-gold-light tracking-widest uppercase">
              Abuja's Premier Property Developer
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
          >
            Building Wealth <br />
            <span className="text-gold-gradient text-shadow-gold">Through Real Estate</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-neutral-300 max-w-xl font-light leading-relaxed"
          >
            Premium Property Development, Marketing, Consultancy & Management Services Across Nigeria. Creating generational value with high-yield investments.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#properties"
              onClick={(e) => handleScrollTo(e, '#properties')}
              className="px-8 py-3.5 rounded-md text-sm font-bold tracking-wider text-neutral-950 bg-gold-gradient bg-gold-gradient-hover hover:shadow-xl hover:shadow-gold/25 transition-all duration-300 hover:scale-[1.02]"
            >
              Explore Properties
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="px-8 py-3.5 rounded-md text-sm font-bold tracking-wider text-white border border-gold/40 hover:bg-gold/10 backdrop-blur-sm transition-all duration-300 hover:border-gold"
            >
              Schedule Consultation
            </a>
          </motion.div>

          {/* Core Service Quick Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 mt-12 max-w-lg"
          >
            <div className="flex items-center space-x-2">
              <Building2 className="w-5 h-5 text-gold/80" />
              <span className="text-xs text-neutral-400 font-medium">Development</span>
            </div>
            <div className="flex items-center space-x-2">
              <Key className="w-5 h-5 text-gold/80" />
              <span className="text-xs text-neutral-400 font-medium">Management</span>
            </div>
            <div className="flex items-center space-x-2">
              <Compass className="w-5 h-5 text-gold/80" />
              <span className="text-xs text-neutral-400 font-medium">Consultancy</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Right Content: Property Search & Floating Badges */}
        <div className="lg:col-span-5 relative w-full flex flex-col items-center">
          {/* Main Search Glass Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full glass-panel rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80 relative"
          >
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-gold/10 rounded-full blur-xl animate-pulse" />
            <h3 className="font-serif text-xl font-bold text-gold-light mb-6 text-left">
              Find Premium Investments
            </h3>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 text-left">
                  Property Type
                </label>
                <select className="w-full bg-neutral-900/60 border border-white/10 rounded-lg py-3 px-4 text-sm text-neutral-200 focus:outline-none focus:border-gold transition-colors">
                  <option className="bg-neutral-950">Luxury Mansion</option>
                  <option className="bg-neutral-950">Modern Duplex</option>
                  <option className="bg-neutral-950">Premium Land / Estate</option>
                  <option className="bg-neutral-950">Serviced Apartment</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 text-left">
                  Preferred Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-3.5 w-4 h-4 text-gold" />
                  <select className="w-full bg-neutral-900/60 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-neutral-200 focus:outline-none focus:border-gold transition-colors">
                    <option className="bg-neutral-950">Maitama, Abuja</option>
                    <option className="bg-neutral-950">Asokoro, Abuja</option>
                    <option className="bg-neutral-950">Jabi, Abuja (Near HQ)</option>
                    <option className="bg-neutral-950">Guzape, Abuja</option>
                    <option className="bg-neutral-950">Gwarinpa, Abuja</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 text-left">
                  Investment Capital Range
                </label>
                <select className="w-full bg-neutral-900/60 border border-white/10 rounded-lg py-3 px-4 text-sm text-neutral-200 focus:outline-none focus:border-gold transition-colors">
                  <option className="bg-neutral-950">₦50M - ₦150M</option>
                  <option className="bg-neutral-950">₦150M - ₦500M</option>
                  <option className="bg-neutral-950">₦500M - ₦1.5B</option>
                  <option className="bg-neutral-950">₦1.5B+</option>
                </select>
              </div>

              <button
                type="button"
                onClick={(e) => handleScrollTo(e, '#properties')}
                className="w-full py-4 mt-2 rounded-lg font-bold text-sm text-neutral-950 bg-gold-gradient hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 flex items-center justify-center space-x-2 uppercase tracking-wider bg-gold-gradient-hover cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Begin Matching</span>
              </button>
            </form>
          </motion.div>

          {/* Interactive Floating Statistics Box */}
          <motion.div 
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-6 -left-8 bg-neutral-900/90 border border-gold/30 rounded-xl p-4 shadow-xl backdrop-blur-md hidden sm:flex items-center space-x-3 pointer-events-none"
          >
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center border border-gold/30">
              <Compass className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-[10px] uppercase text-neutral-400 tracking-wider">Average Yield</p>
              <h4 className="font-serif font-black text-gold text-base">+25.8% ROI</h4>
            </div>
          </motion.div>

          {/* Map Preview Floating Card */}
          <motion.div 
            animate={{ 
              y: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute -top-6 -right-6 bg-neutral-900/90 border border-white/15 rounded-xl p-4 shadow-xl backdrop-blur-md hidden sm:flex items-center space-x-3 cursor-pointer hover:border-gold/50 transition-colors"
            onClick={(e) => handleScrollTo(e, '#heatmap')}
          >
            <div className="w-10 h-10 rounded-lg bg-neutral-950 overflow-hidden relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gold/10 z-10" />
              <MapPin className="w-5 h-5 text-gold z-20 animate-bounce" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase text-neutral-400 tracking-wider">Abuja HQ</p>
              <h4 className="font-sans font-bold text-white text-xs">Jabi District, Zone B</h4>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
