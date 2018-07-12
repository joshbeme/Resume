import React, { Component } from "react";
import Code from "./assets/Code.png";
import Treehouse from "./assets/Treehouse.png";
import cerritos from "./assets/Cerritos.jpg";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Motion, spring} from 'react-motion';
import {UnmountClosed} from 'react-collapse';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
  
    };
  };

  handleMouseDown = () => {
    this.setState({open: !this.state.open});
  };

  handleTouchStart = (e) => {
    e.preventDefault();
    this.handleMouseDown();
  };

componentWillMount(){
  
}
  render() {
    let codeAca = () => document.getElementById("Skills").clientWidth - document.getElementById("skills1").clientWidth 

    return (
      <div className="row-md my-0 mx-0 ">
        {/* <div
          className="row d-flex justify-content-center my-0 mx-0"
          style={{ backgroundColor: "" }}
        >

          {" "}
          <img id="skills" className="img-fluid " src={cerritos} />{" "}
        </div> */}
        <button  className="btn"         
        onMouseDown={this.handleMouseDown}
        onTouchStart={this.handleTouchStart}
         >button</button>

<div className="row mx-0" >
         <UnmountClosed className="col-3 mx-0" isOpened={this.state.open} style={{display:'none'}}>
  <div className="col">Random content
  gfdgdfgfdgfdgfg
  gfdgfdgggggggggggggggggggggg
  gggggggggggbfdgfdgdfgdfgfd</div>
</UnmountClosed>
            <Motion className="col" style={{x: spring(this.state.open ? codeAca() : 0)}}>
          {({x}) =>
            // children is a callback which should accept the current value of
            // `style`
            <div
            className="row d-flex justify-content-start mx-0 "
            style={{ backgroundColor: "#ffffff" }}
          >
         
 
  
            <div  className="col" >
            <img id="skills1" className=" img-fluid "  style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }} 
                src={Code} />
              </div>


            </div>}
              </Motion></div>
        <div
          className="row d-flex justify-content-end mx-0"
          style={{ backgroundColor: "	#63D081" }}
        >
        
          {" "}
          <img id="skills2" className="img-fluid " src={Treehouse} />{" "}
        </div>
      </div>
    );
  }
}

export default Skills;
