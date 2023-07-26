import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SummarySection from "./components/SummarySection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import AdditionalSection from "./components/AdditionalSection";
import WelcomeSection from "./components/WelcomeSection";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

import "./styles.scss";

function App() {
  const { t, i18n } = useTranslation();

  const [activeSection, setActiveSection] = useState("Welcome");
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setShowMenu(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <header>
        <h1 className="header-title">
          {t("name")} <br />
          <span>{t("jobTitle")}</span>
        </h1>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`header-links ${showMenu ? "show-menu" : ""}`}>
          <a onClick={() => handleNavClick("summary")}>{t("summary")}</a>
          <a onClick={() => handleNavClick("experience")}>{t("experience")}</a>
          <a onClick={() => handleNavClick("education")}>{t("education")}</a>
          <a onClick={() => handleNavClick("additional")}>{t("additional")}</a>
          <div className="language-buttons">
            <a onClick={() => changeLanguage("en")}>EN</a>
            <a onClick={() => changeLanguage("es")}>ES</a>
          </div>
        </div>
      </header>

      <main>
        {activeSection === "Welcome" && (
          <WelcomeSection onClick={handleNavClick} isActive={true} />
        )}

        {activeSection === "summary" && (
          <SummarySection onClick={handleNavClick} isActive={true} />
        )}

        {activeSection === "experience" && (
          <ExperienceSection onClick={handleNavClick} isActive={true} />
        )}

        {activeSection === "education" && (
          <EducationSection onClick={handleNavClick} isActive={true} />
        )}

        {activeSection === "additional" && (
          <AdditionalSection onClick={handleNavClick} isActive={true} />
        )}
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-info">
            <p className="footer-p">
              {t("jobTitle")} || {t("webDeveloper")} || {t("mentor")}
            </p>
            <p className="footer-p">
              {t("location")} | {t("phone")} |{" "}
              <a href={`mailto:juanalcarios@gmail.com`}>
                <FaEnvelope />
              </a>{" "}
              |{" "}
              <a href={t("linkedin")} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>{" "}
              |{" "}
              <a href={t("github")} target="_blank" rel="noopener noreferrer">
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
