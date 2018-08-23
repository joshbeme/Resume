import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UnmountClosed from "react-collapse";

let SkillsTreeColl = props => {
  return (
    <UnmountClosed
      className="col-sm-9 px-5 mx-0 border-0"
      isOpened={props.isOpened}
      style={{ backgroundColor: "", display: "" }}
      id="skillsTree"
    >
      <div className="row px-4 mx-0 text-center text-white" id="skillsTree1">
        <div className="col-sm ">
          <h3 id="">jQuery</h3>
          <p>- AJAX</p>
          <p>- Events</p>
          <p>- DOM Nodes</p>
          <p>- Animations</p>
        </div>
        <div className="col-sm">
          <h3 id="">Node.js</h3>
          <p>- Command Line Server</p>
          <p>- Node Packages</p>
          <p>- Express</p>
          <p>- MongoDB with Express</p>
        </div>
        <div className="col-sm ">
          <h3 id="">Bootstrap</h3>
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