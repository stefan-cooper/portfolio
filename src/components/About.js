import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "../styling/about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__profile">
        <img
          alt="My face!"
          className="about__profile-picture"
          src={require("../images/about.png")}
        ></img>
      </div>
      <div className="about__content">
        <div className="about__title"> ABOUT ME </div>
        <div className="about__text">
          I am a motivated, determined and confident young developer who wants to improve and work
          on interesting projects. With my experiences working at IBM I have learned a lot about
          working in a team and enhancing my skills to work on large projects. My time at the
          Esports Society has helped build confidence and develop a project from start to finish and
          to oversee a project going from nothing to one of the largest university esports societies
          within the UK. I want to keep exploring avenues which help me to expand my skillset and
          knowledge of the industry.
        </div>
        <div className="about__urls">
          <a target="_blank" rel="noopener noreferrer" href={"https://github.com/stefan-cooper"}>
            <FontAwesomeIcon className="about__urls-icon" icon={faGithub} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/3eakStefan"}>
            <FontAwesomeIcon className="about__urls-icon" icon={faTwitter} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://linkedin.com/in/stefan-cooper-491355171/"}
          >
            <FontAwesomeIcon className="about__urls-icon" icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
