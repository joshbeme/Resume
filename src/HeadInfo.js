import React, { component } from "react";
import heading from "./assets/Head.jpg";
import { Collapse } from "react-collapse";

let HeadingInfo = props => {
  return (
    <div className="row mx-0 w-100 text-white align-self-center" id="headHead">
      <div className="row mx-0 " id="img1">
        <Collapse isOpened={props.collOne}>
          <div id="Home" className="row text-white text-center mx-0 pt-4">
            <h2 className="col display-3  ">Welcome to my Resume</h2>
          </div>
        </Collapse>
        <Collapse isOpened={props.collTwo}>
          <div className="row text-white text-center mx-0">
            <h2 className="col">By Joshua Owens</h2>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default HeadingInfo;
