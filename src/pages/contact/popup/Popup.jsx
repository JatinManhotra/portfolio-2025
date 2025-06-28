import success from "../../../assets/icons/success.svg";
import error from "../../../assets/icons/error.svg";
import { FaXmark } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Popup = ({ showPopup, setShowPopup, emailSendError }) => {

  const [msgWidth, setMsgWidth] = useState("100%"); // Start full width

  useEffect(() => {

    if (showPopup) {

      // Reset bar width to full when popup shows
      setMsgWidth("100%");

      // Start shrinking the bar
      const timeoutShrink = setTimeout(() => {
        setMsgWidth("0%");
      }, 50); // slight delay for transition to trigger

      // Hide popup after 5 seconds
      const timeoutHide = setTimeout(() => {
        setShowPopup(false);
      }, 5000);

      return () => {
        clearTimeout(timeoutShrink);
        clearTimeout(timeoutHide);
      };
    }
  }, [showPopup, setShowPopup]);

  return (

    <section className="fixed top-0 right-0 bottom-0 left-0 z-[98] flex items-center justify-center">

      {/* dark Overlay */}
      <div
        onClick={() => setShowPopup(false)}
        className="animate-opacity fixed top-0 right-0 bottom-0 left-0 z-[99] bg-black/50"
      />

      {/* Popup Card */}
      <div
        className={`scale-up card-shadow card-border soft-bg-gradient dark:dark-bg-gradient relative z-[100] flex h-60 w-60 flex-col items-center justify-center gap-10 overflow-hidden rounded-lg sm:h-70 sm:w-70 md:h-80 md:w-80`}
      >

        {/* close popup on click */}
        <FaXmark
          onClick={() => setShowPopup(false)}
          className="absolute top-5 right-5 cursor-pointer text-2xl"
        />

        {/* success and error img */}
        <img
          className="mx-auto w-20 sm:w-30"
          src={emailSendError ? error : success}
          alt="Status icon"
        />

        {/* popup status */}
        <h2 className="text-center sm:text-lg">
          {emailSendError
            ? "Failed to send email! Please try again."
            : "Email sent successfully!"}
        </h2>

        {/* Bottom shrinking bar */}
        <div
          className={`${emailSendError ? "error-bg" : "success-bg"} msg-width absolute bottom-0 left-0 h-3`}
          style={{ width: msgWidth }}
        />
      </div>
    </section>
  );
};

export default Popup;
