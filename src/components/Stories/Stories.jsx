import { stories } from "../../data/siteData";
import PortfolioSlider from "../Portfolio/PortfolioSlider";
import "./styles/stories.css";

export default function Stories() {
  return (
    <section className="portfolio section" id="stories">
      <h2 className="section__title">My Articles</h2>
      <span className="section__subtitle">Business and technology thoughts</span>
      <PortfolioSlider items={stories} storyMode />
    </section>
  );
}
