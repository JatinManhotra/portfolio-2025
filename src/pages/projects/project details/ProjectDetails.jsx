import { useNavigate, useParams } from "react-router-dom";

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaCode, FaRegStar } from "react-icons/fa";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import { useEffect } from "react";
import TechAndFeatures from "./TechandFeatures";
import TechApiIdeas from "./TechApiIdeas";
import { projectData } from "../data";

const ProjectDetails = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();

  const project = projectData.find(
    (p) => p.title.toLowerCase() === projectName.toLowerCase(),
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
  },[]);

  if (!project) {
    return (
      <div className="mt-10 text-center text-red-500">Project not found.</div>
    );
  }

  return (
    <>
      <section className="mx-auto mt-10 w-full max-w-[85%] text-justify">
        <div className="flex items-center gap-10">
          <button
            onClick={() => navigate(-1)}
            className="group custom-btn light-btn"
          >
            <FaArrowLeftLong className="group-hover:-translate-x-2" /> Back
          </button>

          <p className="text-lg">
            <span className="subtext-color">{"Project > "}</span>{" "}
            {project.title}{" "}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-10">
          <div className="animate-right">
            <div>
              <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>
              <p className="subtext-color mb-6 text-lg">
                {project.description}
              </p>
            </div>

            <TechAndFeatures project={project} />

            <div className="my-10 flex items-center gap-6">
              <a href={project.live_demo} target="_blank">
                <button className="custom-btn light-btn group">
                  <FiExternalLink className="text-lg group-hover:rotate-12" />{" "}
                  Live Demo
                </button>
              </a>

              <a href={project.github_page} target="_blank">
                <button className="custom-btn gold-btn group">
                  <FiGithub className="text-lg group-hover:rotate-12" /> Github
                  code
                </button>
              </a>
            </div>

            <TechApiIdeas project={project} />
          </div>

          <div className="animate-left">
            <div className="group card-shadow card-border overflow-hidden rounded-lg">
              <video className="group-hover:scale-[1.02]" autoPlay loop>
                <source src={project.video} />
              </video>
            </div>

            <div className="border-gold/50 card-shadow dark-bg-gradient mt-10 rounded-xl border-1 p-6">
              <h2 className="mb-4 flex items-center gap-4 text-2xl font-semibold">
                <FaRegStar className="text-gold" /> Key Features
              </h2>

              {project.key_features.map((feature, index) => (
                <div key={index} className="mx-auto my-5 max-w-[90%]">
                  <h2 className="text-lg font-bold">{feature.ul}</h2>
                  <ul className="marker:text-gold subtext-color mb-6 ml-6 list-disc">
                    <li key={index}>{feature.li}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-6 flex h-20 w-full items-center justify-center dark-color">
        <div className="w-full">
          <div className="bg-subtext-light dark:bg-subtext-dark mb-6 h-0.5 w-full" />
          <span className="subtext-color block text-center">
            © 2025 - All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default ProjectDetails;
