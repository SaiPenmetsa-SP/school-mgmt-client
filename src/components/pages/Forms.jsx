// import React, { useState } from "react";
// import { apiUrl } from "../utils/api";
// import { useSelector } from "react-redux";

// interface FormData {
//   stdName: string;
//   FatherName: string;
//   dateOfBirth: string;
//   gender: string;
//   age: string;
//   address: string;
//   city: string;
//   state: string;
//   pincode: string;
//   studentEmail: string;
//   mobile: string;
// }
// interface FormsProps {
//   form: FormData;
// }
// const Forms: React.FC<FormsProps> = ({ form }) => {
//   const [formData, setFormData] = useState<FormData>({
//     stdName: "",
//     FatherName: "",
//     dateOfBirth: "",
//     gender: "",
//     age: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//     studentEmail: "",
//     mobile: "",
//   });
//   const theme = useSelector((store) => (store as any).theme.isLightMode);
//   console.log(form);
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     fetch(apiUrl + "/formSubmit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ formData }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   return (
//     <div
//       className={`${theme ? "text-white" : "text-black"} ${
//         theme ? "bg-black" : "bg-white"
//       } rounded-md flex justify-center h-screen `}
//     >
//       <form onSubmit={handleSubmit} className=" w-[80%]">
//         <div className="flex flex-wrap justify-around mt-7">
//           <div className="w-[300px]">
//             <h1 className="w-[70%] h-[25px]">Student Name</h1>
//             <input
//               value={formData.stdName}
//               onChange={(e) =>
//                 setFormData({ ...formData, stdName: e.target.value })
//               }
//               type="text"
//               className="border w-[100%] sm:w-[100%]"
//             />
//           </div>
//           <div className="w-[300px]">
//             <h1 className="w-[70%] h-[25px]">Father Name</h1>
//             <input
//               value={formData.FatherName}
//               onChange={(e) =>
//                 setFormData({ ...formData, FatherName: e.target.value })
//               }
//               type="text"
//               className="border w-[100%] sm:w-[100%]"
//             />
//           </div>
//         </div>
//         <div className="flex flex-wrap justify-around mt-4">
//           <div className="w-[300px]">
//             <h1 className="w-[70%] h-[25px]">Birth Date</h1>
//             <input
//               value={formData.dateOfBirth}
//               onChange={(e) =>
//                 setFormData({ ...formData, dateOfBirth: e.target.value })
//               }
//               type="date"
//               className="border w-[100%] sm:w-[100%]"
//             />
//           </div>
//           <div className="w-[300px]">
//             <h1 className="w-[70%] h-[25px]">Gender</h1>
//             <select
//               value={formData.gender}
//               onChange={(e) =>
//                 setFormData({ ...formData, gender: e.target.value })
//               }
//               className="border w-[100%] sm:w-[100%]"
//             >
//               <option>Select</option>
//               <option value={"Male"}>Male</option>
//               <option value={"Female"}>Fe-Male</option>
//               <option value={"Other"}>Other</option>
//             </select>
//           </div>
//         </div>
//         <div className="flex flex-wrap justify-around mt-4">
//           <div className="w-[300px]">
//             <h1 className="w-[70%] h-[25px]">Age</h1>
//             <input
//               value={formData.age}
//               onChange={(e) =>
//                 setFormData({ ...formData, age: e.target.value })
//               }
//               type="text"
//               className="border w-[100%] sm:w-[100%]"
//             />
//           </div>
//           <div className="w-[300px]">
//             <h1 className="w-[70%] h-[25px]">Address</h1>
//             <input
//               value={formData.address}
//               onChange={(e) =>
//                 setFormData({ ...formData, address: e.target.value })
//               }
//               type="text"
//               className="border w-[300px]"
//             />
//           </div>
//         </div>
//         {/* ========== */}
//         <div className="flex flex-wrap justify-around mt-4">
//           <div className="w-[300px]">
//             <h1 className="w-[70%] h-[25px]">City</h1>
//             <input
//               value={formData.city}
//               onChange={(e) =>
//                 setFormData({ ...formData, city: e.target.value })
//               }
//               type="text"
//               className="border w-[100%] sm:w-[100%]"
//             />
//           </div>
//           <div className="w-[300px]">
//             <h1 className="w-[70%] h-[25px]">State</h1>
//             <input
//               value={formData.state}
//               onChange={(e) =>
//                 setFormData({ ...formData, state: e.target.value })
//               }
//               type="text"
//               className="border w-[300px]"
//             />
//           </div>
//         </div>
//         {/* ============== */}
//         <div className="flex flex-wrap justify-around mt-4">
//           <div className="w-[300px]">
//             <h1 className="w-[70%] h-[25px]">Pincode</h1>
//             <input
//               value={formData.pincode}
//               onChange={(e) =>
//                 setFormData({ ...formData, pincode: e.target.value })
//               }
//               type="text"
//               className="border w-[100%] sm:w-[100%]"
//             />
//           </div>
//           <div className="w-[300px] h-[25px]">
//             {/* <h1 className="w-[70%] h-[25px]">State</h1>
//             <input type="text" className="border w-[300px]" /> */}
//           </div>
//         </div>
//         {/* ==================== */}
//         <div className="flex flex-wrap justify-around mt-4">
//           <div className="w-[300px]">
//             <h1 className="w-[70%] h-[25px]">Student E-mail</h1>
//             <input
//               value={formData.studentEmail}
//               onChange={(e) =>
//                 setFormData({ ...formData, studentEmail: e.target.value })
//               }
//               type="text"
//               className="border w-[100%] sm:w-[100%]"
//             />
//           </div>
//           <div className="w-[300px] h-[25px]">
//             <h1 className="w-[70%] h-[25px]">Mobile</h1>
//             <input
//               value={formData.mobile}
//               onChange={(e) =>
//                 setFormData({ ...formData, mobile: e.target.value })
//               }
//               type="text"
//               className="border w-[300px]"
//             />
//           </div>
//         </div>
//         <div className="text-center mt-4">
//           <button
//             type="submit"
//             className="h-[40px] w-[150px] border rounded-md text-white bg-newT"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Forms;

import React, { useEffect, useState } from "react";
import { apiUrl } from "../utils/api";
import { useSelector } from "react-redux";

const Forms = ({ data }) => {
  const [formData, setFormData] = useState({
    stdName: "",
    FatherName: "",
    dateOfBirth: "",
    gender: "",
    age: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    studentEmail: "",
    mobile: "",
  });
  // useEffect(() => {
  //   if (data) {
  //     setFormData(data[0]);
  //   }
  // }, []);

  const theme = useSelector((store) => store.theme.isLightMode);
  // console.log(data[0]);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(apiUrl + "/formSubmit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div
      className={`${theme ? "text-white" : "text-black"} ${
        theme ? "bg-black" : "bg-white"
      } rounded-md flex justify-center h-screen`}
    >
      <form onSubmit={handleSubmit} className="w-[80%]">
        <div className="flex flex-wrap justify-around mt-7">
          <div className="w-[300px]">
            <h1 className="w-[70%] h-[25px]">Student Name</h1>
            <input
              // value={formData?.stdName}
              onChange={(e) =>
                setFormData({ ...formData, stdName: e.target.value })
              }
              type="text"
              className="border w-[100%] sm:w-[100%]"
            />
          </div>
          <div className="w-[300px]">
            <h1 className="w-[70%] h-[25px]">Father Name</h1>
            <input
              // value={formData.FatherName}
              onChange={(e) =>
                setFormData({ ...formData, FatherName: e.target.value })
              }
              type="text"
              className="border w-[100%] sm:w-[100%]"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-around mt-4">
          <div className="w-[300px]">
            <h1 className="w-[70%] h-[25px]">Birth Date</h1>
            <input
              // value={formData.dateOfBirth}
              onChange={(e) =>
                setFormData({ ...formData, dateOfBirth: e.target.value })
              }
              type="date"
              className="border w-[100%] sm:w-[100%]"
            />
          </div>
          <div className="w-[300px]">
            <h1 className="w-[70%] h-[25px]">Gender</h1>
            <select
              // value={formData.gender}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
              className="border w-[100%] sm:w-[100%]"
            >
              <option>Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap justify-around mt-4">
          <div className="w-[300px]">
            <h1 className="w-[70%] h-[25px]">Age</h1>
            <input
              // value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              type="text"
              className="border w-[100%] sm:w-[100%]"
            />
          </div>
          <div className="w-[300px]">
            <h1 className="w-[70%] h-[25px]">Address</h1>
            <input
              // value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              type="text"
              className="border w-[300px]"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-around mt-4">
          <div className="w-[300px]">
            <h1 className="w-[70%] h-[25px]">City</h1>
            <input
              // value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              type="text"
              className="border w-[100%] sm:w-[100%]"
            />
          </div>
          <div className="w-[300px]">
            <h1 className="w-[70%] h-[25px]">State</h1>
            <input
              value={formData.state}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
              type="text"
              className="border w-[300px]"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-around mt-4">
          <div className="w-[300px]">
            <h1 className="w-[70%] h-[25px]">Pincode</h1>
            <input
              // value={formData.pincode}
              onChange={(e) =>
                setFormData({ ...formData, pincode: e.target.value })
              }
              type="text"
              className="border w-[100%] sm:w-[100%]"
            />
          </div>
          <div className="w-[300px] h-[25px]"></div>
        </div>
        <div className="flex flex-wrap justify-around mt-4">
          <div className="w-[300px]">
            <h1 className="w-[70%] h-[25px]">Student E-mail</h1>
            <input
              // value={formData.studentEmail}
              onChange={(e) =>
                setFormData({ ...formData, studentEmail: e.target.value })
              }
              type="text"
              className="border w-[100%] sm:w-[100%]"
            />
          </div>
          <div className="w-[300px] h-[25px]">
            <h1 className="w-[70%] h-[25px]">Mobile</h1>
            <input
              // value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              type="text"
              className="border w-[300px]"
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <button
            type="submit"
            className="h-[40px] w-[150px] border rounded-md text-white bg-newT"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
