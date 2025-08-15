import hackerRank from "../../assets/certificates/hackerrank.png"
import react from "../../assets/certificates/reactjs.jpg"
import javascript from "../../assets/certificates/javascript.jpg"
import { useContext, useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CertificatesCard from "./CertificatesCard";
import { MyContext } from "../../context/MyContext";
import ViewAllCard from "../projects/ViewAllCard";

const certificates = [
    {
        name : "Frontend Developer (React)",
        description : "Passed skill-based assessment focused on React components, props, state, and lifecycle.",
        date : "Jul 2025",
        url : "https://www.hackerrank.com/certificates/758de61b6677",
        img : hackerRank
    },
    {
        name : "Hands On React JS From Beginner to Expert ",
        description : "Built multiple React apps using hooks, routing, and API integration.",
        date : "Jul 2025",
        url : "https://www.udemy.com/certificate/UC-c1ddc5a8-5a18-471c-80f4-d7ba14d6bb07/",
        img : react
    },
    {
        name : "JavaScript Fundamentals to Advanced: Full Stack Development",
        description : "Covered concepts like closures, promises, async/await, ES6+, and event-driven behavior.",
        date : "Jul 2025",
        url : "https://www.udemy.com/certificate/UC-eae49c75-f449-45c1-9802-01aa06028be8/",
        img : javascript
    },
]

const Certification = () => {

     const { isSmall, chunkProjects, handleNext, handlePrev } = useContext(MyContext);
    
      const [page, setPage] = useState(0);
      const scrollRef = useRef();
    
      const groupedProjects = chunkProjects(certificates, isSmall ? 1 : 2, false);
    
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
    <section id="certifications" className="mt-20 lg:mt-40">
      {/* my certifications heading */}
      <h1
        data-aos="fade-up"
        className="text-center text-3xl font-bold lg:text-4xl"
      >
        My <span className="gold-text li-underline">Certifications</span>
      </h1>

      {/* sub heading */}
      <h3
        data-aos="zoom-in"
        data-aos-offset="200"
        className="subtext-color mt-6 mb-10 text-center text-sm sm:text-lg lg:mb-20"
      >
        Here are some of my <strong className="main-text-color">certifications</strong>. You can explore the full list on my{" "}
        <strong className="main-text-color">
          <a
            href="https://www.linkedin.com/in/jatin-manhotra-5b474a347/"
            target="_blank"
          >
            LinkedIn
          </a>
        </strong>{" "}
        profile.
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
                      <CertificatesCard key={item.name} item={item} />
                    )
                  }
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

export default Certification;
