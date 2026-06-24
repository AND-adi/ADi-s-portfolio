import useTilt from '../hooks/useTilt';

function SkillCard({ icon, name }) {
  const cardRef = useTilt(12);

  return (
    <div
      ref={cardRef}
      className="bg-card border border-border rounded-xl px-4 py-6 text-center cursor-default select-none relative overflow-hidden group transition-all duration-200 hover:border-accent/40 shadow-sm preserve-3d"
    >
      {/* Dynamic Cursor Glow Layer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          background: 'radial-gradient(160px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 212, 255, 0.08), transparent 75%)'
        }}
      />
      {/* 3D Content items */}
      <span className="text-3xl mb-3 block transform translate-z-20 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      <div className="text-[0.78rem] text-muted font-semibold uppercase tracking-wider leading-relaxed transform translate-z-10 group-hover:text-text transition-colors">
        {name}
      </div>
    </div>
  );
}

export default function Skills() {
  const skillsData = [
    { icon: '🧠', name: 'Machine Learning' },
    { icon: '🐍', name: 'Python' },
    { icon: '⚛️', name: 'React' },
    { icon: '🌐', name: 'HTML / CSS' },
    { icon: '📜', name: 'JavaScript' },
    { icon: '🔥', name: 'TensorFlow' },
    { icon: '🤗', name: 'HuggingFace' },
    { icon: '🗃️', name: 'Git / GitHub' },
    { icon: '☁️', name: 'REST APIs' },
    { icon: '📊', name: 'Data Analysis' },
    { icon: '🎨', name: 'Tailwind CSS' },
    { icon: '🔗', name: 'Node.js' }
  ];

  return (
    <section id="skills" className="px-[8%] py-20 relative z-1">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal reveal">
          <div className="font-fira text-xs text-accent tracking-widest uppercase mb-2 flex items-center gap-1.5 justify-center md:justify-start">
            <span className="opacity-50">&lt;</span>skills<span className="opacity-50">/&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 text-center md:text-left text-text">
            What I Work With
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent2 rounded-sm mb-12 mx-auto md:mx-0" />
        </div>

        <div className="scroll-reveal reveal grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skillsData.map((skill, idx) => (
            <SkillCard key={idx} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
