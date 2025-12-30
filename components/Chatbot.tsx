import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PLANS, NO_MEAL_FORM_URL, JOB_APPLICATION_FORM_URL } from '../constants';

// Construct System Instruction dynamically to keep it up-to-date with constants
const getSystemInstruction = () => {
  const plansText = PLANS.map(p => `- ${p.name} (${p.type}): ₹${p.price}${p.type === 'subscription' ? '/month' : '/meal'}. Best for: ${p.bestFor}.`).join('\n');
  
  return `
You are "Chef Lily", the professional head chef and representative of Bhuk Foods.

Context about Bhuk Foods:
- India's First Kitchen Substitution Service (replacing groceries, maids, and cooking).
- Service Areas: Agarpara, Sodepur, Belgharia (Kolkata).
- USP: FSSAI Certified, Oil is never reused (healthiest option), Home-style taste.
- Contact: +91 75959 23777.

Our Plans:
${plansText}

Policies:
- Refund/Pause: Meals can be paused if the "No Meal Day" form is filled 24 hours in advance. Refunds or credits are provided.
- No Meal Form Link: ${NO_MEAL_FORM_URL}

Careers / Hiring:
- Cooks, Kitchen Helpers, and Delivery Partners are being hired in Agarpara.
- Benefits: On-time salary, Free duty meals, Respectful culture.
- Apply Link: ${JOB_APPLICATION_FORM_URL}

Strict Guidelines for Interaction:
1. **Tone**: Formal, Objective, and Professional.
2. **Passive Voice Preference**: Construct sentences in the passive voice where possible (e.g., "The plan can be chosen" instead of "You can choose a plan").
3. **Prohibited Terms**: Do NOT use words like "Beta", "Beti", "Dear", "Honey", or "Child". Address the user formally or neutrally.
4. **Goal**: Assistance regarding plans, hygiene standards, and operational details is to be provided.
5. **Conciseness**: Responses must be kept under 100 words.
`;
};

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Namaskar. I am Chef Lily. How may assistance be provided regarding the Kitchen Substitution Service today? 🍲"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setIsLoading(true);

    // Add User Message
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', text: userText }]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const chat: Chat = ai.chats.create({
        model: 'gemini-3-pro-preview',
        config: {
          systemInstruction: getSystemInstruction(),
          temperature: 0.5, // Lower temperature for more formal/deterministic output
        },
        // Filter out 'welcome' message from API history as it's UI-only
        history: messages
          .filter(m => m.id !== 'welcome')
          .map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
          }))
      });

      // Stream the response
      const resultStream = await chat.sendMessageStream({ message: userText });
      
      let fullResponse = "";
      const botMsgId = (Date.now() + 1).toString();

      // Add placeholder for bot message
      setMessages(prev => [...prev, { id: botMsgId, role: 'model', text: "" }]);

      for await (const chunk of resultStream) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          fullResponse += c.text;
          setMessages(prev => 
            prev.map(msg => 
              msg.id === botMsgId ? { ...msg, text: fullResponse } : msg
            )
          );
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: "A technical difficulty is being experienced. A retry is requested shortly. 🍳" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };
  
  // Changed avatar to a new image to confirm correct file is being edited
  const chefIconUrl = "https://images.unsplash.com/photo-1628191079520-4416d86b360a?q=80&w=300&auto=format&fit=crop";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      <div 
        className={`bg-white dark:bg-slate-900 w-[320px] md:w-[380px] h-[500px] rounded-2xl shadow-2xl border border-orange-200 dark:border-slate-700 overflow-hidden mb-4 transition-all duration-300 origin-bottom-right pointer-events-auto flex flex-col ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none hidden'
        }`}
      >
        {/* Header */}
        <div className="bg-[#D32F2F] p-4 flex items-center justify-between text-white shadow-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white shadow-sm flex items-center justify-center">
              <img 
                src={chefIconUrl} 
                alt="Chef Lily"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-sm">Chef Lily</h3>
              <p className="text-xs text-red-100 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950 scroll-smooth">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
                  msg.role === 'user' 
                    ? 'bg-slate-800 text-white rounded-br-none' 
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                <div className="flex gap-1.5 items-center h-5">
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
          <div className="flex gap-2 items-center bg-slate-100 dark:bg-slate-800 rounded-full px-2 py-1 border border-transparent focus-within:border-orange-200 dark:focus-within:border-slate-600 transition-colors">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Enquire about plans..."
              className="flex-1 bg-transparent text-slate-900 dark:text-white px-3 py-2 text-sm focus:outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-[#D32F2F] hover:bg-[#b71c1c] disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-full shadow-sm transition-all transform hover:scale-105 active:scale-95 flex-shrink-0"
            >
              <svg className="w-5 h-5 translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <div className="text-[10px] text-center text-slate-400 mt-2">
            AI generated responses. Accuracy should be verified.
          </div>
        </div>
      </div>

      {/* Launcher Button & Label */}
      {!isOpen && (
        <div
          itemScope
          itemType="https://schema.org/Person"
          className="pointer-events-auto text-center cursor-pointer group animate-on-scroll is-visible"
          onClick={() => setIsOpen(true)}
          aria-label="Open Chat"
        >
          <img
            src={chefIconUrl}
            alt="Lily – Bhuk Foods AI Assistant, a warm smiling Indian lady chef helping customers with home-style meals in Agarpara Kolkata"
            title="Ask Lily – Bhuk Foods AI Chat Assistant"
            loading="lazy"
            width="120"
            height="120"
            itemProp="image"
            className="w-[120px] h-[120px] object-cover rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-105 mx-auto border-4 border-white dark:border-slate-800"
          />
          <div className="mt-2" >
            <span className="font-bold text-[#fe0467] text-lg" itemProp="name">Lily</span>
            <br />
            <small className="text-slate-700 dark:text-slate-400 font-medium">Ask Lily</small>
          </div>
          
          <div style={{ display: 'none' }}>
            <meta itemProp="jobTitle" content="AI Food Assistant" />
            <meta itemProp="affiliation" content="Bhuk Foods" />
            <meta itemProp="description" content="Lily is Bhuk Foods’ AI chatbot assistant helping customers choose affordable, hygienic, home-style meals in Agarpara, Sodepur and Belgharia." />
            <meta itemProp="nationality" content="Indian" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
