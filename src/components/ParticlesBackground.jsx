import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let W, H;
    const particles = [];
    const mouse = { x: null, y: null };
    const PARTICLE_COUNT = 120;
    const CONNECTION_DIST = 150;
    const MOUSE_DIST = 180;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.color = Math.random() < 0.6 ? '#00d4ff' : Math.random() < 0.5 ? '#7b2fff' : '#00ff88';
        this.alpha = Math.random() * 0.6 + 0.3;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > W) this.vx *= -1;
        if (this.y < 0 || this.y > H) this.vy *= -1;

        // Mouse repulsion
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MOUSE_DIST) {
            const force = (MOUSE_DIST - d) / MOUSE_DIST;
            this.vx += (dx / d) * force * 0.3;
            this.vy += (dy / d) * force * 0.3;
          }
        }

        // Speed cap
        const spd = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (spd > 1.5) {
          this.vx = (this.vx / spd) * 1.5;
          this.vy = (this.vy / spd) * 1.5;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        const isLight = document.body.classList.contains('light-theme');
        let baseColor = this.color;
        if (isLight) {
          if (baseColor === '#00d4ff') baseColor = '#0077b6';
          else if (baseColor === '#7b2fff') baseColor = '#7209b7';
          else if (baseColor === '#00ff88') baseColor = '#00aa5e';
        }
        ctx.fillStyle = baseColor;
        ctx.shadowBlur = 8;
        ctx.shadowColor = baseColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      
      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECTION_DIST) {
            const alpha = (1 - d / CONNECTION_DIST) * 0.35;
            ctx.save();
            ctx.globalAlpha = alpha;
            const isLight = document.body.classList.contains('light-theme');
            ctx.strokeStyle = isLight ? '#0077b6' : '#00d4ff';
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      id="particles-canvas"
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-70"
    />
  );
}
