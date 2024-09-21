import React from "react";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import plus from "../constants/plus-circle.svg";
import AddIcon from "../constants/small/addButton";
import "./room.css";
import { useSelector } from "react-redux";

const Room = () => {
  const theme = useSelector((store) => (store as any).theme.isLightMode);
  return (
    <div>
      <div className="fixed-bottom shadow-2xl">
        <AddIcon />
      </div>
      <div className={`rounded-lg ${theme ? "bg-black" : "bg-white"}`}>
        <h1 className={`${theme ? "text-white" : "text-black"}`}>Hll</h1>
      </div>
    </div>
  );
};

export default Room;
