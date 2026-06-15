import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Compass, CheckCircle } from 'lucide-react';
import abujaMansion from '../assets/abuja_luxury_mansion.webp';
import jabiDuplex from '../assets/jabi_luxury_duplex.webp';
import asokoroResidence from '../assets/asokoro_luxury_residence.webp';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Maitama Grand Manor (Phase I)',
      category: 'Completed',
      desc: 'Finished turnkey delivery of 7-bedroom smart mansion, featuring structural glazing and heated infinity pool.',
      image: abujaMansion,
      meta: 'Delivered Jan 2026',
    },
    {
      id: 2,
      title: 'Asokoro Grandeur Residences',
      category: 'Renders',
      desc: 'Architectural render of upcoming dual-penthouse towers, scheduled for foundation works in Q3 226.',
      image: asokoroResidence,
      meta: 'Planned Launch Q4 2026',
    },
    {
      id: 3,
      title: 'Jabi Lakefront Duplex (Phase III)',
      category: 'Ongoing',
      desc: 'Superstructural phase active. Wall cladding, glazing frames, and internal smart plumbing currently installing.',
      image: jabiDuplex,
      meta: '80% Completed',
    },
    {
      id: 4,
      title: 'Maitama Hills Heights (Phase II)',
      category: 'Ongoing',
      desc: 'Concrete framing and floor slab reinforcement checks completed. Moving to electrical routing installations.',
      image: abujaMansion,
      meta: '55% Completed',
    },
    {
      id: 5,
      title: 'Wuse II Smart Corporate Plaza',
      category: 'Completed',
      desc: 'Handover of multi-story premium corporate offices. Includes advanced fire compliance systems.',
      image: asokoroResidence,
      meta: 'Delivered Nov 2025',
    },
    {
      id: 6,
      title: 'Guzape Rocky Villa Render',
      category: 'Renders',
      desc: 'Structural architectural proposal utilizing Guzape’s rocky contours for split-level natural light routing.',
      image: jabiDuplex,
      meta: 'Architectural Blueprint',
    },
  ];

  const categories = ['All', 'Completed', 'Ongoing', 'Renders'];

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <section id="gallery" className="relative py-24 bg-neutral-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-sm font-semibold text-gold tracking-[0.25em] uppercase">
            Signature Portfolio
          </h2>
          <p className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Valington Project Gallery
          </p>
          <div className="h-0.5 w-16 bg-gold mx-auto mt-4" />
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-xl mx-auto leading-relaxed pt-2">
            View our gallery of delivered luxury landmarks, ongoing FCT constructions, and upcoming architectural concepts.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center space-x-2 mb-12 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gold text-neutral-950 font-black shadow-md shadow-gold/25'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="gallery-item glass-card rounded-2xl overflow-hidden group cursor-pointer relative"
                onClick={() => setLightboxImage(item)}
              >
                {/* Image overlay container */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width="400"
                    height="300"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        {item.category === 'Completed' ? (
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Compass className="w-4 h-4 text-gold animate-spin-slow" />
                        )}
                        <span className="text-[10px] text-gold uppercase tracking-widest font-mono font-bold">
                          {item.category} &bull; {item.meta}
                        </span>
                      </div>
                      <h4 className="font-serif text-base font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-neutral-300 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  
                  {/* Floating Magnify Badge */}
                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-neutral-950/80 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4 text-gold" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-neutral-950 border border-gold/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Top Details */}
              <div className="flex justify-between items-center bg-neutral-900/80 px-6 py-4 border-b border-white/10">
                <div className="text-left">
                  <span className="text-[10px] text-gold font-bold uppercase tracking-widest font-mono">
                    Project File: {lightboxImage.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white leading-none mt-1">
                    {lightboxImage.title}
                  </h3>
                </div>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Large Image View */}
              <div className="relative max-h-[70vh] bg-neutral-950 overflow-hidden flex items-center justify-center">
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Bottom details description */}
              <div className="bg-neutral-900/60 p-6 text-left space-y-2 border-t border-white/10">
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  {lightboxImage.desc}
                </p>
                <div className="flex justify-between items-center text-xs text-neutral-500 pt-2 font-mono">
                  <span>TIMELINE STATUS: {lightboxImage.meta.toUpperCase()}</span>
                  <span>SURVEY REF: AGIS-FCT-{lightboxImage.id}032</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
