import React, { useState, useEffect } from "react";
import { apiUrl } from "../utils/api";
import { BeatLoader } from "react-spinners";
import { useSelector } from "react-redux";
import FormDynamic from "./FormDynamic";
import { Link } from "react-router-dom";

// interface FormDataItem {
//   id: number;
//   student_name: string;
// }
// interface ApiResponse {
//   status: number;
//   row: FormDataItem[];
// }

const Home = () => {
  const [formData, setFormData] = useState(undefined);

  const theme = useSelector((store) => store.theme.isLightMode);
  useEffect(() => {
    fetch(apiUrl + "/homedata")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 201) setFormData(data.row);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (formData === undefined) {
    return (
      <div className="flex justify-center items-center h-[70%]">
        <BeatLoader size={25} color="#696cff" />
      </div>
    );
  }

  return (
    <div className={`flex w-full ${theme ? "bg-black" : "bg-white"}`}>
      <div className="w-full flex-col justify-center">
        <div className="text-center pt-6">
          <h1 className={`${theme ? "text-white" : "text-black"} text-3xl`}>
            Application
          </h1>
        </div>
        <div className="flex justify-center text-center pt-6">
          <h1 className="w-[40%] pt-1 h-[40px] text-white border-b-2 border-white bg-sky-400">
            ID
          </h1>
          <h1 className="w-[40%] pt-1 h-[40px] text-white border-b-2 border-white bg-sky-400">
            Student
          </h1>
        </div>
        <div className={`${theme ? "bg-black" : "bg-white"}`}>
          {formData.map((eachItem) => (
            <Link to={"/form/" + eachItem.id}>
              <FormDynamic eachItem={eachItem} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
