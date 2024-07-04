import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      {videos.map((item) => (
        <Link key={item?.id} to={"/watch?v=" + item.id}>
          <VideoCard info={item} />;
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
