import whatsapp from "../../assets/icons/whatsapp.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";

const ContactPlatforms = () => {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:flex-nowrap sm:gap-10">
      <div
        data-ao="fade-right"
        data-ao-offset="500"
        onClick={() =>
          window.open(
            "https://wa.me/918493912066?text=Hi%20there%2C%20I%20saw%20your%20portfolio!",
            "_blank",
          )
        }
        className="group card-shadow card-border flex w-fit cursor-pointer items-center gap-6 rounded-lg border-[#2dea55]/50 px-6 py-3 sm:border-transparent sm:hover:border-[#2dea55]/50"
      >
        <img
          className="w-9 grayscale-100 group-hover:grayscale-0 sm:w-10"
          src={whatsapp}
          alt="Whatsapp"
        />
        <p className="text-sm sm:text-lg">WhatsApp</p>
      </div>

      <a
        href="https://www.instagram.com/manhotra.31/"
        target="_blank"
        data-ao="fade-right"
        data-ao-offset="500"
        data-ao-delay="100"
        className="group card-shadow card-border flex w-fit cursor-pointer items-center gap-6 rounded-lg border-[#c3427b]/50 px-6 py-3 sm:border-transparent sm:hover:border-[#c3427b]/50"
      >
        <img
          className="w-9 grayscale-100 group-hover:grayscale-0 sm:w-10"
          src={instagram}
          alt="Whatsapp"
        />

        <p className="text-sm sm:text-lg">Instagram</p>
      </a>

      <a
        href="https://www.linkedin.com/in/jatin-manhotra-5b474a347/"
        target="_blank"
        data-ao="fade-right"
        data-ao-offset="500"
        data-ao-delay="200"
        className="group card-shadow card-border flex w-fit cursor-pointer items-center gap-6 rounded-lg border-[#0078d4]/50 px-6 py-3 sm:border-transparent sm:hover:border-[#0078d4]/50"
      >
        <img
          className="w-10 grayscale-100 group-hover:grayscale-0"
          src={linkedin}
          alt="Whatsapp"
        />
        <p className="text-sm sm:text-lg">Linkedin</p>
      </a>

      <a
        href="https://github.com/JatinManhotra"
        target="_blank"
        data-ao="fade-right"
        data-ao-offset="500"
        data-ao-delay="300"
        className="group card-shadow card-border flex w-fit cursor-pointer items-center gap-6 rounded-lg border-[#0078d4]/50 px-6 py-3 sm:border-transparent sm:hover:border-[#0078d4]/50"
      >
        <img
          className="w-10 grayscale-100 group-hover:grayscale-0"
          src={github}
          alt="Whatsapp"
        />
        <p className="text-sm sm:text-lg">Github</p>
      </a>
    </div>
  );
};

export default ContactPlatforms;
