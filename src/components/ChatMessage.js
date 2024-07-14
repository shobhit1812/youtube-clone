import { FaRegUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex mt-3 pb-2">
      <FaRegUserCircle className="text-2xl" />
      <p className="pl-2">
        <span className="font-bold">{name + ": "}</span>
        {message}
      </p>
    </div>
  );
};

export default ChatMessage;
