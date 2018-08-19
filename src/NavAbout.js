import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { IoMdPaper } from "react-icons/io";


let NavAbout = props => {
  return (
    <div className="row  mx-0 navbutts"
>
<div className='col-sm' >
<div className='d-none d-md-block' >
      <button
        onClick={props.onClick}
   className={`btn ${props.display} navtext border-0 text-left navbutts `}>
    <IoMdPaper/> About
      </button>
      </div>
      <div className=' d-md-none' >
      <button
        onClick={props.onClick}
   className={`btn ${props.display} navtext border-0 text-left navbutts `}>
    <IoMdPaper/>
      </button>
      </div>
      

      </div>

    </div>
  );
};
export default NavAbout;
