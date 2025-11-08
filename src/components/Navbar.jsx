import React from 'react';
import { Sparkles, User, MessageCircle, Home } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white">
            <Sparkles size={18} />
          </div>
          <span className="font-semibold text-slate-900 tracking-tight">RoomEase</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors inline-flex items-center gap-2"><Home size={16}/>Overview</a>
          <a href="#how" className="hover:text-slate-900 transition-colors inline-flex items-center gap-2"><User size={16}/>Onboarding</a>
          <a href="#chat" className="hover:text-slate-900 transition-colors inline-flex items-center gap-2"><MessageCircle size={16}/>Chat</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors">Demo</button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white hover:opacity-95 transition-opacity">Get Started</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
