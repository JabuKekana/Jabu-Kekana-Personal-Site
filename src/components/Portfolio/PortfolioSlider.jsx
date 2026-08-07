import { useState } from "react";
import { contact } from "../../data/siteData";
import "./styles/portfolio.css";

export default function PortfolioSlider({ items, storyMode = false }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const item = items[activeIndex];

  const previous = () => setActiveIndex((index) => (index === 0 ? items.length - 1 : index - 1));
  const next = () => setActiveIndex((index) => (index === items.length - 1 ? 0 : index + 1));

  return (
    <div className="portfolio__container container swiper-container">
      <div className="swiper-wrapper">
        <div className="portfolio__content grid swiper-slide">
          <img src={item.image} alt={item.title} className="portfolio__img" />
          <div className="portfolio_">
            <h3 className="portfolio__title">{item.title}</h3>
            <p className="sub__title">{item.stack}</p>
            <p className="portfolio__description">{item.description}</p>
            <a
              href={storyMode ? item.link || contact.medium : item.link || "#portfolio"}
              target={storyMode || item.link ? "_blank" : undefined}
              rel={storyMode || item.link ? "noreferrer" : undefined}
              className="button button--flex button--small portfolio__button"
            >
              {storyMode ? "Read full story" : item.link ? "Demo" : "View work"}
              <i className="uil uil-arrow-right button__icon"></i>
            </a>
            {item.note ? <p className="sub__title">{item.note}</p> : null}
          </div>
        </div>
      </div>

      <div className="portfolio__arrow portfolio__arrow--next" onClick={next}>
        <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
      </div>
      <div className="portfolio__arrow portfolio__arrow--prev" onClick={previous}>
        <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
      </div>

      <div className="swiper-pagination">
        {items.map((_, index) => (
          <span
            key={index}
            className={`swiper-pagination-bullet ${index === activeIndex ? "swiper-pagination-bullet-active" : ""}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
