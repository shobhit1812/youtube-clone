import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeMenu } from "../utils/sidebarSlice";
import LiveChat from "./LiveChat";
import CommentsContainer from "./CommentsContainer";
import Comment from "./comment/Comment";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="px-6 w-full">
        <div className="flex">
          <div>
            <iframe
              width="800"
              height="500"
              src={
                "https://www.youtube.com/embed/" +
                searchParams.get("v") +
                "?autoplay=1&mute=1"
              }
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          </div>
          <div className="w-full">
            <LiveChat />
          </div>
        </div>
      </div>
      <Comment />
      <CommentsContainer />
    </>
  );
};

export default WatchPage;
