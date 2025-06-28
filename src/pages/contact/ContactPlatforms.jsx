import whatsapp from "../../assets/icons/whatsapp.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";

const ContactPlatforms = () => {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 xl:flex-nowrap">

      {/* whatsapp button */}
      <div
        data-aos="fade-right"
        onClick={() =>
          window.open(
            "https://wa.me/918493912066?text=Hi%20there%2C%20I%20saw%20your%20portfolio!",
            "_blank",
          )
        }
        className="group card-shadow card-border flex w-fit cursor-pointer items-center gap-6 rounded-lg border-[#2dea55]/50 px-6 py-3 xl:border-transparent xl:hover:border-[#2dea55]/50"
      >
        <img
          className="w-9 group-hover:grayscale-0 sm:w-10 xl:grayscale-100"
          src={whatsapp}
          alt="Whatsapp"
        />
        <p className="text-sm sm:text-lg">WhatsApp</p>
      </div>

        {/* instagram button */}
      <a
        href="https://www.instagram.com/manhotra.31/"
        target="_blank"
        data-aos="fade-right"
        data-aos-delay="100"
        className="group card-shadow card-border flex w-fit cursor-pointer items-center gap-6 rounded-lg border-[#c3427b]/50 px-6 py-3 xl:border-transparent xl:hover:border-[#c3427b]/50"
      >
        <img
          className="w-9 group-hover:grayscale-0 sm:w-10 xl:grayscale-100"
          src={instagram}
          alt="Whatsapp"
        />

        <p className="text-sm sm:text-lg">Instagram</p>
      </a>

        {/* linkedin button */}
      <a
        href="https://www.linkedin.com/in/jatin-manhotra-5b474a347/"
        target="_blank"
        data-aos="fade-right"
        data-aos-delay="200"
        className="group card-shadow card-border flex w-fit cursor-pointer items-center gap-6 rounded-lg border-[#0078d4]/50 px-6 py-3 xl:border-transparent xl:hover:border-[#0078d4]/50"
      >
        <img
          className="w-10 group-hover:grayscale-0 xl:grayscale-100"
          src={linkedin}
          alt="Whatsapp"
        />
        <p className="text-sm sm:text-lg">Linkedin</p>
      </a>

        {/* github button */}
      <a
        href="https://github.com/JatinManhotra"
        target="_blank"
        data-aos="fade-right"
        data-aos-delay="300"
        className="group card-shadow card-border flex w-fit cursor-pointer items-center gap-6 rounded-lg border-[#0078d4]/50 px-6 py-3 xl:border-transparent xl:hover:border-[#0078d4]/50"
      >
        <img
          className="w-10 group-hover:grayscale-0 xl:grayscale-100"
          src={github}
          alt="Whatsapp"
        />
        <p className="text-sm sm:text-lg">Github</p>
      </a>
      
    </div>
  );
};

export default ContactPlatforms;
