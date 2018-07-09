import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const navi = () =>{
    return(
     
<nav  className=" navbar navbar-expand-md navbar-light  sticky-top" style={{backgroundColor:"#4b5259", opacity:0.75}} >
  <a className="navbar-brand order-1" href="">Joshua O</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="col collapse navbar-collapse " style={{backgroundColor:"#4b5259"}} id="navbarNavAltMarkup">
    <div className="navbar-nav  "  style={{backgroundColor:"#4b5259"}}>
      <a className="nav-item nav-link text-light" href="#Home">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link text-light" href="#About">About</a>
      <a className="nav-item nav-link text-light" href="#Skills">Skills</a>
      <a className="nav-item nav-link text-light" href="#Experience">Experience</a>
    </div>
  </div>
</nav>

    );
    
};

export default navi;