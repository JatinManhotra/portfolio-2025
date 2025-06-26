import { IoArrowUp } from "react-icons/io5";
import { generateAiResponse } from "../../../services/gemini";

const ChatForm = ({ input, setInput, chatHistory, setChatHistory, setLoading, setErrorMsg }) => {

 async function handleSubmit(e, input) {
  e.preventDefault();

  if (input.trim().length === 0) return;

  setChatHistory((prev) => [...prev, { role: "user", text: input }]);
  setInput("");

  try {
    setLoading(true);

    // 🌟 1. Add persona as the first message
    const systemPrompt = {
      role: "user",
      text: "You are Uta, a warm and caring female AI assistant. Be expressive, polite, and helpful in your responses. Speak naturally, avoid robotic language, and use a gentle, supportive tone. Use light emojis to make the user feel comfortable, but don't overdo it.",
    };

    // 🌟 2. Append the chat history + current message
    const fullChat = [
      systemPrompt,
      ...chatHistory,
      { role: "user", text: input },
    ];

    const res = await generateAiResponse(fullChat);
    setLoading(false);

    // Optional: clean **bold** markdown
    const apiRes = res.replace(/\*\*(.*?)\*\*/g, "$1").trim();

    setChatHistory((prev) => [...prev, { role: "ai", text: apiRes }]);
  } catch (error) {
    setLoading(false);
    console.log(error);
    setErrorMsg(true);
  }
}


  return (
    <div className="my-2 px-6 pb-3">
      <form
        onSubmit={(e) => handleSubmit(e, input)}
        className="flex items-center gap-4"
      >
        <input
          className="soft-bg-gradient focus:ring-info-dark card-shadow text-main-light placeholder:subtext-color h-10 flex-1 rounded-full px-3 outline-none focus:ring-2"
          placeholder="Type your message"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="on"
          name="prompt"
          id="prompt"
        />
        <button aria-label="Send message" className="card-shadow bg-info dark:bg-info-dark flex h-10 w-10 cursor-pointer items-center justify-center rounded-full">
          <IoArrowUp className="text-xl" />
        </button>
      </form>
    </div>
  );
};

export default ChatForm;
