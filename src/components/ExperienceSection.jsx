import React from "react";
import { useTranslation } from "react-i18next";

const ExperienceSection = ({ onClick, isActive }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={`section ${isActive ? "" : "hidden"}`} id="experience">
        <div className="section-content">
          <h2 className="section-title">{t("ExperienceSectionTitle")}</h2>
          <ul>
            <li>
              <strong>{t("Experience1Title")}</strong>
              <br />
              <strong>{t("Experience1Subtitle")}</strong>
              <br />
              {t("Experience1Date")}
              <br /> <br />
              <ul>
                <li>{t("Experience1Point1")}</li>
                <li>{t("Experience1Point2")}</li>
                <li>{t("Experience1Point3")}</li>
              </ul>
            </li>
            <br />
            <li>
              <strong>{t("Experience2Title")}</strong>
              <br />
              <strong>{t("Experience2Subtitle")}</strong>
              <br />
              {t("Experience2Date")}
              <br />
              <br />
              <ul>
                <li>{t("Experience2Point1")}</li>
                <li>{t("Experience2Point2")}</li>
                <li>{t("Experience2Point3")}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {isActive && (
        <div className="next-button-container">
          <button id="next-button" onClick={() => onClick("education")}>
            {t("NextButtonLabel")}
          </button>
        </div>
      )}
    </>
  );
};

export default ExperienceSection;
