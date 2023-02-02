import ScrollReveal from "scrollreveal";

// add scroll reveals to page
export const addScrollReveals = () => {
  ScrollReveal().reveal(".fade-in", {
    origin: "bottom",
    duration: 2000,
    opacity: 0,
  });
};
