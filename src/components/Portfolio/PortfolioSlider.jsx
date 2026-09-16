import { useState } from "react";
import { contact } from "../../data/siteData";
import "./styles/portfolio.css";

function StoreIcon({ store }) {
  if (store === "apple") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.18.07 2 .66 2.69.71 1.03-.21 2.01-.82 3.11-.74 1.32.11 2.31.63 2.97 1.58-2.72 1.63-2.07 5.21.42 6.21-.5 1.31-1.15 2.61-2.19 3.61l.01-.01ZM12.03 7.25C11.88 5.3 13.48 3.69 15.3 3.53c.25 2.25-2.04 3.93-3.27 3.72Z" />
      </svg>
    );
  }

  if (store === "google-play") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#00d7fe" d="M3.4 2.55 13.88 12 3.42 21.45A2.08 2.08 0 0 1 3 20.2V3.8c0-.47.15-.9.4-1.25Z" />
        <path fill="#ffce00" d="m17.3 8.92-3.42 3.09L3.4 2.55c.48-.48 1.24-.59 1.9-.22l12 6.59Z" />
        <path fill="#ff3a44" d="M17.3 15.08 5.3 21.67c-.66.37-1.4.26-1.88-.22L13.88 12l3.42 3.08Z" />
        <path fill="#00f076" d="M21 12c0 .7-.36 1.3-.95 1.63l-2.75 1.45L13.88 12l3.42-3.08 2.75 1.45c.59.33.95.93.95 1.63Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <g fill="currentColor">
        <ellipse cx="7.2" cy="6.6" rx="1.8" ry="4.5" transform="rotate(-38 7.2 6.6)" />
        <ellipse cx="10.35" cy="5.25" rx="1.7" ry="4.45" transform="rotate(-13 10.35 5.25)" />
        <ellipse cx="13.65" cy="5.25" rx="1.7" ry="4.45" transform="rotate(13 13.65 5.25)" />
        <ellipse cx="16.8" cy="6.6" rx="1.8" ry="4.5" transform="rotate(38 16.8 6.6)" />
        <ellipse cx="5.2" cy="10" rx="1.6" ry="4.1" transform="rotate(-62 5.2 10)" />
        <ellipse cx="18.8" cy="10" rx="1.6" ry="4.1" transform="rotate(62 18.8 10)" />
        <path d="M5.2 14.1c1.8.85 3.75 1.32 5.76 1.4L8.1 11.65a4.35 4.35 0 0 0-2.9-1.7c-.9-.08-1.45.65-1.1 1.48.27.68.64 1.58 1.1 2.67ZM18.8 14.1a17.1 17.1 0 0 1-5.76 1.4l2.86-3.85a4.35 4.35 0 0 1 2.9-1.7c.9-.08 1.45.65 1.1 1.48-.27.68-.64 1.58-1.1 2.67ZM8.35 17h7.3l-1 1.35h-5.3L8.35 17Zm2.05 2.7h3.2L12 21l-1.6-1.3Z" />
      </g>
    </svg>
  );
}

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
            {!storyMode && item.storeLinks ? (
              <div className="portfolio__store-links">
                {item.storeLinks.map(({ store, label, url }) => (
                  <a
                    key={store}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className={`button portfolio__store-button portfolio__store-button--${store}`}
                    aria-label={label}
                    title={label}
                  >
                    <StoreIcon store={store} />
                  </a>
                ))}
              </div>
            ) : (
              <a
                href={storyMode ? item.link || contact.medium : item.link || "#portfolio"}
                target={storyMode || item.link ? "_blank" : undefined}
                rel={storyMode || item.link ? "noreferrer" : undefined}
                className="button button--flex button--small portfolio__button"
              >
                {storyMode ? "Read full story" : item.link ? "Demo" : "View work"}
                <i className="uil uil-arrow-right button__icon"></i>
              </a>
            )}
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
