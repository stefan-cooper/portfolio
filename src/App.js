import React from "react";
import Zoom from "react-reveal/Zoom";
import "./styling/app.scss";
import { esportshub, paperclicker } from "./components/Portfolios";
import { esportsHubImages, paperclickerImages } from "./components/Assets";
import ImageSlideshow from "./components/ImageSlideshow";
import Experience from "./components/Experience";
import About from "./components/About";

const App = () => {
  return (
    <div className="everything">
      <div className="stefancooper">
        <p className="title">
          S T E F A N <br /> C O O P E R
        </p>
      </div>
      <div className="esportshub">
        <Zoom left cascade>
          {esportshub()}
        </Zoom>
        <Zoom left cascade>
          <div className="portfolio-position">
            <ImageSlideshow images={esportsHubImages} />
          </div>
        </Zoom>
      </div>
      <div className="paperclicker">
        <Zoom right cascade>
          {paperclicker()}
        </Zoom>
        <Zoom right cascade>
          <div className="portfolio-position">
            <ImageSlideshow images={paperclickerImages} />
          </div>
        </Zoom>
      </div>
      <Experience />
      <About />
    </div>
  );
};

export default App;
