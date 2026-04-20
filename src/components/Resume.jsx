import React from "react";

const Resume = () => {
  const skills = [
    "React.js",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
  ];

  const experience = [
    {
      role: "Full Stack Developer Intern",
      org: "PROPZING",
      duration: "Internship",
      points: [
        "Built an AI-powered real estate platform with Next.js and Supabase.",
        "Improved frontend performance and UI responsiveness across core pages.",
      ],
    },
    {
      role: "Freelance Full Stack Developer",
      org: "Zionarch Architects",
      duration: "Freelance",
      points: [
        "Delivered a production-ready website with email and storage integrations.",
        "Created a responsive UI tailored for a clean client-facing experience.",
      ],
    },
  ];

  return (
    <section
      name="Resume"
      className="bg-gradient-to-b from-black to-slate-900 text-white"
    >
      <div className="section-shell">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10 reveal-up">
          <div className="max-w-2xl">
            <p className="section-heading">
              RESUME
            </p>
            <p className="section-kicker">
              A concise summary of my technical background, recent work, and core skills.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/Vijay_SoftwareDeveloper.pdf"
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              View Full Resume
            </a>
            <a
              href="/Vijay_SoftwareDeveloper.pdf"
              download="Vijay-A-Resume.pdf"
              className="secondary-button"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="section-card glow-card reveal-up reveal-delay-1">
            <h3 className="text-2xl font-bold text-cyan-300">Vijay A</h3>
            <p className="mt-2 text-slate-300">Full Stack Developer</p>
            <p className="mt-4 leading-8 text-slate-200">
              I build modern web applications with a focus on responsive interfaces, clear user flows,
              and maintainable code. My portfolio includes React, Next.js, Node.js, Tailwind CSS, and
              backend integrations for production use.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">Education</p>
                <p className="mt-2 font-semibold text-white">B.Tech Information Technology</p>
                <p className="text-slate-300">Coimbatore</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">Focus</p>
                <p className="mt-2 font-semibold text-white">Frontend & Full Stack</p>
                <p className="text-slate-300">React, Next.js, Node.js, Tailwind</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold text-white mb-4">Experience</h4>
              <div className="space-y-4">
                {experience.map((item) => (
                  <article
                    key={item.role}
                    className="rounded-3xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h5 className="font-semibold text-cyan-300">{item.role}</h5>
                      <span className="text-sm text-slate-400">{item.duration}</span>
                    </div>
                    <p className="mt-1 text-slate-200">{item.org}</p>
                    <ul className="mt-3 space-y-2 text-slate-300">
                      {item.points.map((point) => (
                        <li key={point} className="rounded-2xl border border-white/10 bg-white/5 p-3 leading-7">{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 reveal-up reveal-delay-2">
            <div className="section-card glow-card">
              <h4 className="text-xl font-bold text-white mb-4">Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:text-cyan-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="section-card glow-card">
              <h4 className="text-xl font-bold text-white mb-4">Selected Projects</h4>
              <ul className="space-y-3 text-slate-300">
                <li>Know My Nation - India-focused exploration website.</li>
                <li>HopON - Ride sharing app.</li>
                <li>InVITE - Event management app.</li>
                <li>Task-Manager - Task management web app.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;