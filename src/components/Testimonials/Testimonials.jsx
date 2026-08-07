import { useState } from "react";
import { testimonials } from "../../data/siteData";
import "./styles/testimonials.css";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonials[activeIndex];

  return (
    <section className="testimonial section">
      <h2 className="section__title">What People Say</h2>
      <span className="section__subtitle">Building relationships, delivering results</span>

      <div className="testimonial__container container swiper-container">
        <div className="swiper-wrapper">
          <div className="testimonial__content swiper-slide">
            <div className="testimonial__data">
              <div className="testimonial__header">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial__img" />
                <div>
                  <h3 className="testimonial__name">{testimonial.name}</h3>
                  <span className="testimonial__client">{testimonial.title}</span>
                </div>
              </div>
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <i className="uil uil-star testimonial__icon-star" key={star}></i>
                ))}
              </div>
            </div>
            <p className="testimonial__description">{testimonial.quote}</p>
          </div>
        </div>
        <div className="swiper-pagination swiper-pagination-testimonial">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`swiper-pagination-bullet ${index === activeIndex ? "swiper-pagination-bullet-active" : ""}`}
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
