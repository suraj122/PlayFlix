import React from "react";
import Sidebar from "./Sidebar";
import VideoListWrapper from "./VideoListWrapper";

const Body = () => {
  return (
    <main className="flex">
      <Sidebar />
      <VideoListWrapper />
    </main>
  );
};

export default Body;
