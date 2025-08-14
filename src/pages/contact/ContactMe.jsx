import ContactPlatforms from "./ContactPlatforms";
import contact from "../../assets/contact.svg";
import ContactForm from "./ContactForm";
import { useState } from "react";
import Popup from "./popup/Popup";

const ContactMe = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [emailSendError, setEmailSendError] = useState(false);

  return (
    <section id="contact" className="mt-20 lg:mt-40">

      {/* contact me heading */}
      <h1
        data-aos="fade-up"
        className="text-center text-3xl font-bold sm:text-4xl"
      >
        Contact <span className="gold-text li-underline">Me</span>
      </h1>

      {/* small heading */}
      <h3
        data-aos="zoom-in"
        className="subtext-color mt-6 mb-5 text-center text-sm sm:text-lg"
      >
        If you want to know more about me, or if you would just like to say
        hello, <strong className="main-text-color">send me a message</strong>. I'd love to hear from you.
      </h3>

      <div className="mx-auto mt-20 lg:max-w-[95%] xl:max-w-[90%]">

        {/* heading with contact platforms component */}
        <div>
          <h2 data-aos="fade-right" className="orange-text text-lg sm:text-xl">
            Get in touch
          </h2>
          <h3
            data-aos="fade-right"
            data-aos-delay="100"
            className="subtext-color mt-2 text-sm sm:text-lg"
          >
            You can reach me on these <strong className="main-text-color">platforms</strong>.
          </h3>

          <ContactPlatforms />
        </div>

        {/* horizontal divider with 'OR' inside */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="relative mt-10 w-full py-3"
        >
          <hr />
          <p className="background-color absolute top-0 left-[50%] translate-x-[-50%] px-3">
            OR
          </p>
        </div>

        {/* small heading */}
        <h3
          data-aos="fade-right"
          className="subtext-color mt-10 text-sm sm:text-lg"
        >
          Send me a <strong className="main-text-color">email</strong> 
        </h3>

        {/* component with a illustration and a contact me form */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-10 gap-x-80 overflow-hidden lg:gap-5 xl:gap-10">

          {/* illustration */}
          <div data-aos="zoom-in" className="mx-auto lg:basis-[40%]">
            <img
              className="w-[25rem] lg:w-[30rem]"
              src={contact}
              alt="Contact svg"
            />
          </div>

          {/* contact me form */}
          <div
            data-aos="fade-left"
            className="dark-bg-gradient card-shadow card-border flex-1 rounded-lg py-4"
          >
            <ContactForm
              showPopup={showPopup}
              setShowPopup={setShowPopup}
              emailSendError={emailSendError}
              setEmailSendError={setEmailSendError}
            />
          </div>
        </div>

        {/* popup component */}
        {showPopup && (
          <Popup
            showPopup={showPopup}
            setShowPopup={setShowPopup}
            emailSendError={emailSendError}
            setEmailSendError={setEmailSendError}
          />
        )}
      </div>
    </section>
  );
};

export default ContactMe;
