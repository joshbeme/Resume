import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SkillsTreeColl from "./SkillsTreeColl";
import SkillsTreeMotion from "./SkillsTreeMotion";
import OnVisible from 'react-on-visible';

let SkillsTree = props => {
  return (
    <div className="row  mx-0" id="SkillTree">

<SkillsTreeColl isOpened={props.open} />
        <SkillsTreeMotion className="" toggle={props.open}  />
        <OnVisible onChange={props.visible} > 
            </OnVisible>
    </div>
  );
};
export default SkillsTree;
