import aboutMe from "../../assets/aboutMe.svg";

const AboutMe = () => {
  return (
    <section className="mt-20">
      <h2 className="text-center  font-bold text-4xl">
        About <span className="text-gold li-underline">Me</span>
      </h2>

      <div className="flex items-center justify-between mt-10 px-10">
        <img className="w-[30rem]" src={aboutMe} alt="About me illustration" />

        <div className="basis-[60%]">
          <h3 className="text-2xl text-deep-gold mb-6">A bit about me</h3>

          <p className="text-justify text-lg subtext-color">
            Hi, I'm{" "}
            <span className="font-bold main-text-color">Jatin Manhotra</span>, a
            self-taught web developer with a strong interest in how things work
            on the web. I started my journey with{" "}
            <span className="font-bold main-text-color">HTML, CSS</span> and
            really enjoyed the process of making clean and responsive UIs. I care
            about writing efficient, reusable code while keeping the{" "}
            <span className="font-bold main-text-color">user experience</span>{" "}
            in mind. I enjoy combining good design, modern technology, and
            creativity in every project I work on.
            <br />
            <br />
            As a self-driven learner, I've built several projects that reflect
            my ability to work with{" "}
            <span className="font-bold main-text-color">
              APIs, manage state, and craft responsive UIs
            </span>
            . I'm currently focused on becoming a well-rounded developer, and it
            won't be long before I dive deeper into{" "}
            <span className="font-bold main-text-color">
              full-stack development
            </span>
            .<br />
            <br />
            Right now, I'm looking for opportunities where I can contribute to a
            <span className="font-bold main-text-color"> team</span>, keep
            learning, and apply my skills to{" "}
            <span className="font-bold main-text-color">
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
