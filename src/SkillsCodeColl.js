import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UnmountClosed from 'react-collapse';

let SkillsCodeColl = props => {
  return (
    <div className="mx-0">
      <UnmountClosed
        className="col-5 mx-0 border-0"
        isOpened={props.isOpened}
        style={{ backgroundColor: "#ffffff", display: "" }}
        id="skillsCode"
      >
        <div className="mx-0">
          Random content gfdgdfgfdgfdgfg gfdgfdgggggggggggggggggggggg
          gggggggggggbfdgfdgdfgdfgfd
        </div>
      </UnmountClosed>
    </div>
  );
};
export default SkillsCodeColl;
