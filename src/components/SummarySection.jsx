import React from "react";

function SummarySection({ onClick }) {
  return (
    <>
      <div className="section" id="summary">
        <div className="section-content">
          <h2 className="section-title">SUMMARY</h2>
          <p>
            Systems engineer with skills mainly in Web Development with
            experience as an L1 Analyst and JavaScript Education Mentor. Skilled
            in information assurance and security incident response. Proficient
            in reviewing and securing sensitive information exposure in HTML,
            CSS, and front-end code, ensuring the confidentiality of personal
            and financial data. Experience in implementing authentication and
            authorization mechanisms, as well as session management and access
            controls. Additionally, as a JavaScript Education Mentor, I have
            planned and conducted educational activities in Git, HTML/CSS, and
            JavaScript (including Node.js), providing guidance to students and
            facilitating their transition into the professional environment.
          </p>
        </div>
        <div className="next-button-container">
        </div>
      </div>
          <button id="next-button" onClick={() => onClick("experience")}>
            Siguiente
          </button>
    </>
  );
}

export default SummarySection;
