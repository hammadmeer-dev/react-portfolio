import {useState} from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { LuGithub, LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import hammadm1r from "../assets/hammadm1r.jpeg"
import { socialLinks } from "../util/constants";
function Hero(){
    return (
        <div id="Hero" className="flex flex-wrap bg-white justify-between p-2 text-black dark:bg-gray-900 dark:text-white lg:h-screen sm:p-8">
            <div className = "pl-2 w-full md:w-2/3  order-2 md:order-1 mt-8 sm:mt-4">
                <h2 className="text-4xl font-extrabold">Hi, I'm Hammad</h2>
                <p className="text-balance text-md font-thin mt-4">I'm a full stack developer specializing in React.js and Node.js, dedicated to building exceptional digital experiences that are fast, accessible, visually appealing, and responsive. My passion for web development drives me to create innovative and user-friendly applications.</p>
                <div>
                <p className="flex justify-left text-md font-thin items-center pt-4"><IoLocationOutline className="flex justify-center font-bold items-center"/><span className="pl-2">Sialkot, Pakistan</span></p>
                <p className="flex justify-left text-md font-thin items-center pt-2">< GoDotFill className="flex justify-center text-green-700 font-bold items-center" /><span className="pl-2">Available for new projects</span></p>
                </div>
                <div className="flex p-5">
                { 
                socialLinks.map((item) => 
                    <p className="text-xl font-bold hover:text-sky-600 pr-4"><a href={item.link}>{item.icon}</a></p>
                )   
                }
                </div>
            </div>
            <div className="order-1 w-full md:order-2 md:w-1/3">
                <img src={hammadm1r} alt="Hammad Meer"  className="rounded-full"/>
            </div>
        </div>
    )
}

export default Hero

