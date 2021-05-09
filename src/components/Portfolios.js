import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styling/portfolios.scss";

const classNames = require("classnames");

const buildSkills = (skills) => {
  let skillsBuilder = "";
  if (skills) {
    skills.forEach((skill, index) => {
      skillsBuilder += skill.toUpperCase();
      if (index < skills.length - 1) {
        skillsBuilder += " - ";
      }
    });
  }
  return skillsBuilder;
};

const buildLinks = (links) => {
  let linkBuilder = [];
  links.forEach((link) => {
    linkBuilder.push(
      <a target="_blank" rel="noopener noreferrer" href={link.url}>
        <FontAwesomeIcon className="portfolio__links__image" icon={link.icon} />
      </a>
    );
  });
  return linkBuilder;
};

const bigPortfolio = ({ title, subtext, skills, links, rtl = false }) => {
  return (
    <div className={classNames("portfolio", { rtl: rtl })}>
      <div className="portfolio__title">{title}</div>
      <div className="portfolio__subtext">{subtext}</div>
      {skills && <div className="portfolio__tert">{buildSkills(skills)}</div>}
      {links && <div className="portfolio__links">{buildLinks(links)}</div>}
    </div>
  );
};

export const smallPortfolio = ({ title, subtitle, description, subdescription, image }) => {
  return (
    <div className="experience">
      <img
        alt="Experience Logo"
        className="experience__image"
        src={require(`../images/${image}`)}
      />
      <div className="experience__text">
        <br />
        <p className="experience__title">{title}</p>
        {description}
        <br />
        <p className="experience__title">{subtitle}</p>
        {subdescription}
      </div>
    </div>
  );
};

export const esportshub = () => {
  return bigPortfolio({
    title: "ESPORTS HUB",
    subtext: "A website hub for everything university esports",
    skills: ["reactjs", "expressjs", "ibm cloudant"],
    links: [
      { url: "https://github.com/stefan-cooper/esportshub-server", icon: faGithub },
      { url: "https://hub.stefancooper.com", icon: faLink },
    ],
  });
};

export const paperclicker = () => {
  return bigPortfolio({
    title: "PAPERCLICKER",
    subtext: "A clicker game inspired by Universal Paperclips",
    skills: ["reactjs", "redux"],
    links: [
      { url: "https://github.com/stefan-cooper/paper-clicker", icon: faGithub },
      { url: "http://clicker.stefancooper.com", icon: faLink },
    ],
    rtl: true,
  });
};
