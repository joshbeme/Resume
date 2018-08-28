import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import ScrollAnimation from "react-animate-on-scroll";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

class Foot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "foot"
    };
    this.handleMobile = this.handleMobile.bind(this);
    this.handleComputer = this.handleComputer.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.width < 751) {
      this.handleMobile();
    } else {
      this.handleComputer();
    }
  }
  handleMobile() {
    this.setState({
      id: "footMobile"
    });
  }
  handleComputer() {
    this.setState({
      id: "foot"
    });
  }
  componentDidMount() {
    if (window.innerWidth < 751) {
      this.handleMobile();
    } else {
      this.handleComputer();
    }
  }
  render() {
    return (
      <div
        id={this.state.id}
        className="row-md mx-0  text-white"
        stle={{ backgroundColor: "#ffffff" }}
      >
              
          <ScrollAnimation animateIn="fadeInUp">
          <div className="row  mx-0 justify-content-end">
              <a className="text-white" href="https://drive.google.com/open?id=1Rddzn5EJf0yfgq0R8_OUjbIDyvOInEmK" download>Download Resume</a></div>
            </ScrollAnimation>
        <div className="col text-white col-md py-4 my-4 mx-0">
          <div className="row  justify-content-center mx-0 py-4">
            <a
              className="text-white "
              href="https://test-game-demo.herokuapp.com/"
            >
              Game Demo
            </a>

          </div>
          <div className="container px-5">
            <hr />
          </div>
          <div className="row  text-white justify-content-center mx-0 py-4">
            <a className="text-white" href="https://github.com/joshbeme">
            <FaGithub/> Github
            </a>
          </div>
          <div className="container">
            <hr />
          </div>
          <div className="row  justify-content-center mx-0 py-4">

            <p><MdEmail/> Email @ JoshmOwens70@gmail.com</p>

          </div>

        </div>
     


      </div>
    );
  }
}

export default Foot;
