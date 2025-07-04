import  { useState } from "react";
import emailjs from "@emailjs/browser";
import { IoIosSend } from "react-icons/io";

const ContactForm = ({
  setShowPopup,
  setEmailSendError,
}) => {

  // name, email, message states and their error states
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState({
    msg: "",
    error: false,
    touched: false, // this key & value helps to hide the error msg on component mount, the error then displays when input is entered in the field
  });

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState({
    msg: "",
    error: false,
    touched: false,
  });

  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState({
    msg: "",
    error: false,
    touched: false,
  });

  // all error state
  const [allErrorsMsg, setAllErrorsMsg] = useState({
    opacity: "",
    msg: "",
    error: false,
  });

  // emailjs credentials
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // name validation
  function validateName() {
    setNameError((prev) => ({ ...prev, touched: true }));

    if (name.trim().length === 0) { // name is empty
      setNameError({ msg: "Name is required", error: true, touched: true });
      return false;
    }

    if (!name.match(/^[A-Za-z]{2,}(?:\s[A-Za-z]+)?$/)) { // requirement doesn't met
      setNameError({ msg: "Write a valid name", error: true, touched: true });
      return false;
    }

    setNameError({ msg: "Name Looks Good", error: false, touched: true }); // success
    return true;
  }

  // email validation
  function validateEmail() {
    setEmailError((prev) => ({ ...prev, touched: true }));

    if (email.trim().length === 0) { // email is empty
      setEmailError({ msg: "Email is required", error: true, touched: true });
      return false;
    }
    if (
      !email.match(
        /^[A-Za-z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,  
      ) // requirement doesn't met
    ) { 
      setEmailError({ msg: "Use a valid email", error: true, touched: true });
      return false;
    }
    setEmailError({ msg: "Email Looks Good", error: false, touched: true }); // success
    return true;
  }

  // message validation
  function validateMessage() {
    setMessageError((prev) => ({ ...prev, touched: true }));

    if (message.trim().length === 0) { // message is empty
      setMessageError({
        msg: "Message is required",
        error: true,
        touched: true,
      });
      return false;
    }
    if (message.length < 10) { // message is less than 10 characters
      setMessageError({
        msg: "Message should not be less than 10 characters",
        error: true,
        touched: true,
      });
      return false;
    }
    setMessageError({ // success
      msg: "Message Looks Good",
      error: false,
      touched: true,
    });
    return true;
  }

  // form validation
  function validateForm(e) {
    e.preventDefault(); // prevent page reload and default form submit action

    // basic empty check
    if (!name || !email || !message) {
      setAllErrorsMsg({
        opacity: "opacity-100",
        msg: "All fields are required",
        error: true,
      });
      setTimeout(() => {
        setAllErrorsMsg({ opacity: "opacity-0", msg: "", error: false }); // hides error message after 3 seconds
      }, 3000);
      return;
    }

    // all validations must pass
    if (!validateName() || !validateEmail() || !validateMessage()) {
      setAllErrorsMsg({
        opacity: "opacity-100",
        msg: "Please fix all errors",
        error: true,
      });
      setTimeout(() => {
        setAllErrorsMsg({ opacity: "opacity-0", msg: "", error: false });
      }, 3000);
      return;
    }

    // creating template params object
    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
    };

    // send email
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {

        // clear every input state and error state
        setName("");
        setEmail("");
        setMessage("");
        setMessageError({
          msg: "",
          error: false,
          touched: false,
        });
        setNameError({
          msg: "",
          error: false,
          touched: false,
        });
        setEmailError({
          msg: "",
          error: false,
          touched: false,
        });

        setShowPopup(true); // show popup
        setEmailSendError(false);
      })
      .catch((error) => {
        console.error("Email error:", error);
        setEmailSendError(true);
        setShowPopup(true); // show popup with error message
      });
  }

  return (
    <form
      onSubmit={(event) => validateForm(event)}
      className="w-full flex-1 px-3 sm:px-8"
    >
      {/* input field with label */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-xs font-medium text-black sm:text-sm dark:text-white"
        >
          Name
        </label>

        <input
          autoComplete="on"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyUp={validateName}
          className={`form-input ${
            nameError.touched
              ? nameError.error
                ? "border-red-500"
                : "border-green-500"
              : "border-gray-500"
          }`}
          placeholder="Your name"
        />

          {/* input error message */}
        <span
          className={`text-xs sm:text-sm ${
            nameError.touched
              ? nameError.error
                ? "text-red-600 dark:text-red-400"
                : "text-green-600 dark:text-green-400"
              : "opacity-0"
          }`}
        >
          {nameError.touched ? nameError.msg : "Error"}
        </span>

      </div>

      {/* email field with label */}
      <div>
        <label
          htmlFor="email"
          className="mt-1 mb-2 block text-xs font-medium text-black sm:text-sm dark:text-white"
        >
          Email
        </label>

        <input
          autoComplete="on"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyUp={validateEmail}
          className={`form-input ${
            emailError.touched
              ? emailError.error
                ? "border-red-500"
                : "border-green-500"
              : "border-gray-500"
          }`}
          placeholder="your@email.com"
        />

          {/* email error message */}
        <span
          className={`text-xs sm:text-sm ${
            emailError.touched
              ? emailError.error
                ? "text-red-600 dark:text-red-400"
                : "text-green-600 dark:text-green-400"
              : "opacity-0"
          }`}
        >
          {emailError.touched ? emailError.msg : "Error"}
        </span>
      </div>

        {/* message field with label */}
      <div>
        <label
          htmlFor="message"
          className="mt-1 mb-2 block text-xs font-medium text-black sm:text-sm dark:text-white"
        >
          Message
        </label>

        <div className="relative flex items-center">
          <textarea
            autoComplete="on"
            rows={3}
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={validateMessage}
            className={`form-input hide-scrollbar resize-none ${
              messageError.touched
                ? messageError.error
                  ? "border-red-500"
                  : "border-green-500"
                : "border-gray-500"
            }`}
            placeholder="Type your message"
          />
        </div>

            {/* message error message */}
        <span
          className={`text-xs sm:text-sm ${
            messageError.touched
              ? messageError.error
                ? "text-red-600 dark:text-red-400"
                : "text-green-600 dark:text-green-400"
              : "opacity-0"
          }`}
        >
          {messageError.touched ? messageError.msg : "Error"}
        </span>

      </div>

          {/* form submit button */}
      <button
        aria-label="Submit form"
        type="submit"
        className="gold-btn mt-4 flex w-full cursor-pointer items-center justify-center gap-4 rounded-lg py-2.5 text-sm font-medium transition-colors sm:text-base"
      >
        <IoIosSend className="text-3xl" /> Send
      </button>

          {/* all errors message */}
      <span
        className={`text-xs text-red-400 sm:text-sm ${allErrorsMsg.error ? allErrorsMsg.opacity : "opacity-0"}`}
      >
        {allErrorsMsg.error ? allErrorsMsg.msg : "Error"}
      </span>
      
    </form>
  );
};

export default ContactForm;
