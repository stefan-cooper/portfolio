import React, { useEffect, useState } from "react";
import { changeImages } from "./utils";
import { extraExperience } from "./Assets";
import "../styling/experiences.scss";

const classNames = require("classnames");

const Experience = () => {
  const [portfolioSelection, updatePortfolioSelection] = useState(1);
  const [slideIn, updateSlideIn] = useState(true);

  const extraPortfolios = extraExperience();

  useEffect(() => {
    updateSlideIn(true);
  }, [portfolioSelection]);

  const addPortfolio = (renderedList, portfolio) => {
    if (renderedList.length < 3) {
      renderedList.push(portfolio);
    }
    return renderedList;
  };

  const renderedPortfolios = (portfolios) => {
    let jsx = [];
    const slicedPortfolios = Object.values(portfolios).slice(portfolioSelection - 1);
    slicedPortfolios.forEach((p) => {
      jsx = addPortfolio(jsx, p);
    });
    Object.values(portfolios).forEach((p) => {
      jsx = addPortfolio(jsx, p);
    });
    return jsx;
  };

  return (
    <div className="experiences">
      <div className="experiences__title"> OTHER PROJECTS & EXPERIENCE </div>
      <div
        onAnimationEnd={() => updateSlideIn(false)}
        className={classNames("experiences__collection", { "fade-in": slideIn })}
      >
        <span
          onClick={() =>
            changeImages(updatePortfolioSelection, portfolioSelection, extraPortfolios, "left")
          }
          className="center chevron left"
        ></span>
        {renderedPortfolios(extraPortfolios)}
        <span
          onClick={() =>
            changeImages(updatePortfolioSelection, portfolioSelection, extraPortfolios, "right")
          }
          className="center chevron right"
        ></span>
      </div>
    </div>
  );
};

export default Experience;
