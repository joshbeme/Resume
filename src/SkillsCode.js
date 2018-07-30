import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

let SkillsCode = props => {
  return (
    <div className="row mx-0">
      <UnmountClosed
        className="col-5 mx-0 border-0"
        isOpened={this.state.colla}
        style={{ backgroundColor: "#ffffff", display: "" }}
        id="skillsCode"
      >
        <div className="mx-0">
          Random content gfdgdfgfdgfdgfg gfdgfdgggggggggggggggggggggg
          gggggggggggbfdgfdgdfgdfgfd
        </div>
      </UnmountClosed>

      <div
        className="col mx-0 "
        style={{ backgroundColor: "#ffffff", display: "" }}
      >
        <Motion
          id="skillsCodeImg"
          className="col-xl border-0 "
          style={{ x: spring(this.state.open ? props.xPos : 0) }}
        >
          {({ x }) => (
            // children is a callback which should accept the current value of
            // `style`

            <img
              id="skills1"
              className=" img-fluid "
              style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
                display: ""
              }}
              src={Code}
              href="UniqueElementIdentifier"
            />
          )}
        </Motion>
        
      </div>
    </div>
  );
};
export default SkillsCode;
