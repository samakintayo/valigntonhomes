import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // Mobile accordion states
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileInvestOpen, setMobileInvestOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll on mobile when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    setMobileCompanyOpen(false);
    setMobileInvestOpen(false);
    setMobileToolsOpen(false);
    
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-neutral-950/90 backdrop-blur-md border-b border-gold/15 py-4 shadow-lg shadow-black/30' 
        : 'bg-transparent py-6 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-gold-dark via-gold to-gold-light p-[1px] shadow-md shadow-gold/10">
            <div className="w-full h-full bg-neutral-950 rounded-[7px] flex items-center justify-center transition-colors duration-300 group-hover:bg-neutral-900">
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

        {/* Desktop Nav Links with Dropdowns */}
        <div className="hidden lg:flex items-center space-x-8">
          
          {/* Investments Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('investments')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center text-sm font-medium text-neutral-300 hover:text-gold transition-colors duration-300 py-2 cursor-pointer">
              <span>Investments</span>
              <ChevronDown className="w-4 h-4 ml-1 text-neutral-500" />
            </button>
            {activeDropdown === 'investments' && (
              <div className="absolute top-full left-0 w-56 rounded-xl border border-white/10 bg-neutral-950 p-2 shadow-2xl backdrop-blur-md">
                <a 
                  href="#properties" 
                  onClick={(e) => handleLinkClick(e, '#properties')}
                  className="block rounded-lg px-4 py-2.5 text-xs text-neutral-300 hover:bg-gold/10 hover:text-gold transition-colors text-left"
                >
                  Featured Listings
                </a>
                <a 
                  href="#heatmap" 
                  onClick={(e) => handleLinkClick(e, '#heatmap')}
                  className="block rounded-lg px-4 py-2.5 text-xs text-neutral-300 hover:bg-gold/10 hover:text-gold transition-colors text-left"
                >
                  Abuja Property Heatmap
                </a>
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('company')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center text-sm font-medium text-neutral-300 hover:text-gold transition-colors duration-300 py-2 cursor-pointer">
              <span>Company</span>
              <ChevronDown className="w-4 h-4 ml-1 text-neutral-500" />
            </button>
            {activeDropdown === 'company' && (
              <div className="absolute top-full left-0 w-56 rounded-xl border border-white/10 bg-neutral-950 p-2 shadow-2xl backdrop-blur-md">
                <a 
                  href="#overview" 
                  onClick={(e) => handleLinkClick(e, '#overview')}
                  className="block rounded-lg px-4 py-2.5 text-xs text-neutral-300 hover:bg-gold/10 hover:text-gold transition-colors text-left"
                >
                  Corporate Overview
                </a>
                <a 
                  href="#why-us" 
                  onClick={(e) => handleLinkClick(e, '#why-us')}
                  className="block rounded-lg px-4 py-2.5 text-xs text-neutral-300 hover:bg-gold/10 hover:text-gold transition-colors text-left"
                >
                  Why Invest With Us
                </a>
                <a 
                  href="#gallery" 
                  onClick={(e) => handleLinkClick(e, '#gallery')}
                  className="block rounded-lg px-4 py-2.5 text-xs text-neutral-300 hover:bg-gold/10 hover:text-gold transition-colors text-left"
                >
                  Project Portfolio
                </a>
              </div>
            )}
          </div>

          {/* Tools Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('tools')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center text-sm font-medium text-neutral-300 hover:text-gold transition-colors duration-300 py-2 cursor-pointer">
              <span>Calculators</span>
              <ChevronDown className="w-4 h-4 ml-1 text-neutral-500" />
            </button>
            {activeDropdown === 'tools' && (
              <div className="absolute top-full left-0 w-56 rounded-xl border border-white/10 bg-neutral-950 p-2 shadow-2xl backdrop-blur-md">
                <a 
                  href="#calculator" 
                  onClick={(e) => handleLinkClick(e, '#calculator')}
                  className="block rounded-lg px-4 py-2.5 text-xs text-neutral-300 hover:bg-gold/10 hover:text-gold transition-colors text-left"
                >
                  Projected ROI Calculator
                </a>
              </div>
            )}
          </div>

          <a
            href="#services"
            onClick={(e) => handleLinkClick(e, '#services')}
            className="text-sm font-medium text-neutral-300 hover:text-gold transition-colors duration-300 py-2"
          >
            Services
          </a>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="text-sm font-medium text-neutral-300 hover:text-gold transition-colors duration-300 py-2"
          >
            Contact
          </a>
        </div>

        {/* Action Button & Contact */}
        <div className="hidden lg:flex items-center space-x-6">
          <a 
            href="https://wa.me/2347037092049?text=Hello%20Valington%20Homes,%20I%20am%20interested%20in%20your%20properties."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-neutral-300 hover:text-gold transition-colors duration-300"
          >
            <Phone className="w-4 h-4 mr-2 text-gold animate-pulse" />
            <span>+234 703 709 2049</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="relative px-5 py-2.5 rounded-md text-xs font-bold tracking-wide text-neutral-950 overflow-hidden bg-gold-gradient transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:scale-[1.02] active:scale-95 bg-gold-gradient-hover"
          >
            <span className="relative z-10 flex items-center gap-1.5 uppercase">
              <Calendar className="w-4 h-4" /> Book Consultation
            </span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <a 
            href="https://wa.me/2347037092049?text=Hello%20Valington%20Homes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-white/10 bg-neutral-900/60 backdrop-blur-md text-gold hover:text-gold-light transition-colors"
          >
            <Phone className="w-4 h-4 text-gold" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-lg border border-white/10 bg-neutral-900/80 backdrop-blur-md text-gold hover:text-gold-light focus:outline-none transition-all shadow-md active:scale-95 cursor-pointer relative z-50 animate-pulse-slow"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Background */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer (Fully responsive with Accordions) */}
      <div className={`fixed top-0 right-0 bottom-0 h-[100dvh] w-72 bg-neutral-950/95 border-l border-white/10 z-40 transform transition-transform duration-300 ease-in-out backdrop-blur-lg lg:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full pt-24 pb-20 px-6 space-y-4 overflow-y-auto no-scrollbar">
          
          {/* Mobile Investments Accordion */}
          <div className="border-b border-white/5 py-2">
            <button 
              onClick={() => setMobileInvestOpen(!mobileInvestOpen)}
              className="w-full flex justify-between items-center text-base font-medium text-neutral-300 hover:text-gold"
            >
              <span>Investments</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileInvestOpen ? 'rotate-180 text-gold' : 'text-neutral-500'}`} />
            </button>
            {mobileInvestOpen && (
              <div className="pl-4 mt-2 space-y-2.5">
                <a 
                  href="#properties" 
                  onClick={(e) => handleLinkClick(e, '#properties')}
                  className="block text-sm text-neutral-400 hover:text-gold py-1"
                >
                  Featured Listings
                </a>
                <a 
                  href="#heatmap" 
                  onClick={(e) => handleLinkClick(e, '#heatmap')}
                  className="block text-sm text-neutral-400 hover:text-gold py-1"
                >
                  Abuja Property Heatmap
                </a>
              </div>
            )}
          </div>

          {/* Mobile Company Accordion */}
          <div className="border-b border-white/5 py-2">
            <button 
              onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              className="w-full flex justify-between items-center text-base font-medium text-neutral-300 hover:text-gold"
            >
              <span>Company</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileCompanyOpen ? 'rotate-180 text-gold' : 'text-neutral-500'}`} />
            </button>
            {mobileCompanyOpen && (
              <div className="pl-4 mt-2 space-y-2.5">
                <a 
                  href="#overview" 
                  onClick={(e) => handleLinkClick(e, '#overview')}
                  className="block text-sm text-neutral-400 hover:text-gold py-1"
                >
                  Corporate Overview
                </a>
                <a 
                  href="#why-us" 
                  onClick={(e) => handleLinkClick(e, '#why-us')}
                  className="block text-sm text-neutral-400 hover:text-gold py-1"
                >
                  Why Invest With Us
                </a>
                <a 
                  href="#gallery" 
                  onClick={(e) => handleLinkClick(e, '#gallery')}
                  className="block text-sm text-neutral-400 hover:text-gold py-1"
                >
                  Project Portfolio
                </a>
              </div>
            )}
          </div>

          {/* Mobile Tools Accordion */}
          <div className="border-b border-white/5 py-2">
            <button 
              onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
              className="w-full flex justify-between items-center text-base font-medium text-neutral-300 hover:text-gold"
            >
              <span>Calculators</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileToolsOpen ? 'rotate-180 text-gold' : 'text-neutral-500'}`} />
            </button>
            {mobileToolsOpen && (
              <div className="pl-4 mt-2 space-y-2.5">
                <a 
                  href="#calculator" 
                  onClick={(e) => handleLinkClick(e, '#calculator')}
                  className="block text-sm text-neutral-400 hover:text-gold py-1"
                >
                  Projected ROI Calculator
                </a>
              </div>
            )}
          </div>

          <a
            href="#services"
            onClick={(e) => handleLinkClick(e, '#services')}
            className="text-base font-medium text-neutral-300 hover:text-gold py-2 border-b border-white/5"
          >
            Services
          </a>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="text-base font-medium text-neutral-300 hover:text-gold py-2 border-b border-white/5"
          >
            Contact
          </a>

          <div className="pt-6 flex flex-col space-y-4">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full py-3 rounded-md text-center text-sm font-bold text-neutral-950 bg-gold-gradient uppercase tracking-widest bg-gold-gradient-hover"
            >
              Book Consultation
            </a>
            <p className="text-center text-xs text-neutral-500">
              Plot 124, Jabi District, Abuja, Nigeria
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
