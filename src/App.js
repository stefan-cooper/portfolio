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
            <div className='portfolio-1-title'> ESPORTS HUB </div>
            <div className='portfolio-1-sub'>A website hub for everything university esports</div>
          </Zoom>
        </div>
        <div className="paperclicker">
          <Zoom>
            <div className='portfolio-2-title'> PAPER CLICKER </div>
            <div className='portfolio-2-sub'>A clicker game inspired by Universal Paperclips</div>
          </Zoom>
        </div>
      </div>

    );
  }
}

export default App;
