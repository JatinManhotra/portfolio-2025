import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {

  const [dark, setDark] = useState(true); // sets dark mode
  const [fact, setFact] = useState(""); // stores the fetched fact
  const [factLoading, setFactLoading] = useState(false); // loading state when fact is being fetched 
  const [showProjects, setShowProjects] = useState({
    personal : true,
    pro_bono : false
  }); // toggles between my personal projects and pro bono projects
  const [isSmall, setIsSmall] = useState(false); // sets on devices less than 1024 width

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

  // creates chunks for projects

  const chunkProjects = (arr, size, includeViewAll = false) => {
  const chunks = [];

  // Copy array so we don't mutate the original
  const data = [...arr];

  if (includeViewAll) {
    // If last chunk would be 1 item, put "view-all" with it
    if ((data.length % size) === 1 && size > 1) {
      data.push("view-all");
    } else {
      data.push("view-all");
    }
  }

  // Create chunks
  for (let i = 0; i < data.length; i += size) {
    chunks.push(data.slice(i, i + size));
  }

  // Special case for small screens (size === 1):
  // Ensure "view-all" is always alone in its chunk
  if (includeViewAll && size === 1) {
    const lastChunk = chunks[chunks.length - 1];
    if (lastChunk.length > 1 && lastChunk.includes("view-all")) {
      chunks.push(["view-all"]);
    }
  }

  return chunks;
};


   // next button
  function handleNext(ref, page, setPage, groupedProjects) {
    const container = ref.current;
    const groupWidth = container.offsetWidth; // scroll ref container's full width

    const next = page + 1;
    const max = groupedProjects.length - 1;

    const targetPage = next > max ? 0 : next; // shifts to first page after the end
    container.scrollTo({ left: groupWidth * targetPage, behavior: "smooth" }); // scrolls the container on each click
    setPage(targetPage);
  }

   // previous button
  function handlePrev(ref, page, setPage, groupedProjects) {
    const container = ref.current;
    const groupWidth = container.offsetWidth;

    const prev = page - 1;
    const max = groupedProjects.length - 1;

    const targetPage = prev < 0 ? max : prev; // shifts to last page after clicking on the previous button on first page
    container.scrollTo({ left: groupWidth * targetPage, behavior: "smooth" });
    setPage(targetPage);
  }

   // checks for screens < 1024 on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      value={{ dark, setDark, fact, setFact, fetchFacts, factLoading, showProjects, setShowProjects, isSmall, setIsSmall, chunkProjects, handleNext, handlePrev }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
