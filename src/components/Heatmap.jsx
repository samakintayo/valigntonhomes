import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, AlertTriangle, ShieldCheck, Compass } from 'lucide-react';

export default function Heatmap() {
  const [activeDistrict, setActiveDistrict] = useState('Guzape');

  const districts = {
    Maitama: {
      name: 'Maitama District',
      description: 'The established diplomatic enclave of Abuja, housing embassies, top government dignitaries, and ultra-high-net-worth individuals.',
      demand: '9.8 / 10',
      appreciation: '9.2 / 10',
      avgLand: '₦950,000 / sqm',
      avgRent: '₦25,000,000 / yr',
      rating: 'Elite Hold / Buy',
      color: 'fill-gold-dark',
      potential: 'High Stability, Moderate Growth',
    },
    Asokoro: {
      name: 'Asokoro District',
      description: 'Abuja’s most prestigious residential district, set in lush undulating hills. Extremely high entry barrier with maximum security profile.',
      demand: '9.6 / 10',
      appreciation: '9.4 / 10',
      avgLand: '₦900,000 / sqm',
      avgRent: '₦22,000,000 / yr',
      rating: 'Elite Buy',
      color: 'fill-gold',
      potential: 'High Stability, Strong Prestige Yield',
    },
    Guzape: {
      name: 'Guzape District',
      description: 'The fastest appreciating luxury zone in Abuja. Characterized by new architectural masterpieces, rocky elevation, and massive infrastructure upgrades.',
      demand: '9.7 / 10',
      appreciation: '9.8 / 10',
      avgLand: '₦680,000 / sqm',
      avgRent: '₦18,000,000 / yr',
      rating: 'Strong Buy (Highly Recommended)',
      color: 'fill-gold-light',
      potential: 'Maximum Capital Appreciation, High Demand',
    },
    Jabi: {
      name: 'Jabi District (HQ)',
      description: 'A premium district surrounding Jabi Lake, combining luxury residential properties with bustling commercial nodes. The operational headquarters of Valington Homes.',
      demand: '9.4 / 10',
      appreciation: '9.1 / 10',
      avgLand: '₦720,000 / sqm',
      avgRent: '₦15,000,000 / yr',
      rating: 'Strong Buy',
      color: 'fill-gold-dark',
      potential: 'Strong Rental Demand, Premium Waterfront Value',
    },
    Wuse: {
      name: 'Wuse District',
      description: 'The commercial heartbeat of Abuja. Ideal for premium office locations, high-end shopping plazas, and luxury short-let apartments.',
      demand: '9.2 / 10',
      appreciation: '8.9 / 10',
      avgLand: '₦650,000 / sqm',
      avgRent: '₦14,000,000 / yr',
      rating: 'Stable Buy',
      color: 'fill-gold/80',
      potential: 'Commercial Cashflow, Short-Let Yields',
    },
    Gwarinpa: {
      name: 'Gwarinpa District',
      description: 'A sprawling city within a city. Excellent for mid-to-luxury residential estates, commercial avenues, and family developments.',
      demand: '8.9 / 10',
      appreciation: '8.6 / 10',
      avgLand: '₦380,000 / sqm',
      avgRent: '₦8,000,000 / yr',
      rating: 'Stable Yield',
      color: 'fill-neutral-700',
      potential: 'Affordable Entry, High Rental Volatility',
    },
    Lugbe: {
      name: 'Lugbe Corridor',
      description: 'Abuja’s fastest-growing middle-income corridor, located along the Airport Road. Huge demand for gated community land and affordable luxury flats.',
      demand: '8.7 / 10',
      appreciation: '9.3 / 10',
      avgLand: '₦95,000 / sqm',
      avgRent: '₦3,500,000 / yr',
      rating: 'High-Growth Buy (Emerging)',
      color: 'fill-neutral-800',
      potential: 'Emerging Land Value, High Volume Growth',
    },
  };

  return (
    <section id="heatmap" className="relative py-24 bg-neutral-950 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-sm font-semibold text-gold tracking-[0.25em] uppercase">
            Market Intelligence
          </h2>
          <p className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Abuja Investment Heatmap
          </p>
          <div className="h-0.5 w-16 bg-gold mx-auto mt-4" />
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-xl mx-auto leading-relaxed pt-2">
            Click on the interactive sectors of Abuja's key real estate zones to study current land valuations, demand scores, and growth trends.
          </p>
        </div>

        {/* Heatmap Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Panel: Stylized SVG Vector Map */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="relative w-full max-w-[550px] aspect-square bg-neutral-900/40 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl flex flex-col justify-between">
              
              <div className="flex justify-between items-center text-xs text-neutral-500 font-mono mb-4">
                <span>SECTOR MAP: FCT DEVIATION AREA</span>
                <span className="text-gold animate-pulse">● INTERACTIVE REGIONS</span>
              </div>

              {/* Stylized Polygonal SVG Map */}
              <svg 
                viewBox="0 0 400 400" 
                className="w-full h-full max-h-[350px] overflow-visible drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
              >
                {/* Gwarinpa - North West */}
                <polygon 
                  points="30,80 150,50 170,120 70,140" 
                  onClick={() => setActiveDistrict('Gwarinpa')}
                  className={`heatmap-zone cursor-pointer stroke-neutral-950 stroke-2 transition-colors duration-300 ${
                    activeDistrict === 'Gwarinpa' 
                      ? 'fill-gold-dark/60 stroke-gold filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]' 
                      : 'fill-neutral-800/60 hover:fill-neutral-700/60'
                  }`}
                />
                <text x="75" y="100" className="fill-neutral-400 font-sans text-[9px] pointer-events-none uppercase tracking-wider font-bold">Gwarinpa</text>

                {/* Maitama - North East */}
                <polygon 
                  points="180,40 310,20 320,90 220,110" 
                  onClick={() => setActiveDistrict('Maitama')}
                  className={`heatmap-zone cursor-pointer stroke-neutral-950 stroke-2 transition-colors duration-300 ${
                    activeDistrict === 'Maitama' 
                      ? 'fill-gold-dark/60 stroke-gold filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]' 
                      : 'fill-gold-dark/30 hover:fill-gold-dark/40'
                  }`}
                />
                <text x="230" y="65" className="fill-gold-light font-sans text-[9px] pointer-events-none uppercase tracking-wider font-bold">Maitama</text>

                {/* Jabi - Mid West */}
                <polygon 
                  points="70,150 180,130 190,210 80,230" 
                  onClick={() => setActiveDistrict('Jabi')}
                  className={`heatmap-zone cursor-pointer stroke-neutral-950 stroke-2 transition-colors duration-300 ${
                    activeDistrict === 'Jabi' 
                      ? 'fill-gold-dark/60 stroke-gold filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]' 
                      : 'fill-gold-dark/40 hover:fill-gold-dark/50'
                  }`}
                />
                <text x="120" y="180" className="fill-gold-light font-sans text-[9px] pointer-events-none uppercase tracking-wider font-bold">Jabi (HQ)</text>

                {/* Wuse - Center */}
                <polygon 
                  points="190,120 280,100 290,180 200,200" 
                  onClick={() => setActiveDistrict('Wuse')}
                  className={`heatmap-zone cursor-pointer stroke-neutral-950 stroke-2 transition-colors duration-300 ${
                    activeDistrict === 'Wuse' 
                      ? 'fill-gold/60 stroke-gold filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]' 
                      : 'fill-gold/20 hover:fill-gold/30'
                  }`}
                />
                <text x="230" y="150" className="fill-gold font-sans text-[9px] pointer-events-none uppercase tracking-wider font-bold">Wuse</text>

                {/* Asokoro - Far East */}
                <polygon 
                  points="290,110 380,90 390,190 300,190" 
                  onClick={() => setActiveDistrict('Asokoro')}
                  className={`heatmap-zone cursor-pointer stroke-neutral-950 stroke-2 transition-colors duration-300 ${
                    activeDistrict === 'Asokoro' 
                      ? 'fill-gold/60 stroke-gold filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]' 
                      : 'fill-gold/30 hover:fill-gold/45'
                  }`}
                />
                <text x="325" y="145" className="fill-gold-light font-sans text-[9px] pointer-events-none uppercase tracking-wider font-bold">Asokoro</text>

                {/* Guzape - South East */}
                <polygon 
                  points="210,210 330,200 350,290 220,300" 
                  onClick={() => setActiveDistrict('Guzape')}
                  className={`heatmap-zone cursor-pointer stroke-neutral-950 stroke-2 transition-colors duration-300 ${
                    activeDistrict === 'Guzape' 
                      ? 'fill-gold-light/60 stroke-gold filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]' 
                      : 'fill-gold-light/20 hover:fill-gold-light/35'
                  }`}
                />
                <text x="260" y="255" className="fill-gold font-sans text-[9px] pointer-events-none uppercase tracking-wider font-black">Guzape</text>

                {/* Lugbe - South West / Corridor */}
                <polygon 
                  points="50,260 200,230 180,330 60,330" 
                  onClick={() => setActiveDistrict('Lugbe')}
                  className={`heatmap-zone cursor-pointer stroke-neutral-950 stroke-2 transition-colors duration-300 ${
                    activeDistrict === 'Lugbe' 
                      ? 'fill-neutral-700/60 stroke-gold filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]' 
                      : 'fill-neutral-800/40 hover:fill-neutral-700/40'
                  }`}
                />
                <text x="100" y="290" className="fill-neutral-400 font-sans text-[9px] pointer-events-none uppercase tracking-wider font-bold">Lugbe</text>
              </svg>

              <div className="flex justify-between items-center text-[10px] text-neutral-500 font-mono mt-4 pt-4 border-t border-white/5">
                <span>* COLOR DEPTH SYMBOLIZES VALUE CAP</span>
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-gold-dark/40 rounded-sm" />
                  <span>ELITE</span>
                  <span className="w-2.5 h-2.5 bg-gold-light/30 rounded-sm" />
                  <span>HIGH-GROWTH</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Displaying District Real Estate Intelligence */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 text-left min-h-[420px] flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gold">
                    <Compass className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-widest font-mono">Real Estate Index</span>
                  </div>
                  
                  <span className="px-3 py-1 bg-gold/10 border border-gold/45 rounded-full text-[10px] text-gold-light font-bold uppercase tracking-wider">
                    {districts[activeDistrict].rating}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-black text-white">
                    {districts[activeDistrict].name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {districts[activeDistrict].description}
                  </p>
                </div>

                {/* Investment Stats Matrix */}
                <div className="grid grid-cols-2 gap-4 border-t border-b border-white/5 py-5 my-4">
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-0.5">Appreciation Index</span>
                    <span className="font-serif text-lg font-bold text-gold-light">{districts[activeDistrict].appreciation}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-0.5">Rental Demand</span>
                    <span className="font-serif text-lg font-bold text-gold-light">{districts[activeDistrict].demand}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-0.5">Avg Land Price</span>
                    <span className="font-serif text-sm font-bold text-white">{districts[activeDistrict].avgLand}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-0.5">Avg Annual Rent</span>
                    <span className="font-serif text-sm font-bold text-white">{districts[activeDistrict].avgRent}</span>
                  </div>
                </div>

                <div className="space-y-2 bg-neutral-900/50 p-4 border-l-2 border-gold rounded-r-lg">
                  <span className="text-[9px] text-gold uppercase tracking-wider font-black block">Appreciation Potential</span>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {districts[activeDistrict].potential}
                  </p>
                </div>
              </div>

              <div className="pt-6 relative z-10 flex justify-between items-center border-t border-white/5 mt-6">
                <div className="flex items-center space-x-1.5 text-neutral-500 text-[10px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                  <span>AGIS Database Verified</span>
                </div>

                <a
                  href={`https://wa.me/2347037092049?text=I%20am%20interested%20in%20properties%20located%20in%20${encodeURIComponent(districts[activeDistrict].name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gold-gradient bg-gold-gradient-hover cursor-pointer"
                >
                  View Listings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
