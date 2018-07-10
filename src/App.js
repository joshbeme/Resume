import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
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
  constructor(props){
    super(props);
    this.state = {
      collapse: true,
      dis: 'none',
      collapseAll: true,
    }
    this.h1Move = this.h1Move.bind(this),
    this.hAllMove = this.hAllMove.bind(this)
}
h1Move(){
  
  this.setState({
    collapse: false,
    dis: "default"
  })
}
hAllMove(){
  
  this.setState({
    collapseAll: false,
  
  })
}
componentWillMount(){
  setTimeout(2000)
}
componentDidMount(){
setTimeout(this.h1Move, 1000);
setTimeout(this.hAllMove, 1600);

  console.log(this.state.collapse)
}
  render() {
    return (
      <div className="container-fluid" >
     
      {/* <Heading/> */}<Collapse isOpened={this.state.collapse}>
      <div id="Home" className="row text-white text-center mx-0">
        <h2 className="col display-3 pt-5 ">Welcome to my Resume</h2>
      </div></Collapse> <Collapse isOpened={this.state.collapseAll}>
      <div className="row text-white text-center mx-0" >
        <h2 className="col">By Joshua Owens</h2>
      </div></Collapse>
      
      <div id="img"  className="row-md mx-0" >
        <img id="img" className="img-fluid w-100" alt="" src={heading} />
      </div>  
       

      {/* </heading */}

      <div className="row bg-transparent fixed-top mx-0 " >
      <div className="col-sm-2 btn-group-vertical bg-transparent mx-0 btn-sm">
        <a role="button" href="#Home" className="btn btn-dark bg-transparent border-0 ">Home</a>
        <a role="button" href="#About" className="btn btn-dark bg-transparent border-0 ">About</a>
        <a role="button" href="#Skills" className="btn btn-dark bg-transparent border-0 ">Skills</a>
        <a role="button" href="#Experience" className="btn btn-dark bg-transparent border-0 ">Experience</a>
        </div>
      </div>
      {/* <Navi /> */}
      
        <About/>
        {/* <div id="Skills" className="row-md mx-0 text-white text-center">
          <h1 className="col display-3" >Skills</h1>
        </div> */}<div className="row mx-0 text-white text-center " style={{backgroundColor:""}}>
        <h1 id="Skills" className="col display-3 "  >Skills </h1>
        </div>
        <Skills/>
        <Experience />
        <Foot/>
      
    
      
      </div>
    );
  }
}

export default App;
