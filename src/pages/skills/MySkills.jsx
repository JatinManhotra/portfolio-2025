import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import javascript from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";
import react_router from "../../assets/icons/react-router.svg";
import redux from "../../assets/icons/redux.svg";
import tailwind_css from "../../assets/icons/tailwind-css.svg";
import chakra_ui from "../../assets/icons/chakra-ui.svg";
import material_ui from "../../assets/icons/material-ui.svg";
import git from "../../assets/icons/git.svg";
import firebase from "../../assets/icons/firebase.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import github from "../../assets/icons/github.svg";
import IconBox from "./IconBox";

const languages = [
  {
    icon: html,
    color: "#E34F26",
    text: "HTML5",
  },
  {
    icon: css,
    color: "#1572B6",
    text: "CSS3",
  },
  {
    icon: javascript,
    color: "#F7DF1E",
    text: "JavaScript",
  },
];

const libraries = [
  {
    icon: react,
    color: "#61DAFB",
    text: "React",
  },
  {
    icon: react_router,
    color: "#d0021b",
    text: "React Router DOM",
  },
  {
    icon: redux,
    color: "#764ABC",
    text: "Redux",
  }
];

const frameworks = [
  {
    icon: tailwind_css,
    color: "#06B6D4",
    text: "Tailwind CSS",
  },
  {
    icon: bootstrap,
    color: "#7952B3",
    text: "Bootstrap",
  },
  {
    icon: material_ui,
    color: "#007FFF",
    text: "Material UI",
  },
  {
    icon: chakra_ui,
    color: "#319795",
    text: "Chakra UI",
  },
];

const tools = [
  {
    icon: firebase,
    color: "#FFCA28",
    text: "Firebase",
  },
  {
    icon: git,
    color: "#F05032",
    text: "Git",
  },
  {
    icon: github,
    color: "#6693c1",
    text: "Github",
  },
];

const MySkills = () => {
  return (
    <section id="skills" className="mt-20">
      <h1 data-aos="fade-up" className="text-4xl text-center font-bold">
        My <span className="text-gold">Skills</span>
      </h1>

      <h3 data-aos="zoom-in" data-aos-offset="300" data-aos-delay="100" className="text-center subtext-color text-lg mt-6 mb-20">
        Here are the technologies I am familiar with
      </h3>

      <div className="grid grid-cols-2">

        <div data-aos="fade-right" data-aos-offset="300" className="mb-5">
          <h2 className="text-deep-gold text-center text-xl my-5">Languages</h2>
          <div className="flex items-center gap-10 justify-center">
            {languages?.length > 0
              ? languages.map((item) => (
                  <IconBox
                    key={item.text}
                    icon={item.icon}
                    color={item.color}
                    text={item.text}
                  />
                ))
              : null}
          </div>
        </div>

        <div data-aos="fade-left" data-aos-offset="300" data-aos-delay="200" className="mb-5">
          <h2 className="text-deep-gold text-center text-xl my-5">Libraries</h2>
          <div className="flex items-center gap-10 justify-center">
            {libraries?.length > 0
              ? libraries.map((item) => (
                  <IconBox
                    key={item.text}
                    icon={item.icon}
                    color={item.color}
                    text={item.text}
                  />
                ))
              : null}
          </div>
        </div>

        <div data-aos="fade-right" data-aos-offset="200" data-aos-delay="300">
          <h2 className="text-deep-gold text-center text-xl my-5">
            Frameworks
          </h2>
          <div className="flex items-center gap-10 justify-center">
            {frameworks?.length > 0
              ? frameworks.map((item) => (
                  <IconBox
                    key={item.text}
                    icon={item.icon}
                    color={item.color}
                    text={item.text}
                  />
                ))
              : null}
          </div>
        </div>

        <div data-aos="fade-left" data-aos-offset="200" data-aos-delay="400">
          <h2 className="text-deep-gold text-center text-xl my-5">Tools</h2>
          <div className="flex items-center gap-10 justify-center">
            {tools?.length > 0
              ? tools.map((item) => (
                  <IconBox
                    key={item.text}
                    icon={item.icon}
                    color={item.color}
                    text={item.text}
                  />
                ))
              : null}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default MySkills;
