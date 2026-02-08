import React, { useState, useEffect, useRef } from "react";
import { Sparkles, X, Send } from "lucide-react";

export default function AssistantButton() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hello! I'm your Academic Hub Assistant 🤖" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Close chat on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: "That's interesting! Tell me more 😄" },
      ]);
      setTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Floating Assistant Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open chat assistant"
        className="fixed bottom-10 right-10 z-[9999] w-20 h-20 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full flex items-center justify-center text-4xl shadow-2xl shadow-cyan-400/50 cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-360 animate-assistant-pulse"
        title="Chat with AI Assistant"
      >
        <Sparkles className="w-10 h-10 text-slate-900" />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-36 right-1 z-[9998] w-80 md:w-96 h-[28rem] dark:bg-slate-900/90 backdrop-blur-md border border-cyan-400/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-cyan-400/30">
            <h3 className="text-lg font-bold text-cyan-300">Academic Hub Assistant</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-red-400 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-sm scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg ${
                    msg.from === "user"
                      ? "bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900"
                      : "bg-slate-800/80 text-cyan-200 border border-cyan-400/20"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="text-cyan-300 text-xs italic">Assistant is typing...</div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 p-3 border-t border-cyan-400/30 bg-slate-950/50"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 rounded-lg bg-slate-800 text-slate-100 border border-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            />
            <button
              type="submit"
              className="p-2 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 hover:scale-110 transition-transform"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}