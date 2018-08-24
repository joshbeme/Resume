import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Motion, spring } from "react-motion";
import Code from "./assets/Code.png";

let SkillsCodeMotion = props => {
  let distance = () => 
    document.querySelector("#skillsCodeImg").clientWidth -
    document.querySelector("#skills1").clientWidth;
  

  return (
    <div
      id="skillsCodeImg"
      className="row  mx-0 d-none d-md-block "
      style={{ backgroundColor: "", display: "" }}
    >
      {" "}
      {console.log("motion")}
      <Motion
        id="skills1"
        className="col-sm"
        style={{ x: spring(props.toggle ? distance() : 0) }}
      >
        {({ x }) => (
          <img
            id="skills1"
            className="img-fluid "
            style={{
              WebkitTransform: `translate3d(${x}px, 0, 0)`,
              transform: `translate3d(${x}px, 0, 0)`
            }}
            src={Code}
            alt=""
          />
        )}
      </Motion>
    </div>
  );

};
export default SkillsCodeMotion;
