import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

let NavSkills = props => {
  return (
    <div className="row mx-0">

    <a
    onClick={props.onClick}
      role="button"
      href="#Skills"
      className={`btn text-primary col ${props.display} border-0 text-left `}

    >
      Skills
    </a>
  </div>
  );
};
export default NavSkills;
