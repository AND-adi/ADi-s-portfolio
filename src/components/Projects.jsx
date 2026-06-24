import useTilt from '../hooks/useTilt';

function ProjectCard({ icon, title, desc, tags, githubLink, liveLink }) {
  const cardRef = useTilt(8);

  return (
    <div
      ref={cardRef}
      className="bg-card border border-border rounded-xl p-8 relative overflow-hidden group transition-all duration-300 hover:border-accent/40 shadow-lg preserve-3d"
    >
      {/* Top border neon line hover slider */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 pointer-events-none" />

      {/* Dynamic Cursor Glow Layer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          background: 'radial-gradient(280px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 212, 255, 0.08), transparent 75%)'
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 h-full flex flex-col justify-between preserve-3d">
        <div>
          {/* Header Area */}
          <div className="flex justify-between items-start mb-6 transform translate-z-20">
            <span className="text-3xl filter drop-shadow-[0_0_8px_rgba(0,212,255,0.2)]">
              {icon}
            </span>
            <div className="flex gap-3">
              {githubLink && (
                <a 
                  href={githubLink} 
                  className="text-muted hover:text-accent font-semibold text-lg transition-colors" 
                  title="GitHub"
                >
                  ⌥
                </a>
              )}
              {liveLink && (
                <a 
                  href={liveLink} 
                  className="text-muted hover:text-accent font-semibold text-lg transition-colors" 
                  title="Live Demo"
                >
                  ↗
                </a>
              )}
            </div>
          </div>

          {/* Title and Description */}
          <h3 className="text-lg font-bold text-text mb-3 transform translate-z-10 group-hover:text-accent transition-colors duration-200">
            {title}
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light transform translate-z-5">
            {desc}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 transform translate-z-10 mt-auto">
          {tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="bg-accent/7 border border-accent/15 rounded-[3px] px-2 py-0.5 font-fira text-[0.7rem] text-accent font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projectsData = [
    {
      icon: '🤖',
      title: 'AI Chat Assistant',
      desc: 'A conversational AI interface built with React and integrated with LLM APIs. Features real-time streaming responses and context memory.',
      tags: ['React', 'Python', 'LLM API', 'FastAPI'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      icon: '📊',
      title: 'Sentiment Analyzer',
      desc: 'NLP-powered web app that analyzes sentiment in text using a fine-tuned transformer model with an interactive visual dashboard.',
      tags: ['Python', 'HuggingFace', 'Flask'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      icon: '🌐',
      title: 'This Portfolio',
      desc: 'Built from scratch with animated particle constellation, typewriter effect, floating photo, and scroll-triggered reveals — no frameworks.',
      tags: ['React', 'Tailwind v4', 'Vite'],
      githubLink: '#',
      liveLink: '#'
    }
  ];

  return (
    <section id="projects" className="bg-bg2 px-[8%] py-20 relative z-1">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal reveal">
          <div className="font-fira text-xs text-accent tracking-widest uppercase mb-2 flex items-center gap-1.5 justify-center md:justify-start">
            <span className="opacity-50">&lt;</span>projects<span className="opacity-50">/&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 text-center md:text-left text-text">
            Things I've Built
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent2 rounded-sm mb-12 mx-auto md:mx-0" />
        </div>

        <div className="scroll-reveal reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <ProjectCard
              key={idx}
              icon={project.icon}
              title={project.title}
              desc={project.desc}
              tags={project.tags}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
