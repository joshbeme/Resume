import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

let SkillsHeader = () => {
  return (
    <div className="row mx-0 justify-content-center">
      <div
        className="container row mx-0 text-white text-center "
        style={{ backgroundColor: "#627b90" }}
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
