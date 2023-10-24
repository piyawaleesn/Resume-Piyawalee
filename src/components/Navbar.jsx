import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import "../App.css";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme, setTheme]);

  const content = (
    <div className="min-[768px]:hidden block absolute top-16 w-full left-0 right-0 bg-base-100 transition">
      <ul className="text-center text-2xl p-20 font-semibold">
        <Link to="Header" spy={true} smooth={true}>
          <li className="my-4 py-4 border-b border-base-200 hover:bg-base-200 hover:rounded cursor-pointer ">
            Home
          </li>{" "}
        </Link>
        <Link to="Content" spy={true} smooth={true}>
          <li className="my-4 py-4 border-b border-base-200 hover:bg-base-200 hover:rounded cursor-pointer">
            About
          </li>{" "}
        </Link>
        <Link to="Project" spy={true} smooth={true}>
          <li className="my-4 py-4 border-b border-base-200 hover:bg-base-200 hover:rounded cursor-pointer">
            Project
          </li>{" "}
        </Link>
        <Link to="Contact" spy={true} smooth={true}>
          {" "}
          <li className="my-4 py-4 border-b border-base-200 hover:bg-base-200 hover:rounded cursor-pointer">
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
  return (
    <nav className="navbars">
      <div className="flex flex-row  justify-between z-50 items-center lg:py-5 h-16 2xl:mx-36 xl:mx-36 lg:mx-10 md:mx-10 transition ">
        <div className="flex items-center flex-1">
          <span className="text-2xl font-semibold">
            <Link
              to="Header"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className=" text-[#8564e1] hover:text-[#c0adf5] ease-in-out cursor-pointer"
            >
              Piyawalee.
            </Link>
          </span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-8 text-[18px] font-medium">
              <li>
                <Link
                  to="Header"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className=" hover:text-[#8564e1] transition hover:border-b-2  hover:border-[#8564e1] ease-in-out cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="Content"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className=" hover:text-[#8564e1] transition hover:border-b-2  hover:border-[#8564e1] ease-in-out cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="Project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className=" hover:text-[#8564e1] transition hover:border-b-2  hover:border-[#8564e1] ease-in-out cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className=" hover:text-[#8564e1] transition hover:border-b-2  hover:border-[#8564e1] ease-in-out cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button
          className="block md:hidden  transition  mr-4"
          onClick={handleClick}
        >
          {click ? (
            <FaTimes style={{ fontSize: "24px" }} />
          ) : (
            <GiHamburgerMenu style={{ fontSize: "24px" }} />
          )}
        </button>
        <label className="swap swap-rotate ">
          <input type="checkbox" onChange={handleToggle} />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-8 h-8 hover:text-[#8564e1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-8 h-8 hover:text-[#8564e1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
