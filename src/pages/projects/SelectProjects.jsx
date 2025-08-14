import codeBracketLight from "../../assets/icons/code-brackets-light.svg";
import codeBracketDark from "../../assets/icons/code-brackets-dark.svg";
import handshakeLight from "../../assets/icons/handshake-light.svg";
import handshakeDark from "../../assets/icons/handshake-dark.svg";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

const SelectProjects = () => {
  const { dark, showProjects, setShowProjects } = useContext(MyContext);

  return (
    <section id="projects">
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        className="border-gold card-shadow mx-auto mt-40 flex w-fit items-center gap-2 sm:gap-4 rounded-2xl border-2 p-2 sm:p-3"
      >
        <button
          onClick={() => setShowProjects({ personal: true, pro_bono: false })}
          aria-label="personal projects"
          className={`${showProjects.personal ? "gold-gradient text-black" : ""} flex cursor-pointer items-center gap-2 sm:gap-4 text-sm rounded-xl p-2 sm:p-3 sm:text-lg font-semibold hover:scale-[102%]`}
        >
          <img
            src={
              dark
                ? showProjects.personal
                  ? codeBracketDark
                  : codeBracketLight
                : codeBracketDark
            }
            alt="code bracket"
            className="w-8 sm:w-10"
          />
          Personal Projects
        </button>
        <button
          onClick={() => setShowProjects({ personal: false, pro_bono: true })}
          aria-label="pro bono projects"
          className={`${showProjects.pro_bono ? "gold-gradient text-black" : ""} flex cursor-pointer items-center gap-4 text-sm rounded-xl p-2 sm:p-3 sm:text-lg font-semibold hover:scale-[102%]`}
        >
          {" "}
          <img
            src={
              dark
                ? showProjects.pro_bono
                  ? handshakeDark
                  : handshakeLight
                : handshakeDark
            }
            alt="handshake"
            className="w-8 sm:w-10"
          />
          Pro Bono Projects
        </button>
      </div>
    </section>
  );
};

export default SelectProjects;
