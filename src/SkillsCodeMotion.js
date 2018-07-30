import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Motion, spring } from 'react-motion';
import {Code} from './assets/Code.png'

let SkillsCodeMotion = props => {
  return (
    <div
    className="col mx-0 "
    style={{ backgroundColor: "#ffffff", display: "" }}
  >
    <Motion
      id="skillsCodeImg"
      className="col-xl border-0 "
      style={{ x: spring(props.toggle ? props.xPos : 0) }}
    >
      {({ x }) => (
        <img
          id="skills1"
          className=" img-fluid "
          style={{
            WebkitTransform: `translate3d(${x}px, 0, 0)`,
            transform: `translate3d(${x}px, 0, 0)`,
            display: ""
          }}
          src={Code}
          href="UniqueElementIdentifier"
        />
      )}
    </Motion>
    
  </div>
  );
};
export default SkillsCodeMotion;
