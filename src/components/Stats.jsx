import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function CountUp({ end, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const endValue = parseInt(end.toString().replace(/,/g, ''));
    if (start === endValue) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / endValue), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(endValue / (totalMiliseconds / incrementTime));
      if (start >= endValue) {
        clearInterval(timer);
        setCount(endValue);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  // Format with commas
  const formatted = count.toLocaleString();

  return (
    <span ref={ref} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-gold-light tracking-tight text-shadow-gold">
      {formatted}{suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    { label: 'Years of Corporate Excellence', value: 12, suffix: '+' },
    { label: 'Ultra-Luxury Projects Delivered', value: 150, suffix: '+' },
    { label: 'High-Value Assets Under Management', value: 1200, suffix: '+' },
    { label: 'Client Retention & Satisfaction Rate', value: 98, suffix: '%' }
  ];

  return (
    <section id="overview" className="relative py-20 bg-neutral-950 border-t border-b border-white/5 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-gold-dark/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-sm font-semibold text-gold tracking-[0.25em] uppercase">
            Corporate Footprint
          </h2>
          <p className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Valington Homes at a Glance
          </p>
          <div className="h-0.5 w-16 bg-gold mx-auto mt-4" />
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-xl mx-auto leading-relaxed pt-2">
            A decade of property development leadership in the Federal Capital Territory, transforming the skyline of Abuja and creating secure, high-yield wealth for local and international investors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card rounded-xl p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden group"
            >
              {/* Dynamic top highlight line on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="mb-4">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 font-medium tracking-wide leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
