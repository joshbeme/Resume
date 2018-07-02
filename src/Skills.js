import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Code from './assets/Code.png';
import Treehouse from './assets/Treehouse.png'



const Skills = () =>{
    return(
<div id="carouselExampleFade" className="carousel slide carousel-fade h-75 mx-5 text-white" data-ride="carousel">
<div  >
    <h1 id="Skills" className="display-3 text-center pt-5">Skills</h1>
    </div>
  <div className="carousel-inner">
    <div className="carousel-item ">
      <img className="d-block w-75 mx-auto" src={Code} alt="First slide"/>
    </div>
    <div className="carousel-item ">
      <img className="d-block w-75 mx-auto" src={Treehouse} alt="Second slide"/>
    </div>
    <div className="carousel-item ">
      <img className="d-block w-100" src="" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    );
    
};

export default Skills;