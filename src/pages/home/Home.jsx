import { useEffect, useState } from "react";
import img from "../../assets/img.svg";
import { GrGithub } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  const [dynamicText, setDynamicText] = useState({ text: "", class: "" }); // text animated with typewriter effect

  const [greetingIndex, setGreetingIndex] = useState(0);

  const [smallScreen, setSmallScreen] = useState(false)

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
      const currentWord = words[wordIndex];
      const updatedText = currentWord.substring(0, charIndex);
      setDynamicText({ text: updatedText, class: "stop-blinking" });

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        timeout = setTimeout(typeEffect, 150);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        timeout = setTimeout(typeEffect, 80);
      } else {
        isDeleting = !isDeleting;
        setDynamicText((prev) => ({ ...prev, class: "" }));
        if (!isDeleting) {
          wordIndex = (wordIndex + 1) % words.length;
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
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 3000); // changes every 1.5s

    return () => clearInterval(interval);
  }, []);





  return (
    <section id="home" className="flex lg:h-[calc(100dvh_-_5rem)] flex-wrap-reverse lg:flex-nowrap items-center pt-10 lg:gap-5 xl:gap-0 justify-between">


      {/* introduction and useful links */}
      <div className="lg:pl-5 xl:pl-10 lg:basis-[48%]">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl pb-2 lg:leading-[4rem]">
          <span key={greetings[greetingIndex]} className="fade-slide block">
            {greetings[greetingIndex]},<br />
          </span>
          I'm Jatin Manhotra
        </h1>

        <h2
          className={`${dynamicText.class} ${window.innerWidth < 1024 ? "mobile" : ""} custom-caret text-xl sm:text-2xl lg:text-4xl text-deep-gold relative min-h-[2.5rem] w-fit`}
        >
          {dynamicText.text}
        </h2>

        <p className="text-justify mt-4 lg:mt-6 subtext-color sm:text-lg">I'm a web developer who really enjoys bringing ideas to reality. I love to take this challenge, and there's no better feeling than finally achieving it. I'm always learning new things , improving my skills, and trying to get better day-by-day. Coding makes me happy, and I'm excited to keep growing and creating more cool projects.</p>

      <div className="mt-10 flex flex-col items-start sm:flex-row  gap-6"> 

        <a href="https://github.com/JatinManhotra" target="_blank">
          <button aria-label="Github profile" className="dark:light-btn dark-btn group custom-btn">
          <GrGithub className="text-xl"/> My Github Profile
          <FaArrowRightLong className="group-hover:translate-x-2" />
          </button>
          </a>

        <a>
          <button aria-label="Resume" className="gold-btn group custom-btn">
          Resume
          </button>
        </a>

      </div>
        
      </div>

      {/* my image on the side */}

      <div className="relative mx-auto ">
        <img className="w-[30rem] xl:w-[35rem]" src={img} alt="Jatin Manhotra" />
      </div>
    </section>
  );
};

export default Home;
