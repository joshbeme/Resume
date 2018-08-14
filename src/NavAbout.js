import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

let NavAbout = props => {
  return (
    <div className="row  mx-0"
>

      <button
        onClick={props.onClick}
        role="button"
      
        className={`btn col ${props.display} navtext border-0 text-left `}
 >
      
        About
      </button>
    </div>
  );
};
export default NavAbout;
