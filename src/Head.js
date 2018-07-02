import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import heading from './assets/Head.jpg'


const Heading = () =>{
    return(
<div class="jumbotron jumbotron-fluid bg-transparent pt-0 px-0 mx-0">
<img className="img-responsive" src={heading} />
  <div class="container-fluid bg-transparent px-0 mx-0 d-flex">
  {/* <img className="img-responsive" src={heading} /> */}
    <h1 class="d-block display-4">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
    );
    
};

export default Heading;