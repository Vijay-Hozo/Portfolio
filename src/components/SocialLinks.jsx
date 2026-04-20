import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/vijay-a-ba3886259/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Vijay-Hozo",
    },
    {
      id: 3,
      child: (
        <>
          Email
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:personal@avijay.tech",
    },
    {
      id: 4,
      child: (
        <>
          Twitter
          <FaSquareXTwitter size={30} />
        </>
      ),
      href: "https://x.com/mr_vijay_a_",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-40">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={`flex h-14 w-44 items-center justify-between border border-white/10 bg-slate-900/90 px-4 pl-5 ml-[-102px] text-white backdrop-blur-xl transition-all duration-300 hover:ml-[-12px] hover:border-cyan-300/30 hover:bg-slate-800/95 ${
              style || ""
            }`}
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-between text-sm font-medium text-white"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
