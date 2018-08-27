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
      id: "headHead"
    };
    this.h1Move = this.h1Move.bind(this);
    this.hAllMove = this.hAllMove.bind(this);
    this.handleMobile = this.handleMobile.bind(this);
    this.handleComputer = this.handleComputer.bind(this);
    this.resizeHandling = this.resizeHandling.bind(this);
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
  handleMobile() {
    this.setState({
      id: "headHeadMobile"
    });
  }
  handleComputer() {
    this.setState({
      id: "headHead"
    });
  }
  resizeHandling ()  {
  
      let DeskOrMob = null;
      if (window.innerWidth < 751) {
        this.handleMobile();
        return DeskOrMob
      } else {
        this.handleComputer();
        
      }
      
    
  }

  componentDidMount() {
    setTimeout(this.h1Move, 1000);
    setTimeout(this.hAllMove, 1600);

   

    if (window.innerWidth < 751) {
      this.handleMobile();
    } else {
      this.handleComputer();
    }
  }

  // window.onresize(()=> { let width = document.querySelector('#Skills').clientWidth;
  // if (width < 751){
  //   this.handleMobile
  // }
  // else{
  //   this.handleComputer
  // }});

  componentWillReceiveProps(nextProps) {
    if (window.innerWidth < 751) {
      this.handleMobile();
    } else {
      this.handleComputer();
    }
  }

  render() {
    window.onresize = this.resizeHandling;

    return (
      <div className="bg-transparent pt-0 px-0 mx-0">
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
