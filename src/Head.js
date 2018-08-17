import React, { Component } from "react";
import HeadingInfo from "./HeadInfo.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      dis: "none",
      collapseAll: false,
      id: null,
    };
    this.h1Move = this.h1Move.bind(this);
    this.hAllMove = this.hAllMove.bind(this);
    this.handleMobile = this.handleMobile.bind(this);
    this.handleComputer = this.handleComputer.bind(this);
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
    console.log('HM')
    this.setState({
      id: 'headHeadMobile'
    });
  }
  handleComputer(){
    console.log('H')
    this.setState({
      id: 'headHead'
    });
  }
  render() {
    return (
      <div class="bg-transparent pt-0 px-0 mx-0">

        <HeadingInfo
          collOne={this.state.collapse}
          collTwo={this.state.collapseAll}
          id={this.state.id}
        />
      </div>
    );
  }
}

export default Heading;
