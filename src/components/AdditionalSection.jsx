import React from "react";

const AdditionalSection = ({ onClick }) => {
  // Contenido de la sección adicional
  const additionalContent = [
    {
      title: "Skills",
      content:
        "Teamwork, Problem Solving, Collaboration, Responsibility, Creativity",
    },
    {
      title: "Web Development",
      content: "JavaScript, HTML/CSS, Node.js, React.js",
    },
    {
      title: "Programming Languages",
      content: "MATLAB, Python, SQL, PHP, Java",
    },
    { title: "Languages", content: "Spanish, English-B1" },
    {
      title: "Certifications & Training",
      content: "Security Awareness Training, KITE - B1 English",
    },
  ];

  return (
    <>
      <div className="section" id="additional">
        <div className="section-content">
          <h2 className="section-title">ADDITIONAL</h2>
          <ul>
            {additionalContent.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="next-button-container">
        <button id="next-button" onClick={() => onClick("Welcome")}>
          Volver
        </button>
      </div>
    </>
  );
};

export default AdditionalSection;
