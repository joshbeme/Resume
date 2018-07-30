import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import cerritos from "./assets/Cerritos.jpg";

const About = () => {
  return (
    <div
      id="About"
      style={{ backgroundColor: "#4b494c" }}
      className="row-md justify-content-center mx-0 text-white py-4 align-bottom"
    >
      <div className="container row justify-content-between mx-0">
        <div className="col-md-5 pr-4 ">
          <h1 className="display-4 text-center ">About me</h1>

          <span className="lead h-4">
       
              I am a very ambitious up and coming programmer looking to advance
              my skills in web development. My goal is to become a full-stack
              JavaScript developer with an expansive understandings of multiple
              languages. I am curently attending Cerritos Community college in Norwalk.
            
          </span>
        </div>
        <div className="col-md-6 justify-content-between rounded">
          <img className="img-fluid " src={cerritos} />
        </div>
      </div>
    </div>
  );
};

export default About;
