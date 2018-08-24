import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { FaDollarSign, FaTwitter, FaNodeJs} from "react-icons/fa";


let SkillsCodeMobile = () => {
  return (
    <div className='row  d-sm-block d-md-none mx-0 twinkling' id='codeMobile'    >
          <div className="row mx-0 text-center text-white" id="">
        <div className="col-sm">
          <h3 id=""><FaHtml5 /> HTML</h3>
          <p>- DOM</p>
          <p>- Tags</p>
          <p>- Properties</p>

        </div>
        <div className="col-sm">
          <h3 id=""><FaCss3Alt/> CSS</h3>
          <p>- Sass</p>
          <p>- Flexbox</p>
          <p>- CSS Grid</p>
          <p>- Properties</p>
        </div>
        <div className="col-sm">
          <h3 id=""><FaJsSquare/> JavaScript</h3>
          <p>- DOM manipulation</p>
          <p>- Object-oriented Programming</p>
          <p>- Classes</p>
          <p>- Fetch API</p>
        </div>
        <div className="col-sm">
          <h3 id=""><FaReact/> React</h3>
          <p>- JSX</p>
          <p>- Stateless Components</p>
          <p>- Stateful Components</p>
          <p>- Lifecycle Methods</p>
          <p>- Higher Order Components</p>
        </div>
      </div>
      <div className="row px-4 mx-0 text-white text-center" id="skillsTree1">
        <div className="col-sm ">
          <h3 id=""><FaDollarSign/> jQuery</h3>
          <p>- AJAX</p>
          <p>- Events</p>
          <p>- DOM Nodes</p>
          <p>- Animations</p>
        </div>
        <div className="col-sm">
        <h3 id=""><FaNodeJs/> Node.js</h3>
          <p>- Command Line Server</p>
          <p>- Node Packages</p>
          <p>- Express</p>
          <p>- MongoDB with Express</p>
        </div>
        <div className="col-sm ">
        <h3 id=""><FaTwitter/> Bootstrap</h3>
          <p>- Grids</p>
          <p>- Components</p>
          <p>- Utilities</p>
          <p>- Flexbox</p>
        </div>

      </div>
    </div>

  );
};
export default SkillsCodeMobile;
