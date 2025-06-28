import { useContext, useState } from "react";
import { IoIosMenu, IoMdMail, IoMdSunny } from "react-icons/io";
import { MyContext } from "../context/MyContext";
import { FaCode, FaHome, FaMoon } from "react-icons/fa";
import { FaArrowRightLong, FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";
import { IoMoon, IoPerson } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GoSun } from "react-icons/go";
import { TbSunMoon } from "react-icons/tb";

const Navbar = () => {
  const { dark, setDark } = useContext(MyContext);

  const [showMenu, setShowMenu] = useState(false);

  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const handleThemeToggle = (value) => {
    setDark(value);
    localStorage.setItem("dark", JSON.stringify(value));
  };

  return (
    <section className="dark:bg-background-dark/30 bg-background-light/30 fixed top-0 right-0 left-0 z-10 flex h-14 lg:h-20 items-center justify-between px-6 backdrop-blur-md">
      {/* left heading */}
      <h2 className="name-tag sm:text-xl">{"<Jatin Manhotra/>"}</h2>

      <div className="soft-bg-gradient dark:dark-bg-gradient card-shadow card-border relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg lg:hidden">
        {showMenu ? (
          <FaXmark onClick={() => setShowMenu(false)} className="text-2xl" />
        ) : (
          <IoIosMenu onClick={() => setShowMenu(true)} className="text-2xl" />
        )}

        <div
          className={`${showMenu ? "scale-100" : "scale-0"} soft-bg-gradient dark:dark-bg-gradient card-shadow card-border absolute top-10 right-0 flex w-52 origin-top-right flex-col items-start justify-between gap-2 rounded-2xl p-3`}
        >
          <Link
            className="w-full rounded-lg"
            activeClass="sm-active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button onClick={()=>setShowMenu(false)} aria-label="Home" className="sm-menu-item">
              <FaHome className="text-lg" /> Home
            </button>
          </Link>

          <Link
            className="w-full rounded-lg"
            activeClass="sm-active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button onClick={()=>setShowMenu(false)} aria-label="About" className="sm-menu-item">
              <IoPerson className="text-lg" /> About
            </button>
          </Link>

          <Link
            className="w-full rounded-lg"
            activeClass="sm-active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button onClick={()=>setShowMenu(false)} aria-label="Skills" className="sm-menu-item">
              <HiOutlineLightBulb className="text-lg" /> Skills
            </button>
          </Link>

          <Link
            className="w-full rounded-lg"
            activeClass="sm-active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button onClick={()=>setShowMenu(false)} aria-label="Projects" className="sm-menu-item">
              <FaCode className="text-lg" /> Projects
            </button>
          </Link>

          <Link
            className="w-full rounded-lg"
            activeClass="sm-active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button onClick={()=>setShowMenu(false)} aria-label="Contact me" className="sm-menu-item">
              <IoMdMail className="text-lg" /> Contact me
            </button>
          </Link>

          <div
            onClick={() => setShowMoreMenu(!showMoreMenu)}
            aria-label="Theme"
            className="sm-menu-item relative"
          >
            <TbSunMoon className="text-lg" /> Theme
            <div
              className={`${showMoreMenu ? "pointer-events-auto scale-100" : "pointer-events-none scale-0"} card-shadow card-border soft-bg-gradient dark:dark-bg-gradient absolute top-8 right-0 flex w-30 origin-top flex-col items-start gap-3 rounded-lg p-3`}
            >
              <button
                onClick={() => handleThemeToggle(false)}
                className={`${dark === false ? "gold-text" : ""} flex cursor-pointer items-center gap-4`}
              >
                <GoSun className="text-lg" /> Light
              </button>

              <div className="bg-main-light/50 dark:bg-main-dark/50 h-[.0063rem] w-full" />
              <button
                onClick={() => handleThemeToggle(true)}
                className={`${dark === true ? "gold-text" : ""} flex cursor-pointer items-center gap-4`}
              >
                <IoMoon className="text-lg" /> Dark
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* middle links */}

      <ul className="lg:flex hidden items-center gap-10">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <li className="li-hover li-underline">Home</li>
        </Link>

        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <li className="li-hover li-underline">About</li>
        </Link>

        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <li className="li-hover li-underline">Skills</li>
        </Link>

        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <li className="li-hover li-underline">Projects</li>
        </Link>
      </ul>

      {/* contact me btn */}
      <div className="hidden lg:flex items-center gap-10">
        <Link
          activeClass="not_active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button aria-label="Contact me" className="group dark-btn dark:light-btn custom-btn rounded-full">
            <IoMdMail className="text-lg" /> Contact me
            <FaArrowRightLong className="group-hover:translate-x-2" />
          </button>
        </Link>

       
        <div className="border-gold card-shadow  flex items-center gap-1 rounded-full border-2 p-1">
          <div
            onClick={() => handleThemeToggle(false)}
            className={`${
              !dark ? "gold-btn" : ""
            } flex h-6 w-6 cursor-pointer  items-center justify-center rounded-full`}
          >
            <IoMdSunny />
          </div>

          <div
            onClick={() => handleThemeToggle(true)}
            className={`${
              dark ? "gold-btn" : ""
            } flex h-6 w-6 cursor-pointer  items-center justify-center rounded-full`}
          >
            <FaMoon className="text-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
