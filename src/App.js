import React, { useEffect } from "react";
import "./styling/app.scss";
import { esportshub, paperclicker } from "./components/Portfolios";
import { esportsHubImages, paperclickerImages } from "./components/Assets";
import ImageSlideshow from "./components/ImageSlideshow";
import Experience from "./components/Experience";
import About from "./components/About";
import { addScrollReveals } from "./scrollReveal";

const App = () => {
  useEffect(() => {
    addScrollReveals();
  }, []);

  return (
    <div className="everything">
      <div className="stefancooper">
        <p className="title">
          S T E F A N <br /> C O O P E R
        </p>
      </div>
      <div className="esportshub">
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
      </div>
      <Experience />
      <About />
    </div>
  );
};

export default App;
