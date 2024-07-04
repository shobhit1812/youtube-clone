import CommentsList from "./CommentsList";
import { commentsData } from "../utils/helper";

const CommentsContainer = () => {
  return (
    <div className="px-6 py-3 w-2/4">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
