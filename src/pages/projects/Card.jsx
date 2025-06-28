import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="soft-bg-gradient card-shadow dark:dark-bg-gradient card-border flex flex-col items-start justify-between rounded-lg p-4 text-justify sm:p-6">

      <div>

        {/* project image */}
        <div className="group overflow-hidden rounded-lg">
          <img
            className="scale-100 group-hover:scale-[1.02]"
            src={item.img}
            alt={item.title}
          />
        </div>

        {/* project title and description */}
        <h1 className="mt-4 text-lg font-bold sm:text-xl">{item.title}</h1>
        <h3 className="subtext-color mt-4 h-fit text-sm sm:text-base">
          {item.short_description}
        </h3>

      </div>

      <div className="mt-4 flex items-center justify-between gap-4">

        {/* live demo button */}
        {item?.live_demo && (
          <a className="group" target="_blank" href={item.live_demo}>
            <button
              aria-label="Live project demo"
              className="custom-btn dark-btn dark:light-btn"
            >
              Live Demo{" "}
              <FaArrowRightLong className="group-hover:translate-x-2" />
            </button>
          </a>
        )}

        {/* redirect to project details page */}
        <Link to={`/project/${item.title}`}>
          <button
            aria-label="More project details"
            className="text-info dark:subtext-color cursor-pointer text-sm sm:text-base"
          >
            More Details
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Card;
