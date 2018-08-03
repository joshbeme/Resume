import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SkillsCodeColl from "./SkillsCodeColl";
import SkillsCodeMotion from "./SkillsCodeMotion";
import OnVisible from 'react-on-visible';

let SkillsCode = props => {
  return (
    <div className="row-md mx-0">
      <SkillsCodeColl isOpened={props.open} />

      <SkillsCodeMotion toggle={props.open} />
      <OnVisible onChange={props.visible} > 
            
            </OnVisible>
      
    </div>
  );
};
export default SkillsCode;
