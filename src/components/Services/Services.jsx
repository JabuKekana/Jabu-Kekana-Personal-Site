import { useState } from "react";
import { services } from "../../data/siteData";
import "./styles/services.css";

export default function Services() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section className="services section" id="services">
      <h2 className="section__title">What I Do</h2>
      <span className="section__subtitle">Practical technology for real results</span>

      <div className="services__container container grid">
        {services.map((service, index) => (
          <div className="services__content" key={service.title}>
            <div>
              <i className={`${service.icon} skills__icon`}></i>
              <h3 className="services__title">{service.title}</h3>
            </div>
            <span
              className="button button--flex button--small button--link services__button"
              onClick={() => setActiveModal(index)}
            >
              View more<i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className={`services__modal ${activeModal === index ? "active-modal" : ""}`}>
              <div className="services__modal-content">
                <h4 className="services__modal-title">{service.modalTitle}</h4>
                <i className="uil uil-times services__modal-close" onClick={() => setActiveModal(null)}></i>
                <ul className="services__modal-services grid">
                  {service.points.map((point) => (
                    <li className="services__modal-service" key={point}>
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
