import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__content">
                        <h3 className="contact__title">Talk to me</h3>

                        <div className="contact__info">
                            <div className="contact__card">
                                <i className="bx bx-mail-send contact__card-icon"></i>
                                <h3 className="contact__card-title">Email</h3>
                                <span className="contact__card-data">jdiassousa11@gmail.com</span>
                                <a href="mailto:jdiassousa11@gmail.com" className="contact__button">Write me 
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                            </div>

                            <div className="contact__card">
                                <i className="bx bxl-github contact__card-icon"></i>
                                <h3 className="contact__card-title">GitHub</h3>
                                <span className="contact__card-data">github.com/jsousa11</span>
                                <a href="https://github.com/jsousa11" className="contact__button">Visit me 
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                            </div>

                            <div className="contact__card">
                                <i className="bx bxl-linkedin contact__card-icon"></i>
                                <h3 className="contact__card-title">LinkedIn</h3>
                                <span className="contact__card-data">linkedin.com/in/jsousa11</span>
                                <a href="https://www.linkedin.com/in/jsousa11/" className="contact__button">Connect with me 
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
