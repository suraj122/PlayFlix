import React from "react";
import { FaYoutube, FaUserCircle } from "react-icons/fa";

const CommentList = ({ list }) => {
  return (
    <div>
      {list.map((comment) => (
        <Comment commentItems={comment} />
      ))}
    </div>
  );
};

const Comment = ({ commentItems }) => {
  const { name, comment, replies } = commentItems;
  return (
    <div className="bg-gray-100 p-3 rounded my-3">
      <div className="flex items-center">
        <FaUserCircle />
        <div className="ml-2">
          <h3 className="font-bold">{name}</h3>
          <p>{comment}</p>
        </div>
      </div>
      {replies && (
        <div className="border-l ml-3">{<CommentList list={replies} />}</div>
      )}
    </div>
  );
};

export default CommentList;
