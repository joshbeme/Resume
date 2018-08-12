import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

let NavAbout = props => {
  return (
    <div className="row  mx-0"
>

      <a
        onClick={props.onClick}
        role="button"
        href="#About"
        className={`btn col ${props.display} border-0 text-left `}
 >
      
        About
      </a>
    </div>
  );
};
export default NavAbout;
