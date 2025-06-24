import { RiGithubLine, RiInstagramFill, RiInstagramLine } from "react-icons/ri"
import { GrGithub } from "react-icons/gr"
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa"

const Socials = () => {
  return (

   <aside className="fixed  top-0 gap-10 left-0 text-2xl flex flex-col justify-end items-center bottom-0  w-12">

          {/* social media links */}
          <div className="flex flex-col items-center gap-4">

            <div className="group cursor-pointer">
            <RiGithubLine className="group-hover:hidden block" />
            <GrGithub className="group-hover:block hidden" />
          </div>

          <div className="group cursor-pointer ">
            <RiInstagramLine  className="group-hover:hidden block" />
            <RiInstagramFill  className="group-hover:block hidden" />
          </div>

          <div className="group cursor-pointer ">
            <FaLinkedinIn  className="group-hover:hidden block" />
            <FaLinkedin  className="group-hover:block hidden" />
          </div>

          </div>

          <div className="h-20 w-1 gold-gradient"></div>

      </aside>
  )
}

export default Socials