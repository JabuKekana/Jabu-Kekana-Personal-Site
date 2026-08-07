import { contact } from "../../data/siteData";
import "./styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Jabu Kekana</h1>
            <span className="footer__subtitle">Software, AI & Digital Solutions</span>
          </div>
          <ul className="footer__links">
            <li><a href="#services" className="footer__link">Services</a></li>
            <li><a href="#portfolio" className="footer__link">Work</a></li>
            <li><a href="#stories" className="footer__link">Stories</a></li>
            <li><a href="#contact" className="footer__link">Contact</a></li>
          </ul>
          <div className="footer__socials">
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="footer__social">
              <i className="uil uil-whatsapp"></i>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="footer__social">
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="footer__social">
              <i className="uil uil-github-alt"></i>
            </a>
          </div>
        </div>
        <p className="footer__copy">&#169; Jabu Kekana. All rights reserved.</p>
      </div>
    </footer>
  );
}
