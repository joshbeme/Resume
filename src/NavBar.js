import React, { Component } from "react";
import NavHome from './NavHome.js';
import NavAbout from './NavAbout.js';
import NavSkills from './NavSkills.js'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavExperience from "./NavExperience.js";


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
    let on = "bg-darker shadow";
    return on;
  }
  off() {
    let off = "bg-transparent";
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
    const ele = document.getElementById('About');
    const bound = ele.getBoundingClientRect();
    console.log(bound.top)

  }

  render() {

  
    return (
      <div className="row bg-transparent fixed-top mx-0 pl-4  ">
        <div className="col-1  btn-group-vertical bg-transparent pt-5 mx-0 btn-sm " id="nav">

          <NavHome display={this.state.nav.home} onScroll={this.home} onClick={this.home} />
          <NavAbout display={this.state.nav.about} onClick={this.about} />
          <NavSkills display={this.state.nav.skills} onClick={this.skills} />
          <NavExperience display={this.state.nav.experience} onClick={this.experience} />
          
        </div>
      </div>
    );
  }
}

export default Navi;
