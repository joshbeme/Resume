import React, { Component } from "react";
import { Collapse } from "react-collapse";
import Preload from "./react-preload/lib/index.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navi from "./NavBar.js";
import Experience from "./Experience.js";
import Heading from "./Head.js";
import About from "./About.js";
import Skills from "./Skills.js";
import Foot from "./Footer.js";
import SkillsHeader from "./SkillsHeader.js";
import "./index.css";
import SkillsMobile from "./SkillsCodeMobile";
import NaviMobile from "./NavBarMobile";
import header from "./assets/Header.jpg";
import cerritos from "./assets/Cerritos.jpg";
import loader from "./assets/Ball.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // document.getElementById('main').addEventListener('scroll', ()=>{console.log('sup')});
    this.setState({
      width: window.innerWidth
    });
  }
  componentWillUnmount() {
    // document.getElementById('main').removeEventListener('scroll');
  }
  render() {
    // const size ={
    //   width: document.querySelector('#Home').clientWidth,
    // }
    const loading = (
      <div id="loader" className="container-fluid row mx-0  "
      style={{ backgroundColor: "#000000" }}>
        <div
          className="row mx-0 align-self-center w-100 justify-content-center "
          style={{ backgroundColor: "#000000" }}
        >
          <div className="row mx-0 justify-content-center">
            <img src={loader} />
          </div>
          <div className="row mx-0 justify-content-center text-white">Loading...</div>
        </div>
      </div>
    );
    const img = [header, cerritos];
    return (
      <Preload loadingIndicator={loading} images={img} autoResolveDelay={3000}>
        {
          <div id="main" className="container-fluid stars">
            <Heading width={this.state.width} />

            <About width={this.state.width} />
            <SkillsHeader />
            <Skills />
            <SkillsMobile />
            <Experience />

            <Foot width={this.state.width} />
            <Navi width={this.state.width} />
            <NaviMobile width={this.state.width} />
          </div>
        }
      </Preload>
    );
  }
}

export default App;
