import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import resume from "../assets/hammadm1r.pdf";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const handleToggle = (e) => {
    setIsDark(!isDark);
  };
  const handleMenu = (e) => {
    setIsMenu(!isMenu);
  };
  const navItems = [
    { name: "About", link: "/about" },
    { name: "Work", link: "/work" },
    { name: "Testimonial", link: "/testimonial" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <nav>
      <div className="flex justify-between p-2 sm:p-8">
        <div className="w-1/2 md:w-1/3">
          <h1 className="text-lg font-bold text-left pl-2 flex items-center">
            Hammad Meer
          </h1>
        </div>
        <div className="flex md:hidden">
          <p onClick={handleMenu} className="text-2xl">
            <IoIosMenu />
          </p>
        </div>

        <div className=" gap-3 hidden md:flex ">
          <ul className="flex gap-14 md:gap-8 border-r-2 pr-4">
            {navItems.map((item, index) => (
              <li key={index} className="flex justify-center items-center">
                {item.name}
              </li>
            ))}
          </ul>
          <h1
            className=" flex justify-center items-center rounded-full"
            onClick={handleToggle}
          >
            {isDark ? (
              <CiDark className="text-2xl" />
            ) : (
              <CiLight className="text-2xl" />
            )}
          </h1>
          <h1 className="flex justify-center items-center text-md font-semibold rounded-xl bg-black text-white px-2 py-1">
            <a href={resume}>Downlord CV</a>
          </h1>
        </div>
      </div>
      {isMenu ? (
          <div className="fixed inset-0 w-full md:hidden bg-white ">
            <div className=" justify-right items-right text-right">
            <button className="text-right justify-end text-2xl p-8" onClick={handleMenu}>< RxCross1/></button>
            </div>
            <div className="flex justify-center items-center">
            <div className="block">
            <ul className="block border-b-2 pr-4 m-4">

              {navItems.map((item, index) => (
                <li key={index} className="flex justify-center items-center mb-6">
                  {item.name}
                </li>
              ))}
            </ul>
            <h1
              className=" flex justify-center items-center rounded-full mb-6"
              onClick={handleToggle}
            >
              {isDark ? (
                <CiDark className="text-2xl " />
              ) : (
                <CiLight className="text-2xl" />
              )}
            </h1>
            <h1 className="flex justify-center items-center text-md font-semibold rounded-xl bg-black text-white px-2 py-1">
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
