import React from 'react';
import { Shield, MapPin, SlidersHorizontal, MessageSquare, Star } from 'lucide-react';

const features = [
  {
    title: 'Smart Matching',
    description: 'Weighted similarity on lifestyle, study habits, hostel, and batch to generate a 0–100% score.',
    icon: <SlidersHorizontal className="w-5 h-5" />,
  },
  {
    title: 'Secure Chat',
    description: 'Talk to matches through a safe, campus-only chat. Block/report options included.',
    icon: <MessageSquare className="w-5 h-5" />,
  },
  {
    title: 'Verified Students',
    description: 'ERP-based login ensures only IIT KGP students access the platform.',
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: 'Listings & Rooms',
    description: 'Discover hostel swaps and flats near campus with filters for rent, distance, and amenities.',
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    title: 'Feedback Loop',
    description: 'Roommates rate compatibility after a month to continuously improve matching.',
    icon: <Star className="w-5 h-5" />,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Built for stress-free living</h2>
          <p className="mt-3 text-slate-600">All the essentials to find compatible roommates and secure a place that fits your vibe.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border bg-white/70 backdrop-blur border-white/60 p-5 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-indigo-600/90 to-fuchsia-500/90 text-white flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
