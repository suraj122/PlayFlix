import React from "react";

const VideoPlayer = ({ id }) => {
  return (
    <div className="col-span-8">
      <iframe
        className="rounded-2xl"
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${id}?si=Z1MTNU0Z3njIJKpF`}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
