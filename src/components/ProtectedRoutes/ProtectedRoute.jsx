import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ role, children }) => {
  const token = Cookies.get("tkn");

  if (!token) {
    console.log("No token found, redirecting to login.");
    return (
      <Navigate
        to="/login"
        state={{ from: window.location.pathname }}
        replace
      />
    );
  }

  try {
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role;
    // console.log("Token decoded:", decodedToken);
    // console.log("User role:", userRole);

    if (role.includes(userRole)) {
      console.log("User has valid role, rendering children.");
      return <>{children}</>;
    } else {
      console.log(
        "User does not have the required role, redirecting to no-access."
      );
      return <Navigate to="/no-access" replace />;
    }
  } catch (error) {
    console.error("Error decoding token:", error);
    return (
      <Navigate
        to="/login"
        state={{ from: window.location.pathname }}
        replace
      />
    );
  }
};

export default ProtectedRoute;
