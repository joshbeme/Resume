import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import encore from "./assets/Encore.png";
import target from "./assets/target.png";
import lyft from "./assets/lyft.png";
import "./index.css";

const Experience = () => {
  return (
    <div
      className="row-md pt-4 twinkling justify-content-center d-flex align-items-stretch"
      id="Experience"
    >
      <div
        className="container rounded px-4 shadow bg-transparent"
        style={{ backgroundColor: "#4C656F" }}
      >
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
        <div className="row justify-content-center mx-0 text-white">
          <h1 className="text-center">Experience</h1>
        </div>

        <div className="row py-5 mx-0">
          <div className="col text-white">
            <h5 className="mt-0">Encore</h5>
            Right now I am working on their website using wordpress and react to
            enhance the user experience of the design they have now. This is a
            General contracting company where I would help build cabinets and
            redesign areas but now I am their freelance web developer.
            <p id="text" className="">
              <small className="text-white">1/10/2018 - Now</small>
            </p>
          </div>

          <div className="col-2">
            <img
              id="expImg"
              className="pr-2 img-fluid "
              src={encore}
              alt=""
            />
          </div>
        </div>
        <div className="row py-5 mx-0 text-white">
          <div className="col">
            <h5 className="mt-0">Lyft</h5>A Ride-sharing company that evaluated your
            performance based on the customers input. While working for Lyft I
            was given a rating of 4.9 stars which is higher than the average due
            to my communitaction skills.
            <p id="text" className="">
              <small className="text-white">1/10/2018 - Now</small>
            </p>
          </div>
          <div className="col-2">
            <img
              id="expImg"
              className="pr-2 img-fluid "
              src={lyft}
              alt=""
            />
          </div>
        </div>
        <div className="row py-5 mx-0 text-white">
          <div className="col">
            <h5 className="mt-0">Target</h5>
            At target I was part of the flexible fulfilment center. I also would
            work as a sales floor representative because of my communication
            skills. In flexible fulfilment I would find, package, and ship items
            in a timely manner; this helped with my logistical abilities.
            <p id="text" className="">
              <small className="text-white">11/12/2016 – 1/10/2018</small>
            </p>
          </div>
          <div className="col-2">
            <img
              id="expImg"
              className="pr-2 img-fluid "
              src={target}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
