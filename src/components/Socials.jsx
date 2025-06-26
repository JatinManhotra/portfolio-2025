import { RiGithubLine, RiInstagramFill, RiInstagramLine } from "react-icons/ri"
import { GrGithub } from "react-icons/gr"
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa"

const Socials = () => {
  return (

   <aside className="fixed hidden  top-0 gap-10 left-0 text-2xl sm:flex flex-col justify-end items-center bottom-0  w-12">

          {/* social media links */}
          <div className="flex flex-col items-center gap-4">

            <div className="group cursor-pointer">
            <RiGithubLine className="group-hover:hidden block" />
            <a href="https://github.com/JatinManhotra" target="_blank"><GrGithub className="group-hover:block hidden" /></a>      
          </div>

          <div className="group cursor-pointer ">
            <RiInstagramLine  className="group-hover:hidden block" />
            <a href="https://www.instagram.com/manhotra.31/" target="_blank"><RiInstagramFill  className="group-hover:block hidden" /></a>
            
          </div>

          <div className="group cursor-pointer ">
            <FaLinkedinIn  className="group-hover:hidden block" />
            <a href="https://www.linkedin.com/in/jatin-manhotra-5b474a347/" target="_blank"> <FaLinkedin  className="group-hover:block hidden" /></a>
           
          </div>

          </div>

          <div className="h-20 w-1 gold-gradient"></div>

      </aside>
  )
}

export default Socials