import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navi from './NavBar.js';
import Experience from './Experience.js';
// import Heading from './Head.js'
import heading from './assets/Head.jpg';
import About from './About.js';

class App extends Component {
  render() {
    return (
      <div>
      {/* <Heading/> */}
      <img className="img-fluid px-0 mx-0" src={heading} />
      <Navi />

      <div className="container">
      
      <header href="" className="d-fluid">
      

      <div  >
        <div id="Home" className="bg-warning">
        </div>
        <div className="text-center ">
          <h1 className="display-1 pt-5">Welcome to my Resume</h1>
          <h2 className="pb-5">By Joshua Owens</h2>
        </div>
        </div>
        <About/>
       
        <Experience />
        <Experience />
      
      </header>
      </div></div>
    );
  }
}

export default App;
