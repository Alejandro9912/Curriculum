import React from "react";

function EducationSection({ onClick }) {
  // Contenido de la sección de educación
  const educationContent = [
    {
      institution:
        "Universidad Distrital Francisco Jose de Caldas | Bogotá, Colombia",
      degree: "Systems Engineer",
      date: "Feb 2017 - Feb 2023",
    },
    {
      institution:
        "Escuela Tecnológica Instituto Técnico Central de La Salle | Bogotá, Colombia",
      degree: "Technical bachelor in industrial processes",
      date: "Feb 2011 - Dec 2016",
    },
  ];

  return (
    <>
      <div className="section" id="education">
        <div className="section-content">
          <h2 className="section-title">EDUCATION</h2>
          <ul>
            {educationContent.map((item, index) => (
              <li key={index}>
                <strong>{item.institution}</strong>
                <br />
                {item.degree}
                <br />
                {item.date}
              </li>
            ))}
          </ul>
        </div>
        <div className="next-button-container">
        </div>
      </div>
          <button id="next-button" onClick={() => onClick("additional")}>
            Siguiente
          </button>
    </>
  );
}

export default EducationSection;
