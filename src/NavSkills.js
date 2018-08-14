import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

let NavSkills = props => {
  return (
    <div className="row mx-0">

    <button
    onClick={props.onClick}
      role="button"
     
      className={`btn navtext col ${props.display} border-0 text-left `}

    >
      Skills
    </button>
  </div>
  );
};
export default NavSkills;
