import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json?.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return videos?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap justify-between">
      {videos.map((item) => {
        return <VideoCard info={item} key={item?.id} />;
      })}
    </div>
  );
};

export default VideoContainer;
