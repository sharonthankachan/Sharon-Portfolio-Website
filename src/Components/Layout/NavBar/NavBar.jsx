import React, { useState, useEffect } from "react";
import { FiAlignRight } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link, scrollSpy } from "react-scroll";

function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const navItems = [
    { name: "Home", link: "hero" },
    { name: "About Me", link: "about-me" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
  ];

  const handleOpenNavBar = () => {
    setOpenNav(!openNav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 bg-white transition-all duration-300 ${
        scrolling ? "md:bg-white md:h-16 h-10 border-b border-gray-300" : "md:bg-transparent md:h-20 h-12"
      }`}
    >
      <nav
        className={`mx-auto max-w-[1900px] py-2 md:px-8 px-4 flex justify-between items-center transition-all duration-300 ${
          scrolling ? "lg:h-16 sm:h-14" : "lg:h-20 sm:h-16"
        }`}
      >
        <Link
          className="md:text-2xl text-lg font-bold tracking-widest text-neutralDGrey cursor-pointer"
          to="hero"
          smooth={true}
          duration={800}
          spy={true}
        >
          sharon<span className="text-greenPrimary">_</span>
        </Link>
        <div className="md:flex hidden items-center justify-center flex-1">
          <ul className="flex md:space-x-7 lg:space-x-12 text-md text-neutralDGrey">
            {navItems.map((item, index) => (
              <li
                className="navbar-item relative hover:text-green-500 px-1.5 pb-1 transition duration-300 cursor-pointer"
                key={index}
              >
                <Link
                  to={item.link}
                  smooth={true}
                  duration={800}
                  spy={true}
                  activeClass="active-link"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden text-neutralDGrey">
          <button onClick={handleOpenNavBar} className="text-xl">
            {openNav ? <IoMdClose /> : <FiAlignRight />}
          </button>
        </div>
        <div className="hidden md:block">
          <Link
            className="border text-neutralDGrey border-green-500 text-sm px-8 py-3 transition bg-white duration-300 rounded hover:bg-green-500 hover:text-white cursor-pointer"
            to="contact-me"
            smooth={true}
            duration={800}
            spy={true}
          >
            Contact Me
          </Link>
        </div>
      </nav>
      <div
        className={`md:hidden fixed top-0 mt-10 pb-5 left-0 w-full bg-white z-50 transition-all duration-500 ${
          openNav ? "opacity-100" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center pb-4 justify-center">
          <ul className="text-center">
            {navItems.map((item, index) => (
              <li
                className="navbar-item transition duration-300 hover:text-green-500 text-md text-neutralDGrey w-screen py-3 cursor-pointer"
                key={index}
              >
                <Link
                  to={item.link}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active-link"
                  onClick={handleOpenNavBar}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <Link
              className="border cursor-pointer transition duration-300 text-neutralDGrey border-green-500 text-sm px-5 py-2 rounded hover:bg-green-500 hover:text-white"
              to="contact-me"
              smooth={true}
              duration={800}
              spy={true}
              onClick={handleOpenNavBar}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
