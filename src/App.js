import React, { useEffect, useState } from "react";
import "./styling/app.scss";
// import { esportshub, paperclicker } from "./components/Portfolios";
// import { esportsHubImages, paperclickerImages } from "./components/Assets";
// import ImageSlideshow from "./components/ImageSlideshow";
import Experience from "./components/Experience";
import About from "./components/About";
import { addScrollReveals } from "./scrollReveal";
import { Alert, AlertDescription, AlertIcon, CloseButton } from "@chakra-ui/react";

const App = () => {
  useEffect(() => {
    addScrollReveals();
  }, []);

  const [renderAlert, updateRenderAlert] = useState(true);

  return (
    <div className="everything">
      {renderAlert ? (
        <div className="reconstruction-alert">
          <Alert status="warning">
            <AlertIcon />
            <AlertDescription>
              This website/portfolio is under reconstruction! This is a side project for me to
              explore and play with cool React tech. Sorry for any inconveniance
            </AlertDescription>
            <CloseButton
              alignSelf="flex-start"
              position="relative"
              right={-1}
              top={-1}
              onClick={() => updateRenderAlert(false)}
            />
          </Alert>
        </div>
      ) : null}
      <div className="stefancooper">
        <p className="title">
          S T E F A N <br /> C O O P E R
        </p>
      </div>
      {/* <div className="esportshub">
        {esportshub()}
        <div className="portfolio-position esportshub-slideshow">
          <ImageSlideshow images={esportsHubImages} />
        </div>
      </div>
      <div className="paperclicker">
        {paperclicker()}
        <div className="portfolio-position paperclicker-slideshow">
          <ImageSlideshow images={paperclickerImages} />
        </div>
      </div> */}
      <Experience />
      <About />
    </div>
  );
};

export default App;
