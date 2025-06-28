import success from "../../../assets/icons/success.svg"
import error from "../../../assets/icons/error.svg"
import { FaXmark } from "react-icons/fa6"
import { useEffect, useState } from "react"

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
    <section className='flex items-center z-[98] justify-center fixed top-0 left-0 bottom-0 right-0'>
      {/* Overlay */}
      <div onClick={() => setShowPopup(false)} className='animate-opacity bg-black/50 z-[99] fixed top-0 left-0 bottom-0 right-0' />

      {/* Popup Card */}
      <div className={`scale-up relative flex flex-col items-center justify-center gap-10 w-60 h-60 sm:h-70 sm:w-70 md:w-80 md:h-80 rounded-lg card-shadow overflow-hidden card-border soft-bg-gradient dark:dark-bg-gradient z-[100]`}>
        <FaXmark onClick={() => setShowPopup(false)} className="absolute cursor-pointer text-2xl top-5 right-5" />
        
        <img className="mx-auto w-20 sm:w-30" src={emailSendError ? error : success} alt="Status icon" />

        <h2 className="sm:text-lg text-center">
          {emailSendError ? "Failed to send email! Please try again." : "Email sent successfully!"}
        </h2>

        {/* Bottom shrinking bar */}
        <div
          className={`${emailSendError ? "error-bg" : "success-bg"} absolute bottom-0 left-0 h-3 msg-width`}
          style={{ width: msgWidth }}
        />
      </div>
    </section>
  );
};

export default Popup;
