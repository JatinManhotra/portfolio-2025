import { useContext } from "react";
import { IoMdMail, IoMdSunny } from "react-icons/io";
import { MyContext } from "../context/MyContext";
import { FaMoon } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  const { dark, setDark } = useContext(MyContext);

  return (
    <section className="dark:bg-surface-dark/30 fixed top-0 right-0 left-0 z-10 flex h-20 items-center justify-between px-6 backdrop-blur-md">
      {/* left heading */}
      <h2 className="name-tag text-xl">{"<Jatin Manhotra/>"}</h2>

      {/* middle links */}

      <ul className="flex items-center gap-10">
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
      <div className="flex items-center gap-10">
        <Link
          activeClass="not_active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className="group light-btn custom-btn rounded-full">
            <IoMdMail className="text-lg" /> Contact me
            <FaArrowRightLong className="group-hover:translate-x-2" />
          </button>
        </Link>

        {/* toggle light/dark mode */}
        <div className="border-gold flex items-center gap-1 rounded-full border-2 p-1">
          <div
            onClick={() => setDark(false)}
            className={`${
              !dark ? "gold-btn" : ""
            } flex h-6 w-6 cursor-pointer items-center justify-center rounded-full`}
          >
            <IoMdSunny />
          </div>

          <div
            onClick={() => setDark(true)}
            className={`${
              dark ? "gold-btn" : ""
            } flex h-6 w-6 cursor-pointer items-center justify-center rounded-full`}
          >
            <FaMoon className="text-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
