import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Code from './assets/Code.png';
import Treehouse from './assets/Treehouse.png'



const Skills = () =>{
    return(
<div id="carouselExampleFade" class="carousel slide carousel-fade h-75 mx-5 text-white" data-ride="carousel">
<div  >
    <h1 id="Skills" class="display-3 text-center pt-5">Skills</h1>
    </div>
  <div class="carousel-inner">
    <div class="carousel-item ">
      <img class="d-block w-75 mx-auto" src={Code} alt="First slide"/>
    </div>
    <div class="carousel-item ">
      <img class="d-block w-75 mx-auto" src={Treehouse} alt="Second slide"/>
    </div>
    <div class="carousel-item ">
      <img class="d-block w-100" src="" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    );
    
};

export default Skills;