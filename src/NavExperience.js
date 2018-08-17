import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { IoIosListBox } from "react-icons/io";

let NavExperience = props => {
  return (
    <div className="row mx-0">
<div className='col'>
      <button
        onClick={props.onClick}
        role="button"
     
        className={`btn navtext col ${props.display} border-0 text-left navbutts `}


      >
       <IoIosListBox/> Experience
      </button>
      </div>
    </div>
  );
};
export default NavExperience;
