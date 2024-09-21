import React, { useEffect, useState } from "react";
import { apiUrl } from "../utils/api";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
// import { SearchOutlined } from "@ant-design/icons";

const Tasks: React.FC = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasksData, setTasksData] = useState([]);
  const [details, setDetails] = useState([]);
  const [noTask, setNoTask] = useState("");

  useEffect(() => {
    const token = Cookies.get("tkn");
    try {
      if (token) {
        const decoded = jwtDecode(token);
        fetch(apiUrl + `/user/${(decoded as any).username}`)
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            if (data.status === 404) {
              setNoTask("No tasks available");
            } else {
              setTasksData(data.row);
            }
          });
      }
    } catch (err) {
      console.error(err);
    }
  }, []);
  console.log(tasksData);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(apiUrl + "/addTasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: taskInput, details }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTasksData(data.rows);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="flex justify-center h-[10%]">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center border w-[60%] sm:w-[30%] p-2"
        >
          <input
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            type="search"
            placeholder="Enter Task..."
            className="text-[10px] sm:text-[15px] border border-gray-400 rounded-l-md outline-none p-2 w-[80%] h-[35px]"
          />
          <button
            type="submit"
            className="border border-gray-400 border-l-0 rounded-r-md px-4 w-[20%] h-[35px]"
          >
            {/* <SearchOutlined /> */}
            <h1 className="text-[10px] sm:text-[15px]">Add</h1>
          </button>
        </form>
        {/* <div></div> */}
      </div>
      <div className="w-full text-center border h-screen">
        <div className="flex flex-wrap justify-center mt-3">
          {
            // noTask !== "" &&
            tasksData.map((each) => (
              <div
                key={(each as any).id}
                className="flex justify-center items-center border w-[100px] h-[50px] rounded-md m-3 sm:w-[200px]"
              >
                <h1 className="text-[12px] sm:text-[17px]">
                  {(each as any).tasks}
                </h1>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Tasks;
