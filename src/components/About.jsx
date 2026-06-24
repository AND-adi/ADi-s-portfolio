import { useState, useEffect, useRef } from 'react';

function StatCard({ targetNum, label, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated && typeof targetNum === 'number') {
          setHasAnimated(true);
          let current = 0;
          const interval = setInterval(() => {
            current += 1;
            if (current >= targetNum) {
              setCount(targetNum);
              clearInterval(interval);
            } else {
              setCount(current);
            }
          }, 100);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [targetNum, hasAnimated]);

  return (
    <div 
      ref={cardRef} 
      className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent hover:-translate-y-1 transition-all duration-300 shadow-md"
    >
      <span className="font-fira text-3xl sm:text-4xl font-extrabold text-accent block leading-none">
        {typeof targetNum === 'number' ? `${count}${suffix}` : targetNum}
      </span>
      <div className="text-[0.78rem] text-muted uppercase tracking-widest mt-2">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-bg2 px-[8%] py-20 relative z-1">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal reveal">
          <div className="font-fira text-xs text-accent tracking-widest uppercase mb-2 flex items-center gap-1.5 justify-center md:justify-start">
            <span className="opacity-50">&lt;</span>about me<span className="opacity-50">/&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 text-center md:text-left text-text">
            Who Am I?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent2 rounded-sm mb-12 mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Left: Bio Text */}
          <div className="scroll-reveal-left reveal-left space-y-4 text-center md:text-left text-neutral-400 font-light leading-relaxed">
            <p>
              Hey! I'm <span className="text-accent font-semibold">Aditya Narayan Dash</span>, an AI intern passionate about bridging the gap between cutting-edge machine learning research and real-world frontend applications.
            </p>
            <p>
              I'm currently deep in learning <span className="text-accent font-semibold">transformer architectures</span>, prompt engineering, and building user-friendly AI-powered interfaces that feel intuitive and fast.
            </p>
            <p>
              When I'm not coding, you'll find me reading AI research papers, experimenting with new models, or exploring how <span className="text-accent font-semibold">generative AI</span> can reshape product design.
            </p>
          </div>

          {/* Right: Counter Stats */}
          <div className="scroll-reveal-right reveal-right grid grid-cols-2 gap-4">
            <StatCard targetNum={10} suffix="+" label="Projects Built" />
            <StatCard targetNum={3} label="Tech Stacks" />
            <StatCard targetNum={6} suffix="+" label="Months Interning" />
            <StatCard targetNum="∞" label="Curiosity" />
          </div>
        </div>
      </div>
    </section>
  );
}
