import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();
const MyContextProvider = ({ children }) => {
  const [dark, setDark] = useState(true);

  const [fact, setFact] = useState("");
  const [factLoading, setFactLoading] = useState(false);

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
      setFact("Failed to fetch fact" + error);
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

  // changes the bg color on page reload
  useEffect(() => {
    fetchFacts();
    const mode = JSON.parse(localStorage.getItem("dark"));
    setDark(mode);
    document.body.classList.add("background-color");
  }, []);

  // confetti cursor
  useEffect(() => {
    function customCursor(event) {
      for (let i = 0; i < 5; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        document.body.appendChild(confetti);

        const randomX = Math.floor(Math.random() * 30);
        const randomY = Math.floor(Math.random() * 30);

        confetti.style.left = event.clientX + randomX + "px";
        confetti.style.top = event.clientY + randomY + "px";

        const randomColor = Math.floor(Math.random() * 256);
        confetti.style.backgroundColor = "rgb(255, 255, " + randomColor + ")";

        setTimeout(() => {
          document.body.removeChild(confetti);
        }, 500);
      }
    }

    document.addEventListener("mousemove", customCursor);
    return () => document.removeEventListener("mousemove", customCursor);
  }, []);

  return (
    <MyContext.Provider value={{ dark, setDark, fact, setFact, fetchFacts, factLoading }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
