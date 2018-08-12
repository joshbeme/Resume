import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



let SkillsCodeMobile = () => {
    let height = () => {return  document.querySelector('#skillsCode').clientHeight};
  return (
    <div className='row mx-0' id='codeMobile'  style={{height: {height}, backgroundColor:'#ffffff'  }}  >

    </div>

  );
};
export default SkillsCodeMobile;
