import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Tagalog",
    value: "tl",
  },
  {
    label: "Korean",
    value: "ko",
  },
  {
    label: "Japanese",
    value: "ja",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input onChange={(e) => setText(e.target.value)} value={text} className="input" />
        </div>
      </div>
      <Dropdown label="Select a Language" options={options} selected={language} onSelectedChange={setLanguage} />
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;

//KEY = AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
