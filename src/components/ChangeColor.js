import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
];

const ChangeColor = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown label="Select Color" selected={selected} options={options} onSelectedChange={setSelected} />
      <h1 style={{ color: selected.value }}>EUHNA</h1>
    </div>
  );
};

export default ChangeColor;
