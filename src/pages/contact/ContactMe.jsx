import ContactPlatforms from "./ContactPlatforms";
import contact from "../../assets/contact.svg"
import ContactForm from "./ContactForm";
import { useState } from "react";
import Popup from "./popup/Popup";


const ContactMe = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [emailSendError, setEmailSendError] = useState(false);

  return (
    <section  id="contact" className="mt-20 lg:mt-40">
      <h1 data-aos="fade-up" className="text-center text-3xl sm:text-4xl font-bold">
        Contact <span className="gold-text">Me</span>
      </h1>

      <h3 data-aos="zoom-in" className="subtext-color mt-6 mb-5 text-center text-sm sm:text-lg">
        If you want to know more about me, or if you would just like to say
        hello, send me a message. I'd love to hear from you.
      </h3>

      <div className="mx-auto mt-20 lg:max-w-[95%] xl:max-w-[90%]">

        <div>
        <h2 data-aos="fade-right"  className="orange-text text-lg sm:text-xl">Get in touch</h2>
        <h3 data-aos="fade-right"  data-aos-delay="100" className="subtext-color mt-2 text-sm sm:text-lg">
          You can reach me on these platforms.
        </h3>

        <ContactPlatforms/>
      </div>

      <div data-aos="zoom-in"  data-aos-delay="100" className="relative py-3 mt-10 w-full">
        <hr />
        <p className="absolute top-0 left-[50%] translate-x-[-50%] background-color px-3">OR</p>
      </div>

      <h3 data-aos="fade-right"  className="subtext-color mt-10 text-sm sm:text-lg">
          Send me a email
        </h3>

      <div className="mt-10 flex items-center overflow-hidden gap-x-80 gap-10 lg:gap-5 xl:gap-10  justify-between flex-wrap">

        <div data-aos="zoom-in"   className="lg:basis-[40%] mx-auto">
          <img className="w-[25rem] lg:w-[30rem]" src={contact} alt="Contact svg" />
        </div>

        <div data-aos="fade-left"  className="flex-1 dark-bg-gradient card-shadow card-border py-4 rounded-lg">
          <ContactForm showPopup={showPopup} setShowPopup={setShowPopup} emailSendError={emailSendError} setEmailSendError={setEmailSendError}/>
        </div>

      </div>

      {showPopup && <Popup showPopup={showPopup} setShowPopup={setShowPopup} emailSendError={emailSendError} setEmailSendError={setEmailSendError}/>}



      </div>

    </section>
  );
};

export default ContactMe;
