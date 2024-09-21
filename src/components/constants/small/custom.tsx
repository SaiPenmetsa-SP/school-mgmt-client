// import React, { useState } from "react";
// import { Switch } from "antd";

// const Ant: React.FC = () => {
//   const [value, setValue] = useState(false);

//   return (
//     <>
//       <Switch
//         size="small"
//         defaultChecked
//         defaultValue={value}
//         className="bg-black text-white"
//       />
//     </>
//   );
// };
// export default Ant;

import React, { useState } from "react";
import { Switch } from "antd";

const Ant: React.FC = () => {
  const [value, setValue] = useState(false);

  const handleChange = (checked: boolean) => {
    setValue(checked);
  };
  console.log(value);
  return (
    <>
      <Switch
        size="small"
        checked={value}
        onChange={handleChange}
        className={`bg-black checked:bg-white ${
          value ? "bg-pink-500" : "bg-dash"
        }`}
      />
    </>
  );
};

export default Ant;
