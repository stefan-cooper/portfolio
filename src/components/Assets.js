// import { ibm, uh, hertsgg, discordbot } from "./Portfolios";

import experiences from "../experience.json";
import { smallPortfolio } from "./Portfolios";

export const esportsHubImages = {
  image1: require("../images/feed1.png"),
  image2: require("../images/feed2.png"),
  image3: require("../images/schedule1.png"),
  image4: require("../images/schedule2.png"),
  image5: require("../images/teams1.png"),
  image6: require("../images/teams2.png"),
  image7: require("../images/teams3.png"),
  image8: require("../images/login1.png"),
  image9: require("../images/register1.png"),
  image10: require("../images/profile1.png"),
  image11: require("../images/feed1.png"),
};

export const paperclickerImages = {
  image1: require("../images/earlygame1.png"),
  image2: require("../images/earlygame2.png"),
  image3: require("../images/earlygame3.png"),
};

export const extraExperience = () => {
  let extra = {};
  Object.values(experiences).forEach((experience, index) => {
    extra[`portfolio${index}`] = smallPortfolio({
      title: experience.title,
      subtitle: experience.subtitle,
      description: experience.description,
      subdescription: experience.subdescription,
      image: experience.image,
    });
  });
  return extra;
};
