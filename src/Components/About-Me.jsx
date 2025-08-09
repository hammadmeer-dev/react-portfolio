import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { LuGithub, LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import hammadm1r from "../assets/hammad-meer.jpeg";
import { socialLinks } from "../util/constants";
const Aboutme = () => {
  return (
    <div id="About" className="bg-white dark:bg-gray-900 text-black dark:text-white pt-6">
      <div className="flex justify-center content-center">
        <h1 className="bg-slate-300 dark:bg-slate-800 text-center px-4 py-2 rounded-full text-lg font-semibold">
          About Me
        </h1>
      </div>
      <div className="flex flex-wrap justify-between p-2 sm:p-8">
        <div className="pl-2 w-full md:w-1/2  order-2 md:order-2 mt-8 sm:mt-4">
          <h2 className="text-3xl font-extrabold">Curious about me? Here you have it:</h2>
          <p className="text-md font-thin text-balance mt-4">
          I'm a passionate, self-proclaimed developer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.<br/>
         I specialize in building fast, secure, and scalable web applications using MongoDB, Express.js, React.js, and Node.js. My expertise extends to state management with Redux Toolkit, secure authentication using JWT, and seamless payment integration with Stripe.
          With a continuous learning mindset, I have dedicated significant time to mastering data structures and algorithms, developing real-world projects, and refining my problem-solving skills.I focus on delivering user-centric, efficient, and innovative solutions.
 <br/> I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
          <br/>When I'm not in full-on developer mode, you can find me hovering around on Instagram or on Linkedin, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
          <br/><br/>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
          </p>
          <div className="flex p-5">
            {socialLinks.map((item) => (
              <p className="text-xl font-bold pr-4 hover:text-sky-600">
                {item.icon}
              </p>
            ))}
          </div>
        </div>
        <div className=" w-full md:w-1/2 order-1 md:order-1 flex justify-center items-center align-middle">
          <img src={hammadm1r} alt="Hammad Meer" className="md:w-96 md:h-96" />
        </div>
      </div>
    </div>
  );
};
export default Aboutme;
