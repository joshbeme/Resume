import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SkillsTreeColl from "./SkillsTreeColl";
import SkillsTreeMotion from "./SkillsTreeMotion";
import OnVisible from 'react-on-visible';

let SkillsTree = props => {
  return (
    <div className="row-md d-none d-md-block mx-0">

<SkillsTreeColl isOpened={props.open} />
        <SkillsTreeMotion className="" toggle={props.open}  />
        <OnVisible onChange={props.visible} > 
            </OnVisible>
    </div>
  );
};
export default SkillsTree;
