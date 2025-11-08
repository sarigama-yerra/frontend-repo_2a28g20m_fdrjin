import React from 'react';
import { MapPin, IndianRupee, Home } from 'lucide-react';

const mockListings = [
  {
    id: 1,
    title: 'Single room in Patel Hall',
    rent: 3500,
    distance: 'On campus',
    amenities: ['Wi‑Fi', 'Study table', 'Quiet wing'],
  },
  {
    id: 2,
    title: '2BHK near Tech Market',
    rent: 9000,
    distance: '1.1 km',
    amenities: ['Furnished', 'Balcony', 'Laundry'],
  },
  {
    id: 3,
    title: 'Shared room in RP Hall',
    rent: 2500,
    distance: 'On campus',
    amenities: ['Near library', 'Night canteen', 'Quiet'],
  },
];

const ListingsPreview = () => {
  return (
    <section id="listings" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Latest listings</h2>
            <p className="mt-2 text-slate-600">Hostel swaps and nearby flats from verified students.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 bg-white text-slate-800 hover:bg-slate-50">
            <Home size={16} /> Post a listing
          </a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockListings.map((item) => (
            <div key={item.id} className="rounded-xl border bg-white/70 backdrop-blur border-white/60 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <div className="mt-2 flex items-center gap-2 text-slate-700">
                <IndianRupee size={16} />
                <span className="font-medium">{item.rent}</span>/month
              </div>
              <div className="mt-1 flex items-center gap-2 text-slate-700">
                <MapPin size={16} />
                <span>{item.distance}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.amenities.map((a) => (
                  <span key={a} className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 border">{a}</span>
                ))}
              </div>
              <button className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white hover:opacity-95">View details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListingsPreview;
