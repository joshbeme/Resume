import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UnmountClosed from 'react-collapse';

let SkillsCodeColl = props => {
  return (
    
      <UnmountClosed
        className="col mx-0 border-0"
        isOpened={props.isOpened}
        style={{ backgroundColor: "#ffffff", display: "" }}
        id="skillsCode"
      >
        <div className="mx-0" id="skillsCode1" >
          Random content gfdgdfgfdgfdgfg gfdgfdgggggggggggggggggggggg
          gggggggggggbfdgfdgdfgdfgfdhjuolkjhkljhkjhk
        </div>
      </UnmountClosed>
    
  );
};
export default SkillsCodeColl;
