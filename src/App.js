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
    this.state = {
      width: null,
    }
this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
    document.getElementById('main').addEventListener('scroll', ()=>{console.log('sup')});
    this.setState({
      width: document.querySelector('#Home').clientWidth,
    })
  }
  componentWillUnmount(){
    document.getElementById('main').removeEventListener('scroll');

  }
  render() {
    // const size ={
    //   width: document.querySelector('#Home').clientWidth,
    // }
    return (
    
      <div id="main" className="container-fluid stars"  >
      
   
        <Heading />

        <About width={this.state.width} />
        <SkillsHeader />
        <Skills />
        <SkillsCodeMobile />
        <Experience />

        <Foot />
        <Navi />
      </div>
    );
  }
}

export default App;
