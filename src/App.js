import React, { Component } from "react";
import { Collapse } from "react-collapse";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navi from "./NavBar.js";
import Experience from "./Experience.js";
import Heading from "./Head.js";
import About from "./About.js";
import Skills from "./Skills.js";
import Foot from "./Footer.js";
import SkillsHeader from "./SkillsHeader.js";
import "./index.css";
import SkillsCodeMobile from "./SkillsCodeMobile";


class App extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    document.getElementById('main').addEventListener('scroll', ()=>{console.log('sup')})
  }
  componentWillUnmount(){
    document.getElementById('main').removeEventListener('scroll');
  }
  render() {
    return (
    
      <div id="main" className="container-fluid"  >
      
        <Navi />
        <Heading />

        <About />

        <SkillsHeader />
        <Skills />
        <SkillsCodeMobile />
        <Experience />

        <Foot />
      </div>
    );
  }
}

export default App;
