import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { IoIosHome } from "react-icons/io";

let NavHome = props => {
  return (
    <div className="row mx-0">

<div className='d-none d-md-block' >
      <button
        onClick={props.onClick}
   className={`btn ${props.display} navtext border-0 text-left navbutts `}>
    <IoIosHome/> Home
      </button>
      </div>
      <div className=' d-md-none justify-content-center' >
      <button
        onClick={props.onClick}
   className={`btn ${props.display} navtext border-0 navbutts mx-0`}>
    <IoIosHome/>
      </button>
      </div>
    </div>
  );
};
export default NavHome;
