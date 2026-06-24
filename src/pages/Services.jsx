import React from 'react';

const Services = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      tech: "REACT, NODE.JS, STRIPE",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      className: "md:col-span-1 md:row-span-2"
    },
    {
      id: 2,
      title: "UX/UI Design",
      tech: "FIGMA, PROTOTYPING, WIREFRAMES",
      img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      className: "md:col-span-1 md:row-span-2"
    },
    {
      id: 3,
      title: "Crypto Wallet",
      tech: "WEB3, REACT NATIVE, SOLIDITY",
      img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      tech: "VUE.JS, D3.JS, PYTHON",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 5,
      title: "Mobile Architecture",
      tech: "FLUTTER, FIREBASE, GCP",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 6,
      title: "Cloud Infrastructure",
      tech: "AWS, DOCKER, KUBERNETES",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      className: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-[140px] px-4 md:px-8 pb-24 font-['Inter']">
      
      {/* Header section */}
      <div className="max-w-[1400px] mx-auto mb-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Services
        </h1>
        <div className="w-16 h-[2px] bg-[#ff2a2a] mb-6"></div>
        <p className="text-[16px] md:text-[20px] font-light max-w-2xl text-[rgba(255,255,255,0.5)]">
          Explore the domains of expertise and technical solutions we provide. Hover over each capability to reveal the technology stack.
        </p>
      </div>

      {/* Masonry / Bento Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`relative overflow-hidden rounded-[2rem] group cursor-pointer bg-[#0a0a0a] ${project.className}`}
          >
            {/* Background Image */}
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            
            {/* Hover Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10 pointer-events-none">
              
              {/* Animated Text Content */}
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <p className="text-[#8ba3d1] text-[10px] md:text-xs font-bold uppercase tracking-[3px] mb-2 drop-shadow-md">
                  {project.tech}
                </p>
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight drop-shadow-lg">
                  {project.title}
                </h3>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Services;
