import { useEffect, useRef } from "react";
import uta_ai from "../../../assets/uta-ai.jpg";

const ChatMessage = ({ chat }) => {
  const bottomRef = useRef(); 

  // scrolls to the bottom of the chat on every new message
  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <>

      {/* ai response block */}
      {chat.role === "ai" && (
        <div className="item-center mt-4 flex gap-4">
          <img
            className="card-shadow h-10 w-10 rounded-full"
            src={uta_ai}
            alt="Uta AI"
          />
          <p className="card-shadow text-main-light max-w-[70%] rounded-r-lg rounded-bl-lg bg-[#e8777f] px-2 py-1 text-sm sm:text-base">
            {chat.text}
          </p>
        </div>
      )}

      {/* user message block */}
      {chat.role === "user" && (
        <div className="mt-4 flex justify-end">
          <p className="bg-info-dark card-shadow text-main-light max-w-[70%] rounded-l-lg rounded-tr-lg px-2 py-1 text-sm sm:text-base">
            {chat.text}
          </p>
        </div>
      )}

        {/* scroll to bottom */}
      <div ref={bottomRef} />
    </>
  );
};

export default ChatMessage;
