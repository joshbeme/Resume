import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import git from "./assets/github.png";

const Foot = () => {
  return (
    <div id="foot" className="row mx-0  text-white">
      <p className="mt-0 ">v0.15</p>
      <div className="d-flex  text-white col py-4 my-4 ">
        <a className="text-white " href="https://test-game-demo.herokuapp.com/">
          Game Demo
        </a>

        <a href="https://github.com/joshbeme">
          <img src={git} id="git" className="" />
        </a>
      </div>
    </div>
  );
};

export default Foot;
