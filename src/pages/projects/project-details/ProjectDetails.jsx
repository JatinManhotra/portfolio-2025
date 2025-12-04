import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useEffect } from "react";
import TechAndFeatures from "./TechandFeatures";
import TechApiIdeas from "./TechApiIdeas";
import { projectData, proBonoData } from "../data";
import Clock from "../../../components/Clock";
import Chatbot from "../chatbot/Chatbot";

const ProjectDetails = () => {

  const { projectName } = useParams(); // gets project name from the url
  const navigate = useNavigate();

  const allProjects = [...projectData, ...proBonoData]

  const project = allProjects.find( // does project exists?
    (p) => p.title.toLowerCase() === projectName.toLowerCase(),
  );

  // scrolls to top when project page opens
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // not found component
  if (!project) {
    return (
      <div className="text-xl sm:text-3xl xl:text-4xl flex items-center justify-center gap-10 flex-col h-dvh">
        <h1>This Project does not <span className="gold-text italic li-underline">exist.</span></h1>
         <button
            aria-label="Navigate left"
            onClick={() => navigate("/")}
            className="group custom-btn dark-btn dark:light-btn"
          >
            <FaArrowLeftLong className="group-hover:-translate-x-2" /> Back to Homepage
          </button>
        </div>
    );
  }

  return (
    <>
      <section className="mx-auto mt-10 w-full max-w-[91%] overflow-hidden text-justify xl:max-w-[85%]">

        {/* back button with a breadcrumb */}
        <div className="flex items-center gap-10">

          <button
            aria-label="Navigate left"
            onClick={() => navigate(-1)}
            className="group custom-btn dark-btn dark:light-btn"
          >
            <FaArrowLeftLong className="group-hover:-translate-x-2" /> Back
          </button>

          <p className="sm:text-lg">
            <span className="subtext-color">{"Project > "}</span>{" "}
            {project.title}{" "}
          </p>

        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">

          {/* left component */}
          <div className="animate-right">

            {/* project title and description */}
            <div>
              <h1 className="mb-4 text-xl font-bold sm:text-3xl lg:text-4xl">
                {project.title}
              </h1>
              <p className="subtext-color mb-6 sm:text-lg">
                {project.description}
              </p>
            </div>

            {/* ui to show no of tech used and features */}
            <TechAndFeatures project={project} />

            {/* buttons for redirecting */}
            <div className="my-10 flex flex-wrap items-center gap-6 sm:flex-nowrap">

              {/* live demo button */}
              {project?.live_demo && (
                <a href={project.live_demo} target="_blank">
                  <button
                    aria-label="Live project demo"
                    className="custom-btn dark-btn dark:light-btn group"
                  >
                    <FiExternalLink className="text-lg group-hover:rotate-12" />{" "}
                    Live Demo
                  </button>
                </a>
              )}

              {/* github code button */}
              {project?.github_page && (
                <a href={project.github_page} target="_blank">
                  <button
                    aria-label="Github code link"
                    className="custom-btn gold-btn group"
                  >
                    <FiGithub className="text-lg group-hover:rotate-12" />{" "}
                    Github code
                  </button>
                </a>
              )}

            </div>

              {/* tech used, api used and future ideas */}
            <TechApiIdeas project={project} />
          </div>

              {/* right component */}
          <div className="animate-left">

            {/* project video */}
            <div className="group card-shadow card-border overflow-hidden rounded-lg">
              <video className="group-hover:scale-[1.02]" autoPlay loop>
                <source src={project.video} />
              </video>
            </div>

              {/* key features component */}
            <div className="border-deep-gold dark:border-gold/50 card-shadow soft-bg-gradient dark:dark-bg-gradient mt-10 rounded-xl border-1 p-3 sm:p-6">

            {/* heading */}
              <h2 className="mb-4 flex items-center gap-4 text-xl font-semibold sm:text-2xl">
                <FaRegStar className="gold-text" /> Key Features
              </h2>

              {/* list with bullet points */}
              {project.key_features.map((feature, index) => (
                <div
                  key={index}
                  className="mx-auto my-5 max-w-[95%] sm:max-w-[90%]"
                >
                  <h2 className="font-bold sm:text-lg">{feature.ul}</h2>
                  <ul className="marker:gold-text subtext-color mb-6 ml-6 list-disc text-sm sm:text-base">
                    <li key={index}>{feature.li}</li>
                  </ul>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

        {/* footer at the end */}
      <footer className="dark-color mt-6 flex h-20 w-full items-center justify-center text-sm sm:text-base">
        <div className="w-full">
          <div className="bg-subtext-light/50 dark:bg-subtext-dark/50 mx-auto mb-6 h-0.5 w-[85%]" />
          <span className="subtext-color block text-center">
            © 2025 - All Rights Reserved.
          </span>
        </div>
      </footer>

      <Chatbot />
      <Clock />
    </>
  );
};

export default ProjectDetails;
