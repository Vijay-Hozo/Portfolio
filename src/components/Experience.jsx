import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer Intern",
      organization: "PROPZING",
      duration: "Internship",
      stack: "Next.js, Supabase, Cloudinary",
      highlights: [
        "Engineered an AI-powered real estate platform, reducing property search time by 40%.",
        "Architected a scalable frontend using Next.js, boosting load speed by 30%.",
        "Streamlined backend workflows using Supabase, reducing development time by 30%.",
        "Optimized media delivery via Cloudinary, cutting image load time by 50%.",
        "Resolved complex UI issues, improving responsiveness by 75%.",
      ],
    },
    {
      id: 2,
      role: "Freelance Full Stack Developer",
      organization: "Zionarch Architects",
      duration: "Freelance",
      stack: "Next.js, Supabase, SendGrid",
      highlights: [
        "Developed and deployed a production-ready website for Zionarch Architects.",
        "Implemented email communication using SMTP (SendGrid), enabling reliable client inquiry handling.",
        "Used Supabase Storage for efficient image management and faster content delivery.",
        "Delivered a responsive and modern UI, improving online presence and user engagement.",
      ],
    },
  ];

  const skills = [
    { id: 1, name: "React.js", level: 90 },
    { id: 2, name: "JavaScript", level: 88 },
    { id: 3, name: "Tailwind CSS", level: 85 },
    { id: 4, name: "Node.js", level: 80 },
    { id: 5, name: "Express.js", level: 78 },
    { id: 6, name: "MongoDB", level: 75 },
    { id: 7, name: "Git & GitHub", level: 86 },
    { id: 8, name: "Next.js", level: 70 },
  ];

  return (
    <section
      name="Experience"
      className="bg-gradient-to-b from-slate-900 to-black text-white"
    >
      <div className="section-shell flex flex-col gap-12">
        <div className="reveal-up">
          <p className="section-heading">
            EXPERIENCE
          </p>
          <p className="section-kicker">
            A snapshot of my recent work and core technical strengths.
          </p>
        </div>

        <div className="relative flex flex-col gap-6 pl-5 md:pl-10">
          <div className="absolute left-2 top-2 hidden h-full w-px bg-gradient-to-b from-cyan-400/70 via-blue-500/30 to-transparent md:block" />
          {experiences.map((item) => (
            <article
              key={item.id}
              className="glow-card relative rounded-3xl p-6 md:p-7"
            >
              <div className="absolute -left-7 top-7 hidden h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.75)] md:block" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-2xl font-semibold text-cyan-300">{item.role}</h3>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                  {item.duration}
                </span>
              </div>
              <p className="mt-2 text-white/90">{item.organization}</p>
              <p className="mt-2 text-sm text-slate-400">Tech: {item.stack}</p>
              <ul className="mt-5 grid gap-3 text-slate-300 sm:grid-cols-2">
                {item.highlights.map((point, index) => (
                  <li key={index} className="rounded-2xl border border-white/10 bg-black/20 p-3 leading-7">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="reveal-up reveal-delay-2">
          <h3 className="text-2xl font-bold text-white">Skills Proficiency</h3>
          <p className="mt-2 mb-6 text-slate-300">
            Current comfort level across the technologies I use most often.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.id} className="section-card animated-border">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-white">{skill.name}</p>
                  <span className="text-sm text-cyan-300">{skill.level}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;