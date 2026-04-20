import React from 'react';
import { Link } from 'react-scroll';
import Portfolioamico from '../assets/Portfolio-amico.png';
const Home = () => {
  return (
    <section name="Home" className="relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-24 right-4 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl float-slow" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl float-medium" />

      <div className="hero-shell relative z-10">
        <div className="space-y-6 reveal-up">
          <span className="pill">Available for freelance and full-time work</span>
          <div className="space-y-3">
            <p className="text-lg text-slate-300">Hello, I’m</p>
            <h1 className="font-FD text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
              Vijay A
            </h1>
            <p className="max-w-2xl text-xl font-semibold text-cyan-300 sm:text-2xl">
              Full Stack Developer crafting sharp interfaces and reliable web experiences.
            </p>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I build responsive products with React, Next.js, Node.js, and Tailwind CSS, with a focus on
            clean motion, practical architecture, and UI polish that feels premium instead of generic.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to='Resume'
              smooth
              duration={500}
              offset={-90}
              className='primary-button cursor-pointer'
            >
              View Resume
            </Link>
            <a
              href='/Vijay_SoftwareDeveloper.pdf'
              download='Vijay-A-Resume.pdf'
              className='secondary-button cursor-pointer'
            >
              Download CV
            </a>
          </div>

          <div className="grid max-w-2xl gap-4 pt-4 sm:grid-cols-3">
            <div className="section-card reveal-delay-1 animated-border">
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/80">Focus</p>
              <p className="mt-2 text-lg font-semibold text-white">Frontend + Full Stack</p>
            </div>
            <div className="section-card reveal-delay-2 animated-border">
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/80">Style</p>
              <p className="mt-2 text-lg font-semibold text-white">Bold, responsive, animated</p>
            </div>
            <div className="section-card reveal-delay-3 animated-border">
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/80">Stack</p>
              <p className="mt-2 text-lg font-semibold text-white">React, Next, Node</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center reveal-up reveal-delay-2">
          <div className="absolute inset-10 rounded-[2rem] border border-cyan-400/20 bg-cyan-400/5 blur-2xl" />
          <div className="animated-border glass-card relative w-full max-w-[34rem] overflow-hidden p-4 sm:p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/50 p-3 sm:p-4">
              <img
                src={Portfolioamico}
                alt="Portfolio illustration"
                className="w-full rounded-[1.2rem] object-cover float-fast"
              />
              <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 shadow-lg shadow-black/30">
                Portfolio / 2026
              </div>
              <div className="absolute bottom-4 right-4 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 shadow-lg shadow-black/30 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Current mode</p>
                <p className="mt-1 text-sm font-semibold text-white">Building cool digital products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;