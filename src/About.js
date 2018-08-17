import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import cerritos from "./assets/Cerritos.jpg";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageClass: `img-fluid rounded `,
      checker: true,
      id: 'About'
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleMobile = this.handleMobile.bind(this);
    this.handleComputer = this.handleComputer.bind(this);
  }
  handleHover() {
    
    if (this.state.checker) {
      this.setState({
        imageClass: `img-fluid rounded animated pulse shadow-lg`,
        checker: !this.state.checker
      });
    } else {
      this.setState({
        imageClass: `img-fluid rounded `,
        checker: !this.state.checker
      });
    }
  }
  handleMobile(){
    console.log('aboutmobile')
    this.setState({
      id: 'AboutMobile'
    });
  }
  handleComputer(){
    console.log('aboutmobile')
    this.setState({
      id: 'About'
    });
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps.width)
    if (nextProps.width < 751){
      this.handleMobile()
    }
    else {
     this.handleComputer()
    }
  }


  render() {
    return (
      <div
        id={this.state.id}
      
        className="row  mx-0 pt-3 bg-transparent twinkling justify-content-center text-white "
      >
 
        <div
          className="container rounded  bg-transparent justify-content-between row align-items-center mx-0 shadow pb-5 pt-5"
          style={{ backgroundColor: "#4C656F" }}
        >
          <div className="col-md-3 px-2">
            <h1 className="display-4 text-center ">About me</h1>
            <div className="row d-flex h-100  mx-0 ">
              <div className="col mx-0 pt-2 px-3">
                <img
                  onMouseEnter={this.handleHover}
                  onMouseLeave={this.handleHover}
                  className={this.state.imageClass}
                  src={cerritos}
                />
              </div>
            </div>
          </div>

          <div className="col-md px-3">
            <div className="row-sm align-middle px-1 py-4">
              <span className="lead h-4">
                I am a self taught and ambitious programmer looking to advance
                my skills in web development. My goal is to become a full-stack
                JavaScript developer with an expansive understandings of
                multiple languages. After taking my first Java course at
                Cerritos Community college in Norwalk I realized that I love
                programming and I can learn much more if I go at the pace that I
                want to. School was not The problem with this syntax is that a
                different callback is created each time the LoggingButton
                renders. In most cases, this is fine. However, if this callback
                is passed as a prop to lower components, those components might
                do an extra re-rendering. We generally recommend binding in the
                constructor or using the class fields syntax, to avoid this sort
                of performance problem.
              </span>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default About;
