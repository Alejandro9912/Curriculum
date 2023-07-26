import React from "react";
import { useTranslation } from "react-i18next";

const WelcomeSection = ({ onClick, isActive }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={`section ${isActive ? "" : "hidden"}`}>
        <div className="section-content">
          <h2 className="section-title" id="Welcome">
            {t("WelcomeTitle")}
          </h2>
        </div>
      </div>
        {isActive && (
          <div className="next-button-container">
            <button id="next-button" onClick={() => onClick("summary")}>
              {t("NextButtonLabel")}
            </button>
          </div>
        )}
    </>
  );
};

export default WelcomeSection;
