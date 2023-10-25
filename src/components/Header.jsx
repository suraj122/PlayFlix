import React, { useEffect, useState } from "react";
import { FaYoutube, FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch, IoIosNotificationsOutline } from "react-icons/io";
import { MdMic } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/sidebarSlice";
import { cachedResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [showSearchList, setShowSearchList] = useState(false);
  const dispatch = useDispatch();

  // Handling the sidebar menu
  const handleMenu = () => {
    dispatch(toggleMenu());
  };

  // Subscribing to store
  const searchResult = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchResult[searchQuery]) {
        setSearchList(searchResult[searchQuery]);
      } else {
        getSearchList();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchList = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchQuery
    );
    const json = await data.json();
    setSearchList(json[1]);
    dispatch(cachedResults({ [searchQuery]: json[1] }));
  };

  return (
    <header className="py-3 shadow">
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
        <div className="flex items-center w-4/12 relative">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-[90%] flex"
            action=""
          >
            <input
              className="w-full border border-gray-400 py-2 px-3 rounded-tl-full rounded-bl-full"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSearchList(true)}
              onBlur={() => setShowSearchList(false)}
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
          {showSearchList && (
            <ul className="absolute w-full rounded-md left-0 top-[calc(100%+0.75rem)] top border border-gray-200 bg-white shadow-lg">
              {searchList?.map((item) => (
                <li
                  key={item}
                  className="flex py-2 px-4 hover:bg-gray-200 text-gray-600 items-center text-lg"
                >
                  <IoIosSearch />
                  <span className="ml-2">{item}</span>
                </li>
              ))}
            </ul>
          )}
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
