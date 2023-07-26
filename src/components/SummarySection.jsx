import React from "react";
import { useTranslation } from "react-i18next";

const SummarySection = ({ onClick, isActive }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={`section ${isActive ? "" : "hidden"}`} id="summary">
        <div className="section-content">
          <h2 className="section-title">{t("SummarySectionTitle")}</h2>
          <p>{t("SummaryContent")}</p>
        </div>
      </div>
        {isActive && (
          <div className="next-button-container">
            <button id="next-button" onClick={() => onClick("experience")}>
              {t("NextButtonLabel")}
            </button>
          </div>
        )}
    </>
  );
};

export default SummarySection;
