import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  HomeOutlined,
  UsergroupAddOutlined,
  FundProjectionScreenOutlined,
  SettingOutlined,
  FileAddOutlined,
  DatabaseOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import eduIcon from "../components/constants/education-10.svg";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  role: string;
  // Add other properties if needed
}

const DashboardDesktop = () => {
  const [getRole, setRole] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    const token = Cookies.get("tkn");
    if (token) {
      try {
        // Use TypeScript to infer the type of the decoded token
        const decode = jwtDecode<DecodedToken>(token);
        setRole(decode.role);
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, []);

  return getRole === "Admin" ? (
    <div className="w-[12%] h-[100vh]  text-white hidden md:!block border">
      <div className="h-[10vh] border-b-[1px] border-r-[1px] flex justify-center">
        <img src={eduIcon} alt="edu" className="w-12" />
      </div>

      <Link
        to={"/"}
        className={`flex pl-5 items-center w-[100%] h-14 mt-10 text-black cursor-pointer rounded-lg  ${
          location.pathname === "/" ? "bg-newH" : ""
        }`}
      >
        <HomeOutlined
          className={`text-dash  ${
            location.pathname === "/" ? "text-newT" : ""
          }`}
        />
        <h1 className={`pl-2 ${location.pathname === "/" ? "text-newT" : ""}`}>
          Home
        </h1>
      </Link>
      <Link
        to={"/form"}
        className={`flex pl-5 items-center w-[100%] h-14 text-black cursor-pointer rounded-lg ${
          location.pathname === "/form" ? "bg-newH" : ""
        }`}
      >
        <FileAddOutlined
          className={`text-dash  ${
            location.pathname === "/form" ? "text-newT" : ""
          }`}
        />
        <h1
          className={`pl-2 ${location.pathname === "/form" ? "text-newT" : ""}`}
        >
          Form
        </h1>
      </Link>
      <Link
        to={"/users"}
        className={`flex pl-5 items-center w-[100%] h-14 text-black cursor-pointer rounded-lg ${
          location.pathname === "/users" ? "bg-newH" : ""
        }`}
      >
        <UsergroupAddOutlined
          className={`text-dash  ${
            location.pathname === "/users" ? "text-newT" : ""
          }`}
        />
        <h1
          className={`pl-2 ${
            location.pathname === "/users" ? "text-newT" : ""
          }`}
        >
          Users
        </h1>
      </Link>
      <Link
        to={"/room"}
        className={`flex pl-5 items-center w-[100%] h-14 text-black cursor-pointer rounded-lg ${
          location.pathname === "/room" ? "bg-newH" : ""
        }`}
      >
        <FundProjectionScreenOutlined
          className={`text-dash  ${
            location.pathname === "/room" ? "text-newT" : ""
          }`}
        />
        <h1
          className={`pl-2 ${location.pathname === "/room" ? "text-newT" : ""}`}
        >
          Room
        </h1>
      </Link>
      <Link
        to={"/database"}
        className={`flex pl-5 items-center w-[100%] h-14 text-black cursor-pointer rounded-lg ${
          location.pathname === "/database" ? "bg-newH" : ""
        }`}
      >
        <DatabaseOutlined
          className={`text-dash  ${
            location.pathname === "/database" ? "text-newT" : ""
          }`}
        />
        <h1
          className={`pl-2 ${
            location.pathname === "/database" ? "text-newT" : ""
          }`}
        >
          Database
        </h1>
      </Link>
      <Link
        to={"/settings"}
        className={`flex pl-5 items-center w-[100%] h-14 text-black cursor-pointer rounded-lg ${
          location.pathname === "/settings" ? "bg-newH" : ""
        }`}
      >
        <SettingOutlined
          className={`text-dash  ${
            location.pathname === "/settings" ? "text-newT" : ""
          }`}
        />
        <h1
          className={`pl-2 ${
            location.pathname === "/settings" ? "text-newT" : ""
          }`}
        >
          Settings
        </h1>
      </Link>
    </div>
  ) : getRole === "Teacher" ? (
    <div className="w-[12%] h-[100vh]  text-white hidden md:!block border">
      <div className="h-[10vh] border-b-[1px] border-r-[1px] flex justify-center">
        <img src={eduIcon} alt="edu" className="w-12" />
      </div>
      <Link
        to={"/users"}
        className={`flex pl-5 items-center w-[100%] mt-10 h-14 text-black cursor-pointer rounded-lg ${
          location.pathname === "/users" ? "bg-newH" : ""
        }`}
      >
        <UsergroupAddOutlined
          className={`text-dash  ${
            location.pathname === "/users" ? "text-newT" : ""
          }`}
        />
        <h1
          className={`pl-2 ${
            location.pathname === "/users" ? "text-newT" : ""
          }`}
        >
          Users
        </h1>
      </Link>
      <Link
        to={"/settings"}
        className={`flex pl-5 items-center w-[100%] h-14 text-black cursor-pointer rounded-lg ${
          location.pathname === "/settings" ? "bg-newH" : ""
        }`}
      >
        <SettingOutlined
          className={`text-dash  ${
            location.pathname === "/settings" ? "text-newT" : ""
          }`}
        />
        <h1
          className={`pl-2 ${
            location.pathname === "/settings" ? "text-newT" : ""
          }`}
        >
          Settings
        </h1>
      </Link>
    </div>
  ) : (
    <div className="w-[12%] h-[100vh]  text-white hidden md:!block border">
      <div className="h-[10vh] border-b-[1px] border-r-[1px] flex justify-center">
        <img src={eduIcon} alt="edu" className="w-12" />
      </div>
      <Link
        to={"/tasks"}
        className={`flex pl-5 items-center w-[100%] h-14 mt-10 text-black cursor-pointer rounded-lg ${
          location.pathname === "/tasks" ? "bg-newH" : ""
        }`}
      >
        <ReadOutlined
          className={`text-dash  ${
            location.pathname === "/tasks" ? "text-newT" : ""
          }`}
        />
        <h1
          className={`pl-2 ${
            location.pathname === "/tasks" ? "text-newT" : ""
          }`}
        >
          Tasks
        </h1>
      </Link>
      <Link
        to={"/room"}
        className={`flex pl-5 items-center w-[100%] h-14 text-black cursor-pointer rounded-lg ${
          location.pathname === "/room" ? "bg-newH" : ""
        }`}
      >
        <FundProjectionScreenOutlined
          className={`text-dash  ${
            location.pathname === "/room" ? "text-newT" : ""
          }`}
        />
        <h1
          className={`pl-2 ${location.pathname === "/room" ? "text-newT" : ""}`}
        >
          Room
        </h1>
      </Link>
      <Link
        to={"/settings"}
        className={`flex pl-5 items-center w-[100%] h-14 text-black cursor-pointer rounded-lg ${
          location.pathname === "/settings" ? "bg-newH" : ""
        }`}
      >
        <SettingOutlined
          className={`text-dash  ${
            location.pathname === "/settings" ? "text-newT" : ""
          }`}
        />
        <h1
          className={`pl-2 ${
            location.pathname === "/settings" ? "text-newT" : ""
          }`}
        >
          Settings
        </h1>
      </Link>
    </div>
  );
};

interface Mobile {
  decodeMobile: string;
}

export const DashboardMobile = () => {
  const [getMobileRole, setGetMobileRole] = useState<string>("");

  useEffect(() => {
    const mobileToken = Cookies.get("tkn");
    if (mobileToken) {
      try {
        const decodeMobile = jwtDecode<any>(mobileToken);
        setGetMobileRole(decodeMobile.role);
      } catch (err) {
        console.error("error");
      }
    }
  }, []);

  const location = useLocation();
  return getMobileRole === "Admin" ? (
    <div className="flex justify-around items-center w-full h-[8%] bg-white md:hidden rounded-tr-3xl rounded-tl-3xl">
      <Link
        to={"/"}
        className={`text-black cursor-pointer p-[8px] rounded-xl  ${
          location.pathname === "/" ? "bg-newT" : ""
        }`}
      >
        <HomeOutlined className="p-2" />
      </Link>
      <Link
        to={"/form"}
        className={`text-black cursor-pointer p-[8px] rounded-xl  ${
          location.pathname === "/form" ? "bg-newT" : ""
        }`}
      >
        <FileAddOutlined className="p-2" />
      </Link>
      <Link
        to={"/users"}
        className={`text-black cursor-pointer p-[8px] rounded-xl ${
          location.pathname === "/users" ? "bg-newT" : ""
        }`}
      >
        <UsergroupAddOutlined className="p-2" />
      </Link>
      <Link
        to={"/room"}
        className={`text-black cursor-pointer p-[8px] rounded-xl ${
          location.pathname === "/room" ? "bg-newT" : ""
        }`}
      >
        <FundProjectionScreenOutlined className="p-2" />
      </Link>
      <Link
        to={"/database"}
        className={`text-black cursor-pointer p-[8px] rounded-xl ${
          location.pathname === "/database" ? "bg-newT" : ""
        }`}
      >
        <DatabaseOutlined className="p-2" />
      </Link>
      <Link
        to={"/settings"}
        className={`text-black cursor-pointer p-[8px] rounded-xl ${
          location.pathname === "/settings" ? "bg-newT" : ""
        }`}
      >
        <SettingOutlined className="p-2" />
      </Link>
    </div>
  ) : getMobileRole === "Teacher" ? (
    <div className="flex justify-around items-center w-full h-[10%] bg-white md:hidden rounded-tr-3xl rounded-tl-3xl">
      <Link
        to={"/users"}
        className={`text-black cursor-pointer p-[8px] rounded-xl ${
          location.pathname === "/users" ? "bg-newT" : ""
        }`}
      >
        <UsergroupAddOutlined className="p-2" />
      </Link>
      <Link
        to={"/settings"}
        className={`text-black cursor-pointer p-[8px] rounded-xl ${
          location.pathname === "/settings" ? "bg-newT" : ""
        }`}
      >
        <SettingOutlined className="p-2" />
      </Link>
    </div>
  ) : (
    <div className="flex justify-around items-center w-full h-[10%] bg-white md:hidden rounded-tr-3xl rounded-tl-3xl">
      <Link
        to={"/room"}
        className={`text-black cursor-pointer p-[8px] rounded-xl ${
          location.pathname === "/room" ? "bg-newT" : ""
        }`}
      >
        <FundProjectionScreenOutlined className="p-2" />
      </Link>
      <Link
        to={"/tasks"}
        className={`text-black cursor-pointer p-[8px] rounded-xl ${
          location.pathname === "/tasks" ? "bg-newT" : ""
        }`}
      >
        <ReadOutlined className="p-2" />
      </Link>
      <Link
        to={"/settings"}
        className={`text-black cursor-pointer p-[8px] rounded-xl ${
          location.pathname === "/settings" ? "bg-newT" : ""
        }`}
      >
        <SettingOutlined className="p-2" />
      </Link>
    </div>
  );
};

export default DashboardDesktop;
