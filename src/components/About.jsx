import React from 'react'

const About = () => {
  return (
    <section name="About" className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-6 reveal-up">
          <div>
            <p className="section-heading">About</p>
            <p className="section-kicker">
              A quick overview of how I work, what I care about, and where I like to push the design.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="section-card animated-border">
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/80">Currently</p>
              <p className="mt-2 text-lg font-semibold text-white">B.Tech IT student in Coimbatore</p>
            </div>
            <div className="section-card animated-border">
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/80">Mindset</p>
              <p className="mt-2 text-lg font-semibold text-white">Fast, practical, and detail-driven</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 reveal-up reveal-delay-2">
          <div className="section-card glow-card">
            <h3 className="text-2xl font-bold text-cyan-300">What I build</h3>
            <p className="mt-4 text-slate-300 leading-8">
              I focus on interfaces that feel intentional, with strong layout rhythm, useful motion, and
              interactions that make the product feel alive without being noisy.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="section-card glow-card">
              <h4 className="text-lg font-semibold text-white">Frontend craft</h4>
              <p className="mt-3 text-slate-300">React, Next.js, Tailwind, and responsive UI systems.</p>
            </div>
            <div className="section-card glow-card">
              <h4 className="text-lg font-semibold text-white">Problem solving</h4>
              <p className="mt-3 text-slate-300">Debugging, performance tuning, and clean feature delivery.</p>
            </div>
          </div>

          <div className="section-card glow-card">
            <h3 className="text-xl font-bold text-white">Design priorities</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="pill">clarity</span>
              <span className="pill">motion</span>
              <span className="pill">speed</span>
              <span className="pill">usability</span>
              <span className="pill">clean code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;