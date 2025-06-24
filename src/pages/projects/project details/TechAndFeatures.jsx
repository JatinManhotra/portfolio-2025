import React from "react";
import { FaCode, FaRegStar } from "react-icons/fa";

const TechAndFeatures = ({project}) => {
  return (
    <div className="soft-bg-gradient dark:bg-surface-dark flex items-center gap-4 rounded-lg p-3">
      <div className="hover:border-gold border-gold dark:border-gold/50 flex w-full scale-100 items-center gap-4 rounded-lg border-1 px-4 py-3 hover:scale-[1.02]">
        <div className="bg-deep-gold flex h-8 w-8 items-center justify-center rounded-full">
          <FaCode className="text-main-light text-xl" />
        </div>

        <div className="flex flex-col">
          <p className="text-xl font-bold">{project.technology_used.length}</p>
          <h3 className="subtext-color text-sm">Total technologies</h3>
        </div>
      </div>

      <div className="hover:border-info-dark border-info dark:border-info-dark/50 flex w-full scale-100 items-center gap-4 rounded-lg border-1 px-4 py-3 hover:scale-[1.02]">
        <div className="bg-info-dark flex h-8 w-8 items-center justify-center rounded-full">
          <FaRegStar className="text-main-light text-xl" />
        </div>

        <div className="flex flex-col">
          <p className="text-xl font-bold">{project.key_features.length}</p>
          <h3 className="subtext-color text-sm">Key Features</h3>
        </div>
      </div>
    </div>
  );
};

export default TechAndFeatures;
