import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { IoMdHammer } from "react-icons/io";

let NavSkills = props => {
  return (
    <div className="row mx-0 navbutts">

    <button
    onClick={props.onClick}
      role="button"
     
      className={`btn navtext col ${props.display} border-0 text-left navbutts `}

    >
     <IoMdHammer/> Skills
    </button>
  </div>
  );
};
export default NavSkills;
