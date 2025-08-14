import experience from "../../assets/experience.svg";

const Experience = () => {
  return (
    // my experience component
    <section id="experience" className="mt-20 lg:mt-40">
      {/* my experience heading */}
      <h2
        data-aos="fade-up"
        className="text-center text-3xl font-bold lg:text-4xl"
      >
        My <span className="gold-text li-underline">Experience</span>
      </h2>

      {/* my experience data */}
      <div className="mt-10 flex flex-wrap items-center justify-between overflow-x-hidden lg:flex-nowrap lg:px-10">
        {/* my experience illustration  */}
        <img
          data-aos="zoom-in"
          className="mx-auto w-[25rem] lg:w-[20rem] xl:w-[30rem]"
          src={experience}
          alt="my experience illustration"
        />

        {/* my experience information */}
        <div className="subtext-color mt-10 text-justify sm:text-lg lg:mt-0 lg:basis-[60%]">
          {/* a small heading */}
          <h3
            data-aos="fade-left"
            data-aos-delay="100"
            className="orange-text mb-4 text-xl lg:text-2xl"
          >
            Independent Frontend Developer - Pro Bono Projects
          </h3>

          {/* a small heading */}
          <h4
            data-aos="fade-left"
            data-aos-delay="100"
            className="mb-6 text-base lg:text-lg"
          >
            ( <span className="italic"> Jun 2024 - Present </span> )
          </h4>

          {/* each paragraph appears after 100ms delay */}
          <p data-aos="fade-left" data-aos-offset="250">
            <span className="font-bold main-text-color">Collaborated</span> with peers and local businesses to design and deliver
            <span className="font-bold main-text-color"> web applications</span> that solved <span className="font-bold main-text-color">real-world needs</span>, applying
            industry-standard frontend engineering practices.
            <br />
            <br />
          </p>

          <p
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-offset="200"
            className="orange-text text-lg xl:text-xl mb-4"
          >
            Key Contributions:
          </p>

          <ul className="marker:gold-text ml-8 list-disc">
            <li className="mb-2" data-aos="fade-left" data-aos-delay="100" data-aos-offset="200">
              Requirement gathering and translating <span className="font-bold main-text-color">client needs</span> into functional
              prototypes.
            </li>
            

            <li className="mb-2" data-aos="fade-left" data-aos-delay="200" data-aos-offset="200">
              Applying responsive design, cross-browser testing, and UI/UX <strong className="main-text-color">best
              practices.</strong>
            </li>
            

            <li data-aos="fade-left" data-aos-delay="300" data-aos-offset="200">
              Using <strong className="main-text-color">Git-based workflows</strong> with feature branching for project
              delivery.
            </li>
            
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
