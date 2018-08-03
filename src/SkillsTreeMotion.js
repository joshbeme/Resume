import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
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
      className="row mx-0 "
      style={{ backgroundColor: "#63D081", display: "" }}
    >
      {" "}
      {console.log("tree")}
      <Motion
        id="skillz"
        className=""
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
