import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/sidebarSlice";
import { useSearchParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import CommentList from "./CommentList";

const commentList = [
  {
    name: "Akshay",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ut? Qui quibusdam veniam doloribus tempore nam inventore",
    replies: [
      {
        name: "Akshay",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ut? Qui quibusdam veniam doloribus tempore nam inventore",
        replies: [
          {
            name: "Akshay",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ut? Qui quibusdam veniam doloribus tempore nam inventore",
          },
        ],
      },
      {
        name: "Akshay",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ut? Qui quibusdam veniam doloribus tempore nam inventore",
      },
      {
        name: "Akshay",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ut? Qui quibusdam veniam doloribus tempore nam inventore",
        replies: [
          {
            name: "Akshay",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ut? Qui quibusdam veniam doloribus tempore nam inventore",
            replies: [
              {
                name: "Akshay",
                comment:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ut? Qui quibusdam veniam doloribus tempore nam inventore",
              },
              {
                name: "Akshay",
                comment:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ut? Qui quibusdam veniam doloribus tempore nam inventore",
                replies: [
                  {
                    name: "Akshay",
                    comment:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ut? Qui quibusdam veniam doloribus tempore nam inventore",
                    replies: [
                      {
                        name: "Akshay",
                        comment:
                          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ut? Qui quibusdam veniam doloribus tempore nam inventore",
                      },
                      {
                        name: "Akshay",
                        comment:
                          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ut? Qui quibusdam veniam doloribus tempore nam inventore",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Punit",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ut? Qui quibusdam veniam doloribus tempore nam inventore",
    replies: [
      {
        name: "Akshay",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ut? Qui quibusdam veniam doloribus tempore nam inventore",
      },
    ],
  },
  {
    name: "Suraj",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ut? Qui quibusdam veniam doloribus tempore nam inventore",
  },
  {
    name: "Jai Pandeya",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ut? Qui quibusdam veniam doloribus tempore nam inventore",
  },
  {
    name: "Surjit",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ut? Qui quibusdam veniam doloribus tempore nam inventore",
  },
  {
    name: "Shubham",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ut? Qui quibusdam veniam doloribus tempore nam inventore",
  },
];

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
      <div className="mt-6">
        <h3 className="text-xl font-bold">Comments:</h3>
        <CommentList list={commentList} />
      </div>
    </div>
  );
};

export default Watchpage;
