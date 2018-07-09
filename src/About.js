import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const About = () =>{
    return(
        <div id="About" style={{backgroundColor:"#4b494c"}} className="row justify-content-center mx-0 text-white py-4 align-bottom" >
<div  className="col-md-3 pr-4 ">
    <h1 className="display-3 text-center ">About me</h1>
</div>
<div className="col-md-8 pl-4" >
    <span className="h4 "><small>I am a very ambitious up and coming programmer looking to advance my skills in web development. My goal is to become a full-stack JavaScript developer with an expansive understandings of multiple languages. </small></span>
</div>
</div>
    );
    
};

export default About;