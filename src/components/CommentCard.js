import { FaRegUserCircle } from "react-icons/fa";

const CommentCard = ({ data }) => {
  return (
    <div className="flex py-1 p-2 my-2 bg-gray-200 rounded-lg">
      <FaRegUserCircle className="text-2xl" />
      <div className="px-3">
        <p className="font-bold">{data?.name}</p>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

export default CommentCard;
