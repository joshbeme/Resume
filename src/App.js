import React, { Component } from "react";
import { Collapse } from "react-collapse";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navi from "./NavBar.js";
import Experience from "./Experience.js";
// import Heading from './Head.js'
import Heading from "./Head.js";
import About from "./About.js";
import Skills from "./Skills.js";
import Foot from "./Footer.js";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      dis: "none",
      collapseAll: false
    };
    (this.h1Move = this.h1Move.bind(this)),
      (this.hAllMove = this.hAllMove.bind(this));
  }
  h1Move() {
    this.setState({
      collapse: !this.state.collapse,
      dis: "default"
    });
  }
  hAllMove() {
    this.setState({
      collapseAll: !this.state.collapseAll
    });
  }
  
  componentDidMount() {
    setTimeout(this.h1Move, 1000);
    setTimeout(this.hAllMove, 1600);

    console.log(this.state.collapse);
  }
  render() {
    return (
      <div id="main" className="container-fluid">
        
        <Heading />
        
          <Navi />
          <About />
          {/* <div id="Skills" className="row-md mx-0 text-white text-center">
          <h1 className="col display-3" >Skills</h1>
        </div> */}
        
          <div
            className="row mx-0 text-white text-center "
            style={{ backgroundColor: "" }}
          >
            <h1 id="Skills" className="col display-3 ">
              Skills{" "}
            </h1>
          </div>
          <Skills />
          <div className="container">
          <Experience />
        </div>
        <Foot />
      </div>
    );
  }
}

export default App;
