import React, { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
import "./App.scss";
import { ibm, uh, hertsgg, discordbot, esportshub, paperclicker } from "./Portfolios";

const esportsHubImages = {
  image1: require("./images/feed1.png"),
  image2: require("./images/feed2.png"),
  image3: require("./images/schedule1.png"),
  image4: require("./images/schedule2.png"),
  image5: require("./images/teams1.png"),
  image6: require("./images/teams2.png"),
  image7: require("./images/teams3.png"),
  image8: require("./images/login1.png"),
  image9: require("./images/register1.png"),
  image10: require("./images/profile1.png"),
  image11: require("./images/feed1.png"),
};

const paperclickerImages = {
  image1: require("./images/earlygame1.png"),
  image2: require("./images/earlygame2.png"),
  image3: require("./images/earlygame3.png"),
};

const extraPortfolios = {
  portfolio1: ibm(),
  portfolio2: uh(),
  portfolio3: hertsgg(),
  portfolio4: discordbot(),
};

const App = () => {
  const [esportsHubImageSelection, updateEsportsHubImageSelection] = useState(1);
  const [paperclickerImageSelection, updatePaperclickerImageSelection] = useState(1);
  const [portfolioSelection, updatePortfolioSelection] = useState(1);
  const [fadein1, updateFadeIn1] = useState(true);
  const [fadein2, updateFadeIn2] = useState(true);
  const [slidein1, updateSlideIn1] = useState(true);

  useEffect(() => {
    updateFadeIn1(true);
  }, [esportsHubImageSelection]);

  useEffect(() => {
    updateFadeIn2(true);
  }, [paperclickerImageSelection]);

  useEffect(() => {
    updateSlideIn1(true);
  }, [portfolioSelection]);

  const changeImages = (updateFunction, imageSelection, images, direction) => {
    if (direction === "down") {
      if (imageSelection + 1 < Object.keys(images).length) updateFunction(imageSelection + 1);
      else updateFunction(1);
    } else if (direction === "up") {
      if (imageSelection > 1) updateFunction(imageSelection - 1);
      else updateFunction(Object.keys(images).length - 1);
    } else if (direction === "right") {
      if (imageSelection - 1 === 0) updateFunction(4);
      else updateFunction(imageSelection - 1);
    } else if (direction === "left") {
      if (imageSelection + 1 > Object.keys(images).length) updateFunction(1);
      else updateFunction(imageSelection + 1);
    }
  };

  return (
    <div className="everything">
      <div className="stefancooper">
        <p className="title">
          {" "}
          S T E F A N <br /> C O O P E R{" "}
        </p>
      </div>
      <div className="esportshub">
        <Zoom left cascade>
          {esportshub()}
        </Zoom>
        <Zoom left cascade>
          <div
            onAnimationEnd={() => updateFadeIn1(false)}
            className={fadein1 ? "portfolio-1-images-div fade-in" : "portfolio-1-images-div"}
          >
            <span
              onClick={() =>
                changeImages(
                  updateEsportsHubImageSelection,
                  esportsHubImageSelection,
                  esportsHubImages,
                  "up"
                )
              }
              className="center chevron up"
            ></span>
            <img
              alt="Examplar Esports Hub 1"
              className="portfolio-1-images"
              src={esportsHubImages["image" + esportsHubImageSelection]}
            ></img>
            <img
              alt="Examplar Esports Hub 2"
              className="portfolio-1-images"
              src={esportsHubImages["image" + (esportsHubImageSelection + 1)]}
            ></img>
            <span
              onClick={() =>
                changeImages(
                  updateEsportsHubImageSelection,
                  esportsHubImageSelection,
                  esportsHubImages,
                  "down"
                )
              }
              className="center chevron down"
            ></span>
          </div>
        </Zoom>
      </div>
      <div className="paperclicker">
        <Zoom right cascade>
          {paperclicker()}
        </Zoom>
        <Zoom right cascade>
          <div
            onAnimationEnd={() => updateFadeIn2(false)}
            className={fadein2 ? "portfolio-2-images-div fade-in" : "portfolio-2-images-div"}
          >
            <span
              onClick={() =>
                changeImages(
                  updatePaperclickerImageSelection,
                  paperclickerImageSelection,
                  paperclickerImages,
                  "up"
                )
              }
              className="center chevron up"
            ></span>
            <img
              alt="Examplar Paper Clicker 1"
              className="portfolio-1-images"
              src={paperclickerImages["image" + paperclickerImageSelection]}
            ></img>
            <img
              alt="Examplar Paper Clicker 2"
              className="portfolio-1-images"
              src={paperclickerImages["image" + (paperclickerImageSelection + 1)]}
            ></img>
            <span
              onClick={() =>
                changeImages(
                  updatePaperclickerImageSelection,
                  paperclickerImageSelection,
                  paperclickerImages,
                  "down"
                )
              }
              className="center chevron down"
            ></span>
          </div>
        </Zoom>
      </div>
      <div className="otherProjects">
        <div className="otherProjects-title"> OTHER PROJECTS & EXPERIENCE </div>
        <div
          onAnimationEnd={() => updateSlideIn1(false)}
          className={slidein1 ? "otherProjects-collection fade-in" : "otherProjects-collection"}
        >
          <span
            onClick={() =>
              changeImages(updatePortfolioSelection, portfolioSelection, extraPortfolios, "left")
            }
            className="center chevron left"
          ></span>
          {extraPortfolios["portfolio" + portfolioSelection]}
          {portfolioSelection + 1 > Object.keys(extraPortfolios).length
            ? extraPortfolios["portfolio1"]
            : extraPortfolios["portfolio" + (portfolioSelection + 1)]}
          {portfolioSelection + 2 > Object.keys(extraPortfolios).length
            ? extraPortfolios[
                "portfolio" + (portfolioSelection + 2 - Object.keys(extraPortfolios).length)
              ]
            : extraPortfolios["portfolio" + (portfolioSelection + 2)]}
          <span
            onClick={() =>
              changeImages(updatePortfolioSelection, portfolioSelection, extraPortfolios, "right")
            }
            className="center chevron right"
          ></span>
        </div>
      </div>
      <div className="about">
        <div className="pic-content">
          <img alt="My face!" className="pic" src={require("./images/about.png")}></img>
        </div>
        <div className="about-content">
          <div className="about-title"> ABOUT ME </div>
          <div className="about-text">
            I am a motivated, determined and confident young developer who wants to improve and work
            on interesting projects. With my experiences working at IBM I have learned a lot about
            working in a team and enhancing my skills to work on large projects. My time at the
            Esports Society has helped build confidence and develop a project from start to finish
            and to oversee a project going from nothing to one of the largest university esports
            societies within the UK. I want to keep exploring avenues which help me to expand my
            skillset and knowledge of the industry.
          </div>
          <div className="urls">
            <a target="_blank" rel="noopener noreferrer" href={"https://github.com/3eak"}>
              <img alt="GitHub Logo" className="github" src={require("./images/github.png")}></img>
            </a>
            <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/3eakStefan"}>
              <img
                alt="Twitter Logo"
                className="twitter"
                src={require("./images/twitter.png")}
              ></img>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://www.linkedin.com/in/stefan-cooper-491355171/"}
            >
              <img alt="Linkedin Logo" className="twitter" src={require("./images/li.png")}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
