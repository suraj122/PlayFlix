import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet } = info;
  const { thumbnails, channelTitle, title } = snippet;
  const { statistics } = info;
  return (
    <article>
      <img className="w-full rounded-lg" src={thumbnails.high.url} alt="" />
      <div className="mt-3">
        <h2 className="font-semibold">{title}</h2>
        <h3 className="text-sm text-gray-500 my-1 font-medium">
          {channelTitle}
        </h3>
        <span className="text-sm text-gray-500 my-1 font-medium">
          {(statistics.viewCount / 1000000).toFixed(1)} M Views
        </span>
      </div>
    </article>
  );
};

export default VideoCard;
