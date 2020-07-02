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
            <p className='portfolio-1'> ESPORTS HUB </p>
          </Zoom>
        </div>
        <div className="App">
          <Zoom>
            <p className='portfolio-2'> PAPER CLICKER </p>
          </Zoom>
        </div>
      </div>

    );
  }
}

export default App;
