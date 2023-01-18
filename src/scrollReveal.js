import ScrollReveal from "scrollreveal";

// add scroll reveals to page
export const addScrollReveals = () => {
  ScrollReveal().reveal(".stefancooper", {
    origin: "bottom",
    duration: 1500,
    opacity: 0,
  });
  ScrollReveal().reveal(".esportshub-title", {
    origin: "right",
    distance: "5%",
    duration: 1500,
    delay: 300,
    opacity: 0,
    reset: true,
  });
  ScrollReveal().reveal(".esportshub-slideshow", {
    origin: "left",
    distance: "20%",
    duration: 1500,
    delay: 300,
    opacity: 0,
    reset: true,
  });
  ScrollReveal().reveal(".paperclicker-title", {
    origin: "left",
    distance: "10%",
    duration: 1500,
    delay: 300,
    opacity: 0,
    reset: true,
  });
  ScrollReveal().reveal(".paperclicker-slideshow", {
    origin: "right",
    distance: "20%",
    duration: 1500,
    delay: 300,
    opacity: 0,
    reset: true,
  });
  ScrollReveal().reveal(".experiences", {
    origin: "bottom",
    distance: "25%",
    duration: 1500,
    delay: 300,
    opacity: 0,
    reset: true,
  });
};
