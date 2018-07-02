import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Foot = () =>{
    return(
<div className="container mx-0 px-0">
    <div className="row  pt-5 text-left">
    <hr/>
    <div className="col">
    <a type="button" className="btn btn-link" href="https://test-game-demo.herokuapp.com/" >Check out the progress I've made on my game!</a>
    </div>
    </div>
</div>    
    );
    
};

export default Foot;