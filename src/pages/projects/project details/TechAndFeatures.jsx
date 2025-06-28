import { FaCode, FaRegStar } from "react-icons/fa";

const TechAndFeatures = ({ project }) => {
  return (
    <div className="soft-bg-gradient dark:dark-bg-gradient flex items-center gap-2 rounded-lg p-2 sm:gap-4 sm:p-3">

      {/* total technologies */}
      <div className="dark:hover:border-gold border-deep-gold dark:border-gold/50 flex w-full scale-100 items-center gap-3 rounded-lg border-1 px-3 py-3 hover:scale-[1.02] sm:gap-4 sm:px-4">

        <div className="bg-deep-gold flex h-7 w-7 items-center justify-center rounded-full sm:h-8 sm:w-8">
          <FaCode className="text-main-light sm:text-xl" />
        </div>

        <div className="flex flex-col">
          <p className="font-bold sm:text-xl">
            {project.technology_used.length}
          </p>
          <h3 className="subtext-color text-xs sm:text-sm">
            Total technologies
          </h3>
        </div>

      </div>

    {/* key features */}
      <div className="hover:border-info-dark border-info dark:border-info-dark/50 flex w-full scale-100 items-center gap-3 rounded-lg border-1 px-3 py-3 hover:scale-[1.02] sm:gap-4 sm:px-4">

        <div className="bg-info-dark flex h-7 w-7 items-center justify-center rounded-full sm:h-8 sm:w-8">
          <FaRegStar className="text-main-light sm:text-xl" />
        </div>

        <div className="flex flex-col">
          <p className="font-bold sm:text-xl">{project.key_features.length}</p>
          <h3 className="subtext-color text-xs sm:text-sm">Key Features</h3>
        </div>
        
      </div>
    </div>
  );
};

export default TechAndFeatures;
