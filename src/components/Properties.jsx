import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, BedDouble, Bath, Maximize, Play, X, ShieldAlert } from 'lucide-react';
import abujaMansion from '../assets/abuja_luxury_mansion.webp';
import jabiDuplex from '../assets/jabi_luxury_duplex.webp';
import asokoroResidence from '../assets/asokoro_luxury_residence.webp';

export default function Properties() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [activeTour, setActiveTour] = useState(null);

  const properties = [
    {
      id: 1,
      title: 'The Grand Vista Manor',
      district: 'Maitama',
      type: 'Mansion',
      price: '₦1,250,000,000',
      beds: 7,
      baths: 8,
      area: '1,450 sqm',
      image: abujaMansion,
      tag: 'Exclusive',
      description: 'An architectural marvel featuring high-security smart automation, private infinity pool, panoramic hills view, and bulletproof security glass.',
    },
    {
      id: 2,
      title: 'Jabi Lakefront Villa',
      district: 'Jabi',
      type: 'Villa',
      price: '₦980,000,000',
      beds: 5,
      baths: 6,
      area: '920 sqm',
      image: jabiDuplex,
      tag: 'New Launch',
      description: 'Stunning modern design situated right on the shore of Jabi Lake. Includes a private boat dock, glass balconies, and solar-smart roofing.',
    },
    {
      id: 3,
      title: 'The Royal Crest Penthouses',
      district: 'Asokoro',
      type: 'Penthouse',
      price: '₦1,150,000,000',
      beds: 6,
      baths: 7,
      area: '1,100 sqm',
      image: asokoroResidence,
      tag: 'Under Construction',
      description: 'Perched in the prestigious hills of Asokoro. Dual-story luxury suites with private elevator access, sky gardens, and helipad accessibility.',
    },
    {
      id: 4,
      title: 'Guzape Heights Duplex',
      district: 'Guzape',
      type: 'Duplex',
      price: '₦550,000,000',
      beds: 4,
      baths: 5,
      area: '680 sqm',
      image: jabiDuplex,
      tag: 'Trending',
      description: 'Superb minimal design built over split-levels. Highlights include open-concept high ceilings, private cinema, and high-efficiency automation.',
    },
    {
      id: 5,
      title: 'The Imperial Heights Suites',
      district: 'Maitama',
      type: 'Apartment',
      price: '₦320,000,000',
      beds: 3,
      baths: 4,
      area: '420 sqm',
      image: asokoroResidence,
      tag: 'Premium',
      description: 'Luxury serviced apartments with an elegant infinity pool, full concierge desk, gym, and synchronized facility management.',
    },
    {
      id: 6,
      title: 'Premium Smart-City Estate plots',
      district: 'Lugbe',
      type: 'Land',
      price: '₦45,000,000',
      beds: 0,
      baths: 0,
      area: '600 sqm',
      image: abujaMansion,
      tag: 'Fast Selling',
      description: 'Verified residential plots in a fully integrated smart estate, including legal compliance, paved access roads, and perimeter security.',
    }
  ];

  const types = ['All', 'Mansion', 'Villa', 'Penthouse', 'Duplex', 'Land'];
  const districts = ['All', 'Maitama', 'Asokoro', 'Jabi', 'Guzape', 'Lugbe'];

  const filteredProperties = properties.filter((prop) => {
    const matchesType = selectedType === 'All' || prop.type === selectedType;
    const matchesDistrict = selectedDistrict === 'All' || prop.district === selectedDistrict;
    return matchesType && matchesDistrict;
  });

  return (
    <section id="properties" className="relative py-24 bg-neutral-950 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-sm font-semibold text-gold tracking-[0.25em] uppercase">
            Signature Residences
          </h2>
          <p className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Featured Luxury Listings
          </p>
          <div className="h-0.5 w-16 bg-gold mx-auto mt-4" />
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-xl mx-auto leading-relaxed pt-2">
            Explore our curated portfolio of ultra-premium land, serviced apartments, and signature villas in the most prestigious zones of Abuja.
          </p>
        </div>

        {/* Filters Panel */}
        <div className="flex flex-col space-y-4 mb-12">
          {/* Property Types */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar justify-start sm:justify-center">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mr-2 hidden sm:inline-block">Type:</span>
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                  selectedType === type
                    ? 'bg-gold text-neutral-950 font-black shadow-md shadow-gold/20'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/5'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Districts */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar justify-start sm:justify-center">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mr-2 hidden sm:inline-block">District:</span>
            {districts.map((dist) => (
              <button
                key={dist}
                onClick={() => setSelectedDistrict(dist)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                  selectedDistrict === dist
                    ? 'bg-gold text-neutral-950 font-black shadow-md shadow-gold/20'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/5'
                }`}
              >
                {dist}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((prop) => (
              <motion.div
                layout
                key={prop.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    loading="lazy"
                    width="400"
                    height="300"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Absolute Badge */}
                  <span className="absolute top-4 left-4 bg-gold-dark/90 text-gold-light text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-gold/30 backdrop-blur-sm">
                    {prop.tag}
                  </span>

                  {/* Play Tour Button Overlay */}
                  <button
                    onClick={() => setActiveTour(prop)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center shadow-lg shadow-gold/30 hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-neutral-950 fill-neutral-950 translate-x-[2px]" />
                    </div>
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4 text-left">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                      {prop.title}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-2 text-neutral-400 text-xs">
                    <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>{prop.district}, Abuja</span>
                  </div>

                  <p className="text-xs text-neutral-400 font-light line-clamp-2 leading-relaxed">
                    {prop.description}
                  </p>

                  {/* Core Features Specs */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4 text-neutral-300 text-xs">
                    {prop.type !== 'Land' && (
                      <>
                        <div className="flex items-center space-x-1">
                          <BedDouble className="w-4 h-4 text-gold" />
                          <span>{prop.beds} Beds</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Bath className="w-4 h-4 text-gold" />
                          <span>{prop.baths} Baths</span>
                        </div>
                      </>
                    )}
                    <div className="flex items-center space-x-1">
                      <Maximize className="w-4 h-4 text-gold" />
                      <span>{prop.area}</span>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-neutral-500 uppercase tracking-widest leading-none mb-1">Price</span>
                      <span className="font-serif text-lg font-black text-gold-light">{prop.price}</span>
                    </div>
                    
                    <button
                      onClick={() => setActiveTour(prop)}
                      className="px-4 py-2 rounded bg-neutral-900 border border-gold/30 text-xs font-bold text-gold-light hover:bg-gold hover:text-neutral-950 transition-all cursor-pointer"
                    >
                      3D Virtual Tour
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state if nothing matches */}
        {filteredProperties.length === 0 && (
          <div className="glass-card rounded-xl p-12 text-center max-w-md mx-auto space-y-4 mt-8">
            <ShieldAlert className="w-12 h-12 text-gold/60 mx-auto" />
            <h4 className="font-serif text-lg font-bold text-white">No Matching Properties</h4>
            <p className="text-xs text-neutral-400">
              There are currently no listings match both your selected type and district. Please adjust your criteria.
            </p>
          </div>
        )}
      </div>

      {/* Virtual Tour Modal Simulator */}
      <AnimatePresence>
        {activeTour && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-neutral-950 border border-gold/40 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Top bar */}
              <div className="flex justify-between items-center bg-neutral-900/80 px-6 py-4 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold text-neutral-300 uppercase tracking-widest font-mono">
                    Live 3D Simulated Tour &bull; {activeTour.title}
                  </span>
                </div>
                <button
                  onClick={() => setActiveTour(null)}
                  className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Simulated 3D Panorama Viewport */}
              <div className="relative aspect-video bg-neutral-900 overflow-hidden flex items-center justify-center">
                <img
                  src={activeTour.image}
                  alt={activeTour.title}
                  className="absolute w-[180%] h-full object-cover opacity-60 transform animate-pulse filter blur-[1px]"
                  style={{
                    animation: 'spin-panorama 25s linear infinite',
                  }}
                />
                
                {/* Inner Compass Visualizer Overlay */}
                <div className="relative z-10 flex flex-col items-center space-y-4 max-w-md text-center p-6 bg-black/60 rounded-xl border border-white/10 backdrop-blur-md">
                  <Play className="w-12 h-12 text-gold animate-pulse" />
                  <h4 className="font-serif text-xl font-bold text-gold-light">Simulating Interactive walkthrough</h4>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    This high-end 3D tour simulator presents the space from the master bedroom balcony overlooking Abuja.
                  </p>
                  <a
                    href={`https://wa.me/2347037092049?text=I%20want%20to%20schedule%20a%20physical%20inspection%20for%20${encodeURIComponent(activeTour.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gold-gradient bg-gold-gradient-hover"
                  >
                    Request Live Walkthrough
                  </a>
                </div>

                {/* Simulated Directional Buttons */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-10">
                  <span className="text-[10px] text-neutral-500 font-mono">PANORAMA VIEW: 140° ACTIVE</span>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-neutral-950/80 border border-white/10 hover:border-gold rounded text-[10px] font-mono text-white">L</button>
                    <button className="px-3 py-1 bg-neutral-950/80 border border-white/10 hover:border-gold rounded text-[10px] font-mono text-white">R</button>
                    <button className="px-3 py-1 bg-neutral-950/80 border border-white/10 hover:border-gold rounded text-[10px] font-mono text-white">ZOOM</button>
                  </div>
                </div>
              </div>

              {/* Style animation declaration */}
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes spin-panorama {
                  0% { transform: scale(1.1) translateX(-20%); }
                  50% { transform: scale(1.1) translateX(10%); }
                  100% { transform: scale(1.1) translateX(-20%); }
                }
              `}} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
