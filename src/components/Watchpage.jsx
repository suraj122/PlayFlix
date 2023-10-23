import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/sidebarSlice";
import { useSearchParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

const Watchpage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="container mx-auto px-16 py-12">
      <VideoPlayer id={id} />
    </div>
  );
};

export default Watchpage;
