import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import encore from "./assets/Encore.png";
import target from "./assets/target.png";
import lyft from "./assets/lyft.jpg";
import "./index.css";

const Experience = () => {
  return (
    <div className="row-md py-4 my-0 " id="Experience">
      <div className="row mx-0">
        <h1 className="col-md display-3 d-auto text-center text-white">
          Experience
        </h1>
      </div>
      <div className="card-deck col mx-0 ">
        <div className="card  ">
          <img className="card-img-top h-50" src={encore} alt="" />
          <div className="card-body">
            <h5 id="text" className="card-title">
              Encore
            </h5>
            <p id="text" className="card-text">
              A General contracting company where I would help build cabinets
              and redesign areas.
            </p>
            <p id="text" className="card-text">
              <small className="text-muted">8/25/2015 – 9/4/2016</small>
            </p>
          </div>
        </div>
        <div className="card" style={{ backgroundColor: "#C80F2E" }}>
          <img className="card-img-top h-50" src={target} alt="" />
          <div className="card-body">
            <h5 id="text" className="card-title">
              Target
            </h5>
            <p id="text" className="card-text">
              While working at target I was part of the flexible fulfilment
              center. I would find, package, then ship out different items from
              the store.{" "}
            </p>
            <p id="text" className="card-text">
              <small className="text-muted">11/12/2016 – 1/10/2018</small>
            </p>
          </div>
        </div>
        <div className="card" style={{ backgroundColor: "#EA0B8C" }}>
          <img className="card-img-top h-50" src={lyft} alt="" />
          <div className="card-body">
            <h5 id="text" className="card-title">
              Lyft
            </h5>
            <p id="text" className="card-text">
              Ride-sharing company that evaluated your performance based on the
              customers input.
            </p>
            <p id="text" className="card-text align-bottom">
              <small className="text-muted">1/10/2018 - Now</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
