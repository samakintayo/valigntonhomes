import { useState } from 'react';
import { Calculator as CalcIcon, TrendingUp, DollarSign, Percent } from 'lucide-react';

export default function Calculator() {
  const [propertyValue, setPropertyValue] = useState(150000000); // 150 Million Naira default
  const [rentalIncome, setRentalIncome] = useState(7500000); // 7.5 Million Naira default (5% yield)
  const [growthRate, setGrowthRate] = useState(15); // 15% capital appreciation default
  const [years, setYears] = useState(5); // 5 years holding period default

  // Calculations
  const rentalYield = ((rentalIncome / propertyValue) * 100).toFixed(1);
  
  // Compound Capital Appreciation: FV = PV * (1 + r)^n
  const finalPropertyValue = Math.round(propertyValue * Math.pow(1 + (growthRate / 100), years));
  const capitalAppreciation = finalPropertyValue - propertyValue;
  
  // Total Rental Income over holding period
  const totalRentalIncome = rentalIncome * years;
  
  // Total Return = Capital Appreciation + Total Rental Income
  const totalReturn = capitalAppreciation + totalRentalIncome;
  
  // Combined ROI % = (Total Return / Property Value) * 100
  const combinedROI = ((totalReturn / propertyValue) * 100).toFixed(1);

  // Formatting helper
  const formatNaira = (num) => {
    if (num >= 1000000000) {
      return `₦${(num / 1000000000).toFixed(2)}B`;
    }
    return `₦${(num / 1000000).toFixed(1)}M`;
  };

  return (
    <section id="calculator" className="relative py-24 bg-neutral-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-sm font-semibold text-gold tracking-[0.25em] uppercase">
            Asset Analysis
          </h2>
          <p className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Investment Yield Calculator
          </p>
          <div className="h-0.5 w-16 bg-gold mx-auto mt-4" />
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-xl mx-auto leading-relaxed pt-2">
            Calculate your projected returns, capital growth, and rental yield when investing in Valington's luxury Abuja real estate portfolios.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Panel: Sliders & Inputs */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center space-x-2 text-gold mb-6 border-b border-white/5 pb-4">
                <CalcIcon className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest font-mono">Return Simulator</span>
              </div>

              <div className="space-y-6">
                {/* Slider 1: Property Value */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <label className="text-neutral-300 font-medium">Initial Capital Value (₦)</label>
                    <span className="text-gold-light font-bold font-serif">{formatNaira(propertyValue)}</span>
                  </div>
                  <input
                    type="range"
                    min="20000000"
                    max="1500000000"
                    step="10000000"
                    value={propertyValue}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setPropertyValue(val);
                      // Adjust rental proportionally to keep a reasonable ratio
                      setRentalIncome(Math.round(val * 0.05));
                    }}
                    className="w-full h-1.5 bg-neutral-900 rounded-lg appearance-none cursor-pointer accent-gold border border-white/5"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                    <span>₦20M</span>
                    <span>₦1.5B</span>
                  </div>
                </div>

                {/* Slider 2: Annual Rental Income */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <label className="text-neutral-300 font-medium">Annual Rental Income (₦)</label>
                    <span className="text-gold-light font-bold font-serif">{formatNaira(rentalIncome)}</span>
                  </div>
                  <input
                    type="range"
                    min={Math.round(propertyValue * 0.02)}
                    max={Math.round(propertyValue * 0.12)}
                    step="500000"
                    value={rentalIncome}
                    onChange={(e) => setRentalIncome(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-900 rounded-lg appearance-none cursor-pointer accent-gold border border-white/5"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                    <span>₦{((propertyValue * 0.02) / 1000000).toFixed(0)}M (2% yield)</span>
                    <span>₦{((propertyValue * 0.12) / 1000000).toFixed(0)}M (12% yield)</span>
                  </div>
                </div>

                {/* Slider 3: Capital Growth Rate */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <label className="text-neutral-300 font-medium">Expected Capital Appreciation (Per Year)</label>
                    <span className="text-gold-light font-bold font-serif">{growthRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="35"
                    step="1"
                    value={growthRate}
                    onChange={(e) => setGrowthRate(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-900 rounded-lg appearance-none cursor-pointer accent-gold border border-white/5"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                    <span>5% (Conservative)</span>
                    <span>35% (Abuja Maitama Trend)</span>
                  </div>
                </div>

                {/* Slider 4: Holding Period */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <label className="text-neutral-300 font-medium">Holding Period (Years)</label>
                    <span className="text-gold-light font-bold font-serif">{years} Years</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="1"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-900 rounded-lg appearance-none cursor-pointer accent-gold border border-white/5"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                    <span>1 Year</span>
                    <span>15 Years</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-neutral-500 leading-normal border-t border-white/5 pt-4 mt-6">
              * Calculations are mathematical simulations based on compounding rates. Real estate values are subject to local supply/demand forces and FCT masterplan updates.
            </p>
          </div>

          {/* Right Panel: Output Yield metrics */}
          <div className="lg:col-span-6 flex flex-col space-y-6 justify-between">
            {/* Main Output Box */}
            <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl flex-grow text-left">
              {/* Gold light sweep overlay */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

              <h3 className="font-serif text-lg font-bold text-white mb-6 border-b border-white/5 pb-4">
                Forecast Summary
              </h3>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest leading-none mb-1 block">Rental Yield</span>
                  <div className="flex items-center space-x-1">
                    <Percent className="w-4 h-4 text-gold" />
                    <span className="font-serif text-2xl font-black text-gold-light">{rentalYield}%</span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-mono">Per annum</span>
                </div>

                <div>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest leading-none mb-1 block">Combined Yield (ROI)</span>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    <span className="font-serif text-2xl font-black text-emerald-400">{combinedROI}%</span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-mono">Total {years} years return</span>
                </div>
              </div>

              <div className="space-y-4 border-t border-white/5 pt-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-neutral-400">Future Asset Value ({years} yrs)</span>
                  <span className="font-serif font-bold text-white">{formatNaira(finalPropertyValue)}</span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-neutral-400">Total Capital appreciation</span>
                  <span className="font-serif font-bold text-gold">{formatNaira(capitalAppreciation)}</span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-neutral-400">Accumulated Rental Income</span>
                  <span className="font-serif font-bold text-gold">{formatNaira(totalRentalIncome)}</span>
                </div>

                <div className="flex justify-between items-center text-base font-bold border-t border-white/5 pt-4">
                  <span className="text-white">Net Return on Asset</span>
                  <span className="font-serif text-xl text-emerald-400 text-shadow-gold">{formatNaira(totalReturn)}</span>
                </div>
              </div>
            </div>

            {/* Quick Consultation Book Pitch */}
            <div className="glass-card rounded-2xl p-6 flex items-center justify-between shadow-lg">
              <div className="text-left space-y-1 pr-4">
                <h4 className="font-serif font-bold text-white text-sm">Looking for 30%+ appreciation?</h4>
                <p className="text-[11px] text-neutral-400 font-light">
                  Our consultancy team constructs off-market portfolios in Maitama Extension and Guzape II.
                </p>
              </div>
              <a 
                href="#contact"
                className="px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gold-gradient whitespace-nowrap bg-gold-gradient-hover cursor-pointer"
              >
                Consult Advisor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
