import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

let NavSkills = props => {
  return (
    <div className="row mx-0">
    <div
      className="col-1 shadow rounded "
      style={{
        backgroundColor: "#ffffff",
        display: `${props.display}`
      }}
    />
    <a
    onClick={props.onClick}
      role="button"
      href="#Skills"
      className="btn text-info col btn-dark bg-transparent border-0 text-left"
    >
      Skills
    </a>
  </div>
  );
};
export default NavSkills;
