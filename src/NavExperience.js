import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

let NavExperience = props => {
  return (
    <div className="row mx-0">
      <div
        className="col-1 shadow rounded"
        style={{
          backgroundColor: "#ffffff",
          display: `${props.display}`
        }}
      />
      <a
        onClick={props.onClick}
        role="button"
        href="#Experience"
        className="btn col text-primary btn-dark bg-transparent border-0 text-left"
      >
        Experience
      </a>
    </div>
  );
};
export default NavExperience;
