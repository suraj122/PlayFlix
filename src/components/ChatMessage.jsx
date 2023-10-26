import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-1 my-2">
      <FaUserCircle />
      <strong className="ml-1 text-sm">{name}</strong>
      <p className="ml-2 text-sm">{message}</p>
    </div>
  );
};

export default ChatMessage;
