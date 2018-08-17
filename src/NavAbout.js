import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { IoMdPaper } from "react-icons/io";


let NavAbout = props => {
  return (
    <div className="row  mx-0 navbutts"
>
<div className='col-sm' >

      <button
        onClick={props.onClick}
        
      
        className={`btn ${props.display} navtext border-0 text-left navbutts `}
 >
        <IoMdPaper/> About
      </button>
      </div>

    </div>
  );
};
export default NavAbout;
