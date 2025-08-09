import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollUp = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );
    if (scrollUp.current) {
      observer.observe(scrollUp.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={scrollUp}
      className="border-t-2 border-gray-300  dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="flex justify-center items-center">
        <h2 className="text-center px-4 py-2  md:text-md text-sm font-thin  text-balance ">
          Designed By{" "}
          <a href="https://www.figma.com/community/file/1262992249991763120/personal-portfolio-website-template-mobile-desktop">
            Sagar Shah{" "}
          </a>
          | Developed By Hammad Meer
        </h2>
      </div>
      {visible && (
        <div
        className="bg-slate-200 dark:bg-slate-800 dark:text-white flex justify-center items-center w-12 h-12 bottom-5 right-5 rounded-full fixed text-black shadow-lg cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-700 transition animate-bounce"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp size={20} />
      </div>
      
      )}
    </div>
  );
};

export default Footer;
