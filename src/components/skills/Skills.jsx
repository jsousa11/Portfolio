import React from "react";
import "./skills.css";
import { FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMysql, SiMongodb } from 'react-icons/si';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>
            <span className="section-subtitle">My technical level</span>

            <div className="skills__container container grid">
                <div className="skills__content">
                    <h3 className="skills__title">Languages</h3>
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
                    </div>
                </div>

                <div className="skills__content">
                    <h3 className="skills__title">Front-end</h3>
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

                    </div>
                </div>

                <div className="skills__content">
                    <h3 className="skills__title">Back-end</h3>
                    <div className="skills__box">
                        <div className="skills__data">
                            <FaNodeJs className="skills__icon" />
                            <h3 className="skills__name">Node JS</h3>
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
                    <h3 className="skills__title">DevOps</h3>
                    <div className="skills__box">
                        <div className="skills__data">
                            <FaDocker className="skills__icon" />
                            <h3 className="skills__name">Docker</h3>
                        </div>
                        <div className="skills__data">
                            <FaGitAlt className="skills__icon" />
                            <h3 className="skills__name">Git</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
