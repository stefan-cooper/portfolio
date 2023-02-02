import experiencesJson from "../experience.json";
import { portfolio } from "./Portfolios";

export const experiences = (): Array<portfolio> => Object.values(experiencesJson);
