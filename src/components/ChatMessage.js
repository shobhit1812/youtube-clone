import { FaRegUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex mt-3 pb-2">
      <FaRegUserCircle className="text-2xl" />
      <p className="pl-2 font-bold">{name}: </p> <p> {message}</p>
    </div>
  );
};

export default ChatMessage;
