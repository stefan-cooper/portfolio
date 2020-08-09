import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import './App.scss';
import { ibm, uh, hertsgg, discordbot, esportshub, paperclicker } from './Portfolios';

const p1images = {image1: require('./images/feed1.png'),
                  image2: require('./images/feed2.png'),
                  image3: require('./images/schedule1.png'),
                  image4: require('./images/schedule2.png'),
                  image5: require('./images/teams1.png'),
                  image6: require('./images/teams2.png'),
                  image7: require('./images/teams3.png'),
                  image8: require('./images/login1.png'),
                  image9: require('./images/register1.png'),
                  image10: require('./images/profile1.png'),
                  image11: require('./images/feed1.png')}

const p2images = {image1: require('./images/earlygame1.png'),
                  image2: require('./images/earlygame2.png'),
                  image3: require('./images/earlygame3.png')}


const extraportfolios = {portfolio1: ibm(),
  portfolio2: uh(),
  portfolio3: hertsgg(),
  portfolio4: discordbot()}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      p1imagesCount: 1,
      p2imagesCount: 1,
      p3Count: 1,
      fadein1: true,
      fadein2: true,
      slidein1: true
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

  changePortfolio(direction) {
    if (direction === 'right') {
      if (this.state.p3Count - 1 === 0)
        this.setState({p3Count: 4, slidein1: true})
      else
        this.setState({p3Count: this.state.p3Count - 1, slidein1: true})
    } else if (direction === 'left') {
      if (this.state.p3Count + 1 > Object.keys(extraportfolios).length)
        this.setState({p3Count: 1, slidein1: true})
      else
        this.setState({p3Count: this.state.p3Count + 1, slidein1: true})
      }
  }

  render() {
    return (
      <div className='everything'>
        <div className='stefancooper'>
          <p className='title'> S T E F A N <br/> C O O P E R </p>
        </div>
        <div className='esportshub'>
          <Zoom left cascade>
            {esportshub()}
          </Zoom>
          <Zoom left cascade>
            <div onAnimationEnd={() => this.setState({fadein1: false})} className={this.state.fadein1 ? 'portfolio-1-images-div fade-in' : 'portfolio-1-images-div' }>
              <span onClick={() => this.changeImagesEsportsHub('up')} className='center chevron up'></span>
              <img alt='Examplar Esports Hub 1' className='portfolio-1-images' src={p1images['image'+this.state.p1imagesCount]}></img>
              <img alt='Examplar Esports Hub 2' className='portfolio-1-images' src={p1images['image'+(this.state.p1imagesCount+1)]}></img>
              <span onClick={() => this.changeImagesEsportsHub('down')} className='center chevron down'></span>
            </div>
          </Zoom>
        </div>
        <div className='paperclicker'>
          <Zoom right cascade>
            {paperclicker()}
          </Zoom>
          <Zoom right cascade>
            <div onAnimationEnd={() => this.setState({fadein2: false})} className={this.state.fadein2 ? 'portfolio-2-images-div fade-in' : 'portfolio-2-images-div' }>
              <span onClick={() => this.changeImagesPaperClicker('up')} className='center chevron up'></span>
              <img alt='Examplar Paper Clicker 1' className='portfolio-1-images' src={p2images['image'+this.state.p2imagesCount]}></img>
              <img alt='Examplar Paper Clicker 2' className='portfolio-1-images' src={p2images['image'+(this.state.p2imagesCount+1)]}></img>
              <span onClick={() => this.changeImagesPaperClicker('down')} className='center chevron down'></span>
            </div>
          </Zoom>
        </div>
        <div className='otherProjects'>
          <div className='otherProjects-title'> OTHER PROJECTS & EXPERIENCE </div>
          <div onAnimationEnd={() => this.setState({slidein1: false})} className={this.state.slidein1 ? 'otherProjects-collection fade-in' : 'otherProjects-collection'}>
            <span onClick={() => this.changePortfolio('left')} className='center chevron left'></span>
            {extraportfolios['portfolio'+this.state.p3Count]}
            {this.state.p3Count + 1 > Object.keys(extraportfolios).length ? extraportfolios['portfolio1'] : extraportfolios['portfolio'+(this.state.p3Count+1)]}
            {this.state.p3Count + 2 > Object.keys(extraportfolios).length ? extraportfolios['portfolio'+(this.state.p3Count + 2 - Object.keys(extraportfolios).length)] : extraportfolios['portfolio'+(this.state.p3Count+2)]}
            <span onClick={() => this.changePortfolio('right')} className='center chevron right'></span>
          </div>
        </div>
        <div className='about'>
          <div className='pic-content'>
            <img alt='My face!' className='pic' src={require('./images/about.png')}></img>
          </div>
          <div className='about-content'>
            <div className='about-title'> ABOUT ME </div>
            <div className='about-text'>
            I am a motivated, determined and confident young developer who wants to improve and work on interesting projects. With my experiences working at IBM I have learned a lot about working in a team and enhancing my skills to work on large projects. My time at the Esports Society has helped build confidence and develop a project from start to finish and to oversee a project going from nothing to one of the largest university esports societies within the UK. I want to keep exploring avenues which help me to expand my skillset and knowledge of the industry.
            </div>
            <div className='urls'>
              <a target='_blank' rel='noopener noreferrer' href={'https://github.com/3eak'}><img alt='GitHub Logo' className='github' src={require('./images/github.png')}></img></a>
              <a target='_blank' rel='noopener noreferrer' href={'https://twitter.com/3eakStefan'}><img alt='Twitter Logo' className='twitter' src={require('./images/twitter.png')}></img></a>
              <a target='_blank' rel='noopener noreferrer' href={'https://www.linkedin.com/in/stefan-cooper-491355171/'}><img alt='Linkedin Logo' className='twitter' src={require('./images/li.png')}></img></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
