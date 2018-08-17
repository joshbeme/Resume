import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UnmountClosed from "react-collapse";
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5 } from 'react-icons/fa';



let SkillsCodeColl = props => {
  return (
    <UnmountClosed
      className="col-md-8 px-5 d-none d-md-block mx-0 pt-3 border-0"
      isOpened={props.isOpened}
      style={{ backgroundColor: "", display: "" }}
      id="skillsCode"
    >
      <div className="row mx-0  text-center" id="skillsCode1">
        <div className="col-sm">
          <h3 id="codeText"><FaHtml5 /> HTML</h3>
          <p>- DOM</p>
          <p>- Tags</p>
          <p>- Properties</p>

        </div>
        <div className="col-sm">
          <h3 id="codeText"><FaCss3Alt/> CSS</h3>
          <p>- Sass</p>
          <p>- Flexbox</p>
          <p>- CSS Grid</p>
          <p>- Properties</p>
        </div>
        <div className="col-sm">
          <h3 id="codeText"><FaJsSquare/> JavaScript</h3>
          <p>- DOM manipulation</p>
          <p>- Object-oriented Programming</p>
          <p>- Classes</p>
          <p>- Fetch API</p>
        </div>
        <div className="col-sm">
          <h3 id="codeText"><FaReact/> React</h3>
          <p>- JSX</p>
          <p>- Stateless Components</p>
          <p>- Stateful Components</p>
          <p>- Lifecycle Methods</p>
          <p>- Higher Order Components</p>
        </div>
      </div>
    </UnmountClosed>
  );
};
export default SkillsCodeColl;
