import React, {Component} from 'react';
import Code from './assets/Code.png';
import Treehouse from './assets/Treehouse.png';
import cerritos from './assets/Cerritos.jpg'
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class Skills extends Component {
  constructor(props){
    super(props)
    this.state = {
   
  }
 
  }
  

 
  render(){
    return(
  <div className="row-md my-0 mx-0 ">
    <div className="row d-flex justify-content-center my-0 mx-0" style={{backgroundColor: ""}}> <img  id="skills" className="img-fluid " src={cerritos} /> </div>
    <div className="row d-flex justify-content-start mx-0 " style={{backgroundColor: "#213C4D"}}> <img  id="skills1"  className="img-fluid "  src={Code} /> </div>
    <div className="row d-flex justify-content-end mx-0" style={{backgroundColor: "	#63D081"}}> <img  id="skills3" className="img-fluid "  src={Treehouse} /> </div>
    
  </div>
    );}
    
};

export default Skills;