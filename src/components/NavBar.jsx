import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },

    {
      id: 2,
      link: "About",
    },

    {
      id: 4,
      link: "Projects",
    },

    {
      id: 5,
      link: "Experience",
    },

    {
      id: 6,
      link: "Resume",
    },

    {
      id: 7,
      link: "Contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#Home" className="flex items-center gap-3 text-white">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 font-FD text-lg font-bold text-slate-950 shadow-lg shadow-cyan-950/40">
            VA
          </span>
          <div className="hidden sm:block">
            <p className="text-[0.7rem] uppercase tracking-[0.32em] text-cyan-300/80">Portfolio</p>
            <p className="font-semibold text-white">Vijay A</p>
          </div>
        </a>

        <ul className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 shadow-xl shadow-black/20 md:flex">
          {links.map(({ id, link }) => (
          <li
            key={id}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-400 transition duration-300 hover:bg-white/5 hover:text-white"
          >
              <Link to={link} smooth duration={500} spy offset={-90} activeClass="text-cyan-300">
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
          className="cursor-pointer text-slate-400 transition hover:text-white md:hidden"
      >
          {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {nav && (
          <div className="absolute inset-x-0 top-20 z-40 md:hidden">
            <ul className="mx-4 flex flex-col gap-2 rounded-3xl border border-white/10 bg-slate-950/95 p-5 text-slate-300 shadow-2xl shadow-black/40 backdrop-blur-xl">
          {links.map(({ id, link }) => (
            <li
              key={id}
                className="rounded-2xl px-4 py-3 text-xl capitalize transition hover:bg-white/5 hover:text-white"
            >
              <Link
                  onClick={() => setNav(!nav)}
                to={link}
                smooth
                  spy
                  offset={-90}
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
            </ul>
          </div>
      )}
      </div>
    </header>
  );
};

export default NavBar;
