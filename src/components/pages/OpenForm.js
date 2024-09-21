import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../utils/api";
import Forms from "./Forms";

const OpenForm = () => {
  const [data, setData] = useState([]);
  const param = useParams();

  //   console.log(param);

  useEffect(() => {
    fetch(apiUrl + `/formData/${param.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.row);
        setData(data.row);
      });
  }, []);

  return (
    <div>
      <Forms data={data} />
    </div>
  );
};

export default OpenForm;
