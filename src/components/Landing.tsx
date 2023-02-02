import React, { FunctionComponent, useEffect, useState } from "react";
import "../styling/app.css";
import { Experience } from "./Experience";
import { addScrollReveals } from "../scrollReveal";
import { Alert, AlertDescription, AlertIcon, CloseButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const Landing: FunctionComponent = () => {
  useEffect(() => {
    addScrollReveals();
  }, []);

  const [renderAlert, updateRenderAlert] = useState<boolean>(true);

  return (
    <div className="text-center bg-gradient-to-t from-cyan-900 to-neutral-900 flex flex-col text-white">
      {renderAlert ? (
        <div className="fixed m-4 w-1/2 text-slate-900 z-50 text-left">
          <Alert status="warning">
            <AlertIcon />
            <AlertDescription>
              This website/portfolio is under reconstruction! This is a side project for me to
              explore and play with cool React tech. Sorry for any inconveniance
            </AlertDescription>
            <CloseButton onClick={() => updateRenderAlert(false)} />
          </Alert>
        </div>
      ) : null}
      <div className="fade-in text-center h-screen flex flex-col justify-center">
        <p className="font-built-sb text-[12vw] bg-gradient-to-t from-cyan-400 to-neutral-400 bg-clip-text text-transparent">
          S T E F A N <br /> C O O P E R
        </p>
      </div>
      <Experience />
      <div className="text-center h-screen flex flex-row text-white justify-start">
        <div className="flex content-center m-12 max-md:hidden">
          <img
            alt="My face!"
            className="w-auto rounded-3xl self-center"
            src={require("../images/about.png")}
          ></img>
        </div>
        <div className="flex flex-col w-full self-center">
          <div className="font-built-rg text-7xl self-center mt-8"> ABOUT ME </div>
          <div className="sm:max-2xl:text-base sm:text-2xl self-center mt-8 w-4/5">
            I am a motivated, determined and confident young developer who wants to improve and work
            on interesting projects. With my experiences working at IBM I have learned a lot about
            working in a team and enhancing my skills to work on large projects. My time at the
            Esports Society has helped build confidence and develop a project from start to finish
            and to oversee a project going from nothing to one of the largest university esports
            societies within the UK. I want to keep exploring avenues which help me to expand my
            skillset and knowledge of the industry.
          </div>
          <div className="flex flex-row justify-evenly self-center mt-16 w-full">
            <a target="_blank" rel="noopener noreferrer" href={"https://github.com/stefan-cooper"}>
              <FontAwesomeIcon
                className="text-white h-auto min-w-[4.5rem] hover:opacity-75"
                icon={faGithub}
              />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/3eakStefan"}>
              <FontAwesomeIcon
                className="text-white h-auto min-w-[4.5rem] hover:opacity-75"
                icon={faTwitter}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://linkedin.com/in/stefan-cooper-491355171/"}
            >
              <FontAwesomeIcon
                className="text-white h-auto min-w-[4.5rem] hover:opacity-75"
                icon={faLinkedin}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Landing.displayName = "Landing";
