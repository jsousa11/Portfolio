import React from "react";
import "./qualification.css";
import { useLanguage } from "../../context/LanguageContext";

const QualItem = ({ title, sub, desc, date, last }) => (
    <div className={`qual__item${last ? ' qual__item--last' : ''}`}>
        <span className="qual__dot"></span>
        <div className="qual__body">
            <h3 className="qual__title">{title}</h3>
            {sub  && <span className="qual__subtitle">{sub}</span>}
            {desc && <span className="qual__desc">{desc}</span>}
            <div className="qual__date">
                <i className="uil uil-calendar-alt"></i> {date}
            </div>
        </div>
    </div>
);

const Qualification = () => {
    const { t } = useLanguage();

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">{t.qualification.title}</h2>
            <span className="section__subtitle">{t.qualification.subtitle}</span>

            <div className="qual__container container">

                {/* ===== EDUCATION ===== */}
                <div className="qual__column">
                    <h3 className="qual__heading">
                        <i className="uil uil-graduation-cap"></i>
                        {t.qualification.educationTab}
                    </h3>
                    <div className="qual__list">
                        <QualItem title={t.qualification.edu1Title} sub={t.qualification.edu1School} date={t.qualification.edu1Date} />
                        <QualItem title={t.qualification.edu2Title} sub={t.qualification.edu2School} date={t.qualification.edu2Date} />
                        <QualItem title={t.qualification.edu3Title} sub={t.qualification.edu3School} date={t.qualification.edu3Date} />
                        <QualItem title={t.qualification.edu4Title} desc={t.qualification.edu4Sub} date={t.qualification.edu4Date} last />
                    </div>
                </div>

                {/* ===== EXPERIENCE ===== */}
                <div className="qual__column">
                    <h3 className="qual__heading">
                        <i className="uil uil-briefcase-alt"></i>
                        {t.qualification.experienceTab}
                    </h3>
                    <div className="qual__list">
                        <QualItem title={t.qualification.exp1Title} sub={t.qualification.exp1Company} desc={t.qualification.exp1Desc} date={t.qualification.exp1Date} />
                        <QualItem title={t.qualification.exp2Title} sub={t.qualification.exp2Company} desc={t.qualification.exp2Desc} date={t.qualification.exp2Date} />
                        <QualItem title={t.qualification.exp3Title} sub={t.qualification.exp3Company} desc={t.qualification.exp3Desc} date={t.qualification.exp3Date} last />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Qualification;

