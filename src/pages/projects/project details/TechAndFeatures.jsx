import React from "react";
import { FaCode, FaRegStar } from "react-icons/fa";

const TechAndFeatures = ({project}) => {
  return (
    <div className="soft-bg-gradient dark:dark-bg-gradient flex items-center gap-2 sm:gap-4 rounded-lg p-2 sm:p-3">

      <div className="dark:hover:border-gold  border-deep-gold dark:border-gold/50 flex w-full scale-100 items-center gap-3 sm:gap-4 rounded-lg border-1 px-3 sm:px-4 py-3 hover:scale-[1.02]">

        <div className="bg-deep-gold flex sm:h-8 sm:w-8 w-7 h-7 items-center justify-center rounded-full">
          <FaCode className="text-main-light sm:text-xl" />
        </div>

        <div className="flex flex-col">
          <p className="sm:text-xl font-bold">{project.technology_used.length}</p>
          <h3 className="subtext-color text-xs sm:text-sm">Total technologies</h3>
        </div>
      </div>

      <div className="hover:border-info-dark border-info dark:border-info-dark/50 flex w-full scale-100 items-center gap-3 sm:gap-4 rounded-lg border-1 px-3 sm:px-4 py-5 hover:scale-[1.02]">

        <div className="bg-info-dark flex sm:h-8 sm:w-8 h-7 w-7 items-center justify-center rounded-full">
          <FaRegStar className="text-main-light sm:text-xl" />
        </div>

        <div className="flex flex-col">
          <p className="sm:text-xl font-bold">{project.key_features.length}</p>
          <h3 className="subtext-color text-xs sm:text-sm">Key Features</h3>
        </div>

      </div>
    </div>
  );
};

export default TechAndFeatures;
