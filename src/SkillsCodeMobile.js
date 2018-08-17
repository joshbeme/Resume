import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5 } from 'react-icons/fa';



let SkillsCodeMobile = () => {
  return (
    <div className='row  d-sm-block d-md-none mx-0 twinkling' id='codeMobile'    >
          <div className="row mx-0 text-center" id="">
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
    </div>

  );
};
export default SkillsCodeMobile;
