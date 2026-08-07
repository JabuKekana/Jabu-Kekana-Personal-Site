import { assets, contact } from "../../data/siteData";
import "./styles/home.css";

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="home__social-icon">
              <i className="uil uil-whatsapp"></i>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="home__social-icon">
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="home__social-icon">
              <i className="uil uil-github-alt"></i>
            </a>
          </div>

          <div className="home__img">
            <img src={assets.heroPortrait} alt="Jabu Kekana" />
          </div>

          <div className="home__data">
            <h1 className="home__title">Jabu Kekana</h1>
            <h3 className="home__subtitle">Software, AI & Digital Solutions</h3>
            <p className="home__description">
  I got into tech to build things that matter. Today, I help entrepreneurs 
  and organizations create technology that actually serves their goals — 
  solving real problems and driving real growth. No over-engineering. 
  No buzzwords. Just practical solutions that work.
</p>
            <a href="#contact" className="button button--flex home__button">
              Get in touch<i className="uil uil-message button__icon"></i>
            </a>
          </div>
        </div>

        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
            <span className="home__scroll-name">Scroll Down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
