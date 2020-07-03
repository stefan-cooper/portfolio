import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='everything'>
        <div className="stefancooper">
          <p className="title"> S T E F A N <br/> C O O P E R </p>
        </div>
        <div className="esportshub">
          <Zoom>
            <div className='portfolio-1-text'>
              <div className='portfolio-1-title'> ESPORTS HUB </div>
              <div className='portfolio-1-sub'>A website hub for everything university esports</div>
              <div className='portfolio-1-tert'>REACT - EXPRESS - CLOUDANT - REDUX - ES6 </div>
            </div>
            <div className='portfolio-1-images-div'>
              <span className='center chevron up'></span>
              <img className='portfolio-1-images' src={require("./test.png")}></img>
              <img className='portfolio-1-images' src={require("./test.png")}></img>
              <span className='center chevron down'></span>
            </div>
          </Zoom>
        </div>
        <div className="paperclicker">
          <Zoom>
            <div className='portfolio-2-title'> PAPER CLICKER </div>
            <div className='portfolio-2-sub'>A clicker game inspired by Universal Paperclips</div>
            <div className='portfolio-2-tert'>REACT - REDUX - ES6 </div>
          </Zoom>
        </div>
      </div>

    );
  }
}

export default App;
