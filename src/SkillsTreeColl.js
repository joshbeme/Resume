import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UnmountClosed from "react-collapse";
import { FaDollarSign, FaTwitter, FaNodeJs} from "react-icons/fa";

let SkillsTreeColl = props => {
  return (
    <UnmountClosed
      className="col-md-9 align-self-center px-5 d-none d-md-block mx-0 pt-3 border-0"
      isOpened={props.isOpened}
      style={{ backgroundColor: "", display: "" }}
      id="skillsTree"
    >
      <div className="row px-4 mx-0 text-center text-white" id="skillsTree1">
        <div className="col-sm ">
          <h3 id=""><FaDollarSign/> jQuery</h3>
          <p>- AJAX</p>
          <p>- Events</p>
          <p>- DOM Nodes</p>
          <p>- Animations</p>
        </div>
        <div className="col-sm">
          <h3 id=""><FaNodeJs/> Node.js</h3>
          <p>- Command Line Server</p>
          <p>- Node Packages</p>
          <p>- Express</p>
          <p>- MongoDB with Express</p>
        </div>
        <div className="col-sm ">
          <h3 id=""><FaTwitter/> Bootstrap</h3>
          <p>- Grids</p>
          <p>- Components</p>
          <p>- Utilities</p>
          <p>- Flexbox</p>
        </div>

      </div>
    </UnmountClosed>
  );
};
export default SkillsTreeColl;