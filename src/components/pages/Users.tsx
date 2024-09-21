import React, { useState } from "react";
import { apiUrl } from "../utils/api";

interface Role {
  roleName: string;
  name: string;
}

const Users: React.FC = () => {
  const [role, setRole] = useState<Role>({ roleName: "", name: "" });

  const handleUser = () => {
    if (role.roleName === "" || role.name === "") {
      let data: string = "role";
      if (role.name === "") {
        data = "name";
      }
      return alert(`Please fill the ${data}`);
    }
    fetch(apiUrl + "/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 201) {
          alert("User created successfully");
        } else if (data.status === 200) {
          alert("already existed!");
        } else {
          alert("Something went wrong!");
        }
      });
    setRole({ roleName: "Select", name: "" });
  };

  console.log(role);
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white w-[70%] h-[30%] text-center rounded-md flex-wrap">
        <h1 className="text-3xl pt-4 font-semibold">Create User</h1>
        <div className="flex justify-center text-center pt-10 flex-wrap">
          <div className="flex items-center">
            <label className="w-32">Select Role</label>
            <select
              onChange={(e) => setRole({ ...role, roleName: e.target.value })}
              value={role.roleName}
              className="border w-[150px] h-[30px] rounded-md mr-4 outline-none"
            >
              <option>Select</option>
              <option value={"Admin"}>Admin</option>
              <option value={"Teacher"}>Teacher</option>
              <option value={"Student"}>Student</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="w-32">Name</label>
            <input
              type="text"
              value={role.name}
              onChange={(e) => setRole({ ...role, name: e.target.value })}
              className="border outline-none rounded-md"
            />
          </div>
        </div>
        {/* ============ */}
        <div className="flex justify-center text-center pt-10 flex-wrap">
          <div className="flex items-center">
            <label className="w-32">Select Subject</label>
            <select
              onChange={(e) => setRole({ ...role, roleName: e.target.value })}
              value={role.roleName}
              className="border w-[150px] h-[30px] rounded-md mr-4 outline-none"
            >
              <option>Select</option>
              <option value={"Admin"}>Admin</option>
              <option value={"Teacher"}>Teacher</option>
              <option value={"Student"}>Student</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="w-32">Select Class</label>
            <input
              type="text"
              value={role.name}
              onChange={(e) => setRole({ ...role, name: e.target.value })}
              className="border outline-none rounded-md"
            />
          </div>
        </div>
        <div className="mt-12 mb-5">
          <button
            onClick={handleUser}
            className="bg-newT text-white h-[30px] w-[130px] rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
