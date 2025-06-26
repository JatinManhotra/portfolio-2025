import React, { useState } from "react";
import uta_ai from "../../../assets/uta-ai.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";

import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [animating, setAnimating] = useState(false);

  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

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
      <div
      title="Chat with Uta"
        onClick={handleToggle}
        className="card-shadow fixed right-10 bottom-20 flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#ec979e]"
      >
        {/* Image (Uta) */}
        <img
          src={uta_ai}
          alt="Uta AI"
          className={`absolute h-12 w-12 rounded-full transition-all duration-300 ${showChatbot ? "scale-75 rotate-12 opacity-0" : "scale-100 rotate-0 opacity-100"} `}
        />

        {/* X Icon */}
        <FaXmark
          className={`absolute text-xl text-white transition-all duration-300 ${showChatbot ? "scale-100 rotate-0 opacity-100" : "scale-75 -rotate-12 opacity-0"} `}
        />
      </div>

      <div
        className={` ${showChatbot ? "scale-100" : "scale-0"} soft-bg-gradient dark:dark-bg-gradient card-shadow card-border fixed right-20 bottom-20 flex h-full max-h-140 w-100 origin-bottom-right flex-col justify-between rounded-lg px-6 py-3`}
      >
        {/* chatbot header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              className="card-shadow h-12 w-12 rounded-full"
              src={uta_ai}
              alt="Uta AI"
            />
            <h2 className="text-lg">Uta - Chatbot</h2>
          </div>
          <button>
            <IoIosArrowDown
              onClick={handleToggle}
              className="cursor-pointer text-xl"
            />
          </button>
        </div>

        {/* chatbot body */}
        <div className="hide-scrollbar h-full overflow-y-scroll">
          {/* ai msg */}
          <div className="item-center mt-4 flex gap-4">
            <img
              className="card-shadow h-10 w-10 rounded-full"
              src={uta_ai}
              alt="Uta AI"
            />
            <p className="card-shadow text-main-light max-w-[70%] rounded-r-lg rounded-bl-lg bg-[#e8777f] px-2 py-1">
              Hi👋🏼, I'm Uta. Nice to meet you!
            </p>
          </div>

          {/* user msg */}
          {chatHistory?.length > 0
            ? chatHistory.map((chat, index) => (
                <ChatMessage loading={loading} setLoading={setLoading} errorMsg={errorMsg} setErrorMsg={setErrorMsg} key={index} chat={chat} />
              ))
            : null}

             {
        loading && <div className="animate-pulse item-center mt-4 flex gap-4">
          <img
            className="card-shadow h-10 w-10 rounded-full"
            src={uta_ai}
            alt="Uta AI"
          />
          <p className=" card-shadow text-main-light max-w-[70%] rounded-r-lg rounded-bl-lg bg-[#e8777f] px-2 py-1">
            Uta is thinking...
          </p>
        </div>
    }

    {
        errorMsg && <div className="border-1 mt-4 max-w-[90%] border-error-dark text-error-dark px-3 py-2 rounded-lg">
            An error occurred! Please refresh the page.
        </div>
    }
        </div>

       

        {/* prompt input */}
        <ChatForm
        loading={loading} setLoading={setLoading} errorMsg={errorMsg} setErrorMsg={setErrorMsg}
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
