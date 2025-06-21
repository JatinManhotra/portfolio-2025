import { Route, Routes, useLocation } from "react-router-dom";
import Email from "./components/Email";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import AboutMe from "./pages/about/AboutMe";
import RandomFacts from "./pages/facts/RandomFacts";
import Home from "./pages/home/Home";
import MyProjects from "./pages/projects/MyProjects";
import MySkills from "./pages/skills/MySkills";
import ProjectDetails from "./pages/project details/ProjectDetails";

const App = () => {
  const location = useLocation();
  const isProjectDetailsPage = location.pathname.startsWith("/project/");

  return (
    <>
      {!isProjectDetailsPage && (
        <>
          <header>
            <Navbar />
          </header>

          <main>
            <Socials />

            <section className="max-w-[91%]  w-full mx-auto">
              <Home />
              <RandomFacts />
              <AboutMe />
              <MySkills />
              <MyProjects />
            </section>

            <Email />
          </main>

          <footer></footer>
        </>
      )}

      <Routes>
        <Route path={"/project/:projectName"} element={<ProjectDetails />} />
      </Routes>
    </>
  );
};

export default App;
