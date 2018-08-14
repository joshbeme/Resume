import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import encore from "./assets/Encore.png";
import target from "./assets/target.png";
import lyft from "./assets/lyft.jpg";
import "./index.css";

const Experience = () => {
  return (
    <div
      className="row-md pt-4 twinkling justify-content-center d-flex align-items-stretch"
      id="Experience"
    >
      <div className="container rounded px-4 shadow" style={{ backgroundColor: "#4C656F" }}>
        {/* <div className="row-md mx-0">
        <h1 className="col-md display-3 d-auto text-center text-white">
          Experience
        </h1>
      </div> */}

        {/*
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
          <img className="img-fluid" src={lyft} alt="" />
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
        </div> */}
          <div className="row justify-content-center mx-0" ><h1 className="text-center" >Experience</h1></div>


        <div className="row py-5 mx-0">
          <div class="col">
            <h5 class="mt-0">Encore</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
            <p id="text" className="">
              <small className="text-white">8/25/2015 – 9/4/2016</small>
            </p>
          </div>
          
          <div class="col-2">
            <img
              id="expImg"
              class="pr-2 img-fluid "
              src={encore}
              alt="Generic placeholder image"
            />
          </div>
        </div>

        <div className="row py-5 mx-0">
          <div class="col">
            <h5 class="mt-0">Target</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
            <p id="text" className="">
              <small className="text-white">8/25/2015 – 9/4/2016</small>
            </p>
          </div>
          <div class="col-2">
            <img
              id="expImg"
              class="pr-2 img-fluid "
              src={target}
              alt="Generic placeholder image"
            />
          </div>
        </div>
        <div className="row py-5 mx-0">
          <div class="col">
            <h5 class="mt-0">Lyft</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
            
            <p id="text" className="">
              <small className="text-white">1/10/2018 - Now</small>
            </p>
          </div>
          <div class="col-2">
            <img
              id="expImg"
              class="pr-2 img-fluid "
              src={lyft}
              alt="Generic placeholder image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
