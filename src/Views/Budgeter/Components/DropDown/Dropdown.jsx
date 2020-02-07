import React, { useState } from "react";
import "./dropdown.css";
export default function DropDown({ data, loadData, name, setName }) {
  const [open, setOpen] = useState(false);

  const openDropDown = () => {
    setOpen(!open);
  };
  return (
    <div
      class={`wrapper-dropdown-3 ${open ? "active" : ""}`}
      onClick={openDropDown}
    >
      <div className="d-flex col-sm-12 p-0 justify-content-between">
        <span>{name === "" ? data[0].name : name}</span>
        <span className="justify-content-center">
          <i class="fas fa-tools"></i>
        </span>
      </div>
      <ul class="dropdown">
        {data.map(value => (
          <li
            key={value._id}
            onClick={() => {
              setName(value.name);
              loadData(value);
            }}
          >
            <span>
              <i class="icon-envelope icon-large"></i>
              {value.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
