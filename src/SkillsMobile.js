import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SkillsCodeInfo from "./SkillsCodeInfo";
import SkillsTreeInfo from "./SkillsTreeInfo";

let SkillsMobile = () => {
  return (
    <div className="row justify-content-center d-sm-block d-md-none mx-0 twinkling" id="codeMobile">
    

      <SkillsCodeInfo />
      <SkillsTreeInfo />
    </div>
  );
};
export default SkillsMobile;
