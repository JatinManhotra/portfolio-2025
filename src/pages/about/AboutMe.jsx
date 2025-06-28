import aboutMe from "../../assets/aboutMe.svg";

const AboutMe = () => {
  return (
    <section id="about" className="mt-20 lg:mt-40">
      <h2 data-aos="fade-up"  className="text-center text-3xl lg:text-4xl font-bold">
        About <span className="gold-text li-underline">Me</span>
      </h2>

      <div className="mt-10 flex items-center flex-wrap lg:flex-nowrap overflow-x-hidden justify-between lg:px-10">
        <img
          data-aos="zoom-in"
          className="w-[25rem] lg:w-[20rem] xl:w-[30rem] mx-auto"
          src={aboutMe}
          alt="About me illustration"
        />

        <div className="lg:basis-[60%] text-justify subtext-color mt-10 lg:mt-0 sm:text-lg">
          <h3 data-aos="fade-left" data-aos-delay="100" className="orange-text mb-6 text-xl lg:text-2xl">A bit about me</h3>

          <p
            data-aos="fade-left" data-aos-offset="250" 
          
          >
            Hi, I'm{" "}
            <span className="main-text-color font-bold">Jatin Manhotra</span>, a
            self-taught web developer with a strong interest in how things work
            on the web. I started my journey with{" "}
            <span className="main-text-color font-bold">HTML, CSS</span> and
            really enjoyed the process of making clean and responsive UIs. I
            care about writing efficient, reusable code while keeping the{" "}
            <span className="main-text-color font-bold">user experience</span>{" "}
            in mind. I enjoy combining good design, modern technology, and
            creativity in every project I work on.
            <br />
            <br />
          </p>

          <p data-aos="fade-left" data-aos-delay="100"  data-aos-offset="200" >
            As a self-driven learner, I've built several projects that reflect
            my ability to work with{" "}
            <span className="main-text-color font-bold">
              APIs, manage state, and craft responsive UIs
            </span>
            . I'm currently focused on becoming a well-rounded developer, and it
            won't be long before I dive deeper into{" "}
            <span className="main-text-color font-bold">
              full-stack development
            </span>
            .
          </p>
          <br />
          <p data-aos="fade-left" data-aos-delay="200" data-aos-offset="200">
            {" "}
            Right now, I'm looking for opportunities where I can contribute to a
            <span className="main-text-color font-bold"> team</span>, keep
            learning, and apply my skills to{" "}
            <span className="main-text-color font-bold">
              real-world challenges
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
