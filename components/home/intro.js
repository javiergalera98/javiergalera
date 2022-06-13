import useTranslation from "next-translate/useTranslation";

export default function Intro() {
  const { t } = useTranslation("global");

  return (
    <div className="about-section">
      <div className="about-grid">
        <div className="about-image">
          <div>
            {/* Testimonial card*/}
            <div>
              <img
                src="/images/profile-picture.webp"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="about-content">
          {/* Content area */}
          <div className="about-content-info">
            <h2>
              {t("introTitle")}
            </h2>
            <span>
              iOS Developer
            </span>
            <div className="description">
              <p>{t("introDescription1")}</p>
              <p>{t("introDescription2")}</p>
              <p>{t("introDescription3")}</p>
            </div>
          </div>

          {/* Stats section */}
          <div className="about-stats">
            <dl>
              <div>
                <dt>
                  {t("introStat1Label")}
                </dt>
                <dd>
                  {t("introStat1Value")}
                </dd>
              </div>
              <div>
                <dt>
                  {t("introStat2Label")}
                </dt>
                <dd>
                  {t("introStat2Value")}
                </dd>
              </div>
              <div>
                <dt>
                  {t("introStat3Label")}
                </dt>
                <dd>
                  {t("introStat3Value")}
                </dd>
              </div>
              <div>
                <dt>
                  {t("introStat4Label")}
                </dt>
                <dd>
                  {t("introStat4Value")}
                </dd>
              </div>
            </dl>
            <div className="about-link">
              <a
                href="https://www.byspace.es"
              >
                {" "}
                {t("introSpaceLink")} <span aria-hidden="true">&rarr;</span>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
