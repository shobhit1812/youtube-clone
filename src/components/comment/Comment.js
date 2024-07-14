import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComments } from "../../utils/commentsSlice";
import CommentList from "./CommentList";

const App = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      dispatch(addComments(input));
      setInput("");
    }
  };

  return (
    <div className="m-5 font-mono">
      <h1 className="text-2xl p-2">Comments:</h1>
      <div className="p-2">
        <input
          type="text"
          placeholder="Hey John"
          className="p-2 border border-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleEnterPress}
        />
        <button
          className="p-2 ml-2 border border-black hover:bg-slate-500 hover:text-white"
          onClick={() => {
            dispatch(addComments(input));
            setInput("");
          }}
        >
          Comment
        </button>
      </div>
      <div className="p-2">
        <CommentList />
      </div>
    </div>
  );
};

export default App;
