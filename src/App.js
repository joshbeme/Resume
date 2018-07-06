import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navi from './NavBar.js';
import Experience from './Experience.js';
// import Heading from './Head.js'
import heading from './assets/Head.jpg';
import About from './About.js';
import Skills from './Skills.js';
import Foot from './Footer.js';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid" >
      {/* <Heading/> */}
      <div id="img"  className="row-md mx-0" >
        <img id="img" className="img-fluid w-100" alt="" src={heading} />
      </div>  
        <Navi />
      <div id="Home" className="row text-white text-center mx-0">
        <h2 className="col display-3 pt-5 ">Welcome to my Resume</h2>
      </div>
      <div className="row text-white text-center mx-0" >
        <h2 className="col pb-5">By Joshua Owens</h2>
      </div>
      {/* </heading */}

        <About/>
        <div id="Skills" className="row-md mx-0 text-white text-center">
          <h1 className="col display-3" >Skills</h1>
        </div>
        <Skills/>
        <Experience />
        <Foot/>
      
    
      
      </div>
    );
  }
}

export default App;
