import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { MdPlusOne } from "react-icons/md";
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5 } from 'react-icons/fa';



let SkillsCodeInfo = props => {
  return (

      <div className="row mx-0 text-white text-center px-5" id="skillsCode1">
        <div className="col-sm text-center">
          <h3 id=""><FaHtml5 /> HTML</h3>
          <p><MdPlusOne/> DOM</p>
          <p><MdPlusOne/> Tags</p>
          <p><MdPlusOne/> Attributes</p>

        </div>
        <div className="col-sm text-center">
          <h3 id=""><FaCss3Alt/> CSS</h3>
          <p><MdPlusOne/> Sass</p>
          <p><MdPlusOne/> Flexbox</p>
          <p><MdPlusOne/> CSS Grid</p>
          <p><MdPlusOne/> Properties</p>
        </div>
        <div className="col-sm text-center">
          <h3 id=""><FaJsSquare/> JavaScript</h3>
          <p><MdPlusOne/> DOM manipulation</p>
          <p><MdPlusOne/> Object-oriented Programming</p>
          <p><MdPlusOne/> Classes</p>
          <p><MdPlusOne/> Modules</p>
        </div>
        <div className="col-sm text-center">
          <h3 id=""><FaReact/> React</h3>
          <p><MdPlusOne/> JSX</p>
          <p><MdPlusOne/> Redux</p>
          <p><MdPlusOne/> Stateless/Stateful Components</p>
          <p><MdPlusOne/> Lifecycle Methods</p>
          <p><MdPlusOne/> Higher Order Components</p>
        </div>
      </div>
 
  );
};
export default SkillsCodeInfo;
