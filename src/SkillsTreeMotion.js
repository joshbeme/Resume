import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Motion, spring } from "react-motion";
import Tree from "./assets/Treehouse.png";

let SkillsTreeMotion = props => {
  let distance = () => {
    let stuff = document.querySelector("#skillsTreeImg").clientWidth -
    document.querySelector("#skills2").clientWidth;  
    return stuff
}
  

  return (
    <div
      id="skillsTreeImg"
      className="row-sm d-none d-md-block mx-0 "
      style={{ backgroundColor: "", display: "" }}
    >
      {" "}
      <Motion
        id="skillz"
        className="col-sm "
        style={{ x: spring(props.toggle ? distance() : 0) }}
      >
        {({ x }) => (
          <img
            id="skills2"
            className="img-fluid "
            style={{
              WebkitTransform: `translate3d(${x}px, 0, 0)`,
              transform: `translate3d(${x}px, 0, 0)`
            }}
            src={Tree}
            alt=""
          />
        )}
      </Motion>
    </div>
  );

};
export default SkillsTreeMotion;
