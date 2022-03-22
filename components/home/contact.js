import useTranslation from "next-translate/useTranslation";

export default function Contact() {
  const { t } = useTranslation("global");

  return (
    <div className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">{t("contactTitle")}</h2>
        <span className="contact-subtitle">{t("contactSubtitle")}</span>
        <div className="contact-buttons">
          <div className="contact-button-left">
            <a href="mailto:jgalera@byspace.es">{t("contactButton1")}</a>
          </div>
          <div className="contact-button-right">
            <a href="#">{t("contactButton2")}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
