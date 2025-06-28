import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {

  const [dark, setDark] = useState(true); // sets dark mode
  const [fact, setFact] = useState(""); // stores the fetched fact
  const [factLoading, setFactLoading] = useState(false); // loading state when fact is being fetched 

  // function to fetch random facts
  async function fetchFacts() {
    const url = "https://facts-by-api-ninjas.p.rapidapi.com/v1/facts";

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
        "x-rapidapi-host": "facts-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      setFactLoading(true);
      const response = await fetch(url, options);
      const result = await response.json();
      setFact(result[0].fact);
      setFactLoading(false);
    } catch (error) {
      setFact("Failed to fetch fact" + error); // sets the fact state in case of error
      setFactLoading(false);
    }
  }

  // sets color theme on page reload
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // some operations on page reload
  useEffect(() => {
    fetchFacts(); // fetch facts
    const mode = JSON.parse(localStorage.getItem("dark"));
    setDark(mode); // gets the dark value from storage and sets the mode
    document.body.classList.add("background-color"); // changes the background colors using a custom class with styles
  }, []);

  // confetti cursor
  useEffect(() => {

    function customCursor(event) {
      for (let i = 0; i < 1; i++) { // increasing i < value will increase the no of particles 
        const confetti = document.createElement("div");
        confetti.classList.add("confetti"); // custom class with styles
        document.body.appendChild(confetti);

        const randomX = Math.floor(Math.random() * 30); // random positions below the user's cursor
        const randomY = Math.floor(Math.random() * 30);

        confetti.style.top = event.clientY + randomY + "px";
        confetti.style.left = event.clientX + randomX + "px"; // styles the particles below the user's cursor

        const randomColor = Math.floor(Math.random() * 256);
        confetti.style.backgroundColor = "rgb(255, 255, " + randomColor + ")"; // yellow / golden color

        setTimeout(() => {
          document.body.removeChild(confetti);
        }, 500); // hides the particles in a dropping animation
      }
    }

    document.addEventListener("mousemove", customCursor);
    return () => document.removeEventListener("mousemove", customCursor);
  }, []);

  return (
    <MyContext.Provider
      value={{ dark, setDark, fact, setFact, fetchFacts, factLoading }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
