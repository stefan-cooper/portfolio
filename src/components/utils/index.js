export const changeImages = (updateFunction, imageSelection, images, direction) => {
  if (direction === "down") {
    if (imageSelection + 1 < Object.keys(images).length) updateFunction(imageSelection + 1);
    else updateFunction(1);
  } else if (direction === "up") {
    if (imageSelection > 1) updateFunction(imageSelection - 1);
    else updateFunction(Object.keys(images).length - 1);
  } else if (direction === "right") {
    if (imageSelection - 1 === 0) updateFunction(4);
    else updateFunction(imageSelection - 1);
  } else if (direction === "left") {
    if (imageSelection + 1 > Object.keys(images).length) updateFunction(1);
    else updateFunction(imageSelection + 1);
  }
};
