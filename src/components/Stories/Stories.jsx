import { useState } from "react";
import { contact, stories } from "../../data/siteData";
import "./styles/stories.css";

export default function Stories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => setActiveIndex((index) => (index === 0 ? stories.length - 1 : index - 1));
  const next = () => setActiveIndex((index) => (index === stories.length - 1 ? 0 : index + 1));

  const getArticleClass = (index) => {
    const total = stories.length;
    const forwardDistance = (index - activeIndex + total) % total;
    const backwardDistance = (activeIndex - index + total) % total;

    if (index === activeIndex) return "articles-gallery__item--current";
    if (forwardDistance === 1) return "articles-gallery__item--next";
    if (backwardDistance === 1) return "articles-gallery__item--previous";
    if (forwardDistance === 2) return "articles-gallery__item--last";
    if (backwardDistance === 2) return "articles-gallery__item--first";

    return "";
  };

  return (
    <section className="stories section" id="stories">
      <h2 className="section__title">My Articles</h2>
      <span className="section__subtitle">Business and technology thoughts</span>

      <div className="articles-gallery__wrapper container">
        <ul className="articles-gallery">
          {stories.map((story, index) => {
            const articleUrl = story.link || contact.medium;
            const isCurrent = index === activeIndex;

            return (
              <li className={`articles-gallery__item ${getArticleClass(index)}`} key={story.title}>
                <figure className="articles-gallery__figure">
                  <img className="articles-gallery__img" src={story.image} alt={story.title} loading="lazy" />
                  <figcaption className="articles-gallery__caption">
                    <span className="articles-gallery__meta">{story.stack}</span>
                    <h3 className="articles-gallery__title">{story.title}</h3>
                    <p className="articles-gallery__description">{story.description}</p>
                    {isCurrent ? (
                      <a
                        href={articleUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="button button--flex button--small articles-gallery__read-more"
                      >
                        Read more<i className="uil uil-arrow-right button__icon"></i>
                      </a>
                    ) : null}
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>

        <div className="articles-gallery__controls">
          <button type="button" className="button button--flex button--small" onClick={previous}>
            <i className="uil uil-angle-left-b button__icon articles-gallery__button-icon-left"></i>
            Previous
          </button>
          <button type="button" className="button button--flex button--small" onClick={next}>
            Next<i className="uil uil-angle-right-b button__icon"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
