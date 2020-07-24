import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import './App.scss';

const p1images = {image1: require("./images/feed1.png"),
                  image2: require("./images/feed2.png"),
                  image3: require("./images/schedule1.png"),
                  image4: require("./images/schedule2.png"),
                  image5: require("./images/teams1.png"),
                  image6: require("./images/teams2.png"),
                  image7: require("./images/teams3.png"),
                  image8: require("./images/login1.png"),
                  image9: require("./images/register1.png"),
                  image10: require("./images/profile1.png"),
                  image11: require("./images/feed1.png")}

const p2images = {image1: require("./images/earlygame1.png"),
                  image2: require("./images/earlygame2.png"),
                  image3: require("./images/earlygame3.png")}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      p1imagesCount: 1,
      p2imagesCount: 1,
      fadein1: true,
      fadein2: true
    }
  }

  changeImagesEsportsHub(direction) {
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

  changeImagesPaperClicker(direction) {
    if (direction === 'down') {
      if (this.state.p2imagesCount + 1 < Object.keys(p2images).length)
        this.setState({p2imagesCount: this.state.p2imagesCount+1, fadein2: true})
      else
      this.setState({p2imagesCount: 1, fadein2: true})
    } else if (direction === 'up') {
      if (this.state.p2imagesCount > 1)
        this.setState({p2imagesCount: this.state.p2imagesCount-1, fadein2: true})
      else
        this.setState({p2imagesCount: Object.keys(p2images).length-1, fadein2: true})
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
              <span onClick={() => this.changeImagesEsportsHub('up')} className='center chevron up'></span>
              <img alt='Examplar Esports Hub 1' className='portfolio-1-images' src={p1images["image"+this.state.p1imagesCount]}></img>
              <img alt='Examplar Esports Hub 2' className='portfolio-1-images' src={p1images["image"+(this.state.p1imagesCount+1)]}></img>
              <span onClick={() => this.changeImagesEsportsHub('down')} className='center chevron down'></span>
            </div>
          </Zoom>
        </div>
        <div className="paperclicker">
          <div className='portfolio-2-text'>
            <Zoom right cascade>
              <div className='portfolio-2-title'>PAPERCLICKER</div>
              <div className='portfolio-2-sub'>A clicker game inspired by Universal Paperclips</div>
              <div className='portfolio-2-tert'>REACT - REDUX - ES6 </div>
            </Zoom>
          </div>
          <Zoom right cascade>
            <div onAnimationEnd={() => this.setState({fadein2: false})} className={this.state.fadein2 ? 'portfolio-2-images-div fade-in' : 'portfolio-2-images-div' }>
              <span onClick={() => this.changeImagesPaperClicker('up')} className='center chevron up'></span>
              <img alt='Examplar Paper Clicker 1' className='portfolio-1-images' src={p2images["image"+this.state.p2imagesCount]}></img>
              <img alt='Examplar Paper Clicker 2' className='portfolio-1-images' src={p2images["image"+(this.state.p2imagesCount+1)]}></img>
              <span onClick={() => this.changeImagesPaperClicker('down')} className='center chevron down'></span>
            </div>
          </Zoom>
        </div>
        <div className='otherProjects'>
          <div className='portfolio-3-title'> OTHER PROJECTS & EXPERIENCE </div>
        </div>
        <div className='about'>
          <div className='about-title'> ABOUT ME </div>
        </div>
      </div>

    );
  }
}

export default App;
