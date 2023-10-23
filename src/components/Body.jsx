import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <main className="flex">
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default Body;
