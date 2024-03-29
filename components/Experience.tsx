import React, { useState, FunctionComponent } from "react";
import type { portfolio } from "./Portfolios";
import { SmallPortfolio } from "Components";
import Slider from "react-slick";
import { Heading, Tag } from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import experiencesJson from "../pages/assets/experience.json";

const experiences = (): Array<portfolio> => Object.values(experiencesJson);

const experiencesAsPortfolios = (): Array<React.ReactNode> => {
  return experiences().map((experience, i) => {
    return <div key={i}>{SmallPortfolio(experience)}</div>;
  });
};

const Experience: FunctionComponent = () => {
  const [topSlider, updateTopSlider] = useState({
    slickPause: () => {},
    slickPlay: () => {},
  });
  const [botSlider, updateBotSlider] = useState({
    slickPause: () => {},
    slickPlay: () => {},
  });

  const descriptions = experiences().map((pf: portfolio) => {
    const { title, subtitle, description, tags, subdescription, details } = pf;
    const { time, github, link, role, head } = details;

    return (
      <div key={title} className="flex flex-row visible">
        <div className="max-md:w-full max-lg:mt-8 w-3/5 flex justify-start items-start flex-col text-left">
          <Heading as="h4" size={"md"}>
            {title}
          </Heading>
          <p>{description}</p>
          <br />
          <Heading as="h4" size={"md"}>
            {subtitle}
          </Heading>
          <p>{subdescription}</p>
          <br />
          <div>
            {tags.map((tag) => {
              return <Tag key={tag} size={"lg"} className="m-1">{`#${tag}`}</Tag>;
            })}
          </div>
        </div>
        <div className="max-md:hidden w-2/5 flex justify-center items-center flex-col">
          <div className="flex-col max-md:hidden visible">
            {head ? (
              <>
                <Heading as="h5">{head}</Heading>
                <br />
              </>
            ) : null}
            {time ? <Heading as="h5">{time}</Heading> : null}
            {role ? <Heading as="h5">{role}</Heading> : null}
            <br />
            <div className="flex flex-row self-center justify-center w-full">
              {link ? (
                <a key={link} target="_blank" rel="noopener noreferrer" href={link}>
                  <FontAwesomeIcon
                    className="mr-4 w-16 h-16 text-white hover:opacity-75"
                    icon={faLink}
                  />
                </a>
              ) : null}
              {github ? (
                <a key={github} target="_blank" rel="noopener noreferrer" href={github}>
                  <FontAwesomeIcon
                    className="mr-4 w-16 h-16 text-white hover:opacity-75"
                    icon={faGithub}
                  />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  });

  // TODO - remove this when other experiences text are ready
  const limit = (arr: Array<React.ReactNode>) => arr.filter((_, i) => i < 9);

  return (
    <div className="text-center min-h-[100vh] max-h-[120vh] flex flex-col overflow-x-hidden overflow-y-hidden max-xl:h-[150vh]">
      <div className="justify-center items-center w-full flex max-lg:h-[35vh]">
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
          // @ts-ignore-next
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
        className="flex justify-center items-center w-full max-lg:h-[30vh]"
        onMouseOver={() => topSlider.slickPause()}
        onMouseOut={() => topSlider.slickPlay()}
      >
        <Slider
          ref={(slider) => updateBotSlider(slider)}
          arrows={false}
          pauseOnHover
          pauseOnFocus
          // @ts-ignore-next
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

Experience.displayName = "Experience";
export default Experience;
