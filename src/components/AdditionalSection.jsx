import React from "react";
import { useTranslation } from "react-i18next";

const AdditionalSection = ({ onClick, isActive }) => {
  const { t } = useTranslation();

  // Contenido de la sección adicional
  const additionalContent = [
    {
      title: t("Additional1Title"),
      content: t("Additional1Content"),
    },
    {
      title: t("Additional2Title"),
      content: t("Additional2Content"),
    },
    {
      title: t("Additional3Title"),
      content: t("Additional3Content"),
    },
    {
      title: t("Additional4Title"),
      content: t("Additional4Content"),
    },
    {
      title: t("Additional5Title"),
      content: t("Additional5Content"),
    },
  ];

  return (
    <>
      <div className={`section ${isActive ? "" : "hidden"}`} id="additional">
        <div className="section-content">
          <h2 className="section-title">{t("AdditionalSectionTitle")}</h2>
          <ul>
            {additionalContent.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong> {item.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
        {isActive && (
          <div className="next-button-container">
            <button id="next-button" onClick={() => onClick("Welcome")}>
              {t("BackButtonLabel")}
            </button>
          </div>
        )}
    </>
  );
};

export default AdditionalSection;
