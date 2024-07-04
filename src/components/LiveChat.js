import { RiArrowDropDownLine } from "react-icons/ri";
import ChatMessage from "./ChatMessage";
import { makeRandomMessage, generateRandomName } from "../utils/helper";
import { addMessage } from "../utils/chatSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollToBottom from "react-scroll-to-bottom";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(10),
        })
      );
    }, 700);

    return () => {
      clearInterval(i);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      dispatch(
        addMessage({
          name: "Shobhit",
          message: liveMessage,
        })
      );
      setLiveMessage("");
    }
  };

  return (
    <div>
      <div className="ml-5 p-2 w-full h-[500px] border border-slate-300 bg-slate-100 rounded-lg overflow-y-scroll scrollbar-webkit">
        <div>
          <h1 className="p-2 font-bold flex text-xl border-b-8">
            Top Chat <RiArrowDropDownLine className="text-3xl" />
          </h1>
        </div>
        <ScrollToBottom mode="bottom" className="h-[500px] scrollbar-webkit">
          <div>
            {chatMessages.map((c, index) => (
              <ChatMessage key={index} name={c.name} message={c.message} />
            ))}
          </div>
        </ScrollToBottom>
        <div className="">
          <input
            className="border border-black rounded-full p-1 pl-2 mt-3 mb-3 w-56"
            name="text"
            type="text"
            value={liveMessage}
            placeholder="send message "
            onChange={(e) => setLiveMessage(e.target.value)}
            onKeyDown={handleEnterPress}
          />
          <button
            className="rounded-full border border-black p-1 ml-2 bg-green-500 text-white"
            onClick={() => {
              dispatch(
                addMessage({
                  name: "Shobhit",
                  message: liveMessage,
                })
              );
              setLiveMessage("");
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
