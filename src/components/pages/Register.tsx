import { useState } from "react";
import { apiUrl } from "../utils/api";
import { useNavigate } from "react-router-dom";

interface Check {
  name: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const [userCredentials, setuserCredentials] = useState<Check>({
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [checkName, setCheckName] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmitUserName = () => {
    fetch(apiUrl + "/checkusername", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: userCredentials.name }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === 201) {
          setCheckName(true);
        }
      });
  };

  const handleSubmitPassword = () => {
    if (userCredentials.password !== userCredentials.confirmPassword) {
      return alert("Please check both passwords");
    }
    fetch(apiUrl + "/confirmpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userCredentials }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === 201) {
          alert("You can login");
          navigate("/login");
        } else if (data.status === 200) {
          alert("already existed!");
        }
      });
  };
  return (
    <div className="flex justify-center">
      <div className="border sm:w-[20%] h-[60vh] rounded-xl mt-28 shadow-2xl">
        <h1 className="text-2xl mt-8 mx-5">Student Register</h1>
        <div className="flex flex-col w-[85%] mx-5 mt-6">
          <h1>User Name</h1>
          <input
            type="text"
            value={userCredentials.name}
            disabled={checkName}
            onChange={(e) =>
              setuserCredentials({ ...userCredentials, name: e.target.value })
            }
            className="border outline-none h-[40px] rounded-md"
          />
          {checkName && (
            <>
              <h1 className="mt-2">Password</h1>
              <input
                type="password"
                value={userCredentials.password}
                onChange={(e) =>
                  setuserCredentials({
                    ...userCredentials,
                    password: e.target.value,
                  })
                }
                className="border outline-none h-[40px] rounded-md"
              />
              <h1 className="mt-2">Confirm Password</h1>
              <input
                type="text"
                value={userCredentials.confirmPassword}
                onChange={(e) =>
                  setuserCredentials({
                    ...userCredentials,
                    confirmPassword: e.target.value,
                  })
                }
                className="border outline-none h-[40px] rounded-md"
              />
            </>
          )}
        </div>
        <div className="text-center mt-2">
          {checkName ? (
            <button
              onClick={() => handleSubmitPassword()}
              className="border w-[85%] bg-newT text-white h-[40px] rounded-lg"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={() => handleSubmitUserName()}
              className="border w-[85%] bg-newT text-white h-[40px] rounded-lg"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
