import React, { FunctionComponent, useState, useEffect } from "react";
import { Experience } from "Components";
import { Alert, AlertDescription, AlertIcon, CloseButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Landing: FunctionComponent = () => {
  const refToComponent = React.useRef(null);

  useEffect(() => {
    const animate = async () => {
      if (refToComponent.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(refToComponent.current, {
          origin: "bottom",
          duration: 2000,
          opacity: 0,
        });
      }
    };
    animate();
  }, []);

  const [renderAlert, updateRenderAlert] = useState<boolean>(true);

  return (
    <div className="text-center bg-gradient-to-t from-cyan-900 to-neutral-900 flex flex-col text-white">
      <div ref={refToComponent} className="text-center h-screen flex flex-col justify-center">
        <h1 className="font-built-sb text-[12vw] bg-gradient-to-t from-cyan-400 to-neutral-400 tracking-[.175em] bg-clip-text text-transparent">
          STEFAN <br />
          COOPER
        </h1>
      </div>
      <div className="text-center h-screen flex flex-row text-white justify-start">
        <div className="flex content-center m-12 max-md:hidden">
          <img
            alt="My face!"
            className="w-auto rounded-3xl self-center"
            src={"/images/about.png"}
          ></img>
        </div>
        <div className="flex flex-col w-full self-center">
          <h2 className="font-built-rg text-7xl self-center mt-8">ABOUT ME</h2>
          <p className="sm:max-2xl:text-base sm:text-2xl self-center mt-8 w-4/5">
            {`I am a motivated, determined and enthusiastic developer with a passion for working on
            interesting projects. With multiple years in the industry, I've developed my skillset
            and understanding of the responsibilities of working in a large team. My time at
            university helped to develop other aspects of my life; including my leadership skills
            whilst being Chair of the Esports Society, which helped me during my time as a director
            of NESA. I'm really happy with my current role as a developer for Event Endpoint
            Management at IBM, and excited for its' various opportunities for me to expand my
            skillset and knowledge of the Events/Kafka area.`}
          </p>
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
      <Experience />
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
    </div>
  );
};

Landing.displayName = "Landing";

export default Landing;
