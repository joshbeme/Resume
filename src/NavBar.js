import React, { Component } from "react";
import NavHome from "./NavHome.js";
import NavAbout from "./NavAbout.js";
import NavSkills from "./NavSkills.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavExperience from "./NavExperience.js";
import "./index.css";

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
    this.skills = this.skills.bind(this);
    this.about = this.about.bind(this);
    this.experience = this.experience.bind(this);
    this.handleAboutScroll = this.handleAboutScroll.bind(this);
  }
  /* Selects navbar */ 
    on() {
      let on = "bg-darker shadow";
      return on;
    }
    off() {
      let off = "bg-transparent";
      return off;
    }
    /* moves screen*/ 
    home() {
      document.querySelector("#Home").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    about() {
      document.querySelector("#ABO").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    skills() {
      document.querySelector("#Skills").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    experience() {
      document
        .querySelector("#Experience")
        .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    /* Handles scroll */
  handleAboutScroll() {
    if (window.pageYOffset > 0 && window.pageYOffset < 200) {
      this.setState({
        nav: {
          home: this.on(),
          about: this.off(),
          skills: this.off(),
          experience: this.off()
        }
      });
    } else if (window.pageYOffset > 200 && window.pageYOffset < 820) {
      this.setState({
        nav: {
          home: this.off(),
          about: this.on(),
          skills: this.off(),
          experience: this.off()
        }
      });
    } else if (window.pageYOffset > 820 && window.pageYOffset < 1861) {
      this.setState({
        nav: {
          home: this.off(),
          about: this.off(),
          skills: this.on(),
          experience: this.off()
        }
      });
    } else if (window.pageYOffset > 1861) {
      this.setState({
        nav: {
          home: this.off(),
          about: this.off(),
          skills: this.off(),
          experience: this.on()
        }
      });
    }
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps.width);
    if (nextProps.width < 751){
      this.handleMobile()
    }
    else {
     this.handleComputer()
    };

  }
  handleMobile(){
    console.log('NM')
    this.setState({
      id: 'headHeadMobile'
    });
  }
  handleComputer(){
    console.log('N')
    this.setState({
      id: 'headHead'
    });
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleAboutScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleAboutScroll);
  }

  render() {
    return (
      <div className="row bg-transparent d-none d-md-block fixed-top mx-0 pl-4 ">
        <div
          className="col-1  btn-group-vertical bg-transparent pt-5 mx-0 btn-sm "
          id="nav"
        >
          <NavHome
            display={this.state.nav.home}
            onScroll={this.home}
            onClick={this.home}
          />
          <NavAbout display={this.state.nav.about} onClick={this.about} />
          <NavSkills display={this.state.nav.skills} onClick={this.skills} />
          <NavExperience
            display={this.state.nav.experience}
            onClick={this.experience}
          />
        </div>
      </div>
    );
  }
}

export default Navi;
