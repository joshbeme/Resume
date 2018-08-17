import React, {Component} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import git from "./assets/github.png";

class Foot extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 'foot',
    }
    this.handleMobile = this.handleMobile.bind(this);
    this.handleComputer = this.handleComputer.bind(this);
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
    console.log('FM')
    this.setState({
      id: 'footMobile'
    });
  }
  handleComputer(){
    console.log('F')
    this.setState({
      id: 'foot'
    });
  }
  render(){
  return (
    <div id={this.state.id} className="row-md mx-0  text-white" stle={{backgroundColor:'#ffffff'}}>
      <p className="mt-0 ">v0.17</p>
      <div className="col text-white col-md py-4 my-4 mx-0">
      <div className="row  justify-content-center mx-0 pt-4" >
        <a className="text-white " href="https://test-game-demo.herokuapp.com/">
          Game Demo
        </a>
        </div>
        <div className="container px-5" >
        <hr/>
        </div>
        <div className="row  justify-content-center mx-0 pt-4" >
          <a href="https://github.com/joshbeme">
            <img alt="" src={git} id="git" className="" />
          </a>
        </div>
        <div className="container" >
        <hr/>
        </div>
        <div className="row  justify-content-center mx-0 pt-4" >
          <p >
            Email @ JoshmOwens70@gmail.com
          </p>
        </div>
      </div>
    </div>
  );}
};

export default Foot;
