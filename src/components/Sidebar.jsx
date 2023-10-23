import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.sidebar.isMenuOpen);
  if (!isMenuOpen) return;
  return (
    <aside className="px-4 w-2/12 sidebar">
      <ul className="sidebar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <ul className="sidebar-list">
        <li>Library</li>
        <li>History</li>
        <li>Your videos</li>
        <li>Watch later</li>
        <li>Liked Videos</li>
        <li>Show more</li>
      </ul>
      <div className="sidebar-list">
        <h3 className="text-lg text-gray-600">Subscriptions</h3>
        <ul>
          <li>Harkirat Singh</li>
          <li>ALtCampus</li>
          <li>Free Code Camp</li>
          <li>Akshay Saini</li>
          <li>Suraj Kumar</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
