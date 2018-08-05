import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SkillsTreeColl from "./SkillsTreeColl";
import SkillsTreeMotion from "./SkillsTreeMotion";
import ScrollAnimation from 'react-animate-on-scroll';


let SkillsTree = props => {
  return (
    <div className="row-md mx-0">

<SkillsTreeColl isOpened={props.open} />
        <SkillsTreeMotion toggle={props.open}  />


    </div>
  );
};
export default SkillsTree;
