import { useEffect, useState } from "react";
import img from "../../assets/img.svg";
import { GrGithub } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {

  const [dynamicText, setDynamicText] = useState({ text: "", class: "" }); // text animated with typewriter effect

  const [greetingIndex, setGreetingIndex] = useState(0); // updates the greeting message

  const greetings = [
    "Hello",
    "Hola",
    "Bonjour",
    "Hallo",
    "Ciao",
    "Olá",
    "नमस्ते",
    "こんにちは",
    "안녕하세요",
    "你好",
    "Привет",
    "Merhaba",
    "Salam",
    "Sawasdee",
    "Xin chào",
    "Halo",
    "Hej",
    "Selam",
    "Shalom",
  ];

  // updates the text using typewriter effect
  useEffect(() => {
    const words = [
      "Web Developer",
      "React JS Developer",
      "Frontend Developer",
      "HTML, CSS, JS Developer",
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    function typeEffect() {

      const currentWord = words[wordIndex]; // stores the whole word
      const updatedText = currentWord.substring(0, charIndex); // stores the word letter by letter on every fetch
      setDynamicText({ text: updatedText, class: "stop-blinking" }); // stops blinking when typing and erasing

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        timeout = setTimeout(typeEffect, 150); // adds character every 150ms until completed
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        timeout = setTimeout(typeEffect, 80); // removes the word under 80ms 
      } else {
        isDeleting = !isDeleting;
        setDynamicText((prev) => ({ ...prev, class: "" })); // shows blinking animation
        if (!isDeleting) {
          wordIndex = (wordIndex + 1) % words.length; // shifts to next word
        }
        timeout = setTimeout(typeEffect, 1200);
      }
    }

    typeEffect();

    return () => clearTimeout(timeout); // cleanup
  }, []);

  // updates the greeting message every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length); // switch to next greeting
    }, 3000); // changes every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="flex flex-wrap-reverse items-center justify-between pt-10 lg:h-[calc(100dvh_-_5rem)] lg:flex-nowrap lg:gap-5 xl:gap-0"
    >
      {/* introduction and useful links */}
      <div className="lg:basis-[48%] lg:pl-5 xl:pl-10">

        {/* introduction */}
        <h1 className="pb-2 text-3xl sm:text-4xl lg:text-5xl lg:leading-[4rem]">

          {/* greeting text */}
          <span key={greetings[greetingIndex]} className="fade-slide block">
            {greetings[greetingIndex]},<br />
          </span>

          I'm Jatin Manhotra
        </h1>

        {/* typewriter text */}
        <h2
          className={`${dynamicText.class} ${window.innerWidth < 1024 ? "mobile" : ""} custom-caret text-deep-gold relative min-h-[2.5rem] w-fit text-xl sm:text-2xl lg:text-4xl`}
        >
          {dynamicText.text}
        </h2>

        {/* info about me */}
        <p className="subtext-color mt-4 text-justify sm:text-lg lg:mt-6">
          I'm a <strong className="main-text-color">web developer</strong> who really enjoys <strong className="main-text-color">bringing ideas to reality</strong>. I
          love to take this challenge, and there's no better feeling than
          finally <strong className="main-text-color">achieving it</strong>. I'm always learning new things , improving my
          skills, and trying to get better <strong className="main-text-color">day-by-day</strong>. Coding makes me <strong className="main-text-color">happy</strong>,
          and I'm excited to keep growing and creating more <strong className="main-text-color">cool projects</strong>.
        </p>

        {/* redirecting buttons */}
        <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row">

          {/* github profile */}
          <a href="https://github.com/JatinManhotra" target="_blank">
            <button
              aria-label="Github profile"
              className="dark:light-btn dark-btn group custom-btn"
            >
              <GrGithub className="text-xl" /> My Github Profile
              <FaArrowRightLong className="group-hover:translate-x-2" />
            </button>
          </a>

        </div>
      </div>

      {/* my image on the side */}
      <div className="relative mx-auto">
        <img
          className="w-[30rem] xl:w-[35rem]"
          src={img}
          alt="Jatin Manhotra"
        />
      </div>
    </section>
  );
};

export default Home;
