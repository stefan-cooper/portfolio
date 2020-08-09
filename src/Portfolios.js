import React, { Component }  from 'react';

export const ibm = () => {
    return (
      <div className='otherProjects-ibm'>
        <img alt='IBM Logo' className='ibm' src={require('./images/ibm.png')}></img>
        <div className='otherProjects-content'><br />
          <p className='otherProjects-content-title'>Daeja ViewONE Virtual</p>
          Working as a developer here I have been a part of an agile development cycle. Developing in a variety of languages from XML to Java. Whilst working in the Daeja team I have worked on many different projects, furthering my knowledge of automated testing with technologies (Vagrant, Selenium, REST tests). As well as working in a complex and large codebase that has been maintained for a long time.<br/>
          <p className='otherProjects-content-title'>Early Professionals Hub</p>
          Whilst at IBM I worked on a giveback team of interns on the EPH (Early Professionals Hub).A web-based project written in React using a variety of web based libraries such as Redux. The site interacts with a cloud based database (IBM Cloudant) to maintain information on its users and various data tracking.
        </div>
      </div>
    )
  }
  
export const uh = () => {
    return (
      <div className='otherProjects-uh'>
        <img alt='UH Logo' className='uh' src={require('./images/uh.png')}></img>
        <div className='otherProjects-content'><br />
          <p className='otherProjects-content-title'>Computer Science (Software Engineering) (2016-2020)</p>
          I have grown a lot throughout my time at university, achieving a First Class with Honours averaging an 84% across my modules. Notable module grades include Software Engineering Practice (94%), Mobile Computing (85%) and Software Engineering Project (84%). Furthermore, I have interacted with many extra-curricular activities such as working on the Esports Society and being a voting member on the Student Council.
          <p className='otherProjects-content-title'>Projects and Experiences</p>
          At university, I was given the opportunity to work on a variety of different projects to expand my skillset. In Mobile Computing I learned all about developing on Apple products, learning Swift to make a small iOS game. In Software Engineering Practice and Object-Oriented Programming I furthered my skills and understanding of object-oriented programming in Java.
        </div>
      </div>
    )
  }
  
export const hertsgg = () => {
    return (
      <div className='otherProjects-hertsgg'>
        <img alt='hertsgg Logo' className='hertsgg' src={require('./images/hertsgg.png')}></img>
        <div className='otherProjects-content'>
          <p className='otherProjects-content-title'>Chair for Esports Society (2019-2020)</p>
          I am responsible for managing the committee and ensuring the society continues to thrive as one of the premier esports societies in the country. Including maintaining and holding talks with our associated sponsors including Overclockers UK and ASUS ROG.
          <p className='otherProjects-content-title'>Treasurer for Esports Society (2017-2019)</p>
          I am responsible for the outgoing transactions and understand the financing of the society. This role further included communicating effectively with a range of other volunteers in the society and to deal with a variety of customers who join the society.
        </div>
      </div>
    )
  }

export const discordbot = () => {
    return (
      <div className='otherProjects-hertsgg'>
        <img alt='hertsgg Logo' className='discordbot' src={require('./images/discordbot.png')}></img>
        <div className='otherProjects-content'>
          <p className='otherProjects-content-title'>Herts Esports Society Discord Bot</p>
          This bot is written in Node.js implementing Discord API and is used for within the Herts Esports Society's Official Discord Server for a variety of purposes.
          Implementing Twitch API and using MongoDB as a database service, I have written this bot to be able to track stats of the twitch streamers within the society.
         <p className='otherProjects-content-title'>Additional Use Cases</p>
          The bot also has a lot of other purposes for the admin side of the society, for things such as purging specific roles, shuffling 'houses', verifying members and more. There is a list of these commands in my GitHub repository.
          This is a very adaptable that can be changed depending on the societies needs.
         </div>
      </div>
    )
  }

export const esportshub = () => {
    return (
        <div className='portfolio-1-text'>
            <div className='portfolio-1-title'>ESPORTS HUB </div>
            <div className='portfolio-1-sub'>A website hub for everything university esports</div>
            <div className='portfolio-1-tert'>REACT - EXPRESS - CLOUDANT - REDUX - ES6 </div>
            <div className='portfolio-1-links'>
            <a className='portfolio-1-links-pics' target='_blank' rel='noopener noreferrer' href={'https://github.com/3eak/esportshub-server'}><img alt='GitHub Logo' className='github' src={require('./images/github.png')}></img></a>
            <a className='portfolio-1-links-pics' target='_blank' rel='noopener noreferrer' href={'https://hub.stefancooper.com'}><img alt='Web Logo' className='github' src={require('./images/web.png')}></img></a>
            </div>
        </div>
    );
}

export const paperclicker = () => {
    return (
        <div className='portfolio-2-text'>
            <div className='portfolio-2-title'>PAPERCLICKER</div>
            <div className='portfolio-2-sub'>A clicker game inspired by Universal Paperclips</div>
            <div className='portfolio-2-tert'>REACT - REDUX - ES6 </div>
            <div className='portfolio-2-links'>
                <a className='portfolio-2-links-pics' target='_blank' rel='noopener noreferrer' href={'http://clicker.stefancooper.com'}><img alt='Web Logo' className='github' src={require('./images/web.png')}></img></a>
                <a className='portfolio-2-links-pics' target='_blank' rel='noopener noreferrer' href={'https://github.com/3eak/paper-clicker'}><img alt='GitHub Logo' className='github' src={require('./images/github.png')}></img></a>
            </div>
        </div>
    )

}