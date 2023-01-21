import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styling/portfolios.scss";
import { Heading, Tag } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
  links.forEach((link, index) => {
    linkBuilder.push(
      <a key={index} target="_blank" rel="noopener noreferrer" href={link.url}>
        <FontAwesomeIcon className="portfolio__links__image" icon={link.icon} />
      </a>
    );
  });
  return linkBuilder;
};

const bigPortfolio = ({ title, subtext, skills, links, rtl = false, additionalClassnames }) => {
  return (
    <div className={classNames(`portfolio ${additionalClassnames}`, { rtl: rtl })}>
      <div className="portfolio__title">{title}</div>
      <div className="portfolio__subtext">{subtext}</div>
      {skills && <div className="portfolio__tert">{buildSkills(skills)}</div>}
      {links && <div className="portfolio__links">{buildLinks(links)}</div>}
    </div>
  );
};

export const SmallPortfolio = ({ image, tags, role, index }) => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key={index}>
      <div className="experience__images">
        <img
          alt="Experience Logo"
          className="experience__image"
          src={require(`../images/${image}`)}
        />
      </div>
      <div className="experience__text">
        <div className={"experience__front"}>
          <Heading size="lg">{role}</Heading>
          <div>
            {tags.map((tag) => {
              return <Tag key={tag} size={"sm"} className="experience__tag">{`#${tag}`}</Tag>;
            })}
          </div>
        </div>
      </div>
    </motion.button>
  );
};

export const esportshub = () => {
  return bigPortfolio({
    title: "ESPORTS HUB",
    subtext: "A website hub for everything university esports",
    skills: ["reactjs", "expressjs", "cloud databases"],
    links: [
      { url: "https://github.com/stefan-cooper/esportshub", icon: faGithub },
      // { url: "https://hub.stefancooper.com", icon: faLink }, // currently not being hosted
    ],
    additionalClassnames: "esportshub-title",
  });
};

export const paperclicker = () => {
  return bigPortfolio({
    title: "PAPERCLICKER",
    subtext: "A clicker game inspired by Universal Paperclips",
    skills: ["reactjs", "redux"],
    links: [
      { url: "https://github.com/stefan-cooper/paper-clicker", icon: faGithub },
      { url: "http://paperclicker.com", icon: faLink },
    ],
    rtl: true,
    additionalClassnames: "paperclicker-title",
  });
};
