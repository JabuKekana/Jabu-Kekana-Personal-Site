import { useState } from "react";
import { testimonials } from "../../data/siteData";
import "./styles/testimonials.css";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonials[activeIndex];

  const previous = () => setActiveIndex((index) => (index === 0 ? testimonials.length - 1 : index - 1));
  const next = () => setActiveIndex((index) => (index === testimonials.length - 1 ? 0 : index + 1));

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
        <div className="testimonial__controls">
          <button type="button" className="testimonial__arrow" onClick={previous} aria-label="Previous testimonial">
            <i className="uil uil-angle-left-b"></i>
          </button>
          <div className="swiper-pagination swiper-pagination-testimonial">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`swiper-pagination-bullet ${index === activeIndex ? "swiper-pagination-bullet-active" : ""}`}
                onClick={() => setActiveIndex(index)}
              ></span>
            ))}
          </div>
          <button type="button" className="testimonial__arrow" onClick={next} aria-label="Next testimonial">
            <i className="uil uil-angle-right-b"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
