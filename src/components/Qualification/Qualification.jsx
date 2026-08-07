import { useState } from "react";
import { education, work } from "../../data/siteData";
import TimelineDot from "./TimelineDot";
import "./styles/qualification.css";

export default function Qualification() {
  const [activeTab, setActiveTab] = useState("education");
  const items = activeTab === "education" ? education : work;

  return (
    <section className="qualification__section">
      <h2 className="section__title">The Road So Far</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${activeTab === "education" ? "qualification__active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={`qualification__button button--flex ${activeTab === "work" ? "qualification__active" : ""}`}
            onClick={() => setActiveTab("work")}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Work
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__active" data-content>
            {items.map(([title, subtitle, period], index) => (
              <div className="qualification__data" key={`${title}-${period}`}>
                {index % 2 === 1 ? <div></div> : null}
                {index % 2 === 1 ? <TimelineDot isLast={index === items.length - 1} /> : null}
                <div>
                  <h3 className="qualification__title">{title}</h3>
                  <span className="qualification__subtitle">{subtitle}</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> {period}
                  </div>
                </div>
                {index % 2 === 0 ? <TimelineDot isLast={index === items.length - 1} /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
