import React, { Component } from "react";
import HeadingInfo from "./HeadInfo.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      dis: "none",
      collapseAll: false
    };
    this.h1Move = this.h1Move.bind(this);
    this.hAllMove = this.hAllMove.bind(this);
  }
  h1Move() {
    this.setState({
      collapse: !this.state.collapse,
      dis: "default"
    });
  }
  hAllMove() {
    this.setState({
      collapseAll: !this.state.collapseAll
    });
  }

  componentDidMount() {
    setTimeout(this.h1Move, 1000);
    setTimeout(this.hAllMove, 1600);

    console.log(this.state.collapse);
  }
  render() {
    return (
      <div class="bg-transparent stars twinkling pt-0 px-0 mx-0">
      <div class="stars"></div>
<div class="twinkling"></div>
        <HeadingInfo
          collOne={this.state.collapse}
          collTwo={this.state.collapseAll}
        />
      </div>
    );
  }
}

export default Heading;
