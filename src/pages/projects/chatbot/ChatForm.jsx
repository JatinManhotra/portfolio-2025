import { IoArrowUp } from "react-icons/io5";
import { generateAiResponse } from "../../../services/gemini";

const ChatForm = ({ input, setInput, chatHistory, setChatHistory, setLoading, setErrorMsg }) => {

  async function handleSubmit(e, input) {
    e.preventDefault();

    if(input.trim().length === 0) return;


    setChatHistory((prev) => [...prev, { role: "user", text: input }]);

    setInput("");


    try {
        setLoading(true)
      const res = await generateAiResponse([
        ...chatHistory,
        { role: "user", text: input },
      ]);
      setLoading(false)
      const apiRes = res.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      setChatHistory((prev) => [...prev, { role: "ai", text: apiRes }]);
    //   console.log(res);
    } catch (error) {
        setLoading(false)
      console.log(error);
      setErrorMsg(true)
    }
  }

  return (
    <div className="my-2">
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
        <button className="card-shadow bg-info-dark flex h-10 w-10 cursor-pointer items-center justify-center rounded-full">
          <IoArrowUp className="text-xl" />
        </button>
      </form>
    </div>
  );
};

export default ChatForm;
