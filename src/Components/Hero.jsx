import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { LuGithub, LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import hammadm1r from "../assets/hammad-meer.jpeg";
import { socialLinks } from "../util/constants";
function Hero() {
  return (
    <div
      id="Hero"
      className="flex flex-wrap bg-slate-50 justify-between p-2 text-slate-900 dark:bg-gray-900 dark:text-white lg:h-screen sm:p-8 pt-20 transition-colors duration-300"
    >
      <div className="pl-2 w-full md:w-2/3  order-2 md:order-1 mt-8 sm:mt-4">
        <h2 className="text-4xl font-extrabold">Hi, I’m <span className="text-green-600 dark:text-sky-600">Hammad Meer</span> — Full-Stack Web Developer | MERN Stack Specialist</h2>
        <p className="text-balance text-md font-thin mt-4">
          I specialize in <strong>React.js, Node.js, MongoDB, and Express.js</strong>, delivering
          responsive, accessible, and visually appealing solutions. My projects range from
          <em> social networking platforms</em> and <em>e-commerce applications</em> to
          <em> dynamic dashboards</em>, all built with performance, clean UI/UX, and security in mind
        </p>
        <div>
          <p className="flex justify-left text-md font-thin items-center pt-4">
            <IoLocationOutline className="flex justify-center font-bold items-center" />
            <span className="pl-2">Sialkot, Pakistan</span>
          </p>
          <p className="flex justify-left text-md font-thin items-center pt-2">
            <GoDotFill className="flex justify-center text-green-700 font-bold items-center" />
            <span className="pl-2">Available for new projects</span>
          </p>
        </div>
        <div className="flex p-5">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold hover:text-sky-600 pr-4 animate-float"
              style={{ animationDelay: `${index * 0.3}s` }} // stagger effect
            >
              {item.icon}
              <span className="sr-only">
                {item.link.includes("linkedin")
                  ? "LinkedIn profile of Hammad Meer"
                  : item.link.includes("github")
                    ? "GitHub profile of Hammad Meer"
                    : item.link.includes("facebook")
                      ? "Facebook profile of Hammad Meer"
                      : "Instagram profile of Hammad Meer"}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="order-1 w-full md:order-2 md:w-1/3">
        <img src={hammadm1r} alt="Hammad Meer" className="rounded-full" />
      </div>
    </div>
  );
}

export default Hero;
