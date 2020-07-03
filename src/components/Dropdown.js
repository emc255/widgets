import React, { useState, useEffect, useRef } from "react";

function Dropdown({ label, options, selected, onSelectedChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);
  const renderOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div onClick={() => onSelectedChange(option)} key={option.value} className="item">
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? "visible active" : ""}`}>
          <i className="dropdown icon" />
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>{renderOptions}</div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
