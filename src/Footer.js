import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import git from './assets/github.png';

const Foot = () =>{
    return(
<div className="row mx-0 bg-dark border border-dark pt-4 rounded">
    <div className="d-flex align-items-end text-white col pt-4 text-left">
    <blockquote className="embedly-card float-bottom mr-auto"><h4><a className="text-white" href="https://test-game-demo.herokuapp.com/">Demo Game</a></h4><p></p></blockquote>
   
    <img src={git} id="git" className="float-right mh-50"/>
    </div>
    <div className="row" ></div>
</div>    
    );
    
};

export default Foot;