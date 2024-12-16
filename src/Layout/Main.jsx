import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex items-center justify-center h-screen mx-auto max-w-screen-2xl">
      <Outlet />
    </div>
  );
};

export default Main;
