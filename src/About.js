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
      id: "AboutMobile",
      width: null
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleMobile = this.handleMobile.bind(this);
    this.handleComputer = this.handleComputer.bind(this);
    this.width = this.width.bind(this);
    this.resizeHandling = this.resizeHandling.bind(this);
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
  handleMobile() {
    this.setState({
      id: "AboutMobile"
    });
  }
  handleComputer() {
    this.setState({
      id: "About"
    });
  }
  resizeHandling = () => {
    let DeskOrMob = null;
    if (window.innerWidth < 751) {
      DeskOrMob = this.handleMobile();
    } else {
      DeskOrMob = this.handleComputer();
    }
    return DeskOrMob;
  };
  width = x => {
    this.setState({
      width: x
    });
  };
  componentDidMount() {
    if (window.innerWidth < 751) {
      this.handleMobile();
    } else {
      this.handleComputer();
    }
  }
  componentWillReceiveProps(nextProps) {
    this.width(nextProps.width);
    if (nextProps.width < 751) {
      this.handleMobile();
    } else {
      this.handleComputer();
    }
  }

  render(props) {
    window.onresize = this.resizeHandling;

    return (
      <div
        id={this.state.id}
        className="row  mx-0 pt-3 bg-transparent twinkling justify-content-center text-white "
      >
        <div
          id="ABO"
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
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="col-md px-3">
            <div className="row-sm align-middle px-1 py-4">
              <span className="lead h-4">
                I am a self taught MERN-stack (MongoDB,
                Express.js, React.js, Node.js) programmer looking to advance my
                skills in web development. After taking my first Java course in
                college I realized that I love programming and I can learn much
                more if I go at the pace that I want to. I have been programming
                for a year and I believe that in three years I will be on the
                bleeding edge of web development.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
