import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { LuGithub, LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

const Contact = () => {
    const [copiedText, setCopiedText] = useState("");

    const handleCopy = (text) => {
      navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(""), 2000); // Reset after 2s
    };
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
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white pt-6 pb-10">
      <div className="flex justify-center content-center">
        <h1 className="bg-slate-300 dark:bg-slate-800 text-center px-4 py-2 rounded-full text-lg font-semibold">
        Get in touch
        </h1>
      </div>
      <div className="flex justify-center content-center">
        <h1 className="text-center px-4 py-2  text-md font-thin text-balance ">
        What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
        </h1>
      </div>
      <div className="flex justify-center items-center " onClick={() => handleCopy("hammad24197@gmail.com")}>
      <p className="flex pt-4  text-md font-thin justify-left items-center"><IoMail className=" font-bold flex justify-center items-center"/><span className="pl-2">hammad24197@gmail.com</span><MdContentCopy className=" font-bold flex justify-center items-center" /></p>
      </div>
      <div className="flex justify-center items-center " onClick={() => handleCopy("+92 3096154169")}>
      <p className="flex pt-2 text-md font-thin  justify-left items-center"><FaPhone className=" font-bold flex justify-center items-center" /><span className="pl-2">+92 3096154169</span><MdContentCopy className=" font-bold flex justify-center items-center" /></p>
      </div>
      {copiedText && (
        <p className="text-xs text-green-500 font-semibold mt-2 flex justify-center items-center">
          Copied: {copiedText}
        </p>
      )}
      <div className="flex justify-center content-center">
        <h1 className="text-center px-4 py-2 text-md font-thin text-balance ">
        You may also find me on these platforms!
        </h1>
        
      </div>
      <div className="flex justify-center content-center">
        { 
                socialLinks.map((item) => 
                    <p className="text-xl font-bold pr-4 hover:text-sky-600">{item.icon}</p>
                )   
                }
        </div>
      
    </div>
  );
};
export default Contact;