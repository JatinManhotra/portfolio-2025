import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./pages/projects/project-details/ProjectDetails";
import Homepage from "./pages/Homepage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // animation only works when scrolled from top to bottom
      offset: 100,
    });
  }, []);

  return (
    <Routes>
      <Route path={"/"} element={<Homepage />} />
      <Route path={"/project/:projectName"} element={<ProjectDetails />} />
    </Routes>
  );
};

export default App;
