import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import ts from "../assets/ts.png";
import next from "../assets/next.png";
import framer from "../assets/framer.png";
import stripe from "../assets/stripe.webp";
import node from "../assets/node-js.png";
import mongodb from "../assets/mongodb.png";
import mui from "../assets/mui.png";
import firebase from "../assets/Firebase.png";
import mysql from "../assets/mysql.png";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { LuFacebook, LuGithub, LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import portfolio from "../assets/portfolio.jpeg";
import foodie from "../assets/foodie.jpeg";
import traveler from "../assets/traveler.jpeg";

export const Skill_data = [
  {
    skill_name: "Html 5",
    Image: html,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: css,
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    Image: js,
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind Css",
    Image: tailwind,
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: react,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    Image: redux,
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    Image: ts,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 13",
    Image: next,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    Image: framer,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe Payment",
    Image: stripe,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    Image: node,
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    Image: mongodb,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Material UI",
    Image: mui,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Firebase",
    Image: firebase,
    width: 55,
    height: 55,
  },
  {
    skill_name: "MySQL",
    Image: mysql,
    width: 70,
    height: 70,
  },
];

export const socialLinks = [
  {
    icon: <LuGithub />,
    link: "https://github.com/hammadmeer-dev",
  },
  {
    icon: <LuFacebook />,
    link: "https://www.facebook.com/hammad.mir.338?mibextid=ZbWKwL",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://pk.linkedin.com/in/hammad-meer-dev",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/hammadmeer_dev/",
  },
];


  export const projects = [
  {
    title: "Hammad Meer Personal Portfolio",
    description:
      "A fast, responsive personal portfolio website by Hammad Meer (hammad meer dev), built with React.js, Tailwind CSS, and Vite.js. Showcases full-stack development skills, featured projects, and professional experience in an SEO-friendly design.",
    image: portfolio,
    techStack: [
      "React.js",
      "React Icons",
      "Vite.js",
      "TailwindCSS",
      "Figma",
      "Git",
    ],
    link: "#",
  },
  {
    title: "Traveler — MERN Stack Social Platform",
    description:
      "Traveler is a MERN stack social networking platform by Hammad Meer (hammad meer dev) where users share travel experiences, follow others, and engage with posts. Features secure JWT authentication, profile management, and an interactive feed, optimized for performance and scalability.",
    image: traveler,
    techStack: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "Cloudinary",
      "MongoDB",
      "Vite.js",
      "Axios",
      "Multer",
      "React Icons",
      "TailwindCSS",
      "SweetAlert2",
      "JWT",
      "Git",
    ],
    link: "https://truetraveler.netlify.app",
  },
  {
    title: "Foodie — MERN Stack E-Commerce App",
    description:
      "Foodie is a MERN stack e-commerce web application by Hammad Meer (hammad meer dev) for ordering groceries, fast food, and essentials online. Includes secure JWT authentication, responsive UI with Tailwind CSS, and Stripe-powered payment integration.",
    image: foodie,
    techStack: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "Stripe",
      "MongoDB",
      "Cloudinary",
      "Vite.js",
      "Axios",
      "Multer",
      "React Icons",
      "TailwindCSS",
      "SweetAlert2",
      "JWT",
      "Git",
    ],
    link: "https://github.com/hammadm1r/Foodie-App",
  },
];
