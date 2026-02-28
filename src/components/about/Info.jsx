import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Info = () => {
    const { t } = useLanguage();
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">{t.about.box1Title}</h3>
                <span className="about__subtitle">{t.about.box1Sub}</span>
            </div>

            <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">{t.about.box2Title}</h3>
                <span className="about__subtitle">{t.about.box2Sub}</span>
            </div>

            <div className="about__box">
                <i className="bx bx-support about__icon"></i>
                <h3 className="about__title">{t.about.box3Title}</h3>
                <span className="about__subtitle">{t.about.box3Sub}</span>
            </div>
        </div>
    );
}

export default Info;
