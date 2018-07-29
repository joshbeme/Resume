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

class App extends Component {
  render() {
    return (
      <div id="main" className="container-fluid">
        <Heading />

        <Navi />

        <About />

        <SkillsHeader />
        <Skills />

        <Experience />

        <Foot />
      </div>
    );
  }
}

export default App;
