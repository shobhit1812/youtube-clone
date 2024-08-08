const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  const formatViewCount = (viewCount) => {
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + "M";
    } else if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(1) + "K";
    }
    return viewCount.toString();
  };

  return (
    <div className="w-72 m-2 p-2 rounded-lg">
      <img
        className="w-full h-40 rounded-lg object-cover"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="flex flex-col mt-2">
        <h4 className="font-medium text-lg truncate">{title}</h4>
        <h3 className="font-semibold text-sm text-gray-500 truncate">
          {channelTitle}
        </h3>
        <h2 className="py-1 text-gray-500 text-sm">
          {formatViewCount(statistics.viewCount)} views
        </h2>
      </div>
    </div>
  );
};

export default VideoCard;
