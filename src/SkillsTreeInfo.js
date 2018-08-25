import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaDollarSign, FaTwitter, FaNodeJs} from "react-icons/fa";
import { MdPlusOne } from "react-icons/md";

let SkillsTreeInfo = props => {
  return (

      <div className="row px-4 mx-0 text-center text-white" id="skillsTree1">
        <div className="col-sm ">
          <h3 id=""><FaDollarSign/> jQuery</h3>
          <p><MdPlusOne/> AJAX</p>
          <p><MdPlusOne/> Events</p>
          <p><MdPlusOne/> DOM Nodes</p>
          <p><MdPlusOne/> Animations</p>
        </div>
        <div className="col-sm">
          <h3 id=""><FaNodeJs/> Node.js</h3>
          <p><MdPlusOne/> Command Line Server</p>
          <p><MdPlusOne/> Node Packages</p>
          <p><MdPlusOne/> Express</p>
          <p><MdPlusOne/> MongoDB with Express</p>
        </div>
        <div className="col-sm ">
          <h3 id=""><FaTwitter/> Bootstrap</h3>
          <p><MdPlusOne/> Grids</p>
          <p><MdPlusOne/> Components</p>
          <p><MdPlusOne/> Utilities</p>
          <p><MdPlusOne/> jQuery</p>
        </div>

      </div>

  );
};
export default SkillsTreeInfo;