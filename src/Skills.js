import React, { Component } from 'react';
import Code from './assets/Code.png';
import Treehouse from './assets/Treehouse.png';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Motion, spring } from 'react-motion';
import { UnmountClosed } from 'react-collapse';
import OnVisible from 'react-on-visible';




class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      colla: false,
    };
    this.collCol = this.collCol.bind(this);
  }

  collCol() {
    this.setState({
      colla: !this.state.colla
    });
  }

  handleMouseDown = (isVisible) =>{if (isVisible) {
    this.setState({ open: !this.state.open });
    this.collCol();}
  };

  handleTouchStart = (e) => {
    return
    e.preventDefault();
    this.handleMouseDown();
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
    let codeAca = () =>
      document.getElementById('Skills').clientWidth -
      document.getElementById('skills1').clientWidth;
;
    return (
      <div  className='row-md my-0 mx-0 '>
        {/* <div
          className='row d-flex justify-content-center my-0 mx-0'
          style={{ backgroundColor: '' }}
        >

          {' '}
          <img id='skills' className='img-fluid ' src={cerritos} />{' '}
        </div> */}
        <button
          className='btn'
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}
        >
          button
        </button>

        <div  className='row mx-0' >
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
         
        </div>
        <div
          className='row d-flex justify-content-end mx-0'
          style={{ backgroundColor: '	#63D081' }}
        >
          {' '}
          <img id='skills2' className='img-fluid ' src={Treehouse} />{' '}
        </div>
      </div>
    );
  }
}
// ReactDOM
// .findDOMNode(this.refs['UniqueElementIdentifier'])
// .getBoundingClientRect();

export default Skills;
