import React from "react";

const VideoPlayer = ({ id }) => {
  return (
    <div className="w-8/12">
      <iframe
        className="rounded-2xl"
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${id}?si=Z1MTNU0Z3njIJKpF`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
