import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";
import { projectData } from "./data";
import ViewAllCard from "./ViewAllCard";

const MyProjects = () => {
  const [isSmall, setIsSmall] = useState(false);
  const [page, setPage] = useState(0);
  const scrollRef = useRef();

  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const baseGroups = chunkArray(projectData, isSmall ? 1 : 2);

  // Add the ViewAllCard as the last group
  const groupedProjects = [...baseGroups, ["view-all"]];

  function handleNext() {
    const container = scrollRef.current;
    const groupWidth = container.offsetWidth;

    const next = page + 1;
    const max = groupedProjects.length - 1;

    const targetPage = next > max ? 0 : next;
    container.scrollTo({ left: groupWidth * targetPage, behavior: "smooth" });
    setPage(targetPage);
  }

  function handlePrev() {
    const container = scrollRef.current;
    const groupWidth = container.offsetWidth;

    const prev = page - 1;
    const max = groupedProjects.length - 1;

    const targetPage = prev < 0 ? max : prev;
    container.scrollTo({ left: groupWidth * targetPage, behavior: "smooth" });
    setPage(targetPage);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <section className="mt-40">
      <h1 className="text-4xl text-center font-bold">
        My <span className="text-gold">Projects</span>
      </h1>

      <h3 className="text-center subtext-color text-lg mt-6 mb-10">
        Below are some of my projects. You can find all of them on my{" "}
        <a
          target="_blank"
          className="font-bold cursor-pointer text-black dark:text-white "
          href="https://github.com/JatinManhotra"
        >
          Github
        </a>{" "}
        page
      </h3>

      <div className="flex items-center justify-between px-3">
        <div
          onClick={handlePrev}
          className="w-15 h-15 rounded-full cursor-pointer   flex items-center justify-center gold-btn"
        >
          <FaArrowLeft className="text-2xl " />
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto py-3 hide-scrollbar max-w-[85%] w-full snap-x snap-mandatory scroll-smooth"
        >
          {groupedProjects.map((group, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full snap-start grid ${
                isSmall ? "grid-cols-1" : "grid-cols-2"
              } gap-6 px-4`}
            >
              {group.map((item, i) =>
                item === "view-all" ? (
                  <ViewAllCard key="view-all" />
                ) : (
                  <Card key={item.title} item={item} />
                )
              )}
            </div>
          ))}
        </div>

        <div
          onClick={handleNext}
          className="w-15 h-15 rounded-full  cursor-pointer  flex items-center justify-center gold-btn"
        >
          <FaArrowRight className="text-2xl " />
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {groupedProjects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const groupWidth = scrollRef.current.offsetWidth;
              scrollRef.current.scrollTo({
                left: groupWidth * i,
                behavior: "smooth",
              });
              setPage(i);
            }}
            className={`w-3 h-3 cursor-pointer rounded-full transition-all duration-300 ${
              page === i ? "bg-gold scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
