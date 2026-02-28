import React from "react";
import "./contact.css";
import { useLanguage } from "../../context/LanguageContext";

const Contact = () => {
    const { t } = useLanguage();
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">{t.contact.title}</h2>
            <span className="section__subtitle">{t.contact.subtitle}</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__content">
                        <div className="contact__info">
                            <div className="contact__card">
                                <i className="bx bx-mail-send contact__card-icon"></i>
                                <h3 className="contact__card-title">{t.contact.emailTitle}</h3>
                                <span className="contact__card-data">jdiassousa11@gmail.com</span>
                                <a href="mailto:jdiassousa11@gmail.com" className="contact__button">{t.contact.emailBtn}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                            </div>

                            <div className="contact__card">
                                <i className="bx bxl-github contact__card-icon"></i>
                                <h3 className="contact__card-title">{t.contact.githubTitle}</h3>
                                <span className="contact__card-data">github.com/jsousa11</span>
                                <a href="https://github.com/jsousa11" className="contact__button">{t.contact.githubBtn}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                            </div>

                            <div className="contact__card">
                                <i className="bx bxl-linkedin contact__card-icon"></i>
                                <h3 className="contact__card-title">{t.contact.linkedinTitle}</h3>
                                <span className="contact__card-data">linkedin.com/in/jsousa11</span>
                                <a href="https://www.linkedin.com/in/jsousa11/" className="contact__button">{t.contact.linkedinBtn}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
