import React from "react";
import "./skills.css";
import { FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMysql, SiMongodb, SiCplusplus, SiSpringboot, SiKubernetes, SiD3Dotjs, SiSelenium, SiCucumber } from 'react-icons/si';
import { useLanguage } from '../../context/LanguageContext';

const Skills = () => {
    const { t } = useLanguage();
    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">{t.skills.title}</h2>
            <span className="section-subtitle">{t.skills.subtitle}</span>

            <div className="skills__container container grid">
                <div className="skills__content">
                    <h3 className="skills__title">{t.skills.languages}</h3>
                    <div className="skills__box">
                        <div className="skills__data">
                            <FaPython className="skills__icon" />
                            <h3 className="skills__name">Python</h3>
                        </div>
                        <div className="skills__data">
                            <FaJs className="skills__icon" />
                            <h3 className="skills__name">JavaScript</h3>
                        </div>
                        <div className="skills__data">
                            <FaJava className="skills__icon" />
                            <h3 className="skills__name">Java</h3>
                        </div>
                        <div className="skills__data">
                            <SiCplusplus className="skills__icon" />
                            <h3 className="skills__name">C++</h3>
                        </div>
                    </div>
                </div>

                <div className="skills__content">
                    <h3 className="skills__title">{t.skills.frontend}</h3>
                    <div className="skills__box">
                        <div className="skills__data">
                            <FaReact className="skills__icon" />
                            <h3 className="skills__name">React JS</h3>
                        </div>
                        
                        <div className="skills__data">
                            <SiTypescript className="skills__icon" />
                            <h3 className="skills__name">TypeScript</h3>
                        </div>

                        <div className="skills__data">
                            <SiTailwindcss className="skills__icon" />
                            <h3 className="skills__name">Tailwind CSS</h3>
                        </div>
                        <div className="skills__data">
                            <SiD3Dotjs className="skills__icon" />
                            <h3 className="skills__name">D3.js</h3>
                        </div>

                    </div>
                </div>

                <div className="skills__content">
                    <h3 className="skills__title">{t.skills.backend}</h3>
                    <div className="skills__box">
                        <div className="skills__data">
                            <FaNodeJs className="skills__icon" />
                            <h3 className="skills__name">Node JS</h3>
                        </div>
                        <div className="skills__data">
                            <SiSpringboot className="skills__icon" />
                            <h3 className="skills__name">Spring Boot</h3>
                        </div>
                        <div className="skills__data">
                            <SiMongodb className="skills__icon" />
                            <h3 className="skills__name">MongoDB</h3>
                        </div>
                        <div className="skills__data">
                            <SiMysql className="skills__icon" />
                            <h3 className="skills__name">MySQL</h3>
                        </div>
                    </div>
                </div>

                <div className="skills__content">
                    <h3 className="skills__title">{t.skills.devops}</h3>
                    <div className="skills__box">
                        <div className="skills__data">
                            <FaDocker className="skills__icon" />
                            <h3 className="skills__name">Docker</h3>
                        </div>
                        <div className="skills__data">
                            <SiKubernetes className="skills__icon" />
                            <h3 className="skills__name">Kubernetes</h3>
                        </div>
                        <div className="skills__data">
                            <FaGitAlt className="skills__icon" />
                            <h3 className="skills__name">Git</h3>
                        </div>
                    </div>
                </div>

                <div className="skills__content">
                    <h3 className="skills__title">{t.skills.testing}</h3>
                    <div className="skills__box">
                        <div className="skills__data">
                            <SiSelenium className="skills__icon" />
                            <h3 className="skills__name">Selenium</h3>
                        </div>
                        <div className="skills__data">
                            <SiCucumber className="skills__icon" />
                            <h3 className="skills__name">Cucumber</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
