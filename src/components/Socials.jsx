import { RiGithubLine, RiInstagramFill, RiInstagramLine } from "react-icons/ri";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";

const Socials = () => {
  return (
    <aside className="fixed top-0 bottom-0 left-0 hidden w-12 flex-col items-center justify-end gap-10 text-2xl md:flex">
      {/* social media links */}
      <div className="flex flex-col items-center gap-4">
        <div className="group cursor-pointer">
          <a href="https://github.com/JatinManhotra" target="_blank">
            <RiGithubLine className="block group-hover:hidden" />
          </a>
          <a href="https://github.com/JatinManhotra" target="_blank">
            <GrGithub className="hidden group-hover:block" />
          </a>
        </div>

        <div className="group cursor-pointer">
          <a href="https://www.instagram.com/manhotra.31/" target="_blank">
            <RiInstagramLine className="block group-hover:hidden" />
          </a>
          <a href="https://www.instagram.com/manhotra.31/" target="_blank">
            <RiInstagramFill className="hidden group-hover:block" />
          </a>
        </div>

        <div className="group cursor-pointer">
          <a
            href="https://www.linkedin.com/in/jatin-manhotra-5b474a347/"
            target="_blank"
          >
            {" "}
            <FaLinkedinIn className="block group-hover:hidden" />
          </a>
          <a
            href="https://www.linkedin.com/in/jatin-manhotra-5b474a347/"
            target="_blank"
          >
            {" "}
            <FaLinkedin className="hidden group-hover:block" />
          </a>
        </div>
      </div>

      <div className="gold-gradient h-20 w-1"></div>
    </aside>
  );
};

export default Socials;
