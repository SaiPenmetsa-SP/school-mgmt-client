import React from "react";
import { FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "../../../components/pages/room.css";

const AddIcon: React.FC = () => (
  <FloatButton
    className="fixed-bottom"
    style={{ insetInlineEnd: 50 }}
    icon={<PlusOutlined />}
    tooltip={<div>Add Class</div>}
  />
);

export default AddIcon;
