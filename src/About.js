import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import cerritos from "./assets/Cerritos.jpg";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageClass: `img-fluid rounded `,
      checker: true
    };
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover() {
    if (this.state.checker) {
      this.setState({
        imageClass: `img-fluid rounded  shadow-lg`,
        checker: !this.state.checker
      });
    } else {
      this.setState({
        imageClass: `img-fluid rounded `,
        checker: !this.state.checker
      });
    }
  }

  render() {
    return (
      <div
        id="About"
        style={{ backgroundColor: "#4b494c" }}
        className="row mx-0 justify-content-center text-white"
      >
        <div
          className="container justify-content-between row mx-0 shadow  pt-5"
          style={{ backgroundColor: "#627b90" }}
        >
          <div className="col-md-3 ">
            <h1 className="display-4 text-center ">About me</h1>
            <div className="row d-flex h-100 justify content center mx-0 ">
              <div className="col mx-0 pt-2">
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
            <div className="row-sm align-middle px-5 py-4">
              <span className="lead h-4">
                I am a very ambitious up and coming programmer looking to
                advance my skills in web development. My goal is to become a
                full-stack JavaScript developer with an expansive understandings
                of multiple languages. I am curently attending Cerritos
                Community college in Norwalk.The problem with this syntax is
                that a different callback is created each time the LoggingButton
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
