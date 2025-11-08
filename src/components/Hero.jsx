import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[78vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/0Wfdi5VZ4y1k5f8q/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-white/50 text-xs text-slate-700">
            Made for IIT Kharagpur
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Find your perfect roommate with RoomEase
          </h1>
          <p className="mt-4 text-slate-700 text-lg max-w-prose">
            A campus-specific platform that matches students using lifestyle preferences, study habits, and hostel location — so you can live and learn better together.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#quiz" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white shadow hover:opacity-95 transition">Start Compatibility Quiz</a>
            <a href="#listings" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 transition">Browse Rooms</a>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="rounded-lg bg-white/70 backdrop-blur border border-white/60 p-3 text-center">
              <div className="text-xl font-semibold">15–20</div>
              <div>Question quiz</div>
            </div>
            <div className="rounded-lg bg-white/70 backdrop-blur border border-white/60 p-3 text-center">
              <div className="text-xl font-semibold">0–100%</div>
              <div>Compatibility score</div>
            </div>
            <div className="rounded-lg bg-white/70 backdrop-blur border border-white/60 p-3 text-center">
              <div className="text-xl font-semibold">Top 5</div>
              <div>Best matches</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl pointer-events-none" />
          <div className="relative rounded-2xl border bg-white/70 backdrop-blur border-white/60 p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-900">How it works</h3>
            <ol className="mt-4 space-y-3 text-slate-700 text-sm list-decimal list-inside">
              <li>Sign in with your ERP credentials</li>
              <li>Fill your lifestyle & study preferences</li>
              <li>Take the compatibility quiz</li>
              <li>View top matches and start a secure chat</li>
              <li>Optionally send a Room Connect request</li>
            </ol>
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-md bg-white/80 border p-3">SSO protected</div>
              <div className="rounded-md bg-white/80 border p-3">End-to-end privacy</div>
              <div className="rounded-md bg-white/80 border p-3">Fast matching</div>
              <div className="rounded-md bg-white/80 border p-3">Student verified</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white" />
    </section>
  );
};

export default Hero;
