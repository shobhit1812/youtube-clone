/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addReplies } from "../../utils/commentsSlice";

const CommentList = () => {
  const commentsFromStore = useSelector((store) => store.comments.text) || [];
  const dispatch = useDispatch();

  // Memoize commentsList to avoid unnecessary re-renders
  const commentsList = useMemo(() => commentsFromStore, [commentsFromStore]);

  // State to manage the visibility of the reply input and the reply text
  const [replyData, setReplyData] = useState([]);

  // Initialize replyData state based on commentsList
  useEffect(() => {
    setReplyData(
      commentsList.map(() => ({ isReplying: false, replyText: "" }))
    );
  }, [commentsList]);

  // Handler for reply button click
  const handleReplyClick = (index) => {
    setReplyData((prevReplyData) =>
      prevReplyData.map((data, i) =>
        i === index ? { ...data, isReplying: !data.isReplying } : data
      )
    );
  };

  // Handler for reply input change
  const handleReplyChange = (index, event) => {
    setReplyData((prevReplyData) =>
      prevReplyData.map((data, i) =>
        i === index ? { ...data, replyText: event.target.value } : data
      )
    );
  };

  // Handler for reply form submission
  const handleReplySubmit = (index) => {
    if (replyData[index]?.replyText.trim()) {
      dispatch(
        addReplies({
          commentIndex: index,
          replyText: replyData[index]?.replyText,
        })
      );
      // Reset the reply input and hide the input box
      setReplyData((prevReplyData) =>
        prevReplyData.map((data, i) =>
          i === index ? { ...data, isReplying: false, replyText: "" } : data
        )
      );
    }
  };

  return (
    <div>
      {commentsList.map((comment, index) => (
        <div key={comment.id || index} className="mb-4">
          <h1 className="border bg-gray-400 pl-2 text-xl mt-5">
            User: {comment.comment}
          </h1>
          <button
            className="border border-black ml-28 pl-1 pr-1 hover:bg-slate-500 hover:text-white"
            onClick={() => handleReplyClick(index)}
          >
            {replyData[index]?.isReplying ? "Cancel" : "Reply"}
          </button>
          {replyData[index]?.isReplying && (
            <div className="mt-2">
              <input
                type="text"
                value={replyData[index]?.replyText}
                onChange={(event) => handleReplyChange(index, event)}
                className="border p-2 mr-2"
              />
              <button
                onClick={() => handleReplySubmit(index)}
                className="border border-black p-2 hover:bg-slate-500 hover:text-white"
              >
                Submit
              </button>
            </div>
          )}
          <div className="mt-2 ml-4">
            {comment.replies && comment.replies.length > 0 ? (
              comment.replies.map((reply, replyIndex) => (
                <div key={replyIndex} className="border p-2 bg-gray-200 mb-2">
                  <p>Reply: {reply}</p>
                </div>
              ))
            ) : (
              <p>No replies yet</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
