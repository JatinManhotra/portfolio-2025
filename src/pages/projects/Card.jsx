import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="soft-bg-gradient text-justify card-shadow dark:dark-bg-gradient card-border rounded-lg p-4 sm:p-6">
      <div className="group overflow-hidden rounded-lg">
        <img
          className="scale-100 group-hover:scale-[1.02]"
          src={item.img}
          alt={item.title}
        />
      </div>
      <h1 className="mt-4 text-lg sm:text-xl font-bold">{item.title}</h1>
      <h3 className="subtext-color text-sm sm:text-base h-30 sm:h-25 mt-4">{item.short_description}</h3>

      <div className="mt-4 flex items-center justify-between gap-4">
        {item?.live_demo && <a className="group" target="_blank" href={item.live_demo}>
          <button aria-label="Live project demo" className="custom-btn dark-btn dark:light-btn">
            Live Demo <FaArrowRightLong className="group-hover:translate-x-2" />
          </button>
        </a>}

        <Link to={`/project/${item.title}`}>
          <button aria-label="More project details" className="text-info dark:subtext-color cursor-pointer text-sm sm:text-base">More Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
