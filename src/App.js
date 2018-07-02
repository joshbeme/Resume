import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navi from './NavBar.js';
import Experience from './Experience.js';
// import Heading from './Head.js'
import heading from './assets/Head.jpg';
import About from './About.js';
import Skills from './Skills.js';
import Foot from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="">
      {/* <Heading/> */}<div className="d-flex flex-row w-100 h-100 ">
      <img className="w-100" alt="" src={heading} />
      </div>
      <Navi />

      <div className="container-fluid">
      
      <header href="" className="">
      

      <div  >
        <div id="Home" className="bg-warning">
        </div>
        <div className="text-center order-1 text-white ">
          <h1 className="display-1 pt-5">Welcome to my Resume</h1>
          <h2 className="pb-5">By Joshua Owens</h2>
        </div>
        </div>
        <About/>
        <Skills/>
        <Experience />
      </header>
      
      </div>
      <Foot/>
      
      </div>
    );
  }
}

export default App;
