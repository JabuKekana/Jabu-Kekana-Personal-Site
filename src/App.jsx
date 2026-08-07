import { useEffect, useState } from "react";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import ProjectBanner from "./components/ProjectBanner/ProjectBanner";
import Qualification from "./components/Qualification/Qualification";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Stories from "./components/Stories/Stories";
import Testimonials from "./components/Testimonials/Testimonials";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(() => localStorage.getItem("selected-theme") === "dark");
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkTheme);
    localStorage.setItem("selected-theme", darkTheme ? "dark" : "light");
    localStorage.setItem("selected-icon", darkTheme ? "uil-moon" : "uil-sun");
  }, [darkTheme]);

  useEffect(() => {
    function handleScroll() {
      const header = document.getElementById("header");
      if (header) {
        header.classList.toggle("scroll-header", window.scrollY >= 80);
      }
      setShowScroll(window.scrollY >= 560);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <main className="main">
        <Home />
        <About />
        <Portfolio />
        <ProjectBanner />
        <Services />
        <Stories />
        <Skills />
        <Qualification />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp showScroll={showScroll} />
    </>
  );
}
