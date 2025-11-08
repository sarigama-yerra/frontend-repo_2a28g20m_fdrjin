import React from 'react';

const CTAQuiz = () => {
  return (
    <section id="quiz" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white p-8 sm:p-10 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Take the 3-minute compatibility quiz</h3>
              <p className="mt-2 text-white/90">Answer 15–20 quick questions and get your top 5 matches instantly — based on lifestyle, study rhythm, and hostel preferences.</p>
            </div>
            <div className="md:justify-self-end">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-slate-900 font-medium hover:bg-white/90 transition w-full md:w-auto">Start Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAQuiz;
