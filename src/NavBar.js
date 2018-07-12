import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// let isAnyPartOfElementInViewport = (Element) => {

//   const rect = Element.getBoundingClientRect();
//   // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
//   const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
//   const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

//   // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
//   const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
//   const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

//   return(vertInView && horInView );}

  

class Navi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: {
        home: this.on(),
        about: this.off(),
        skills: this.off(),
        experience: this.off()
      }
      
    };
    this.home = this.home.bind(this);
    this.skills = this.skills.bind(this)
    this.about = this.about.bind(this)
    this.experience = this.experience.bind(this)
  }
  on() {
    let on = "block";
    return on;
  }
  off() {
    let off = "none";
    return off;
  }
  home(){
this.setState({
  nav:{
    home: this.on(),
    about: this.off(),
    skills: this.off(),
    experience: this.off()
  }
})
  }
  about(){
    this.setState({
      nav:{
        home: this.off(),
        about: this.on(),
        skills: this.off(),
        experience: this.off()
      }
    })
  }
  skills(){
    this.setState({
      nav:{
        home: this.off(),
        about: this.off(),
        skills: this.on(),
        experience: this.off()
      }
    })
  }
  experience(){
    this.setState({
      nav:{
        home: this.off(),
        about: this.off(),
        skills: this.off(),
        experience: this.on()
      }
    })
  }

  componentDidMount() {
  
  }

  render() {
    let ele = document.getElementById("img");
    
   
  
    return (
      <div className="row bg-transparent fixed-top mx-0 pl-4  ">
        <div className="col-2  btn-group-vertical bg-transparent pt-5 mx-0 btn-sm ">
          <div className="row mx-0">
            <div
              className="col-1 rounded shadow "
              style={{
                backgroundColor: "#ffffff",
                display: `${this.state.nav.home}`
              }}
            />
            <a
            onScroll={this.home}
            onClick={this.home}
              id="buttonHome"
              role="button"
              href="#Home"
              className="btn col bg-transparent text-white text-left"
            >
              Home
            </a>
          </div>

          <div className="row  mx-0">
            <div
              className="col-1 shadow rounded "
              style={{
                backgroundColor: "#ffffff",
                display: `${this.state.nav.about}`
              }}
            />
            <a
            onClick={this.about}
              role="button"
              href="#About"
              className="btn  col btn-dark bg-transparent border-0 text-left scroll-down" >
              About
            </a>
          </div>

          <div className="row mx-0">
            <div
              className="col-1 shadow rounded "
              style={{
                backgroundColor: "#ffffff",
                display: `${this.state.nav.skills}`
              }}
            />
            <a
            onClick={this.skills}
              role="button"
              href="#Skills"
              className="btn  col btn-dark bg-transparent border-0 text-left"
            >
              Skills
            </a>
          </div>

          <div className="row mx-0">
            <div
              className="col-1 shadow rounded"
              style={{
                backgroundColor: "#ffffff",
                display: `${this.state.nav.experience}`
              }}
            />
            <a
            onClick={this.experience}
              role="button"
              href="#Experience"
              className="btn col btn-dark bg-transparent border-0 text-left"
            >
              Experience
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navi;
