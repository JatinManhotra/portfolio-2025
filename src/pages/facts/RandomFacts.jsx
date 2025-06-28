import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

const RandomFacts = () => {
  const { fact, factLoading, fetchFacts } = useContext(MyContext);

  return (
    <section className="mt-20 min-h-[20rem] py-10">

      {/* random facts heading */}
      <h1
        data-aos="fade-up"
        className="text-center text-2xl font-bold italic sm:text-3xl lg:text-4xl"
      >
        "Check out this <span className="gold-text li-underline">fact!</span>"
      </h1>

      {/* a random fact or a error message in case of error during fetch */}
      <p
        data-aos="flip-up"
        className="mx-auto mt-20 max-w-[80%] text-center text-xl italic sm:text-2xl lg:text-4xl"
      >
        {factLoading ? "A fact is on the way!" : `"${fact}"`}
      </p>

      {/* button to fetch a random fact */}
      <button
        aria-label="Get a new fact"
        data-aos="zoom-in"
        onClick={fetchFacts}
        className="dark-btn dark:light-btn custom-btn mx-auto mt-20"
      >
        Get a new fact!
      </button>
      
    </section>
  );
};

export default RandomFacts;
