import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

let NavAbout = props => {
  return (
    <div className="row  mx-0 navbutts"
>

      <button
        onClick={props.onClick}
        
      
        className={`btn col ${props.display} navtext border-0 text-left navbutts `}
 >
      
        About
      </button>
    </div>
  );
};
export default NavAbout;
