import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { IoMdPaper } from "react-icons/io";


let NavAbout = props => {
  return (
    <div className="row  mx-0 navbutts"
>
<div className='d-none d-md-block' >
      <button
        onClick={props.onClick}
   className={`btn ${props.display} navtext border-0 text-left navbutts `}>
    <IoMdPaper/> About
      </button>
      </div>
      <div className=' d-md-none justify-content-center' >
      <button
        onClick={props.onClick}
   className={`btn ${props.display} navtext border-0 navbutts mx-0`}>
    <IoMdPaper/>
      </button>
      </div>
      

      

    </div>
  );
};
export default NavAbout;
