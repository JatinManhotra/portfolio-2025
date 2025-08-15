import Email from "../components/Email";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import AboutMe from "../pages/about/AboutMe";
import RandomFacts from "../pages/facts/RandomFacts";
import Home from "../pages/home/Home";
import MyProjects from "../pages/projects/MyProjects";
import MySkills from "../pages/skills/MySkills";
import ContactMe from "../pages/contact/ContactMe";
import { FaHeart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import Clock from "../components/Clock";
import Chatbot from "../pages/projects/chatbot/Chatbot";
import Experience from "./experience/Experience";
import SelectProjects from "./projects/SelectProjects";
import { MyContext } from "../context/MyContext";
import ProBonoProjects from "./projects/ProBonoProjects";
import Certification from "./certifications/Certification";

const Homepage = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const {showProjects} = useContext(MyContext)

  function handleScrollPercentage() { 

    // how much user scrolled from top
    const howMuchScrolled = 
      document.body.scrollTop || document.documentElement.scrollTop;

    // content height visible to the user's screen
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  // listens on page reload
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  return (
    <>
      <header>
        <div className="fixed top-0 left-0 z-50 h-1 w-full">
          <div
            style={{ width: `${scrollPercentage}%` }}
            className="gold-gradient h-1"
          />
        </div>
        <Navbar />
      </header>

      <main>
        <Socials />

        <section className="mx-auto mt-22 w-full max-w-[91%] md:max-w-[85%] lg:max-w-[91%]">
          <Home />
          <RandomFacts />
          <AboutMe />
          <Experience/>
          <MySkills />
          <SelectProjects/>
          {
            showProjects.personal ? <MyProjects /> : <ProBonoProjects/>
          }
          <Certification/>       
          <ContactMe />
        </section>

        <Email />

        <Chatbot />
        <Clock />
      </main>

      <footer className="dark-color mt-6 flex h-20 w-full items-center justify-center">
        <section className="w-full">
          <div className="bg-subtext-light/50 dark:bg-subtext-dark/50 mx-auto mb-6 h-0.5 w-[85%]" />

          <div className="subtext-color flex flex-col items-center justify-center gap-1 text-sm sm:flex-row sm:gap-0 sm:text-base">
            <span className="mr-4">© 2025 - All Rights Reserved.</span>

            <span className="hidden sm:block"> | </span>

            <span className="flex items-center gap-2 sm:ml-4">
              Made with <FaHeart className="text-rose-500" /> by{" "}
              <a
                className="hover:font-bold dark:hover:text-white"
                target="_blank"
                href="https://www.github.com/JatinManhotra"
              >
                Jatin Manhotra
              </a>
            </span>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Homepage;
