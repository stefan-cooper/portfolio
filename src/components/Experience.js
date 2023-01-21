import React, { useState } from "react";
import { experiences } from "./Assets";
import { SmallPortfolio } from "./Portfolios";
import "../styling/experiences.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Heading } from "@chakra-ui/react";

export const experiencesAsPortfolios = () => {
  return experiences().map((experience, i) => {
    return (
      <div key={i}>
        {SmallPortfolio({
          index: i,
          image: experience.image,
          tags: experience.tags,
          role: experience.role,
        })}
      </div>
    );
  });
};

const Experience = () => {
  const [topSlider, updateTopSlider] = useState();
  const [botSlider, updateBotSlider] = useState();

  const descriptions = experiences().map((pf) => {
    return (
      <div key={pf.title} className={"experience-text"}>
        <Heading size={"md"}>{pf.title}</Heading>
        <p>{pf.description}</p>
        <Heading size={"md"}>{pf.subtitle}</Heading>
        <p>{pf.subdescription}</p>
      </div>
    );
  });

  // TODO - remove this when other experiences text are ready
  const limitToFour = (arr) => arr.filter((_, i) => i < 4);

  return (
    <div className="experiences">
      <div className="experiences-carousel">
        <Slider
          ref={(slider) => updateTopSlider(slider)}
          arrows={false}
          pauseOnHover
          pauseOnFocus
          focusOnSelect
          centerMode
          className="slider"
          infinite
          autoplay
          asNavFor={botSlider}
          autoplaySpeed={3000}
          speed={500}
          slidesToShow={3}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                centerMode: false,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {limitToFour(experiencesAsPortfolios())}
        </Slider>
      </div>
      <div
        className="experiences-carousel"
        onMouseOver={() => topSlider.slickPause()}
        onMouseOut={() => topSlider.slickPlay()}
      >
        <Slider
          ref={(slider) => updateBotSlider(slider)}
          arrows={false}
          pauseOnHover
          pauseOnFocus
          asNavFor={topSlider}
          className="slider"
          infinite
          fade
          speed={500}
          slidesToShow={1}
        >
          {limitToFour(descriptions)}
        </Slider>
      </div>
    </div>
  );
};

export default Experience;
