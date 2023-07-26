import React from "react";

function ThanksSection({ onClick }) {
  return (
    <>
      <div className="section">
        <div className="section-content">
          <h2 id="Thanks" className="section-title">
            THANKS!!
          </h2>
        </div>
      </div>
      <div className="next-button-container">
        <button id="next-button" onClick={() => onClick("Welcome")}>
          Volver
        </button>
      </div>
    </>
  );
}

export default ThanksSection;
