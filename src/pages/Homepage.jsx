import { useLocation } from "react-router-dom";
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
import { useEffect, useState } from "react";
import Clock from "../components/Clock";
import Chatbot from "../pages/projects/chatbot/Chatbot";

const Homepage = () => {

  const [scrollPercentage, setScrollPercentage] = useState(0);

  function handleScrollPercentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

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

        <section className="mx-auto mt-22 w-full max-w-[91%]">
          <Home />
          <RandomFacts />
          <AboutMe />
          <MySkills />
          <MyProjects />
          <ContactMe />
        </section>

        <Email />

        <Chatbot />
        <Clock />
      </main>

      <footer className="dark-color mt-6 flex h-20 w-full items-center justify-center">
        <section className="w-full">
          <div className="bg-subtext-light dark:bg-subtext-dark mx-auto mb-6 h-0.5 w-[85%]" />

          <div className="subtext-color flex items-center justify-center">
            <span className="mr-4">© 2025 - All Rights Reserved.</span>

            <span> | </span>

            <span className="ml-4 flex items-center gap-2">
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
