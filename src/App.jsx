import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTAQuiz from './components/CTAQuiz';
import ListingsPreview from './components/ListingsPreview';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTAQuiz />
        <ListingsPreview />
      </main>
      <footer className="py-10 border-t bg-white/70 backdrop-blur border-white/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} RoomEase — Built for IIT Kharagpur</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
