import React from "react";
import { socialLinks } from "../util/constants";
import hammadm1r from "../assets/hammad-meer.jpeg";

const Aboutme = () => {
  return (
    <div
      id="About"
      className="bg-white dark:bg-gray-900 text-black dark:text-white pt-6"
    >
      {/* Section Heading */}
      <div className="flex justify-center content-center">
        <h2 className="bg-slate-300 dark:bg-slate-800 text-center px-4 py-2 rounded-full text-lg font-semibold">
          About Me
        </h2>
      </div>

      <div className="flex flex-wrap justify-between p-2 sm:p-8">
        {/* Left Column - Text */}
        <div className="pl-2 w-full md:w-1/2 order-2 md:order-2 mt-8 sm:mt-4">
          <h2 className="text-3xl font-extrabold">
            <span className="text-green-600 dark:text-sky-600">Hammad Meer</span>  — MERN Stack & Full-Stack Web Developer
          </h2>
          <p className="text-md font-thin text-balance mt-4">
            I’m <strong>Hammad Meer</strong> (<strong>hammad meer dev</strong>), a{" "}
            <strong>MERN Stack & Full-Stack Web Developer</strong> passionate about building{" "}
            <strong>fast, secure, and scalable web applications</strong>.
            I work with <strong>MongoDB, Express.js, React.js, and Node.js</strong> to create
            responsive, accessible, and user-friendly digital products.
          </p>

          <p className="text-md font-thin text-balance mt-4">
            My skills include state management with Redux Toolkit, authentication with JWT,
            and payment integration with Stripe. I focus on clean UI/UX, performance,
            and delivering measurable results.
          </p>

          <p className="text-md font-thin text-balance mt-4">
            When I’m not coding, I enjoy connecting with other developers on{" "}
            <a
              href="https://pk.linkedin.com/in/hammad-meer-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:underline"
            >
              LinkedIn
            </a>{" "}
            or sharing updates on{" "}
            <a
              href="https://www.instagram.com/hammadmeer_dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:underline"
            >
              Instagram
            </a>
            . I’m currently open to freelance opportunities and collaborations.
          </p>

          {/* Social Links */}
          <div className="flex p-5">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold pr-4 hover:text-sky-600 animate-float"
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

        {/* Right Column - Image */}
        <div className="w-full md:w-1/2 order-1 md:order-1 flex justify-center items-center">
          <img
            src={hammadm1r}
            alt="Hammad Meer - MERN Stack & Full-Stack Web Developer"
            className="md:w-96 md:h-96 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
