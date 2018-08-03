import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UnmountClosed from "react-collapse";

let SkillsCodeColl = props => {
  return (
    <UnmountClosed
      className="col-8 px-5 mx-0 border-0"
      isOpened={props.isOpened}
      style={{ backgroundColor: "", display: "" }}
      id="skillsCode"
    >
      <div className="row mx-0 text-center" id="skillsCode1">
        <div className="col">
          <h3 id="codeText">HTML</h3>
          <p>- DOM</p>
          <p>- Tags</p>
          <p>- Properties</p>

        </div>
        <div className="col">
          <h3 id="codeText">CSS</h3>
          <p>- Sass</p>
          <p>- Flexbox</p>
          <p>- CSS Grid</p>
          <p>- Properties</p>
        </div>
        <div className="col">
          <h3 id="codeText">JavaScript</h3>
          <p>- DOM manipulation</p>
          <p>- Object-oriented Programming</p>
          <p>- Classes</p>
          <p>- Fetch API</p>
        </div>
        <div className="col">
          <h3 id="codeText">React</h3>
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
