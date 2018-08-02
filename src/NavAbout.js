import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

let NavAbout = props => {
  return (
    <div className="row  mx-0">
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
        href="#About"
        className="btn text-info col btn-dark bg-transparent border-0 text-left scroll-down"
      >
        About
      </a>
    </div>
  );
};
export default NavAbout;
