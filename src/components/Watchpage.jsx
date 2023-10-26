import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/sidebarSlice";
import { useSearchParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import CommentList from "./CommentList";
import commentList from "../help/commentList";
import Chatbox from "./Chatbox";

const Watchpage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="container mx-auto px-16 py-12">
      <div className="grid grid-cols-12 gap-3">
        <VideoPlayer id={id} />
        <Chatbox />
      </div>

      <div className="mt-6 w-8/12">
        <h3 className="text-xl font-bold">Comments:</h3>
        <CommentList list={commentList} />
      </div>
    </div>
  );
};

export default Watchpage;
