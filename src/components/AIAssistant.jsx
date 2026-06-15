import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Compass, User, Bot, Loader2 } from 'lucide-react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I am your Valington Luxury Asset Advisor. How can I guide your Abuja property investment today?",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const presetQuestions = [
    { q: 'Recommend properties', a: "I highly recommend the following signature properties: \n\n1. **The Grand Vista Manor (Maitama)** - ₦1.25B (Elite security, hilltop views).\n2. **Jabi Lakefront Villa (Jabi)** - ₦980M (Waterfront living, boat dock).\n3. **Guzape Heights Duplex (Guzape)** - ₦550M (High capital growth).\n4. **Smart-City Plots (Lugbe)** - ₦45M (Rapid appreciation).\n\nWould you like to schedule an inspection for any of these?" },
    { q: 'Verify FCT land titles', a: "At Valington Homes, all land holdings are legally verified at the Abuja Geographic Information Systems (AGIS) database. Upon registration, we provide buyers with verified Certificates of Occupancy (C of O) or Rights of Occupancy (R of O) clear of any prior litigations. You can inspect these details at our Jabi office." },
    { q: 'Calculate land ROI', a: "Abuja's prime nodes (like Guzape Phase II and Lugbe Corridor) have shown historical capital appreciation rates between 25% and 38% per year due to rapid infrastructure deployment. For instance, a ₦45M plot in Lugbe is projected to hit ₦80M+ value within 3 years. Use our Investment ROI Simulator above to model your holdings!" },
    { q: 'Book site inspection', a: "Wonderful! We run physical inspections of our Abuja sites daily from Monday to Saturday (10:00 AM - 4:00 PM). Please scroll down to the 'Advisory Session' booking form or click the WhatsApp button to let our concierge team arrange comfortable transport for you." },
  ];

  const handleSendPreset = (preset) => {
    // Add user message
    setMessages((prev) => [...prev, { sender: 'user', text: preset.q }]);
    setIsTyping(true);

    // Simulate bot reply
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { sender: 'bot', text: preset.a }]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Bubble Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center text-neutral-950 shadow-lg shadow-gold/30 cursor-pointer relative animate-pulse-slow"
        aria-label="Open AI Assistant"
      >
        <div className="absolute inset-0 bg-gold/20 rounded-full blur-md animate-ping" />
        {isOpen ? <X className="w-6 h-6 z-10" /> : <MessageSquare className="w-6 h-6 z-10" />}
      </motion.button>

      {/* Chat Interface Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 bg-neutral-950 border border-gold/45 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-50 h-[480px]"
          >
            {/* Header */}
            <div className="bg-neutral-900 px-4 py-3 flex items-center space-x-3 border-b border-white/10 text-left">
              <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center border border-gold/30">
                <Compass className="w-4 h-4 text-gold" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-gold-light">Valington AI Advisor</h4>
                <span className="text-[9px] text-emerald-400 font-mono">ONLINE &bull; SMART RECOMMENDER</span>
              </div>
            </div>

            {/* Messages Log area */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 no-scrollbar bg-neutral-950/90 text-left">
              {messages.map((msg, idx) => {
                const isBot = msg.sender === 'bot';
                return (
                  <div key={idx} className={`flex ${isBot ? 'justify-start' : 'justify-end'} items-start space-x-2`}>
                    {isBot && (
                      <div className="w-7 h-7 rounded-full bg-neutral-900 border border-gold/20 flex items-center justify-center mt-1">
                        <Bot className="w-3.5 h-3.5 text-gold" />
                      </div>
                    )}
                    <div className={`p-3 rounded-xl max-w-[80%] text-xs font-light leading-relaxed whitespace-pre-line ${
                      isBot 
                        ? 'bg-neutral-900/80 text-neutral-200 border border-white/5' 
                        : 'bg-gold-gradient text-neutral-950 font-medium'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                );
              })}

              {/* Typing simulation loading indicator */}
              {isTyping && (
                <div className="flex justify-start items-center space-x-2">
                  <div className="w-7 h-7 rounded-full bg-neutral-900 border border-gold/20 flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <div className="p-3 bg-neutral-900/80 border border-white/5 rounded-xl flex items-center space-x-1.5">
                    <Loader2 className="w-3 h-3 text-gold animate-spin" />
                    <span className="text-[10px] text-neutral-500 font-mono">Advisory check...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Presets Grid Panel */}
            <div className="p-3 border-t border-white/5 bg-neutral-900/40 text-left space-y-1.5">
              <span className="text-[9px] text-neutral-500 uppercase tracking-widest font-mono block pl-1">Quick Inquiries:</span>
              <div className="grid grid-cols-2 gap-1.5">
                {presetQuestions.map((preset) => (
                  <button
                    key={preset.q}
                    disabled={isTyping}
                    onClick={() => handleSendPreset(preset)}
                    className="p-2 bg-neutral-950 border border-white/10 hover:border-gold rounded-lg text-[10px] text-neutral-300 font-medium text-left transition-colors cursor-pointer hover:bg-neutral-900 active:scale-95 disabled:opacity-50"
                  >
                    {preset.q} &rarr;
                  </button>
                ))}
              </div>
            </div>

            {/* Input simulator (visual decoration) */}
            <div className="p-3 bg-neutral-900/60 border-t border-white/10 flex space-x-2">
              <input
                type="text"
                disabled
                placeholder="Select inquiries from presets above..."
                className="flex-grow bg-neutral-950 border border-white/5 rounded-lg px-3 py-2 text-[10px] text-neutral-500 focus:outline-none"
              />
              <button disabled className="p-2 bg-neutral-900 rounded-lg text-neutral-600">
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
