import Header from "./Header";
import DashboardDesktop, { DashboardMobile } from "./Dashboard";
import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = () => {
  const theme = useSelector((store) => (store as any).theme.isLightMode);
  return (
    <div className="w-full flex">
      <DashboardDesktop />
      <div className={`w-full h-screen ${theme ? "bg-black" : "bg-white"}`}>
        <Header />
        <div className="h-[80%] sm:h-[80%] w-[100%] overflow-y-auto bg-white">
          <Outlet />
        </div>
        <DashboardMobile />
      </div>
    </div>
  );
};

export default Container;
