import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { LuGithub, LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import hammadm1r from "../assets/hammadm1r.jpeg";
import html from "../assets/html.png";
import { Skill_data } from "../util/constants";
const Skills = () => {
  const socialLinks = [
    {
      icon: <LuGithub />,
      link: "https://github.com",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com",
    },
  ];
  return (
    <div id="Skill" className="bg-white dark:bg-gray-900 text-black dark:text-white pt-6">
      <div className="flex justify-center content-center">
        <h1 className="bg-slate-300 dark:bg-slate-800 text-center px-4 py-2 rounded-full text-lg font-semibold">
          Skills
        </h1>
      </div>
      <div className="flex justify-center content-center">
        <h1 className="text-center px-4 py-2 text-md font-thin text-balance ">
          The skills, tools and technologies I am really good at:
        </h1>
      </div>
      <div className="flex justify-center items-center ">
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-6 p-4 ">
        {Skill_data.map((skill) => (
            <img
              src={skill.Image}
              height={skill.height}
              width={skill.width}
              alt={skill.skill_name}
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain transition-transform duration-300 hover:scale-125"
            />
        ))}
      </div>
      </div>
    </div>
  );
};
export default Skills;
