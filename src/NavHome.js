import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

let NavHome = props => {
  return (
    <div className="row mx-0">
      <div
        className="col-1 rounded shadow "
        style={{
          backgroundColor: "#ffffff",
          display: `${props.display}`
        }}
      />
      <a
        onScroll={props.onScroll}
        onClick={props.onClick}
        id="buttonHome"
        role="button"
        href="#Home"
        className="btn col bg-transparent text-info text-left"
      >
        Home
      </a>
    </div>
  );
};
export default NavHome;
