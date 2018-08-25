import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { FaDollarSign, FaTwitter, FaNodeJs } from "react-icons/fa";
import SkillsCodeInfo from "./SkillsCodeInfo";
import SkillsTreeInfo from "./SkillsTreeInfo";

let SkillsMobile = () => {
  return (
    <div className="row  d-sm-block d-md-none mx-0 twinkling" id="codeMobile">
      <SkillsCodeInfo />
      <SkillsTreeInfo />
    </div>
  );
};
export default SkillsMobile;
