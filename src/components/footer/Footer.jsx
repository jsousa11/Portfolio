import React from "react";
import "./footer.css";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">João Sousa</h1>

                <ul className="footer__list">
                    <li><a href="#about" className="footer__link">{t.footer.about}</a></li>
                    <li><a href="#skills" className="footer__link">{t.footer.skills}</a></li>
                    <li><a href="#projects" className="footer__link">{t.footer.portfolio}</a></li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/jsousa11/" className="home__social-icon" target="_blank" rel="noreferrer">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>
                    <a href="https://github.com/jsousa11" className="home__social-icon" target="_blank" rel="noreferrer">
                        <i className="uil uil-github-alt"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
