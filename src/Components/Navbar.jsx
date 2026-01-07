import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import resume from "../assets/Hammad_Farooq_Meer.pdf";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import logo from "../assets/logo.svg";
import HeaderLogo from "./Logo";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar({ handleNightMode, nightMode }) {
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenu = (e) => {
    setIsMenu(!isMenu);
  };

  const handleNavClick = (id) => {
    setIsMenu(false);
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { targetId: id } });
    }
  };

  const navItems = [
    { name: "About", link: "About" },
    { name: "Skill", link: "Skill" },
    { name: "Project", link: "Project" },
    { name: "Contact", link: "Contact" },
  ];
  return (
    <nav className="bg-slate-50 text-slate-900 dark:bg-gray-900 dark:text-white sticky top-0 z-50 shadow-sm/50 backdrop-blur-md bg-opacity-90 transition-colors duration-300">
      <div className="flex justify-between p-2 sm:p-8 items-center">
        <div className="w-1/2 md:w-1/3">
          <h1 className="flex text-left text-lg font-bold items-center pl-2">
            <HeaderLogo logo={logo} />
            Hammad Meer
          </h1>
        </div>
        <div className="flex md:hidden">
          <p onClick={handleMenu} className="text-2xl">
            <IoIosMenu />
          </p>
        </div>

        <div className="gap-3 hidden md:flex">
          <ul className="flex border-r-2 gap-14 md:gap-8 pr-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-center items-center hover:text-sky-600 cursor-pointer"
                onClick={() => handleNavClick(item.link)}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <h1
            className="flex justify-center rounded-full items-center"
            onClick={handleNightMode}
          >
            {nightMode ? (
              <CiDark className="text-2xl " />
            ) : (
              <CiLight className="text-2xl" />
            )}
          </h1>
          <h1 className="flex bg-black justify-center rounded-xl text-md text-white dark:bg-slate-400 font-semibold items-center px-2 py-1">
            <a href={resume}>Downlord CV</a>
          </h1>
        </div>
      </div>
      {isMenu ? (
        <div className="bg-slate-50 text-slate-900 w-full dark:bg-gray-900 dark:text-white fixed inset-0 md:hidden z-50">
          <div className="justify-right text-right items-right">
            <button
              className="justify-end p-8 text-2xl text-right"
              onClick={handleMenu}
            >
              <RxCross1 />
            </button>
          </div>
          <div className="flex justify-center items-center">
            <div className="block">
              <ul className="border-b-2 m-4 block pr-4">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-center items-center mb-6 cursor-pointer hover:text-sky-600"
                    onClick={() => handleNavClick(item.link)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
              <h2
                className="flex justify-center rounded-full items-center mb-6"
                onClick={handleNightMode}
              >
                {nightMode ? (
                  <CiDark className="text-2xl" />
                ) : (
                  <CiLight className="text-2xl" />
                )}
              </h2>
              <h2 className="flex bg-black justify-center rounded-xl text-md text-white font-semibold items-center px-2 py-1">
                <a href={resume}>Downlord CV</a>
              </h2>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}

export default Navbar;
