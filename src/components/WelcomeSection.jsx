import React from "react";

function WelcomeSection({ onClick }) {
  return (
    <>
      <div className="section">
        <div className="section-content">
          <h2 id="Welcome" className="section-title">
            WELCOME!!
          </h2>
        </div>
        <div className="next-button-container"></div>
      </div>
        <button id="next-button" onClick={() => onClick("summary")}>
          Siguiente
        </button>
    </>
  );
}

export default WelcomeSection;
