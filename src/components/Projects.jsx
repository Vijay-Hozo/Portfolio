import React from "react";
import knowmynation from "../assets/knowmynation.png";
import Projectcard from "./Projectcard";
import assestsmanager from "../assets/assestsmanager.png";
import taskmanager from "../assets/taskmanager.png";
import hopon from "../assets/HOPON.png";
import invite from "../assets/invite.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      src: knowmynation,
      heading: "Know My Nation",
      description: "Website to explore about INDIA",
      href: "https://knowmynation.netlify.app/",
      code: "https://github.com/Vijay-Hozo/know-my-nation",
    },
    {
      id: 3,
      src: hopon,
      description: "Ride Sharing App",
      heading: "HopON",
      href: "https://hopon-app.vercel.app/",
      code: "https://github.com/Vijay-Hozo/HopeOn",
    },
    {
      id: 4,
      src: invite,
      description: "Event Management App",
      heading: "InVITE",
      href: "https://invite-app-three.vercel.app/",
      code: "https://github.com/Vijay-Hozo/InVITE",
    },
    {
      id: 5,
      src: assestsmanager,
      heading: "Assets Manager",
      description: "Exchange your assets here!",
      // href:'https://knowmynation.netlify.app/',
      code: "https://github.com/Vijay-Hozo/Decentralized_Finance_App",
    },
    {
      id: 6,
      src: taskmanager,
      heading: "Task-Manager",
      description: "Manage Your tasks here!",
      href: "https://taskiy.netlify.app/",
      code: "https://github.com/Vijay-Hozo/Task-Manager",
    },
  ];
  return (
    <div
      name="Projects"
      className="px-[10%] bg-gradient-to-b from-black to-gray-800 w-full text-white py-10 max-sm:px-4 max-sm:pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline font-FD">
            PROJECTS
          </p>
          <p className="text-lg py-6">Check out some of my work right here!</p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center px-6 sm:px-0">
          {projects.map((data) => (
            <Projectcard key={data.id} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
