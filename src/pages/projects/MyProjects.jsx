import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";
import { projectData } from "./data";
import ViewAllCard from "./ViewAllCard";

const MyProjects = () => {
  const [isSmall, setIsSmall] = useState(false); // sets on devices less than 1024 width
  const [page, setPage] = useState(0);
  const scrollRef = useRef();

  const chunkArray = (arr, size) => { // creating a array chunk containing two projects data on large devices and 1 on small devices
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const baseGroups = chunkArray(projectData, isSmall ? 1 : 2); // creating chunks

  // Add the ViewAllCard as the last group
  const groupedProjects = [...baseGroups, ["view-all"]];

  // next button
  function handleNext() {
    const container = scrollRef.current;
    const groupWidth = container.offsetWidth; // scroll ref container's full width

    const next = page + 1;
    const max = groupedProjects.length - 1;

    const targetPage = next > max ? 0 : next; // shifts to first page after the end
    container.scrollTo({ left: groupWidth * targetPage, behavior: "smooth" }); // scrolls the container on each click
    setPage(targetPage);
  }

  // previous button
  function handlePrev() {
    const container = scrollRef.current;
    const groupWidth = container.offsetWidth;

    const prev = page - 1;
    const max = groupedProjects.length - 1;

    const targetPage = prev < 0 ? max : prev;  // shifts to last page after clicking on the previous button on first page
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

  // updates the page data when scrolled on mobile devices
  useEffect(() => {
    const container = scrollRef.current;
    const handleScroll = () => {
      const groupWidth = container.offsetWidth;
      const newPage = Math.round(container.scrollLeft / groupWidth);
      setPage(newPage);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="mt-20 lg:mt-40">

      {/* my projects heading */}
      <h1
        data-aos="fade-up"
        className="text-center text-3xl font-bold lg:text-4xl"
      >
        My <span className="gold-text li-underline">Projects</span>
      </h1>

      {/* small heading */}
      <h3
        data-aos="zoom-in"
        data-aos-offset="200"
        className="subtext-color mt-6 mb-10 text-center text-sm sm:text-lg"
      >
        Below are some of my projects. You can find all of them on my{" "}
        <a
          target="_blank"
          className="cursor-pointer font-bold text-black dark:text-white"
          href="https://github.com/JatinManhotra"
        >
          Github
        </a>{" "}
        page
      </h3>

      {/* slider component */}
      <div
        data-aos="fade-up"
        data-aos-offset="250"
        className="flex items-center justify-between lg:px-3"
      >

        {/* back button */}
        <div
          onClick={handlePrev}
          className="card-shadow gold-btn hidden h-15 w-15 cursor-pointer items-center justify-center rounded-full sm:flex"
        >
          <FaArrowLeft className="text-2xl" />
        </div>

        {/* scrolling div container */}
        <div
          ref={scrollRef}
          className="hide-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth py-3 sm:max-w-[70%] lg:max-w-[85%]"
        >

          {groupedProjects.map((group, index) => (
            <div
              key={index}
              className={`grid w-full flex-shrink-0 snap-start ${
                isSmall ? "grid-cols-1" : "grid-cols-2"
              } gap-6 px-2 lg:px-4`}
            >
              {group.map((item) =>
                item === "view-all" ? (
                  <ViewAllCard key="view-all" />
                ) : (
                  <Card key={item.title} item={item} />
                ),
              )}
            </div>
          ))}
        </div>

          {/* next button */}
        <div
          onClick={handleNext}
          className="card-shadow gold-btn hidden h-15 w-15 cursor-pointer items-center justify-center rounded-full sm:flex"
        >
          <FaArrowRight className="text-2xl" />
        </div>

      </div>

          {/* pagination indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {groupedProjects.map((_, i) => (
          <button
            aria-label="Pagination"
            key={i}
            onClick={() => {
              const groupWidth = scrollRef.current.offsetWidth; 
              scrollRef.current.scrollTo({  // changes the page
                left: groupWidth * i,
                behavior: "smooth",
              });
              setPage(i);
            }}
            className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ${
              page === i ? "bg-deep-gold dark:bg-gold scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default MyProjects;
