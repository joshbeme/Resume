import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

let NavHome = props => {
  return (
    <div className="row mx-0">

      <button
        onScroll={props.onScroll}
        onClick={props.onClick}
        id="buttonHome"
        role="button"
    
        className={`btn navtext col ${props.display} border-0 text-left navbutts `}

      >
        Home
      </button>
    </div>
  );
};
export default NavHome;
