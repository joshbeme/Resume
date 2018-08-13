import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

let SkillsHeader = () => {
  return (
    <div className="row pt-4 mx-0 justify-content-center">
      <div
        className="container rounded-top row mx-0 text-white text-center "
        style={{ backgroundColor: "#0F1A38" }}
      >
        <div className='col mx-0' >
          <h1 id="Skills" className="display-3 ">
            Skills
          </h1>
        </div>
      </div>
    </div>
  );
};
export default SkillsHeader;
