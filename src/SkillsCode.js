import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SkillsCodeColl from "./SkillsCodeColl";
import SkillsCodeMotion from "./SkillsCodeMotion";
import OnVisible from 'react-on-visible';

let SkillsCode = props => {
  return (
    <div className="row d-none d-md-block mx-0" id="SkillCode">
      <SkillsCodeColl className='' isOpened={props.open} />

      <SkillsCodeMotion className="" toggle={props.open} />
      <OnVisible onChange={props.visible} > 
            
            </OnVisible>
      
    </div>
  );
};
export default SkillsCode;
