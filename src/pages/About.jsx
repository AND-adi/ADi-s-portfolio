import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-[120px] px-8 md:px-16 pb-24 flex flex-col md:flex-row items-center justify-between max-w-[1400px] mx-auto gap-12">
      
      {/* Left Content */}
      <div className="flex-1 flex flex-col space-y-8 w-full z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          About Me
        </h1>
        
        <div className="space-y-6 text-[16px] md:text-[18px] text-[rgba(255,255,255,0.7)] font-light leading-relaxed max-w-2xl" style={{ fontFamily: '"Inter", "Outfit", sans-serif' }}>
          <p>
            I'm Aditya, an AI Developer & Frontend Engineer passionate about building modern, scalable, and visually stunning web applications.
          </p>
          <p>
            I blend deep technical expertise with a creative, problem-solving mindset. Whether it's crafting high-performance backends or rendering millimeter-perfect UI designs, I bridge the gap between engineering and art.
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-4 pt-6">
          <div className="bg-[#111111] rounded-2xl p-6 flex-1 min-w-[130px] flex flex-col items-center justify-center border border-[rgba(255,255,255,0.03)] transition-transform hover:-translate-y-1 duration-300">
            <h3 className="text-4xl font-extrabold bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] bg-clip-text text-transparent mb-2">50+</h3>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">PROJECTS</p>
          </div>
          
          <div className="bg-[#111111] rounded-2xl p-6 flex-1 min-w-[130px] flex flex-col items-center justify-center border border-[rgba(255,255,255,0.03)] transition-transform hover:-translate-y-1 duration-300">
            <h3 className="text-4xl font-extrabold bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent mb-2">4 Yrs</h3>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">EXPERIENCE</p>
          </div>

          <div className="bg-[#111111] rounded-2xl p-6 flex-1 min-w-[130px] flex flex-col items-center justify-center border border-[rgba(255,255,255,0.03)] transition-transform hover:-translate-y-1 duration-300">
            <h3 className="text-4xl font-extrabold text-white mb-2">100%</h3>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">SATISFACTION</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center items-center relative w-full max-w-[500px] mt-16 md:mt-0">
        {/* Glow Effect Background */}
        <div className="absolute inset-0 bg-[#8b5cf6] rounded-full blur-[120px] opacity-20 transform scale-90"></div>
        
        {/* Image Container */}
        <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-[rgba(255,255,255,0.05)] p-2 shadow-2xl">
          <img 
            src="/restaurant_photo.jpg" 
            alt="Aditya Narayan Dash" 
            className="w-full h-full object-cover rounded-[1.5rem] opacity-90 hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </div>

    </div>
  );
};

export default About;
