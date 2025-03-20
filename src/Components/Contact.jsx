import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { LuFacebook, LuGithub, LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { socialLinks } from "../util/constants";

const Contact = () => {
    const [copiedText, setCopiedText] = useState("");

    const handleCopy = (text) => {
      navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(""), 2000); // Reset after 2s
    };
  
  return (
    <div id="Contact" className="bg-white text-black dark:bg-gray-900 dark:text-white pb-10 pt-6">
      <div className="flex justify-center content-center">
        <h1 className="bg-slate-300 rounded-full text-center text-lg dark:bg-slate-800 font-semibold px-4 py-2">
        Get in touch
        </h1>
      </div>
      <div className="flex justify-center content-center">
        <h1 className="text-balance text-center text-md font-thin px-4 py-2">
        What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
        </h1>
      </div>
      <div className="flex justify-center items-center" >
      <p className="flex justify-left text-md font-thin items-center pt-4"><IoMail className="flex justify-center font-bold items-center"/><span className="pl-2"><a href="mailto:hammad24197@gmail.com">hammad24197@gmail.com</a></span><MdContentCopy className="flex justify-center font-bold hover:text-sky-600 items-center ml-2" onClick={() => handleCopy("hammad24197@gmail.com")} /></p>
      </div>
      <div className="flex justify-center items-center" >
      <p className="flex justify-left text-md font-thin items-center pt-2"><FaPhone className="flex justify-center font-bold items-center" /><span className="pl-2"><a href="tel:+92 3096154169">+92 3096154169</a></span><MdContentCopy className="flex justify-center font-bold hover:text-sky-600 items-center ml-2" onClick={() => handleCopy("+92 3096154169")} /></p>
      </div>
      {copiedText && (
        <p className="flex justify-center text-green-500 text-xs font-semibold items-center mt-2">
          Copied: {copiedText}
        </p>
      )}
      <div className="flex justify-center content-center">
        <h1 className="text-balance text-center text-md font-thin px-4 py-2">
        You may also find me on these platforms!
        </h1>
        
      </div>
      <div className="flex justify-center content-center">
        { 
                socialLinks.map((item) => 
                    <p className="text-xl font-bold hover:text-sky-600 pr-4"><a href={item.link}>{item.icon}</a></p>
                )   
                }
        </div>
      
    </div>
  );
};
export default Contact;