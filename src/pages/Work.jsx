import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  const cards = [
    {
      num: "01",
      title: "Web Development",
      desc: "Crafting responsive, high-performance web applications using modern frameworks and robust logic."
    },
    {
      num: "02",
      title: "Full Stack Solutions",
      desc: "End-to-end architecture handling scalable databases, secure APIs, and seamless integrations."
    },
    {
      num: "03",
      title: "UI/UX Design",
      desc: "Designing ultra-minimal, intuitive, and premium interfaces with millimeter-perfect precision."
    },
    {
      num: "04",
      title: "AI Integration",
      desc: "Deploying next-gen algorithms and machine learning pipelines right into the application layer."
    }
  ];

  useGSAP(() => {
    const sections = gsap.utils.toArray('.work-card');
    
    // Horizontal scroll animation
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        // snap: 1 / (sections.length - 1),
        end: () => "+=" + scrollRef.current.offsetWidth,
      }
    });

  }, { scope: containerRef });

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      {/* Intro Header */}
      <div className="pt-[120px] px-8 md:px-16 max-w-[1400px] mx-auto pb-12">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Capabilities
        </h1>
        <div className="w-16 h-[2px] bg-[#ff2a2a] mb-8"></div>
        <p className="text-[18px] md:text-[24px] font-light max-w-2xl text-[rgba(255,255,255,0.5)]">
          Scroll down to explore our core competencies and services.
        </p>
      </div>

      {/* Horizontal Scroll Section */}
      <div ref={containerRef} className="h-screen flex items-center overflow-hidden bg-[#050505]">
        <div ref={scrollRef} className="flex h-[400px] md:h-[500px] w-max ml-[10vw]">
          {cards.map((card, index) => (
            <div key={card.num} className="work-card w-[80vw] md:w-[600px] flex-shrink-0 flex items-center justify-center px-4 md:px-8">
              <div className="relative w-full h-full bg-[#0a0b10] rounded-[2rem] border border-[rgba(255,255,255,0.03)] p-10 md:p-14 flex flex-col justify-end group transition-transform duration-700 hover:-translate-y-2 shadow-2xl">
                
                {/* Large Background Number */}
                <div className="absolute top-8 right-10 text-[80px] md:text-[120px] font-black text-[rgba(255,255,255,0.04)] leading-none font-['Inter'] pointer-events-none transition-all duration-700 group-hover:text-[rgba(255,255,255,0.08)]">
                  {card.num}
                </div>

                {/* Text Content */}
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{card.title}</h2>
                  <p className="text-[rgba(255,255,255,0.6)] text-base md:text-lg leading-relaxed max-w-[400px] font-light">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Glowing Gradient Border */}
                <div className="absolute bottom-0 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#4f46e5] via-[#8b5cf6] to-[#ec4899] opacity-40 group-hover:opacity-100 group-hover:shadow-[0_-5px_30px_rgba(139,92,246,0.6)] transition-all duration-700 rounded-t-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Post-Scroll Spacer */}
      <div className="h-[50vh] bg-[#050505] flex flex-col items-center justify-center border-t border-[rgba(255,255,255,0.05)]">
        <h2 className="text-[#ff2a2a] text-2xl font-bold tracking-widest uppercase mb-4">Let's build together</h2>
        <a href="/contact" className="text-white text-sm uppercase tracking-widest hover:text-[#ff2a2a] transition-colors border border-[rgba(255,255,255,0.2)] hover:border-[#ff2a2a] px-8 py-3 rounded-full">Get in touch</a>
      </div>
    </div>
  );
};

export default Work;
