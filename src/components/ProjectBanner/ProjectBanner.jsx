import "./styles/projectBanner.css";

export default function ProjectBanner() {
  return (
    <section className="project section">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">You have a new project?</h2>
            <p className="project__description">
              Contact me to discuss a business website, web app, AI support tool or
              cloud workflow that can move your organization forward.
            </p>
            <a href="#contact" className="button button--flex button--white">
              Contact me<i className="uil uil-message project__icon button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
