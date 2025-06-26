import React from "react";
import github_page from "../../assets/github-page.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const ViewAllCard = () => {
  return (
    <div className="card-border card-shadow soft-bg-gradient dark:dark-bg-gradient rounded-lg p-6">
      <div className="group overflow-hidden rounded-lg">
        <img
          className="scale-100 group-hover:scale-[1.02]"
          src={github_page}
          alt="Github Page"
        />
      </div>
      <h1 className="mt-4 text-xl font-bold">Want to see more?</h1>
      <h3 className="subtext-color mt-4 h-25">Check out my Github profile!</h3>

      <div className="mt-4 flex items-center gap-4">
        <a
          className="group"
          target="_blank"
          href="https://github.com/JatinManhotra"
        >
          <button aria-label="Github profile" className="custom-btn dark-btn dark:light-btn">
            Github profile{" "}
            <FaArrowRightLong className="group-hover:translate-x-2" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ViewAllCard;
