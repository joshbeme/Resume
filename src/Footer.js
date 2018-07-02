import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Foot = () =>{
    return(
<div className="container pt-5">
    <div className="row  pt-5 text-center">
    <hr/>
    <div className="col">
    <button type="button" className="btn btn-link text-center" href="https://test-game-demo.herokuapp.com/" >Check out the progress I've made on my game!</button>
    </div>
    </div>
</div>    
    );
    
};

export default Foot;