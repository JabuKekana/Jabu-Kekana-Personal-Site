import { useState } from "react";
import { contact } from "../../data/siteData";
import "./styles/header.css";

export default function Header({ darkTheme, setDarkTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo" onClick={() => setMenuOpen(false)}>
          Jabu Kekana
        </a>
        <div className={`nav__menu ${menuOpen ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list grid">
            {[
              ["#home", "uil uil-estate", "Home"],
              ["#about", "uil uil-user", "About"],
              ["#portfolio", "uil uil-scenery", "Work"],
              ["#services", "uil uil-briefcase-alt", "Services"],
              ["#stories", "uil uil-edit", "Stories"],
              ["#skills", "uil uil-file-alt", "Skills"],
              ["#contact", "uil uil-message", "Contact"],
            ].map(([href, icon, label]) => (
              <li className="nav__item" key={href}>
                <a href={href} className="nav__link" onClick={() => setMenuOpen(false)}>
                  <i className={`${icon} nav__icon`}></i>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <i className="uil uil-times nav__close" id="nav-close" onClick={() => setMenuOpen(false)}></i>
        </div>
        <div className="nav__btns">
          <i
            className={`uil ${darkTheme ? "uil-sun" : "uil-moon"} change-theme`}
            id="theme-button"
            onClick={() => setDarkTheme((value) => !value)}
          ></i>
          <div className="nav__toggle" id="nav-toggle" onClick={() => setMenuOpen(true)}>
            <i className="uil uil-bars"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
