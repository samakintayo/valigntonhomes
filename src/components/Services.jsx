import { motion } from 'framer-motion';
import { Building, Megaphone, Key, Compass, BarChart3, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Property Development',
      description: 'Crafting luxury architectural masterpieces in Abuja’s prime districts. From conceptual rendering to final turnkey delivery of ultra-premium estates.',
      icon: Building,
    },
    {
      title: 'Property Marketing',
      description: 'Strategic market placement of premium residential and commercial assets using data-driven pipelines to reach high-net-worth investors globally.',
      icon: Megaphone,
    },
    {
      title: 'Property Management',
      description: 'Maximizing property value and securing consistent rental yields. Providing full lease handling, tenant relations, and operational management.',
      icon: Key,
    },
    {
      title: 'Real Estate Consultancy',
      description: 'In-depth market evaluations, property valuation, zoning reports, and location intelligence to navigate Abuja’s evolving property sector.',
      icon: Compass,
    },
    {
      title: 'Investment Advisory',
      description: 'Structuring high-yield property portfolios for diaspora investors and corporate clients, focusing on capital appreciation and robust ROI.',
      icon: BarChart3,
    },
    {
      title: 'Facility Management',
      description: 'Enterprise-grade building operations. Enforcing preventive maintenance, energy efficiency, and round-the-clock security systems.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-neutral-950 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-gold-dark/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="font-serif text-sm font-semibold text-gold tracking-[0.25em] uppercase">
            Signature Capabilities
          </h2>
          <p className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Our Premium Services
          </p>
          <div className="h-0.5 w-16 bg-gold mx-auto mt-4" />
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-xl mx-auto leading-relaxed pt-2">
            Valington Homes provides a complete ecosystem of luxury real estate services tailored for home buyers, property investors, and corporate clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-8 flex flex-col justify-between group cursor-pointer relative"
              >
                {/* Accent glow behind card on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="space-y-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-neutral-900 border border-white/10 group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-300">
                    <Icon className="w-6 h-6 text-gold transition-transform duration-500 group-hover:rotate-6" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-bold text-white tracking-wide group-hover:text-gold-light transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 relative z-10 text-left">
                  <a 
                    href="#contact"
                    className="inline-flex items-center text-xs font-bold text-gold tracking-widest uppercase hover:text-gold-light group-hover:translate-x-1.5 transition-all"
                  >
                    Inquire Service &rarr;
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
