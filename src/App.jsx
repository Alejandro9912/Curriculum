import React, { useState } from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import "./styles.scss";

function App() {
  const [activeSection, setActiveSection] = useState("Welcome");
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu); // Alternar la visibilidad del menú al hacer clic en el botón
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
        {/* Sección de bienvenida */}
        <div
          className={`section ${activeSection === "Welcome" ? "" : "hidden"}`}
        >
          <div className="section-content">
            <h2 className="section-title">WELCOME!!</h2>
          </div>
        </div>
        {activeSection === "Welcome" && (
          <div className="next-button-container">
            <button onClick={() => handleNavClick("summary")}>Siguiente</button>
          </div>
        )}

        {/* Sección de resumen */}
        <div
          className={`section ${activeSection === "summary" ? "" : "hidden"}`}
          id="summary"
        >
          <div className="section-content">
            <h2 className="section-title">SUMMARY</h2>
            <p>
              Systems engineer with skills mainly in Web Development with
              experience as an L1 Analyst and JavaScript Education Mentor.
              Skilled in information assurance and security incident response.
              Proficient in reviewing and securing sensitive information
              exposure in HTML, CSS, and front-end code, ensuring the
              confidentiality of personal and financial data. Experience in
              implementing authentication and authorization mechanisms, as well
              as session management and access controls. Additionally, as a
              JavaScript Education Mentor, I have planned and conducted
              educational activities in Git, HTML/CSS, and JavaScript (including
              Node.js), providing guidance to students and facilitating their
              transition into the professional environment.
            </p>
          </div>
        </div>

        {/* Sección de experiencia */}
        <div
          className={`section ${
            activeSection === "experience" ? "" : "hidden"
          }`}
          id="experience"
        >
          <div className="section-content">
            <h2 className="section-title">EXPERIENCE</h2>
            <ul>
              <li>
                <strong>Appgate – Bogotá, Colombia</strong>
                <br />
                <strong>L1 Analyst</strong>
                <br />
                Apr 2022 – Present
                <br />
                <ul>
                  <li>
                    Conducting checks for sensitive information exposure:
                    Reviewing HTML, CSS, and front-end code to ensure that
                    sensitive information, including usernames, passwords,
                    credit card information, and other personal data, is not
                    being exposed.
                  </li>
                  <li>
                    Verifying authentication and authorization: Reviewing
                    front-end components to ensure the implementation of proper
                    authentication and authorization mechanisms. This includes
                    evaluating login screens, access controls, and session
                    management.
                  </li>
                  <li>
                    Providing initial response to IT security incidents for
                    diverse clients and documenting actions taken during
                    incident management.
                  </li>
                </ul>
              </li>
              <li>
                <strong>ADA School – Bogotá, Colombia</strong>
                <br />
                <strong>JavaScript Education Mentor</strong>
                <br />
                Feb 2022 – Present
                <br />
                <ul>
                  <li>
                    Designing and planning educational activities as part of the
                    school's educational project. These activities focus on
                    teaching the following topics: Git, HTML / CSS, JavaScript -
                    Node.js.
                  </li>
                  <li>
                    Managing groups through effective communication and a
                    thorough understanding of their current needs.
                  </li>
                  <li>
                    Assisting students in their transition to the professional
                    world by providing guidance in both academic and
                    professional aspects.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* Sección de educación */}
        <div
          className={`section ${activeSection === "education" ? "" : "hidden"}`}
          id="education"
        >
          <div className="section-content">
            <h2 className="section-title">EDUCATION</h2>
            <ul>
              <li>
                <strong>
                  Universidad Distrital Francisco Jose de Caldas | Bogotá,
                  Colombia
                </strong>
                <br />
                Systems Engineer
                <br />
                Feb 2017 - Feb 2023
              </li>
              <li>
                <strong>
                  Escuela Tecnológica Instituto Técnico Central de La Salle |
                  Bogotá, Colombia
                </strong>
                <br />
                Technical bachelor in industrial processes.
                <br />
                Feb 2011 - Dec 2016
              </li>
            </ul>
          </div>
        </div>

        {/* Sección adicional */}
        <div
          className={`section ${
            activeSection === "additional" ? "" : "hidden"
          }`}
          id="additional"
        >
          <div className="section-content">
            <h2 className="section-title">ADDITIONAL</h2>
            <ul>
              <li>
                <strong>Skills:</strong> Teamwork, Problem Solving,
                Collaboration, Responsibility, Creativity
              </li>
              <li>
                <strong>Web Development:</strong> JavaScript, HTML/CSS, Node.js,
                React.js
              </li>
              <li>
                <strong>Programming Languages:</strong> MATLAB, Python, SQL,
                PHP, Java
              </li>
              <li>
                <strong>Languages:</strong> Spanish, English-B1
              </li>
              <li>
                <strong>Certifications & Training:</strong> Security Awareness
                Training, KITE - B1 English
              </li>
            </ul>
          </div>
        </div>
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
