import { IoArrowUp } from "react-icons/io5";
import { generateAiResponse } from "../../../services/gemini";

const ChatForm = ({
  input,
  setInput,
  chatHistory,
  setChatHistory,
  setLoading,
  setErrorMsg,
}) => {
  async function handleSubmit(e, input) {
    e.preventDefault(); // prevent page reload and default action

    if (input.trim().length === 0) return; // doesn't works if input is empty

    setChatHistory((prev) => [...prev, { role: "user", text: input }]); // saves user's message
    setInput(""); // clear input

    try {
      setLoading(true); // loading UI

      // Adding persona as the first message
      const systemPrompt = {
        role: "user",
        text: "You are Uta, a warm and caring female AI assistant. Be expressive, polite, and helpful in your responses. Speak naturally, avoid robotic language, and use a gentle, supportive tone. Use light emojis to make the user feel comfortable, but don't overdo it.",
      };

      // Appending the chat history + current message
      const fullChat = [
        systemPrompt,
        ...chatHistory,
        { role: "user", text: input },
      ];

      const res = await generateAiResponse(fullChat);
      setLoading(false);

      // cleaning ** markdowns
      const apiRes = res.replace(/\*\*(.*?)\*\*/g, "$1").trim();

      setChatHistory((prev) => [...prev, { role: "ai", text: apiRes }]); // saves ai response
    } catch (error) {
      setLoading(false);
      console.log(error);
      setErrorMsg(true);
    }
  }

  return (
    <div className="my-2 px-4 pb-3 sm:px-6">

      <form
        onSubmit={(e) => handleSubmit(e, input)}
        className="flex items-center gap-4"
      >

        {/* input message field */}
        <input
          className="soft-bg-gradient focus:ring-info-dark card-shadow text-main-light placeholder:subtext-color h-10 w-[90%] flex-1 rounded-full px-3 text-sm outline-none focus:ring-2 sm:w-full sm:text-base"
          placeholder="Type your message"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="on"
          name="prompt"
          id="prompt"
        />

        {/* send message button */}
        <button
          disabled={input.trim().length === 0} // disabled if the input field is empty
          aria-label="Send message"
          className="card-shadow disabled:bg-gray-500 bg-info dark:bg-info-dark flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
        >
          <IoArrowUp className="text-xl" />
        </button>
        
      </form>
    </div>
  );
};

export default ChatForm;
