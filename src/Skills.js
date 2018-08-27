import React, { Component } from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SkillsCode from './SkillsCode';

import SkillsTree from './SkillsTree';





class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      open2: false,
      imgClass: "img-fluid "
    };
    this.handleTree = this.handleTree.bind(this);
    this.handleCode = this.handleCode.bind(this);
  }

  collCol() {
    this.setState({
      colla: !this.state.colla
    });
  }

  handleCode = (v) => {
    if (v.onScreen){
      this.setState({ open: !this.state.open,
        imgClass: "img-fluid animated bounce " })
    }
    else {this.setState({ 
      open: !this.state.open,
      imgClass: "img-fluid animated bounce "
    })}
  

  };

  handleTree (cool){
    cool ? this.setState({ open2: !this.state.open2 }) : this.setState({ open2: !this.state.open2 })
    

  };
  handleScroll(){
    if (!this.state.open){
      this.handleTouchStart()
    }
    else{
      this.handleMouseDown()
    }
  }



  componentDidMount() { 


  }
  render() {

;
    return (
      <div  className='row-md my-0 mx-0 twinkling'>



<SkillsCode className='py-4 ' classes={this.state.imgClass} open={this.state.open} visible={this.handleCode} />



<SkillsTree className='py-4 d-none' open={this.state.open2} visible={this.handleTree} />
      </div>
    );
  }
}


export default Skills;
