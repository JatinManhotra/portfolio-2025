import { useContext, useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";
import { proBonoData } from "./data";
import ViewAllCard from "./ViewAllCard";
import { MyContext } from "../../context/MyContext";

const ProBonoProjects = () => {
  const { isSmall, chunkProjects, handleNext, handlePrev } = useContext(MyContext);

  const [page, setPage] = useState(0);
  const scrollRef = useRef();

  const groupedProjects = chunkProjects(proBonoData, isSmall ? 1 : 2,true);

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
    <section id="projects" className="mt-20 lg:mt-30">
      {/* my projects heading */}
      <h1
        data-aos="fade-up"
        className="text-center text-3xl font-bold lg:text-4xl"
      >
        Pro Bono <span className="gold-text li-underline">Projects</span>
      </h1>

      {/* small heading */}
      <h3
        data-aos="zoom-in"
        data-aos-offset="200"
        className="subtext-color mt-6 mb-10 text-center text-sm sm:text-lg"
      >
        Below are{" "}
        <strong className="main-text-color">
          volunteer and collaboration projects
        </strong>{" "}
        I created to help friends, students, and local businesses.
      </h3>

      {/* slider component */}
      <div
        data-aos="fade-up"
        data-aos-offset="250"
        className="flex items-center justify-between lg:px-3"
      >
        {/* back button */}
        <div
          onClick={()=>handlePrev(scrollRef, page, setPage, groupedProjects)}
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
          onClick={()=>handleNext(scrollRef, page, setPage, groupedProjects)}
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
              scrollRef.current.scrollTo({
                // changes the page
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

export default ProBonoProjects;
