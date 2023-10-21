import React, { useEffect, useState } from "react";
import FilterBtnList from "./FilterBtnList";
import { VIDEO_API } from "../constant";
import VideoCard from "./VideoCard";

const VideoListWrapper = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <section className="py-4 px-6 pl-4 overflow-hidden w-10/12">
      <FilterBtnList />
      <div className="py-6 grid grid-cols-3 gap-6 gap-y-10 w-full">
        {videos?.map((vid) => {
          return <VideoCard key={vid.id} info={vid} />;
        })}
      </div>
    </section>
  );
};

export default VideoListWrapper;
