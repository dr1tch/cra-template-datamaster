import React, { useState } from "react";
// import { Routes } from "react-router-dom";
import HomePathContext from "../contexts/home-path";
import Main from "../core/Layouts/Main";
import Sidebar from "../core/Layouts/Sidebar";

const Dashboard = () => {
  const [homePathname, setHomePathname] = useState("");

  return (
    <>
      <HomePathContext.Provider value={{ homePathname, setHomePathname }}>
        <div className="font-inter font-medium text-sm text-gray-700 scrollbar-track-green-primary scroll-smooth">
          <div className="flex bg-gray-50 dark:bg-gray-900 overflow-auto h-full">
            <Sidebar />
            <div className="flex flex-col w-full h-full">
              <Main />
            </div>
          </div>
        </div>
      </HomePathContext.Provider>
    </>
  );
};
export default Dashboard;
