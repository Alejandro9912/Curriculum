import React from "react";
import { useTranslation } from "react-i18next";

const EducationSection = ({ onClick, isActive }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={`section ${isActive ? "" : "hidden"}`} id="education">
        <div className="section-content">
          <h2 className="section-title">{t("EducationSectionTitle")}</h2>
          <ul>
            <li>
              <strong>{t("Education1Title")}</strong>
              <br />
              {t("Education1Subtitle")}
              <br />
              {t("Education1Date")}
            </li>
            <li>
              <strong>{t("Education2Title")}</strong>
              <br />
              {t("Education2Subtitle")}
              <br />
              {t("Education2Date")}
            </li>
          </ul>
        </div>
      </div>
        {isActive && (
          <div className="next-button-container">
            <button id="next-button" onClick={() => onClick("additional")}>
              {t("NextButtonLabel")}
            </button>
          </div>
        )}
    </>
  );
};

export default EducationSection;
