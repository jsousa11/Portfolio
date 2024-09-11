import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">João Sousa</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a> 
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a> 
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a> 
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/jsousa11/" className="home__social-icon" target="_blank">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>

                    <a href="https://github.com/jsousa11" className="home__social-icon" target="_blank">
                        <i className="uil uil-github-alt"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;