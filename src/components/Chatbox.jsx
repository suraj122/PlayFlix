import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import generateName from "../help/randomNames";
import generateRandomMessage from "../help/randomMessages";

const Chatbox = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  const [chatMsg, setChatMsg] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: generateRandomMessage(),
        })
      );
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleSumbmitMessage = (e) => {
    e.preventDefault();
    dispatch(addMessage({ name: "Suraj", message: chatMsg }));
    setChatMsg("");
  };

  return (
    <>
      <div className="border bg-gray-100 col-span-4 p-3 h-[500px] rounded-md flex flex-col justify-end overflow-auto">
        {messages.map((msg) => (
          <ChatMessage name={msg.name} message={msg.message} />
        ))}
        <form onSubmit={handleSumbmitMessage}>
          <input
            className="border p-2 w-10/12"
            type="text"
            placeholder="Your Message"
            value={chatMsg}
            onChange={(e) => setChatMsg(e.target.value)}
          />
          <button className="border px-4 py-2 bg-green-200 font-bold">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Chatbox;
