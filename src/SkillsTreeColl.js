import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UnmountClosed from "react-collapse";
import SkillsTreeInfo from "./SkillsTreeInfo";

let SkillsTreeColl = props => {
  return (
    <UnmountClosed
      className="col-md-9 align-self-center px-5 d-none d-md-block mx-0 pt-3 border-0"
      isOpened={props.isOpened}
      style={{ backgroundColor: "", display: "" }}
      id="skillsTree"
    >
      <SkillsTreeInfo />
    </UnmountClosed>
  );
};
export default SkillsTreeColl;
