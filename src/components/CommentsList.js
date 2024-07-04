import CommentCard from "./CommentCard";

const CommentsList = ({ comments }) => {
  return comments.map((comments, index) => (
    <div key={index}>
      <CommentCard data={comments} />
      <div className="ml-8 border border-l-black">
        <CommentsList comments={comments.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
