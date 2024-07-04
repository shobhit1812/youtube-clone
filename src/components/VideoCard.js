const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="m-1 py-3">
      <img
        className="rounded-lg object-cover"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="flex flex-col w-72 py-3">
        <h4 className="font-bold text-lg">{title}</h4>
        <h3 className="font-semibold text-base underline">{channelTitle}</h3>
        <h2 className="py-1">{statistics.viewCount} views</h2>
      </div>
    </div>
  );
};

export default VideoCard;
