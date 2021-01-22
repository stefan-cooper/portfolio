import React, { useState } from 'react';
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

const App = () => {

  const [p1ImagesCount, updateP1ImagesCount] = useState(1)
  const [p2ImagesCount, updateP2ImagesCount] = useState(1)
  const [p3Count, updateP3Count] = useState(1)
  const [fadein1, updateFadeIn1] = useState(true)
  const [fadein2, updateFadeIn2] = useState(true)
  const [slidein1, updateSlideIn1] = useState(true)

  const changeImagesEsportsHub = (direction) => {
    if (direction === 'down') {
      if (p1ImagesCount + 1 < Object.keys(p1images).length) updateP1ImagesCount(p1ImagesCount+1)
      else updateP1ImagesCount(1)
      updateFadeIn1(true)
    } else if (direction === 'up') {
      if (p1ImagesCount > 1) updateP1ImagesCount(p1ImagesCount-1)
      else updateP1ImagesCount(Object.keys(p1images).length-1)
      updateFadeIn1(true)
    }
  }

  const changeImagesPaperClicker = (direction) => {
    if (direction === 'down') {
      if (p2ImagesCount + 1 < Object.keys(p2images).length) updateP2ImagesCount(p2ImagesCount+1)
      else updateP2ImagesCount(1)
      updateFadeIn2(true)
    } else if (direction === 'up') {
      if (p2ImagesCount > 1) updateP2ImagesCount(p2ImagesCount-1)
      else updateP2ImagesCount(Object.keys(p2images).length-1)
      updateFadeIn2(true)
    }
  }

  const changePortfolio = (direction) => {
    if (direction === 'right') {
      if (p3Count - 1 === 0) updateP3Count(4)
      else updateP3Count(p3Count - 1)
      updateSlideIn1(true)
    } else if (direction === 'left') {
      if (p3Count + 1 > Object.keys(extraportfolios).length) updateP3Count(1)
      else updateP3Count(p3Count + 1)
      updateSlideIn1(true)
    }
  }

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
          <div onAnimationEnd={() => updateFadeIn1(false)} className={fadein1 ? 'portfolio-1-images-div fade-in' : 'portfolio-1-images-div' }>
            <span onClick={() => changeImagesEsportsHub('up')} className='center chevron up'></span>
            <img alt='Examplar Esports Hub 1' className='portfolio-1-images' src={p1images['image'+p1ImagesCount]}></img>
            <img alt='Examplar Esports Hub 2' className='portfolio-1-images' src={p1images['image'+(p1ImagesCount+1)]}></img>
            <span onClick={() => changeImagesEsportsHub('down')} className='center chevron down'></span>
          </div>
        </Zoom>
      </div>
      <div className='paperclicker'>
        <Zoom right cascade>
          {paperclicker()}
        </Zoom>
        <Zoom right cascade>
          <div onAnimationEnd={() => updateFadeIn2(false)} className={fadein2 ? 'portfolio-2-images-div fade-in' : 'portfolio-2-images-div' }>
            <span onClick={() => changeImagesPaperClicker('up')} className='center chevron up'></span>
            <img alt='Examplar Paper Clicker 1' className='portfolio-1-images' src={p2images['image'+p2ImagesCount]}></img>
            <img alt='Examplar Paper Clicker 2' className='portfolio-1-images' src={p2images['image'+(p2ImagesCount+1)]}></img>
            <span onClick={() => changeImagesPaperClicker('down')} className='center chevron down'></span>
          </div>
        </Zoom>
      </div>
      <div className='otherProjects'>
        <div className='otherProjects-title'> OTHER PROJECTS & EXPERIENCE </div>
        <div onAnimationEnd={() => updateSlideIn1(false)} className={slidein1 ? 'otherProjects-collection fade-in' : 'otherProjects-collection'}>
          <span onClick={() => changePortfolio('left')} className='center chevron left'></span>
          {extraportfolios['portfolio'+p3Count]}
          {p3Count + 1 > Object.keys(extraportfolios).length ? extraportfolios['portfolio1'] : extraportfolios['portfolio'+(p3Count+1)]}
          {p3Count + 2 > Object.keys(extraportfolios).length ? extraportfolios['portfolio'+(p3Count + 2 - Object.keys(extraportfolios).length)] : extraportfolios['portfolio'+(p3Count+2)]}
          <span onClick={() => changePortfolio('right')} className='center chevron right'></span>
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

export default App;
