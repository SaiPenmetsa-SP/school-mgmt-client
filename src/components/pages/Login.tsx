import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { apiUrl } from "../utils/api";
import { jwtDecode } from "jwt-decode";

interface userLoginDetails {
  userName: string;
  userPassword: string;
}

const Login = () => {
  const [userDetails, setUserDetails] = useState<userLoginDetails>({
    userName: "",
    userPassword: "",
  });

  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  const handleLoginSubmit = () => {
    fetch(apiUrl + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userDetails.userName,
        password: userDetails.userPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === 201) {
          Cookies.set("tkn", data.data, { expires: 1 });

          const tokens: string | undefined = Cookies.get("tkn");
          if (tokens) {
            const decodeToken = jwtDecode(tokens);
            if ((decodeToken as any).role === "Admin") {
              navigate("/");
            } else if ((decodeToken as any).role === "Student") {
              navigate("/tasks");
            } else if ((decodeToken as any).role === "Teacher") {
              navigate("/users");
            }
          } else {
            console.error("Login failed: ", data.message);
          }
        }
      })
      .catch((error) => {
        console.error("Error logging in: ", error);
      });
  };

  return (
    <div className="flex justify-center mt-2 sm:mt-[200px] w-[100%] flex-wrap">
      <div className="w-[300px]">
        <img
          src="https://mspublicschoolpremnagar.com/login/images/logo/login.gif"
          alt="login-pic"
          className="w-[256%]"
        />
      </div>
      <div className="shadow-2xl w-[300px] h-[350px] sm:h-[400px]">
        <h1 className="text-2xl ml-8 mt-8 mb-6">User Login</h1>
        <div className="text-center">
          <input
            type="text"
            value={userDetails.userName}
            onChange={(e) =>
              setUserDetails({ ...userDetails, userName: e.target.value })
            }
            className="h-[40px] w-[80%] border mb-5 rounded-md outline-none"
            placeholder="Username"
          />
          <input
            type="password"
            value={userDetails.userPassword}
            onChange={(e) =>
              setUserDetails({ ...userDetails, userPassword: e.target.value })
            }
            className="h-[40px] w-[80%] border mb-5 rounded-md outline-none"
            placeholder="Password"
          />
        </div>
        <div className="text-center">
          <button
            onClick={handleLoginSubmit}
            className="border bg-newT text-center text-white w-[80%] h-[40px] rounded-md"
          >
            Submit
          </button>
        </div>
        <Link className="ml-8" to={"/register"}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
