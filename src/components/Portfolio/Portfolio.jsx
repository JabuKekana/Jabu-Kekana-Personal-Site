import { projects } from "../../data/siteData";
import PortfolioSlider from "./PortfolioSlider";

export default function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">My Work</h2>
      <span className="section__subtitle">Turning ideas into impact</span>
      <PortfolioSlider items={projects} />
    </section>
  );
}
