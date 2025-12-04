import IconBox from "../../skills/IconBox";
import { TbApi } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaCode } from "react-icons/fa";

const TechApiIdeas = ({ project }) => {
  return (
    <>

    {/* Technologies and Libraries Used */}
      <div className="my-20">
        <h2 className="mb-2 flex items-center gap-4 text-xl font-semibold sm:text-2xl">
          <FaCode className="gold-text" /> Technologies and Libraries Used
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-10 sm:gap-y-15">
          {project.technology_used.map((tech, index) => (
            <IconBox
              key={index}
              icon={tech.icon}
              color={tech.color}
              text={tech.name}
            />
          ))}
        </div>
      </div>

           {/* API Used */}
      {project.api_used?.length > 0 && (
        <div className="my-20">
          <h2 className="mb-2 flex items-center gap-4 text-xl font-semibold sm:text-2xl">
            <TbApi className="gold-text text-3xl" /> API Used
          </h2>

          <ul className="my-4 text-sm sm:text-lg">
            {project.api_used.map((api, index) => (
              <li
                key={index}
                className="subtext-color marker:gold-text my-2 ml-6 list-disc"
              >
                <a
                  target="_blank"
                  className="font-bold text-black dark:text-white"
                  href={api.link}
                >
                  {api.name}
                </a>{" "}
                - {api.text}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* What's Next / Future Ideas */}
      <div>
        <h2 className="mb-4 flex items-center gap-4 text-xl font-semibold sm:text-2xl">
          <HiOutlineLightBulb className="gold-text text-3xl" /> What's Next /
          Future Ideas
        </h2>

        <ul className="text-sm sm:text-lg">
          {project.future_ideas.map((idea, index) => (
            <li
              key={index}
              className="subtext-color marker:gold-text my-2 ml-6 list-disc"
            >
              {idea}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TechApiIdeas;
