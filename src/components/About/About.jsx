import { assets } from "../../data/siteData";
import "./styles/about.css";

export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About</h2>
      <span className="section__subtitle">The person behind the work</span>

      <div className="about__container container grid">
        <img src={assets.aboutPortrait} alt="Jabu Kekana" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            I started with a simple goal: build things that solve real problems.
            But the path wasn't straight. I worked odd jobs to fund my education,
            took on freelance work for free just to gain experience, and learned
            early that success comes from showing up and delivering.
            <br /><br />
            My first IT job was hands-on — troubleshooting hardware, managing devices,
            supporting users. I loved it. But I wanted more. So I kept learning:
            cloud computing with Azure and Google Workspace, software development
            with React and Node.js, database administration, and now AI integrations & DevOps.
            <br /><br />
            Today, I'm the developer I wished I had back then — someone who understands
            the full picture. From physical hardware to cloud infrastructure,
            from frontend interfaces to AI-powered backends. I've kept every skill
            I learned along the way and built on it. Because the best solutions
            don't come from narrow expertise — they come from seeing the whole system.
          </p>
          <div className="about__buttons">
            <a download href={assets.cvPdf} className="button button--flex">
              Download Brochure<i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
