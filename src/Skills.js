import React, {Component} from 'react';
import Code from './assets/Code.png';
import Treehouse from './assets/Treehouse.png';
import cerritos from './assets/Cerritos.jpg'
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class Skills extends Component {
  constructor(props){
    super(props)
    this.state = {
      toggle: false,
      activeDeactive: "collapse show",
  }
  this.collapse= this.collapse.bind(this);
  }
  

  collapse(idGet){
    if (this.state.toggle === false){
      document.getElementById(idGet).classList.remove(this.activeDeactive);
      this.setState({
        toggle: true,
        activeDeactive:"collapse",
      });
      document.getElementById(idGet).classList.add(this.activeDeactive);
    }
    else{
      document.getElementById(idGet).classList.remove(this.activeDeactive);
      this.setState({
        toggle: false,
        activeDeactive:"collapse show",

      })
      document.getElementById(idGet).classList.add(this.activeDeactive);

    }
  

  }
  classShow = "collapse show";
  classNoShow = "collapse"
eventHandle(e){
  if (e.target.id === "1"){
    return this.collapse("1");
  
  }
  else if (e.target.id === "2"){
    return this.collapse("2");
  }
  else if (e.target.id === "3"){
    return this.collapse("3");
  }

}
 
  render(){
    return(<div id="accordion" className="row d-flex mx-0">
    <div class="card">
      <div class="card-header" id="headingOne">
        <h5 class="mb-0">
          <button id="butt" onClick={this.collapse} class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Collapsible Group Item #1
          </button>
        </h5>
      </div>
  
      <div id="1" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingTwo">
        <h5 class="mb-0">
          <button id="1" onClick={this.collapse} class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            Collapsible Group Item #2
          </button>
        </h5>
      </div>
      <div id="collapseTwo" class="collapse " aria-labelledby="headingTwo" data-parent="#accordion">
        <div class="card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingThree">
        <h5 class="mb-0">
          <button onClick={this.collapse} class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Collapsible Group Item #3
          </button>
        </h5>
      </div>
      <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
        <div class="card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
  </div>
    );}
    
};

export default Skills;