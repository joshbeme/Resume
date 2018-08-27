import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UnmountClosed from "react-collapse";
import SkillsCodeInfo from "./SkillsCodeInfo";

let SkillsCodeColl = props => {
  return (
    <UnmountClosed
      className="col-md-9 align-self-center px-5 d-none d-md-block mx-0 pt-3 border-0"
      isOpened={props.isOpened}
      style={{ backgroundColor: "", display: "" }}
      id="skillsCode"
    >
      <SkillsCodeInfo />
    </UnmountClosed>
  );
};
export default SkillsCodeColl;
