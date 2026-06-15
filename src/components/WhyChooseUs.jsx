import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, CheckCircle, Scale, ShieldCheck, FileSpreadsheet, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
  const [activeStep, setActiveStep] = useState(0);

  const pillars = [
    {
      title: 'Trusted Professionals',
      description: 'Our team comprises licensed surveyors, chartered architects, registered real estate lawyers, and premium consultants with decades of combined experience in the Nigerian property ecosystem.',
      details: 'All Valington developments are supervised by Council of Registered Builders of Nigeria (CORBON) certified partners, ensuring premium architectural fidelity.',
      icon: Users,
    },
    {
      title: 'Verified Properties',
      description: 'Every property undergoes extensive physical inspections, soil testing, and topological mapping to ensure suitability for structural integrity and investment success.',
      details: 'We provide full site inspections for prospective buyers, detailing beacons, topography, and developmental masterplans.',
      icon: CheckCircle,
    },
    {
      title: 'Legal Compliance',
      description: 'We guarantee clean title documentation. Every plot and residential structure carries registered titles, freeing our buyers from third-party litigations.',
      details: 'We ensure swift verification of Certificates of Occupancy (C of O), Right of Occupancy (R of O), and approved building plans at the AGIS database.',
      icon: Scale,
    },
    {
      title: 'Investment Security',
      description: 'Our real estate portfolios are structured to combat inflationary pressures, ensuring solid capital appreciation and high annual rental yields in Abuja’s prime hotspots.',
      details: 'Our investors report an average asset value appreciation of 25-35% within the first 18 months of acquisition.',
      icon: ShieldCheck,
    },
    {
      title: 'Transparent Transactions',
      description: 'No hidden charges. We provide written contract outlines detailing payment installments, survey fees, infrastructural developments, and management terms upfront.',
      details: 'Our transaction documentation is vetted by leading legal councils and registered under local land acts.',
      icon: FileSpreadsheet,
    },
    {
      title: 'Premium Customer Support',
      description: 'Dedicated relationship managers are assigned to handle inquiries, compile progress updates on constructions, coordinate tenant acquisitions, and oversee maintenance request procedures.',
      details: 'We offer specialized video progress updates for our diaspora investors, bridging the gap between offshore funds and local developments.',
      icon: Headphones,
    },
  ];

  const Icon = pillars[activeStep].icon;

  return (
    <section id="why-us" className="relative py-24 bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="font-serif text-sm font-semibold text-gold tracking-[0.25em] uppercase">
            Corporate Integrity
          </h2>
          <p className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Why Discerning Investors Choose Us
          </p>
          <div className="h-0.5 w-16 bg-gold mx-auto mt-4" />
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-xl mx-auto leading-relaxed pt-2">
            Valington Homes is anchored on transparency, legal accuracy, and premium quality, outperforming standard competitors in the Nigerian capital region.
          </p>
        </div>

        {/* Interactive Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Panel: Step Selection */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, idx) => {
              const StepIcon = pillar.icon;
              return (
                <button
                  key={pillar.title}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 flex items-center space-x-4 cursor-pointer ${
                    activeStep === idx
                      ? 'bg-gold/10 border-gold shadow-lg shadow-gold/5'
                      : 'bg-neutral-900/40 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    activeStep === idx ? 'bg-gold text-neutral-950 font-black' : 'bg-neutral-900 text-gold'
                  }`}>
                    <StepIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-sm sm:text-base font-bold ${
                      activeStep === idx ? 'text-gold-light' : 'text-neutral-300'
                    }`}>
                      {pillar.title}
                    </h3>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">
                      Pillar 0{idx + 1}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Displaying Active Pillar Details */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-8 sm:p-10 relative overflow-hidden shadow-2xl min-h-[380px] flex flex-col justify-between text-left">
              {/* Background watermark icon */}
              <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
                <Icon className="w-60 h-60 text-white" />
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center space-x-3 text-gold">
                  <Icon className="w-6 h-6" />
                  <span className="text-xs font-bold uppercase tracking-widest font-mono">
                    Valington Pillar 0{activeStep + 1} Verification
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                      {pillars[activeStep].title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                      {pillars[activeStep].description}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-400 bg-neutral-900/50 p-4 border-l-2 border-gold rounded-r-lg font-light leading-relaxed">
                      {pillars[activeStep].details}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="pt-8 relative z-10 border-t border-white/5 mt-6 flex justify-between items-center">
                <span className="text-xs text-neutral-500">
                  Valington Charter for Security & Compliance
                </span>
                <a 
                  href="https://wa.me/2347037092049?text=I%20want%20to%20know%20more%20about%20your%20legal%20guidelines."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-neutral-900 border border-gold/30 hover:border-gold text-xs font-bold text-gold-light hover:text-white transition-colors"
                >
                  Verify Documents
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
