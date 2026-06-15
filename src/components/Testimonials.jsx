import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      name: 'Dr. Chidi Okechukwu',
      role: 'Diaspora Investor (Houston, USA)',
      story: '“Investing in Abuja real estate from offshore is usually risky, but Valington Homes provided absolute security. Their legal compliance transparency and weekly video construction updates on my Maitama mansion plots gave me peace of mind. The property value has already appreciated by 32%.”',
      stars: 5,
    },
    {
      name: 'Hajia Amina Yusuf',
      role: 'CEO, NexaCorp Nigeria',
      story: '“We contracted Valington for property development and facility management of our corporate luxury duplexes in Guzape. Their professionalism, structural standards, and attention to finish details are comparable to top global standards. They are easily the best in Abuja.”',
      stars: 5,
    },
    {
      name: 'Engr. Tunde Adebayo',
      role: 'Home Buyer (Jabi Lakefront Villa)',
      story: '“From scheduling our initial consultation to moving into our smart lakefront home in Jabi, the journey was seamless. They delivered ahead of schedule, resolved AGIS documents immediately, and their post-purchase facility management is top-tier.”',
      stars: 5,
    },
  ];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="relative py-24 bg-neutral-950 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-gold/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-sm font-semibold text-gold tracking-[0.25em] uppercase">
            Client Valuations
          </h2>
          <p className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Success Stories from Our Investors
          </p>
          <div className="h-0.5 w-16 bg-gold mx-auto mt-4" />
        </div>

        {/* Carousel Slider */}
        <div className="relative glass-panel rounded-3xl p-8 sm:p-12 shadow-2xl min-h-[300px] flex flex-col justify-between items-center text-center">
          
          {/* Quote Icon */}
          <div className="w-12 h-12 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center mb-6">
            <Quote className="w-5 h-5 text-gold" />
          </div>

          <div className="max-w-3xl flex-grow flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Story */}
                <p className="text-base sm:text-lg text-neutral-200 font-light italic leading-relaxed">
                  {testimonials[activeIdx].story}
                </p>

                {/* Star Ratings */}
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonials[activeIdx].stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>

                {/* Client Profile */}
                <div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-gold-light">
                    {testimonials[activeIdx].name}
                  </h4>
                  <p className="text-[11px] text-neutral-500 uppercase tracking-widest font-mono">
                    {testimonials[activeIdx].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 bg-neutral-900 border border-white/5 hover:border-gold rounded-full text-neutral-400 hover:text-white transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIdx === i ? 'bg-gold w-6' : 'bg-neutral-800'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 bg-neutral-900 border border-white/5 hover:border-gold rounded-full text-neutral-400 hover:text-white transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
