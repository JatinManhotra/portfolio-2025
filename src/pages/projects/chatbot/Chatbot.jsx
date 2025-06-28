import  { useState } from "react";
import uta_ai from "../../../assets/uta-ai.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";

import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";

const Chatbot = () => {

  const [showChatbot, setShowChatbot] = useState(false); // show / hide chatbot
  const [animating, setAnimating] = useState(false); // animation from a img to a 'X' icon
 
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]); // saves the chat messages

  const [loading, setLoading] = useState(false); // chatbot is thinking
  const [errorMsg, setErrorMsg] = useState(false); // error occurred

  const handleToggle = () => {

    if (animating) return; // prevent double-clicking during animation

    setAnimating(true);

    setTimeout(() => {
      setShowChatbot(!showChatbot);
      setAnimating(false);
    }, 100);
  };

  return (
    <>

    {/* button to toggle chatbot */}
      <div
        title="Chat with Uta"
        onClick={handleToggle}
        className="card-shadow fixed right-2 bottom-20 flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#ec979e] md:right-10"
      >

        {/* Image (Uta) */}
        <img
          src={uta_ai}
          alt="Uta AI"
          className={`absolute h-12 w-12 rounded-full transition-all duration-300 ${showChatbot ? "scale-75 rotate-12 opacity-0" : "scale-100 rotate-0 opacity-100"} `}
        />

        {/* X Icon */}
        <FaXmark
          className={`absolute text-xl text-black transition-all duration-300 ${showChatbot ? "scale-100 rotate-0 opacity-100" : "scale-75 -rotate-12 opacity-0"} `}
        />
      </div>

      {/* chatbot component */}
      <div
        className={` ${showChatbot ? "scale-100" : "scale-0"} soft-bg-gradient dark:dark-bg-gradient card-shadow card-border fixed right-0 bottom-20 flex h-full max-h-120 w-80 origin-bottom-right flex-col justify-between rounded-lg sm:right-12 sm:bottom-20 sm:w-100 md:right-20 md:max-h-170 lg:max-h-140`}
      >

        {/* chatbot header */}
        <div className="border-subtext-dark bg-light-gray flex items-center justify-between border-b px-6 py-3 dark:border-b-0 dark:bg-transparent">

          <div className="flex items-center gap-4">
            <img
              className="card-shadow h-10 w-10 rounded-full sm:h-12 sm:w-12"
              src={uta_ai}
              alt="Uta AI"
            />
            <h2 className="sm:text-lg">Uta - Chatbot</h2>
          </div>

          {/* hide chatbot */}
          <button aria-label="Collapse Chatbot">
            <IoIosArrowDown
              onClick={handleToggle}
              className="cursor-pointer text-xl"
            />
          </button>

        </div>

        {/* chatbot body */}
        <div className="hide-scrollbar h-full overflow-y-scroll px-4 sm:px-6">

          {/* initial greeting from chatbot */}
          <div className="item-center mt-4 flex gap-4">

            <img
              className="card-shadow h-10 w-10 rounded-full"
              src={uta_ai}
              alt="Uta AI"
            />

            <p className="card-shadow text-main-light max-w-[70%] rounded-r-lg rounded-bl-lg bg-[#e8777f] px-2 py-1 text-sm sm:text-base">
              Hi👋🏼, I'm Uta. Nice to meet you!
            </p>

          </div>

          {/* ai and user messages */}
          {chatHistory?.length > 0
            ? chatHistory.map((chat, index) => (
                <ChatMessage
                  loading={loading}
                  setLoading={setLoading}
                  errorMsg={errorMsg}
                  setErrorMsg={setErrorMsg}
                  key={index}
                  chat={chat}
                />
              ))
            : null}

            {/* loading UI */}
          {loading && (
            <div className="item-center mt-4 flex animate-pulse gap-4">

              <img
                className="card-shadow h-10 w-10 rounded-full"
                src={uta_ai}
                alt="Uta AI"
              />

              <p className="card-shadow text-main-light max-w-[70%] rounded-r-lg rounded-bl-lg bg-[#e8777f] px-2 py-1 text-sm sm:text-base">
                Uta is thinking...
              </p>

            </div>
          )}

          {/* error UI */}
          {errorMsg && (
            <div className="border-error-dark text-error-dark mt-4 max-w-[90%] rounded-lg border-1 px-3 py-2 text-sm sm:text-base">
              An error occurred! Please refresh the page.
            </div>
          )}
        </div>

        {/* prompt input */}
        <ChatForm
          loading={loading}
          setLoading={setLoading}
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
          chatHistory={chatHistory}
          input={input}
          setInput={setInput}
          setChatHistory={setChatHistory}
        />
      </div>
    </>
  );
};

export default Chatbot;
