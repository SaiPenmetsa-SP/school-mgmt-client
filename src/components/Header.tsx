import React, { useEffect, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
// import Ant from "./constants/small/custom";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "./store/Slices/ThemeSlice";

interface Role {
  roles: string;
}

const Header = () => {
  const [roleName, setRoleName] = useState<Role>({ roles: "" });
  const navigate = useNavigate();
  const theme = useSelector((store) => (store as any).theme.isLightMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get("tkn");
    if (token) {
      const decode = jwtDecode(token);
      // console.log(decode);
      setRoleName({ roles: (decode as any).role });
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("tkn");
    navigate("/login");
    window.location.reload();
  };

  const handleTheme = () => {
    dispatch(changeTheme());
  };
  console.log();
  return (
    <div className="flex justify-center">
      <nav
        className={`flex justify-between px-6 ${
          theme ? "bg-darkH" : "bg-white"
        } items-center w-[100%] sm:w-[100%] h-[10vh] border`}
      >
        <h1 className={`${theme ? "text-white" : "text-darkH"}`}>
          School Management
        </h1>
        <div className="flex justify-between w-[20%] border border-black ">
          {/* <Ant /> */}

          {theme ? (
            <SunOutlined className="text-white" onClick={handleTheme} />
          ) : (
            <MoonOutlined onClick={handleTheme} />
          )}

          <h1 className={`${theme ? "text-white" : "text-darkH"}`}>
            {roleName.roles.toUpperCase()}
          </h1>

          <LogoutIcon
            onClick={handleLogout}
            className={`cursor-pointer ${theme ? "text-white" : "text-darkH"} `}
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
