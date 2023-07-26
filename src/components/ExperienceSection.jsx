// components/ExperienceSection/ExperienceSection.jsx
import React from "react";

const ExperienceSection = ({ onClick }) => {
  const experienceData = [
    {
      company: "Appgate – Bogotá, Colombia",
      position: "L1 Analyst",
      period: "Apr 2022 – Present",
      responsibilities: [
        "Conducting checks for sensitive information exposure: Reviewing HTML, CSS, and front-end code to ensure that sensitive information, including usernames, passwords, credit card information, and other personal data, is not being exposed.",
        "Verifying authentication and authorization: Reviewing front-end components to ensure the implementation of proper authentication and authorization mechanisms. This includes evaluating login screens, access controls, and session management.",
        "Providing initial response to IT security incidents for diverse clients and documenting actions taken during incident management.",
      ],
    },
    {
      company: "ADA School – Bogotá, Colombia",
      position: "JavaScript Education Mentor",
      period: "Feb 2022 – Present",
      responsibilities: [
        "Designing and planning educational activities as part of the school's educational project. These activities focus on teaching the following topics: Git, HTML / CSS, JavaScript - Node.js.",
        "Managing groups through effective communication and a thorough understanding of their current needs.",
        "Assisting students in their transition to the professional world by providing guidance in both academic and professional aspects.",
      ],
    },
  ];

  return (
    <>
      <div className="section" id="experience">
        <div className="section-content">
          <h2 className="section-title">EXPERIENCE</h2>
          <ul>
            {experienceData.map((experience, index) => (
              <li key={index}>
                <strong>{experience.company}</strong>
                <br />
                <strong>{experience.position}</strong>
                <br />
                {experience.period}
                <br />
                <ul>
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="next-button-container">
        <button id="next-button" onClick={() => onClick("education")}>
          Siguiente
        </button>
      </div>
    </>
  );
};

export default ExperienceSection;
