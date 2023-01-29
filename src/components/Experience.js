import React, { useState } from "react";
import { experiences } from "./Assets";
import { SmallPortfolio } from "./Portfolios";
import "../styling/experiences.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Heading, Tag } from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

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
    const { time, github, link, role, head } = pf && pf.details;

    return (
      <div key={pf.title} className="experience-data">
        <div className={"experience-text"}>
          <Heading size={"md"}>{pf.title}</Heading>
          <p>{pf.description}</p>
          <br />
          <Heading size={"md"}>{pf.subtitle}</Heading>
          <p>{pf.subdescription}</p>
          <br />
          <div>
            {pf.tags.map((tag) => {
              return <Tag key={tag} size={"lg"} className="experience__tag">{`#${tag}`}</Tag>;
            })}
          </div>
        </div>
        <div className={"experience-extra"}>
          {head ? (
            <>
              <Heading>{head}</Heading>
              <br />
            </>
          ) : null}
          {time ? <Heading>{time}</Heading> : null}
          {role ? <Heading>{role}</Heading> : null}
          <br />
          <div>
            {link ? (
              <a key={link} target="_blank" rel="noopener noreferrer" href={link}>
                <FontAwesomeIcon className="experience-image" icon={faLink} />
              </a>
            ) : null}
            {github ? (
              <a key={github} target="_blank" rel="noopener noreferrer" href={github}>
                <FontAwesomeIcon className="experience-image" icon={faGithub} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    );
  });

  // // TODO - remove this when other experiences text are ready
  const limit = (arr) => arr.filter((_, i) => i < 8);

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
          autoplaySpeed={4000}
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
          {limit(experiencesAsPortfolios())}
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
          {limit(descriptions)}
        </Slider>
      </div>
    </div>
  );
};

export default Experience;
