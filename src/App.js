import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import './App.scss';

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
        <div className='stefancooper'>
          <p className='title'> S T E F A N <br/> C O O P E R </p>
        </div>
        <div className='esportshub'>
          <div className='portfolio-1-text'>
            <Zoom left cascade>
              <div className='portfolio-1-title'>ESPORTS HUB </div>
              <div className='portfolio-1-sub'>A website hub for everything university esports</div>
              <div className='portfolio-1-tert'>REACT - EXPRESS - CLOUDANT - REDUX - ES6 </div>
              <a className='portfolio-1-github' target='_blank' rel='noopener noreferrer' href={'https://github.com/3eak/esportshub-server'}><img alt='GitHub Logo' className='github' src={require('./images/github.png')}></img></a>
            </Zoom>
          </div>
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
          <div className='portfolio-2-text'>
            <Zoom right cascade>
              <div className='portfolio-2-title'>PAPERCLICKER</div>
              <div className='portfolio-2-sub'>A clicker game inspired by Universal Paperclips</div>
              <div className='portfolio-2-tert'>REACT - REDUX - ES6 </div>
              <a className='portfolio-2-github' target='_blank' rel='noopener noreferrer' href={'https://github.com/3eak/paper-clicker'}><img alt='GitHub Logo' className='github' src={require('./images/github.png')}></img></a>
            </Zoom>
          </div>
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
          <div className='otherProjects-collection'>
            <div className='otherProjects-ibm'>
              <img alt='IBM Logo' className='ibm' src={require('./images/ibm.png')}></img>
              <div className='otherProjects-content'><br />
                <p className='otherProjects-content-title'>Daeja ViewONE Virtual</p>
                Working as a developer here I have been a part of an agile development cycle. Developing in a variety of languages from XML to Java. Whilst working in the Daeja team I have worked on many different projects, furthering my knowledge of automated testing with technologies (Vagrant, Selenium, REST tests). As well as working in a complex and large codebase that has been maintained for a long time.<br/>
                <p className='otherProjects-content-title'>Early Professionals Hub</p>
                Whilst at IBM I worked on a giveback team of interns on the EPH (Early Professionals Hub).A web-based project written in React using a variety of web based libraries such as Redux. The site interacts with a cloud based database (IBM Cloudant) to maintain information on its users and various data tracking.
              </div>
            </div>
            <div className='otherProjects-uh'>
              <img alt='UH Logo' className='uh' src={require('./images/uh.png')}></img>
              <div className='otherProjects-content'><br />
                <p className='otherProjects-content-title'>Computer Science (Software Engineering) (2016-2020)</p>
                I have grown a lot throughout my time at university, achieving a First Class with Honours averaging an 84% across my modules. Notable module grades include Software Engineering Practice (94%), Mobile Computing (85%) and Software Engineering Project (84%). Furthermore, I have interacted with many extra-curricular activities such as working on the Esports Society and being a voting member on the Student Council.
                <p className='otherProjects-content-title'>Projects and Experiences</p>
                At university, I was given the opportunity to work on a variety of different projects to expand my skillset. In Mobile Computing I learned all about developing on Apple products, learning Swift to make a small iOS game. In Software Engineering Practice and Object-Oriented Programming I furthered my skills and understanding of object-oriented programming in Java.
              </div>
            </div>
            <div className='otherProjects-hertsgg'>
              <img alt='hertsgg Logo' className='hertsgg' src={require('./images/hertsgg.png')}></img>
              <div className='otherProjects-content'>
                <p className='otherProjects-content-title'>Chair for Esports Society (2019-2020)</p>
                I am responsible for managing the committee and ensuring the society continues to thrive as one of the premier esports societies in the country. Including maintaining and holding talks with our associated sponsors including Overclockers UK and ASUS ROG.
                <p className='otherProjects-content-title'>Treasurer for Esports Society (2017-2019)</p>
                I am responsible for the outgoing transactions and understand the financing of the society. This role further included communicating effectively with a range of other volunteers in the society and to deal with a variety of customers who join the society.
              </div>
            </div>
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
