import ContactPlatforms from "./ContactPlatforms";
import contact from "../../assets/contact.svg"
import ContactForm from "./ContactForm";
import { useState } from "react";
import Popup from "./popup/Popup";


const ContactMe = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [emailSendError, setEmailSendError] = useState(false);

  return (
    <section className="mt-20">
      <h1 className="text-center text-4xl font-bold">
        Contact <span className="text-gold">Me</span>
      </h1>

      <h3 className="subtext-color mt-6 mb-5 text-center text-lg">
        If you want to know more about me, or if you would just like to say
        hello, send me a message. I'd love to hear from you.
      </h3>

      <div className="mx-auto mt-10 max-w-[90%]">

        <div>
        <h2 className="text-deep-gold text-xl">Get in touch</h2>
        <h3 className="subtext-color mt-2 text-lg">
          You can reach me on these platforms.
        </h3>

        <ContactPlatforms/>
      </div>

      <div className="relative py-3 mt-10 w-full">
        <hr />
        <p className="absolute top-0 left-[50%] translate-x-[-50%] background-color px-3">OR</p>
      </div>

      <h3 className="subtext-color mt-10 text-lg">
          Send me a email
        </h3>

      <div className="mt-10 flex items-center gap-10 justify-between">

        <div className="basis-[40%]">
          <img src={contact} alt="Contact svg" />
        </div>

        <div className="flex-1 dark-bg-gradient card-shadow card-border py-4 rounded-lg">
          <ContactForm showPopup={showPopup} setShowPopup={setShowPopup} emailSendError={emailSendError} setEmailSendError={setEmailSendError}/>
        </div>

      </div>

      {showPopup && <Popup showPopup={showPopup} setShowPopup={setShowPopup} emailSendError={emailSendError} setEmailSendError={setEmailSendError}/>}



      </div>

    </section>
  );
};

export default ContactMe;
