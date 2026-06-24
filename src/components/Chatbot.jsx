import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "dummy_key");

const Chatbot = ({ isOpen, onClose }) => {
  const chatRef = useRef(null);
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hello! I'm AND's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isOpen) {
      gsap.to(chatRef.current, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out', display: 'flex' });
    } else {
      gsap.to(chatRef.current, {
        x: '100%', opacity: 0, duration: 0.4, ease: 'power3.in',
        onComplete: () => gsap.set(chatRef.current, { display: 'none' })
      });
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userText = input;
    setMessages(prev => [...prev, { type: 'user', text: userText }]);
    setInput("");
    
    // Safety check for API Key
    if (!import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_GEMINI_API_KEY === 'your_api_key_here') {
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          type: 'bot', 
          text: "SYSTEM ALERT: To enable AI, please get a free Gemini API key from Google AI Studio and paste it into the .env file in your project root." 
        }]);
      }, 500);
      return;
    }

    setIsTyping(true);

    try {
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: "You are the personal AI assistant for Aditya Narayan Dash (AND). He is a highly talented AI Developer and Frontend Engineer. His email is adityanarayandash6006@gmail.com. His GitHub is https://github.com/AND-adi and LinkedIn is https://www.linkedin.com/in/aditya-narayan-dash-548a0835b/. Be extremely professional, concise, and helpful. Your goal is to represent him well and convince clients or recruiters to hire him."
      });

      // Format history (ignoring the initial hardcoded greeting)
      const history = messages
        .filter(m => m.text !== "Hello! I'm AND's AI assistant. How can I help you today?")
        .map(m => ({
          role: m.type === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }]
        }));

      const chat = model.startChat({ history });
      const result = await chat.sendMessage(userText);
      const response = await result.response;
      
      setMessages(prev => [...prev, { type: 'bot', text: response.text() }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { type: 'bot', text: "Sorry, my neural link is down right now! Please check your API key and console logs." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div 
      ref={chatRef}
      className="fixed top-0 right-0 w-full md:w-[400px] h-[100dvh] bg-[#0a0a0a] border-l border-[rgba(255,255,255,0.05)] z-[200] flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] hidden translate-x-full opacity-0 font-['Inter']"
    >
      {/* Header */}
      <div className="h-[80px] border-b border-[rgba(255,255,255,0.05)] flex items-center justify-between px-6 bg-[#050505]">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center border border-[rgba(255,255,255,0.05)] shadow-inner">
            <span className="text-[#ff2a2a] text-xs font-black tracking-widest">AI</span>
          </div>
          <div>
            <h3 className="text-white text-sm font-bold tracking-wider">AND° ASSISTANT</h3>
            <p className="text-[#00ff9d] text-[10px] uppercase tracking-[3px] flex items-center gap-2 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] inline-block animate-pulse shadow-[0_0_8px_#00ff9d]"></span>
              Online
            </p>
          </div>
        </div>
        <button onClick={onClose} className="text-[rgba(255,255,255,0.3)] hover:text-white transition-colors duration-300">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-lg ${
                msg.type === 'user' 
                  ? 'bg-gradient-to-br from-[#ff2a2a] to-[#d41c1c] text-white rounded-tr-sm' 
                  : 'bg-[#111111] text-[rgba(255,255,255,0.8)] border border-[rgba(255,255,255,0.03)] rounded-tl-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-[#111111] border border-[rgba(255,255,255,0.03)] rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[rgba(255,255,255,0.5)] rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-[rgba(255,255,255,0.5)] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-1.5 h-1.5 bg-[rgba(255,255,255,0.5)] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-[rgba(255,255,255,0.05)] bg-[#050505]">
        <form onSubmit={handleSend} className="relative flex items-center group">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isTyping}
            placeholder={isTyping ? "AI is typing..." : "Type your message..."}
            className="w-full bg-[#0a0a0a] border border-[rgba(255,255,255,0.05)] rounded-full pl-6 pr-14 py-4 text-sm text-white placeholder-[rgba(255,255,255,0.3)] focus:outline-none focus:border-[#ff2a2a] focus:bg-[#111111] transition-all duration-300 disabled:opacity-50"
          />
          <button 
            type="submit" 
            disabled={isTyping || !input.trim()}
            className="absolute right-2 w-10 h-10 flex items-center justify-center rounded-full bg-[#111] text-[rgba(255,255,255,0.5)] border border-[rgba(255,255,255,0.05)] hover:bg-[#ff2a2a] hover:text-white hover:border-[#ff2a2a] transition-all duration-300 disabled:opacity-50 disabled:hover:bg-[#111]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform translate-x-[1px]"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
