import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Code from './assets/Code.png';
import Treehouse from './assets/Treehouse.png';
import cerritos from './assets/Cerritos.jpg'
import './index.css';



class Skills extends Component {
  constructor(props){
    super(props)
    this.state = {
      carouselVisible: 'cerritos',
      code: this.activeCarousel,
      tree: this.disableCarousel,
      cerritos: this.disableCarousel,
  }
  }
  activeCarousel = "carousel-item active"
  disableCarousel = "carousel-item"
  
  HandleCarousel(){
    if(this.state.cerritos === this.disableCarousel){
      this.setState({
        code: this.activeCarousel,
        tree: this.disableCarousel,
        cerritos: this.disableCarousel,
      })
    }
  }

  render(){
    return(
<div id="carouselExampleFade" className="row mx-0 carousel slide carousel-fade" data-ride="carousel">
<div className="col-xl">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-75 mx-auto " src={Code} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-75" src={Treehouse} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-75" src={cerritos} alt="Third slide"/>
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
</div>
    );}
    
};

export default Skills;