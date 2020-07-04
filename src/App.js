import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Reveal from 'react-reveal/Reveal'
import './App.scss';

const p1images = {image1: require("./images/feed1.png"),
                  image2: require("./images/feed2.png"),
                  image3: require("./images/login1.png"),
                  image4: require("./images/profile1.png"),
                  image5: require("./images/register1.png"),
                  image6: require("./images/schedule1.png"),
                  image7: require("./images/schedule2.png"),
                  image8: require("./images/teams1.png"),
                  image9: require("./images/teams2.png"),
                  image10: require("./images/teams3.png")}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      p1imagesCount: 1,
      fadein1: true
    }
  }

  changeImages(direction) {
    if (direction === 'down') {
      if (this.state.p1imagesCount + 1 < Object.keys(p1images).length)
        this.setState({p1imagesCount: this.state.p1imagesCount+1, fadein1: true})
      else
      this.setState({p1imagesCount: 1, fadein1: true})
    } else if (direction === 'up') {
      if (this.state.p1imagesCount > 1)
        this.setState({p1imagesCount: this.state.p1imagesCount-1, fadein1: true})
      else
        this.setState({p1imagesCount: Object.keys(p1images).length-1, fadein1: true})
    }
  }

  render() {
    return (
      <div className='everything'>
        <div className="stefancooper">
          <p className="title"> S T E F A N <br/> C O O P E R </p>
        </div>
        <div className="esportshub">
          <div className='portfolio-1-text'>
            <Zoom left cascade>
              <div className='portfolio-1-title'>ESPORTS HUB </div>
              <div className='portfolio-1-sub'>A website hub for everything university esports</div>
              <div className='portfolio-1-tert'>REACT - EXPRESS - CLOUDANT - REDUX - ES6 </div>
            </Zoom>
          </div>
          <Zoom left cascade>
            <div onAnimationEnd={() => this.setState({fadein1: false})} className={this.state.fadein1 ? 'portfolio-1-images-div fade-in' : 'portfolio-1-images-div' }>
              <span onClick={() => this.changeImages('up')} className='center chevron up'></span>
              <img className='portfolio-1-images' src={p1images["image"+this.state.p1imagesCount]}></img>
              <img className='portfolio-1-images' src={p1images["image"+(this.state.p1imagesCount+1)]}></img>
              <span onClick={() => this.changeImages('down')} className='center chevron down'></span>
            </div>
          </Zoom>
        </div>
        <div className="paperclicker">
          <Zoom right cascade>
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
