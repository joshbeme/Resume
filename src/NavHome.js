import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

let NavHome = props => {
  return (
    <div className="row mx-0">

      <a
        onScroll={props.onScroll}
        onClick={props.onClick}
        id="buttonHome"
        role="button"
        href="#Home"
        className={`btn text-primary col ${props.display} border-0 text-left `}

      >
        Home
      </a>
    </div>
  );
};
export default NavHome;
