import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import resume from "../assets/hammadm1r.pdf";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
function Navbar({ handleNightMode, nightMode }) {
  const [isMenu, setIsMenu] = useState(false);
  const handleMenu = (e) => {
    setIsMenu(!isMenu);
  };
  const navItems = [
    { name: "About", link: "About" },
    { name: "Skill", link: "Skill" },
    { name: "Project", link: "Project" },
    { name: "Contact", link: "Contact" },
  ];
  return (
    <nav className="bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="flex justify-between p-2 sm:p-8">
        <div className="w-1/2 md:w-1/3">
          <h1 className="flex text-left text-lg font-bold items-center pl-2">
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
              <li key={index} className="flex justify-center items-center hover:text-sky-600 ">
                <a href={`#${item.link}`}>{item.name}</a>
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
        <div className="bg-white text-black w-full dark:bg-gray-900 dark:text-white fixed inset-0 md:hidden">
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
                    className="flex justify-center items-center mb-6"
                  >
                    <a href={`#${item.link}`}>{item.name}</a>
                  </li>
                ))}
              </ul>
              <h1
                className="flex justify-center rounded-full items-center mb-6"
                onClick={handleNightMode}
              >
                {nightMode ? (
                  <CiDark className="text-2xl" />
                ) : (
                  <CiLight className="text-2xl" />
                )}
              </h1>
              <h1 className="flex bg-black justify-center rounded-xl text-md text-white font-semibold items-center px-2 py-1">
                <a href={resume}>Downlord CV</a>
              </h1>
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
