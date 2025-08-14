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
import vite from "../../assets/icons/vite.svg";
import npm from "../../assets/icons/npm.svg";
import eye from "../../assets/icons/eye.svg";
import code from "../../assets/icons/code.svg";
import speedometer from "../../assets/icons/speedometer.svg";
import browser from "../../assets/icons/browser.svg";
import mobile from "../../assets/icons/mobile.svg";
import IconBox from "./IconBox";

  // my skills data
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
  },
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
  {
    icon: vite,
    color: "#9b60ff",
    text: "Vite",
  },
  {
    icon: npm,
    color: "#d50000",
    text: "npm",
  },
];

const performance = [
  {
    icon: eye,
    color: "#ffd05b",
    text: "Accessibility (ARIA)",
  },
  {
    icon: code,
    color: "#25b6d2",
    text: "Semantic HTML",
  },
  {
    icon: mobile,
    color: "#87a3c4",
    text: "Responsive Design",
  },
  {
    icon: speedometer,
    color: "#ffc10d",
    text: "SPA Optimization",
  },
  {
    icon: browser,
    color: "#77b3d4",
    text: "Cross-Browser Testing",
  },
];

const MySkills = () => {
  return (
    <section id="skills" className="mt-20 lg:mt-40">

      {/* my skills heading */}
      <h1
        data-aos="fade-up"
        className="text-center text-3xl font-bold lg:text-4xl"
      >
        My <span className="gold-text li-underline">Skills</span>
      </h1>

      {/* sub heading */}
      <h3
        data-aos="zoom-in"
        data-aos-offset="200"
        className="subtext-color mt-6 mb-10 text-center text-sm sm:text-lg lg:mb-20"
      >
        Here are the <strong className="main-text-color">technologies</strong> I am familiar with
      </h3>

      <div className="grid grid-cols-1 overflow-hidden pb-5 sm:pb-8 lg:grid-cols-2">

        {/* languages component */}
        <div data-aos="fade-right" data-aos-offset="200" className="mb-5 p-2">
          <h2 className="orange-text my-5 text-center sm:text-xl">Languages</h2>
          <div className="mb-5 flex flex-wrap items-center justify-center gap-10 xl:flex-nowrap">
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

        {/* libraries component */}
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="100"
          className="mb-5 p-2"
        >
          <h2 className="orange-text my-5 text-center sm:text-xl">Libraries</h2>
          <div className="mb-5 flex flex-wrap items-center justify-center gap-10 xl:flex-nowrap">
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

        {/* framework component */}
        <div className="mb-5 p-2" data-aos="fade-right" data-aos-offset="200" data-aos-delay="200">
          <h2 className="orange-text my-5 text-center sm:text-xl">
            Frameworks
          </h2>
          <div className="mb-5 flex flex-wrap items-center justify-center gap-10 xl:flex-nowrap">
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

        {/* tools component */}
        <div className="mb-5 p-2" data-aos="fade-left" data-aos-offset="200" data-aos-delay="300">
          <h2 className="orange-text my-5 text-center sm:text-xl">Tools</h2>
          <div className="flex flex-wrap items-center justify-center gap-10 xl:flex-nowrap">
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

        {/* performance component */}
        <div className="lg:col-span-2 p-2" data-aos="fade-up" data-aos-offset="200" data-aos-delay="300">
          <h2 className="orange-text my-5 text-center sm:text-xl">Performance/UX</h2>
          <div className="flex flex-wrap items-center justify-center gap-10 xl:flex-nowrap">
            {performance?.length > 0
              ? performance.map((item) => (
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
