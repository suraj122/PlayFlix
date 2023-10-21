import React from "react";
import { FaYoutube, FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch, IoIosNotificationsOutline } from "react-icons/io";
import { MdMic } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/sidebarSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="py-3">
      <div className="container mx-auto px-8 flex justify-between">
        <div className="flex items-center">
          <button onClick={handleMenu} className="text-xl text-gray-500">
            <RxHamburgerMenu />
          </button>
          <h3 className="flex ml-6 items-center">
            <FaYoutube className="text-2xl text-red-500" />
            <strong className="text-2xl font-semibold">YouTube</strong>
          </h3>
        </div>
        <div className="flex items-center w-4/12">
          <form className="w-[90%] flex" action="">
            <input
              className="w-full border border-gray-400 py-2 px-3 rounded-tl-full rounded-bl-full"
              type="text"
              placeholder="Search"
            />
            <button className="border border-gray-400 py-2 px-6 rounded-tr-full rounded-br-full">
              <IoIosSearch />
            </button>
          </form>
          <div className="ml-3">
            <button className="text-xl grid place-content-center bg-gray-100 w-10 h-10 rounded-full">
              <MdMic />
            </button>
          </div>
        </div>
        <div>
          <button className="text-2xl">
            <IoIosNotificationsOutline />
          </button>
          <button className="text-2xl ml-4">
            <FaUserCircle />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
