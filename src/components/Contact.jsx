import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' or 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending Message...');
    setStatusType('');

    // Simulate sending API request
    setTimeout(() => {
      setStatus('Message sent successfully! Thanks for reaching out.');
      setStatusType('success');
      setName('');
      setEmail('');
      setMessage('');
      
      // Auto clear alert message
      setTimeout(() => {
        setStatus('');
        setStatusType('');
      }, 4000);
    }, 1200);
  };

  const contactItems = [
    { icon: '📧', label: 'Email', value: 'aditya@email.com', href: 'mailto:aditya@email.com' },
    { icon: '🔗', label: 'LinkedIn', value: 'Aditya Narayan Dash', href: 'https://linkedin.com', target: '_blank' },
    { icon: '💻', label: 'GitHub', value: '@aditya', href: 'https://github.com', target: '_blank' },
    { icon: '🐦', label: 'Twitter', value: '@aditya_nd', href: 'https://twitter.com', target: '_blank' }
  ];

  return (
    <section id="contact" className="px-[8%] py-20 relative z-1">
      <div className="max-w-3xl mx-auto">
        <div className="scroll-reveal reveal text-center">
          <div className="font-fira text-xs text-accent tracking-widest uppercase mb-2 flex items-center gap-1.5 justify-center">
            <span className="opacity-50">&lt;</span>contact<span className="opacity-50">/&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 text-text">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent2 rounded-sm mb-8 mx-auto" />
          
          <div className="inline-flex items-center gap-2 bg-green/8 border border-green/20 rounded-full px-4 py-1.5 text-xs text-green font-fira mb-12">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse duration-1500" />
            Available for opportunities
          </div>
        </div>

        {/* Contact info grid */}
        <div className="scroll-reveal reveal grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {contactItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.target}
              rel={item.target ? 'noopener noreferrer' : undefined}
              className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 hover:border-accent hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,212,255,0.08)] transition-all duration-200"
            >
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <div className="text-[0.7rem] text-muted uppercase tracking-widest mb-0.5">{item.label}</div>
                <div className="text-sm font-semibold text-text">{item.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <form 
          onSubmit={handleSubmit}
          className="scroll-reveal reveal bg-card border border-border p-8 sm:p-10 rounded-2xl shadow-xl"
        >
          {/* Name Field */}
          <div className="relative mb-8">
            <input 
              type="text" 
              id="form-name" 
              required 
              placeholder=" " 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="peer w-full px-4 py-3 bg-white/2 dark:bg-black/5 border border-border rounded-md text-text text-sm outline-none focus:border-accent transition-colors"
            />
            <label 
              htmlFor="form-name"
              className="absolute left-4 top-3 text-muted text-sm transition-all duration-300 pointer-events-none 
                         peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-accent 
                         peer-not-placeholder-shown:-translate-y-7 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-accent"
            >
              Your Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative mb-8">
            <input 
              type="email" 
              id="form-email" 
              required 
              placeholder=" " 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full px-4 py-3 bg-white/2 dark:bg-black/5 border border-border rounded-md text-text text-sm outline-none focus:border-accent transition-colors"
            />
            <label 
              htmlFor="form-email"
              className="absolute left-4 top-3 text-muted text-sm transition-all duration-300 pointer-events-none 
                         peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-accent 
                         peer-not-placeholder-shown:-translate-y-7 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-accent"
            >
              Your Email
            </label>
          </div>

          {/* Message Field */}
          <div className="relative mb-8">
            <textarea 
              id="form-message" 
              required 
              rows={5}
              placeholder=" " 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="peer w-full px-4 py-3 bg-white/2 dark:bg-black/5 border border-border rounded-md text-text text-sm outline-none focus:border-accent transition-colors resize-none"
            />
            <label 
              htmlFor="form-message"
              className="absolute left-4 top-3 text-muted text-sm transition-all duration-300 pointer-events-none 
                         peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-accent 
                         peer-not-placeholder-shown:-translate-y-7 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-accent"
            >
              Your Message
            </label>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 bg-accent text-black font-semibold text-sm rounded-md hover:opacity-90 transition-opacity cursor-pointer"
          >
            Send Message
          </button>

          {/* Status Message */}
          {status && (
            <div className={`mt-6 text-center text-xs font-fira transition-opacity duration-300 ${
              statusType === 'success' ? 'text-green' : statusType === 'error' ? 'text-red-500' : 'text-text'
            }`}>
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
