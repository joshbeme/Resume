import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import heading from "./assets/Head.jpg";

const Heading = () => {
  return (
    <div class="jumbotron jumbotron-fluid bg-transparent pt-0 px-0 mx-0">
        <Collapse isOpened={this.state.collapse}>
          <div id="Home" className="row text-white text-center mx-0">
            <h2 className="col display-3 pt-5 ">Welcome to my Resume</h2>
          </div>
        </Collapse>{" "}
        <Collapse isOpened={this.state.collapseAll}>
          <div className="row text-white text-center mx-0">
            <h2 className="col">By Joshua Owens</h2>
          </div>
        </Collapse>
        <div id="headImg" className=" mx-0">
          <img id="img1" className="img-fluid w-100" alt="" src={heading} />
        </div>
    </div>
  );
};

export default Heading;
