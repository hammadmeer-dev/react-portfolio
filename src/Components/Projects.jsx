import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { LuGithub, LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import hammadm1r from "../assets/hammadm1r.jpeg";
import { socialLinks, projects } from "../util/constants";

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className={`flex flex-col  md:flex-row gap-6 p-6 dark:bg-gray-700 text-black dark:text-white bg-white shadow-md rounded-xl ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="w-full bg-gray-100 md:w-1/2 rounded-lg ">
      <img
        src={project.image}
        alt={project.title}
        className="w-auto h-auto md:w-auto md:h-auto rounded-lg mx-auto"
      />
      </div>
      <div className="w-full md:w-1/2 rounded-lg">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="mt-3 text-sm hover:text-sky-600 pr-4 inline-block"
        >
          🔗 View Project
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="Project"
      className="pt-6 bg-white dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="flex justify-center content-center">
        <h1 className="bg-slate-300 dark:bg-slate-800 text-center px-4 py-2 rounded-full text-lg font-semibold">
          Projects
        </h1>
      </div>
      <div className="flex justify-center content-center">
        <h1 className="text-center px-4 py-2 text-md font-thin text-balance ">
          Some of the noteworthy projects I have built:
        </h1>
      </div>
      <div className="w-full lg:w-5/6 flex justify-center items-center mx-auto">
        <div className="grid gap-8 justify-center items-center ">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
