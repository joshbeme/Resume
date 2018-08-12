import React, { Component } from 'react';
import Treehouse from './assets/Treehouse.png';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SkillsCode from './SkillsCode';
import OnVisible from 'react-on-visible';
import Code from './assets/Code.png'
import SkillsTreeMotion from './SkillsTreeMotion';
import SkillsTreeColl from './SkillsTreeColl';
import SkillsTree from './SkillsTree';
import ScrollAnimation from 'react-animate-on-scroll';





class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      open2: false,
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
      this.setState({ open: !this.state.open })
    }
    else {this.setState({ open: !this.state.open })}
    

  };

  handleTree (cool){
    cool ? this.setState({ open2: !this.state.open2 }) : this.setState({ open2: !this.state.open2 })
    

  };
  handleScroll(){
    if (!this.state.open){
      this.handleTouchStart
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
      <div  className='row-md my-0 mx-0 '>

          {/* <button
          className='btn'
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}
        >
          button
        </button>   */}

        {/* <div  className='row mx-0' >
          <UnmountClosed
          
            className='col-5 mx-0 border-0'
            isOpened={this.state.colla}
            style={{backgroundColor:'#ffffff', display: '' }}
            id='skillsCode'
          >
            <div className='mx-0'>
              Random content gfdgdfgfdgfdgfg gfdgfdgggggggggggggggggggggg
              gggggggggggbfdgfdgdfgdfgfd
            </div>
          </UnmountClosed>


          <div  className='col mx-0 ' style={{backgroundColor:'#ffffff', display:''}}>
            <Motion
            
            id='skillsCodeImg'
              className='col-xl border-0 '
              style={{ x: spring(this.state.open ? codeAca() : 0) }}
            >
              {({ x }) => (
                // children is a callback which should accept the current value of
                // `style`

                <img
                  id='skills1'
                  className=' img-fluid '
                  style={{
                    WebkitTransform: `translate3d(${x}px, 0, 0)`,
                    transform: `translate3d(${x}px, 0, 0)`,
                    display: ''
                  }}
                  src={Code}
                  href='UniqueElementIdentifier'
                />
              )}
            </Motion>
            
        <OnVisible onChange={this.handleTouchStart}/> 
          </div>
         
        </div> */}

<SkillsCode open={this.state.open} visible={this.handleCode} />


        {/* <div
          className='row  d-flex justify-content-end mx-0'
          style={{ backgroundColor: '	#63D081' }}
        >
          {' '}
          <img alt='' id='skills2' className='img-fluid ' src={Treehouse} />{' '}
        </div> */}
<SkillsTree open={this.state.open2} visible={this.handleTree} />
      </div>
    );
  }
}
// ReactDOM
// .findDOMNode(this.refs['UniqueElementIdentifier'])
// .getBoundingClientRect();

export default Skills;
