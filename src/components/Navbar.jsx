import { useContext } from "react";
import { IoMdMail, IoMdSunny } from "react-icons/io";
import { MyContext } from "../context/MyContext";
import { FaMoon } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  const { dark, setDark } = useContext(MyContext);

  return (
    <section className="flex z-10 items-center justify-between mx-6  h-20 ">

      {/* left heading */}
      <h2 className="name-tag text-xl">{"<Jatin Manhotra/>"}</h2>

      {/* middle links */}

      <ul className="flex items-center gap-10">
        <li className="li-hover li-underline">Home</li>
        <li className="li-hover li-underline">About</li>
        <li className="li-hover li-underline">Skills</li>
        <li className="li-hover li-underline">Projects</li>
      </ul>

      {/* contact me btn */}
      <div className="flex items-center gap-10 ">
        <button className="group light-btn custom-btn rounded-full">
          <IoMdMail className="text-lg" /> Contact me
          <FaArrowRightLong className="group-hover:translate-x-2" />
        </button>

      {/* toggle light/dark mode */}
        <div className="border-2 border-gold p-1 flex gap-1 rounded-full items-center">
          <div
            onClick={() => setDark(false)}
            className={`${
              !dark ? "gold-btn" : ""
            } w-6 h-6  flex items-center justify-center cursor-pointer rounded-full`}
          >
            <IoMdSunny />
          </div>

          <div
            onClick={() => setDark(true)}
            className={`${
              dark ? "gold-btn" : ""
            } w-6 h-6  flex items-center justify-center  cursor-pointer rounded-full`}
          >
            <FaMoon className="text-sm" />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Navbar;
