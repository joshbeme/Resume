import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import git from "./assets/github.png";

const Foot = () => {
  return (
    <div id="foot" className="row-md mx-0  text-white">
      <p className="mt-0 ">v0.17</p>
      <div className="col text-white col-md py-4 my-4 mx-0">
      <div className="row  justify-content-center mx-0 py-4" >
        <a className="text-white " href="https://test-game-demo.herokuapp.com/">
          Game Demo
        </a>
        </div>
        <div className="container px-5" >
        <hr/>
        </div>
        <div className="row  justify-content-center mx-0 py-4" >
          <a href="https://github.com/joshbeme">
            <img alt="" src={git} id="git" className="" />
          </a>
        </div>
        <div className="container" >
        <hr/>
        </div>
        <div className="row  justify-content-center mx-0 py-4" >
          <p >
            Email @ JoshmOwens70@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Foot;
