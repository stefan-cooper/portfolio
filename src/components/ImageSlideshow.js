import React, { useEffect, useState } from "react";
import { changeImages } from "./utils";
import "../styling/slideshow.scss";

const ImageSlideshow = (images) => {
  const [fadeIn, updateFadeIn] = useState(false);
  const [imageSelection, updateImageSelection] = useState(1);

  useEffect(() => {
    updateFadeIn(true);
  }, [imageSelection]);

  return (
    <div
      onAnimationEnd={() => updateFadeIn(false)}
      className={fadeIn ? "slideshow fade-in" : "slideshow"}
    >
      <span
        onClick={() => changeImages(updateImageSelection, imageSelection, images.images, "up")}
        className="center chevron up"
      ></span>
      <img
        alt="Examplar Paper Clicker 1"
        className="slideshow__images"
        src={images.images["image" + imageSelection]}
      ></img>
      <img
        alt="Examplar Paper Clicker 2"
        className="slideshow__images"
        src={images.images["image" + (imageSelection + 1)]}
      ></img>
      <span
        onClick={() => changeImages(updateImageSelection, imageSelection, images.images, "down")}
        className="center chevron down"
      ></span>
    </div>
  );
};

export default ImageSlideshow;
