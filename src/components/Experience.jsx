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
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white py-14 max-sm:pt-24"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col gap-12">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline font-FD">
            EXPERIENCE
          </p>
          <p className="py-6 text-gray-300">
            A snapshot of my recent work and core technical strengths.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {experiences.map((item) => (
            <article
              key={item.id}
              className="rounded-xl border border-gray-700 bg-gray-900/50 p-5 shadow-md shadow-black/40"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-xl font-semibold text-cyan-300">{item.role}</h3>
                <span className="text-sm text-gray-300">{item.duration}</span>
              </div>
              <p className="text-gray-200 mt-1">{item.organization}</p>
              <p className="text-sm text-gray-400 mt-1">Tech: {item.stack}</p>
              <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
                {item.highlights.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white">Skills Proficiency</h3>
          <p className="text-gray-300 mt-2 mb-6">
            Current comfort level across the technologies I use most often.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {skills.map((skill) => (
              <div key={skill.id} className="rounded-lg bg-gray-900/60 border border-gray-700 p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-100">{skill.name}</p>
                  <span className="text-sm text-cyan-300">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-gray-700">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;