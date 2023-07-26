import React, { useState } from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import "./styles.scss";

import WelcomeSection from "./components/WelcomeSection";
import SummarySection from "./components/SummarySection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import AdditionalSection from "./components/AdditionalSection";
import ThanksSection from "./components/ThanksSection";

function App() {
  const [activeSection, setActiveSection] = useState("Welcome");
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setShowMenu(false);
  };

  return (
    <>
      <header>
        <h1 className="header-title">
          JUAN CALDERON <br />
          <span>Systems Engineer</span>
        </h1>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`header-links ${showMenu ? "show-menu" : ""}`}>
          <a onClick={() => handleNavClick("summary")}>SUMMARY</a>
          <a onClick={() => handleNavClick("experience")}>EXPERIENCE</a>
          <a onClick={() => handleNavClick("education")}>EDUCATION</a>
          <a onClick={() => handleNavClick("additional")}>ADDITIONAL</a>
        </div>
      </header>

      <main>
        {activeSection === "Welcome" && (
          <WelcomeSection onClick={handleNavClick} />
        )}
        {activeSection === "summary" && (
          <SummarySection onClick={handleNavClick} />
        )}
        {activeSection === "experience" && (
          <ExperienceSection onClick={handleNavClick} />
        )}
        {activeSection === "education" && (
          <EducationSection onClick={handleNavClick} />
        )}
        {activeSection === "additional" && (
          <AdditionalSection onClick={handleNavClick} />
        )}
        {activeSection === "Thanks" && (
          <ThanksSection onClick={handleNavClick} />
        )}
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-info">
            <p className="footer-p">
              Systems Engineer || Web Developer || Education Mentor
            </p>
            <p className="footer-p">
              Bogotá, CO | Tel: +57 3005456427 |{" "}
              <a href=" mailto:juanalcarios@gmail.com">
                {/* Icono de correo */}
                <FaEnvelope />
              </a>{" "}
              | {/* Icono de LinkedIn */}
              <a
                href="https://www.linkedin.com/in/j-a-c-r/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>{" "}
              | {/* Icono de GitHub */}
              <a
                href="https://github.com/Alejandro9912"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
