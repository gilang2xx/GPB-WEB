import React, { useState, useRef, useEffect } from 'react';
import { SectionHeader } from './UI/SectionHeader';
import { SkewButton } from './UI/SkewButton';
import { ChatMessage } from '../types';
import { getTacticalAdvice } from '../services/geminiService';

export const AICoach: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Tactical Uplink Established. I am GPB Tactical Prime. Input your query: Shot selection, Court positioning, or Psychological warfare.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await getTacticalAdvice(userMsg.text);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'ERR: CONNECTION SEVERED. RETRY.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white dark:bg-black transition-colors duration-300 relative">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <SectionHeader title="Tactical Prime AI" subtitle="Strategy Engine" align="center" />
        
        {/* Chat Interface Container - Skewed Wrapper */}
        <div className="mt-8 transform -skew-x-3 bg-gray-100 dark:bg-neutral-900 border border-gray-300 dark:border-white/10 p-1 md:p-2 shadow-2xl shadow-gpb-blue/10 transition-colors duration-300">
          
          {/* Inner Content - Unskewed */}
          <div className="transform skew-x-3 h-[600px] flex flex-col bg-white/80 dark:bg-black/40 relative">
            
            {/* HUD Overlay Lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gpb-blue to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gpb-orange to-transparent opacity-50"></div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] relative group`}>
                    {/* Message Bubble shape */}
                    <div className={`
                      p-4 transform -skew-x-6 text-sm md:text-base font-satoshi tracking-wide
                      ${msg.role === 'user' 
                        ? 'bg-gpb-blue/10 border-r-2 border-gpb-blue text-black dark:text-white text-right' 
                        : 'bg-gpb-orange/10 border-l-2 border-gpb-orange text-gray-800 dark:text-gray-200'}
                      ${msg.isError ? 'border-red-500 text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/10' : ''}
                    `}>
                      <div className="transform skew-x-6">
                        <div className="text-[10px] uppercase tracking-widest mb-1 opacity-50 font-bold">
                          {msg.role === 'user' ? 'OPERATOR' : 'GPB_PRIME_AI'}
                        </div>
                        {msg.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
              
              {isLoading && (
                 <div className="flex justify-start">
                  <div className="bg-gpb-orange/10 border-l-2 border-gpb-orange p-4 transform -skew-x-6">
                    <div className="transform skew-x-6 flex items-center gap-2">
                       <span className="w-2 h-2 bg-gpb-orange animate-pulse"></span>
                       <span className="font-teko uppercase text-gpb-orange tracking-widest text-lg">Calculating...</span>
                    </div>
                  </div>
                 </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200 dark:border-white/5 bg-gray-50/80 dark:bg-neutral-900/80">
              <form onSubmit={handleSend} className="flex gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask for strategy (e.g., 'How to beat a defensive player?')"
                  className="flex-1 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 text-black dark:text-white font-satoshi px-4 py-3 focus:outline-none focus:border-gpb-blue focus:bg-white dark:focus:bg-white/10 placeholder-gray-500 transition-all"
                />
                <SkewButton type="submit" disabled={isLoading} variant="secondary" className="!px-6">
                  <i className="fas fa-paper-plane"></i>
                </SkewButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};