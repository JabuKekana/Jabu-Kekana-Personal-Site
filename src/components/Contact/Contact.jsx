import { useState } from "react";
import { contact, contactScriptUrl } from "../../data/siteData";
import "./styles/contact.css";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch(contactScriptUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok && response.status !== 0 && response.type !== "opaque") {
        throw new Error("Submission failed");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const isSending = status === "sending";

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="uil uil-phone-alt contact__icon"></i>
            <div>
              <h3 className="contact__title">Call</h3>
              <span className="contact__subtitle">{contact.phone}</span>
            </div>
          </div>
          <div className="contact__information">
            <i className="uil uil-envelope contact__icon"></i>
            <div>
              <h3 className="contact__title">E-mail</h3>
              <span className="contact__subtitle">{contact.email}</span>
            </div>
          </div>
          <div className="contact__information">
            <i className="uil uil-map-marker contact__icon"></i>
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">{contact.location}</span>
            </div>
          </div>
        </div>

        <form className="contact__form grid" id="form" onSubmit={handleSubmit}>
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="name" className="contact__label">Name</label>
              <input type="text" name="Name" id="name" required className="contact__input" disabled={isSending} />
            </div>
            <div className="contact__content">
              <label htmlFor="email" className="contact__label">E-mail</label>
              <input type="email" name="Email" id="email" required className="contact__input" disabled={isSending} />
            </div>
          </div>
          <div className="contact__content">
            <label htmlFor="subject" className="contact__label">Subject</label>
            <input type="text" name="Subject" id="subject" className="contact__input" disabled={isSending} />
          </div>
          <div className="contact__content">
            <label htmlFor="description" className="contact__label">Message</label>
            <textarea name="Message" id="description" rows="7" className="contact__input" disabled={isSending}></textarea>
          </div>
          <div>
            <button type="submit" id="submit" className="button button--flex" disabled={isSending}>
              {isSending ? "Loading..." : "Submit"}
              <i className="uil uil-message button__icon"></i>
            </button>
          </div>
          {status === "sent" ? <p className="contact__subtitle">Message sent. Thank you for reaching out.</p> : null}
          {status === "error" ? <p className="contact__subtitle">Message could not send. Please email me directly.</p> : null}
        </form>
      </div>
    </section>
  );
}
