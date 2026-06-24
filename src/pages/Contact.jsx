import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-[140px] px-6 md:px-8 pb-24 flex flex-col items-center font-['Inter']">
      
      {/* Top small text */}
      <div className="flex items-center space-x-3 text-[#ff2a2a] text-[10px] md:text-xs uppercase tracking-[4px] font-bold mb-8">
        <span className="opacity-50">|</span>
        <span>ENCRYPTED CHANNEL</span>
        <span className="opacity-50">|</span>
      </div>

      {/* Heading */}
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 text-center flex flex-wrap items-center justify-center gap-3 md:gap-5">
        <span>Let's</span>
        <span className="text-[#ff2a2a] italic font-serif">Connect</span>
      </h1>

      {/* Subtext */}
      <p className="text-[rgba(255,255,255,0.6)] text-center max-w-[700px] text-sm md:text-base leading-relaxed mb-16 font-light">
        Whether you have a groundbreaking tech vision, a complex application to build, or just want to talk shop—my inbox is always open. Let's collaborate and architect the digital tools of tomorrow.
      </p>

      {/* Form */}
      <form className="w-full max-w-[800px] flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
        
        {/* Name and Email Row */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <input 
            type="text" 
            placeholder="Name" 
            className="flex-1 bg-[#0a0a0a] border border-[rgba(255,255,255,0.03)] rounded-2xl px-6 py-5 text-sm md:text-base text-white placeholder-[rgba(255,255,255,0.3)] focus:outline-none focus:border-[#ff2a2a] focus:bg-[#111111] transition-colors duration-300"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="flex-1 bg-[#0a0a0a] border border-[rgba(255,255,255,0.03)] rounded-2xl px-6 py-5 text-sm md:text-base text-white placeholder-[rgba(255,255,255,0.3)] focus:outline-none focus:border-[#ff2a2a] focus:bg-[#111111] transition-colors duration-300"
          />
        </div>
        
        {/* Message Area */}
        <textarea 
          placeholder="Message" 
          rows="6"
          className="w-full bg-[#0a0a0a] border border-[rgba(255,255,255,0.03)] rounded-2xl px-6 py-5 text-sm md:text-base text-white placeholder-[rgba(255,255,255,0.3)] focus:outline-none focus:border-[#ff2a2a] focus:bg-[#111111] transition-colors duration-300 resize-none"
        ></textarea>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button 
            type="submit" 
            className="group flex items-center gap-4 bg-[#050505] border border-[rgba(255,255,255,0.05)] hover:border-[#ff2a2a] rounded-full px-10 py-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,42,42,0.2)]"
          >
            <span className="text-white text-[11px] uppercase tracking-[3px] font-bold group-hover:text-[#ff2a2a] transition-colors">
              TRANSMIT MESSAGE
            </span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#ff2a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </form>

      {/* Social Links from previous integration */}
      <div className="mt-24 pt-12 border-t border-[rgba(255,255,255,0.05)] w-full max-w-[800px] flex flex-col items-center space-y-6">
        <a href="mailto:adityanarayandash6006@gmail.com" className="text-[#ff2a2a] text-lg md:text-xl font-medium hover:text-white transition-colors">
          adityanarayandash6006@gmail.com
        </a>
        <div className="flex gap-8">
          <a href="https://github.com/AND-adi" target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.5)] text-[11px] uppercase tracking-[2px] font-medium hover:text-[#ff2a2a] transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/aditya-narayan-dash-548a0835b/" target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.5)] text-[11px] uppercase tracking-[2px] font-medium hover:text-[#ff2a2a] transition-colors">LinkedIn</a>
        </div>
      </div>

    </div>
  );
};

export default Contact;
