import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Calendar, CheckSquare, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Property Development',
    mode: 'In-Person (Jabi HQ)',
    date: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate booking submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: '',
        email: '',
        phone: '',
        service: 'Property Development',
        mode: 'In-Person (Jabi HQ)',
        date: '',
        message: '',
      });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-neutral-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="font-serif text-sm font-semibold text-gold tracking-[0.25em] uppercase">
            Consultation Desk
          </h2>
          <p className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Schedule an Advisory Session
          </p>
          <div className="h-0.5 w-16 bg-gold mx-auto mt-4" />
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-xl mx-auto leading-relaxed pt-2">
            Book a physical meeting at our Jabi headquarters or request an encrypted video session (Zoom or WhatsApp Video) with our investment directors.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Panel: Contact Info & Styled Mock Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6 text-left">
              <h3 className="font-serif text-2xl font-bold text-white">
                Valington HQ Office
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    Plot 124, Jabi district, Zone B Area, near Jabi Lake Mall, FCT, Abuja, Nigeria.
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                  <p className="text-sm text-neutral-300 font-light">
                    +234 703 709 2049
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                  <p className="text-sm text-neutral-300 font-light">
                    advisory@valingtonhomes.com
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div className="text-sm text-neutral-300 font-light space-y-1">
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM (By Appointment)</p>
                    <p className="text-gold">Diaspora Hotline: 24/7 Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dark Stylized Visual Mock Map Panel */}
            <div className="relative h-64 bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between p-6 shadow-xl">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              
              <div className="flex justify-between items-center z-10 text-xs text-neutral-500 font-mono">
                <span>RADAR VECTOR CHECK</span>
                <span className="text-emerald-400">GPS ONLINE</span>
              </div>

              {/* Styled Mock Coordinates Grid */}
              <div className="z-10 text-center space-y-2">
                <MapPin className="w-8 h-8 text-gold mx-auto animate-bounce" />
                <h4 className="font-serif font-bold text-white text-sm">Jabi District, Abuja</h4>
                <p className="text-[10px] text-neutral-400 font-mono">LAT: 9.0778° N &bull; LONG: 7.4121° E</p>
              </div>

              <a 
                href="https://maps.google.com/?q=Jabi+Abuja"
                target="_blank"
                rel="noopener noreferrer"
                className="z-10 w-full py-2.5 rounded text-center text-xs font-bold uppercase tracking-wider text-white border border-gold/30 hover:border-gold bg-neutral-950/80 hover:bg-gold/10 transition-colors"
              >
                Launch Navigation Map
              </a>
            </div>
          </div>

          {/* Right Panel: Advanced Booking Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 shadow-2xl relative">
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-gold/10 rounded-full blur-xl animate-pulse" />

            <form onSubmit={handleSubmit} className="space-y-6 text-left relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full bg-neutral-900/60 border border-white/10 rounded-lg py-3 px-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="e.g. +234..."
                    className="w-full bg-neutral-900/60 border border-white/10 rounded-lg py-3 px-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="e.g. investor@example.com"
                  className="w-full bg-neutral-900/60 border border-white/10 rounded-lg py-3 px-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">
                    Inquiry Service
                  </label>
                  <select
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full bg-neutral-900 border border-white/10 rounded-lg py-3 px-4 text-sm text-neutral-200 focus:outline-none focus:border-gold transition-all"
                  >
                    <option>Property Development</option>
                    <option>Property Marketing</option>
                    <option>Property Management</option>
                    <option>Real Estate Consultancy</option>
                    <option>Investment Advisory</option>
                    <option>Facility Management</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">
                    Meeting Format
                  </label>
                  <select
                    name="mode"
                    value={formState.mode}
                    onChange={handleChange}
                    className="w-full bg-neutral-900 border border-white/10 rounded-lg py-3 px-4 text-sm text-neutral-200 focus:outline-none focus:border-gold transition-all"
                  >
                    <option>In-Person (Jabi HQ)</option>
                    <option>Google Meet (Virtual)</option>
                    <option>WhatsApp Video call (Virtual)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-3.5 w-4 h-4 text-gold" />
                  <input
                    type="date"
                    name="date"
                    required
                    value={formState.date}
                    onChange={handleChange}
                    className="w-full bg-neutral-900/60 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-gold transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">
                  Brief Message
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us about your property goals..."
                  className="w-full bg-neutral-900/60 border border-white/10 rounded-lg py-3 px-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none"
                />
              </div>

              {/* Submit Button & WhatsApp Quick Connect */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="submit"
                  className="flex-grow py-4 rounded-lg font-bold text-sm text-neutral-950 bg-gold-gradient hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 flex items-center justify-center space-x-2 uppercase tracking-wider bg-gold-gradient-hover cursor-pointer"
                >
                  <CheckSquare className="w-4 h-4" />
                  <span>Reserve Advisory Session</span>
                </button>

                <a
                  href="https://wa.me/2347037092049?text=Hello%20Valington%20Homes%20Advisory,%20I%20want%20to%20schedule%20a%20consultation%20for%20investing%20in%20Abuja."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-lg font-bold text-sm text-white border border-emerald-500/40 hover:bg-emerald-500/10 transition-all duration-300 flex items-center justify-center space-x-2 uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp advisory</span>
                </a>
              </div>
            </form>

            {/* Success Prompt */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-neutral-950/90 rounded-3xl z-20 flex flex-col items-center justify-center text-center p-8 border border-gold">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-gold animate-pulse" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-gold-light mb-2">Request Transmitted</h4>
                <p className="text-sm text-neutral-300 font-light max-w-sm leading-relaxed mb-4">
                  Thank you, <span className="text-white font-bold">{formState.name}</span>. An Investment Director is verifying open slots for <span className="text-white font-bold">{formState.date}</span>. We will call you shortly.
                </p>
                <span className="text-[10px] text-neutral-500 font-mono">ENCRYPTED ID: VAL-BKG-{Math.floor(Math.random() * 90000 + 10000)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
