import "./styles/scrollUp.css";

export default function ScrollUp({ showScroll }) {
  return (
    <a href="#" className={`scrollup ${showScroll ? "show-scroll" : ""}`} id="scroll-up">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
}
