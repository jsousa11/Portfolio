import React from "react";
import "./projects.css";
import easyFarmingImage from "../../assets/easyFarming.png";
import timewiseImage from "../../assets/timewise.png";
import casaPontaNegraImage from "../../assets/casaPontaNegra.jpg";
import residenciasAvenidaImage from "../../assets/residenciasAvenida.jpg";
import { FaReact, FaJava, FaJs, FaPython, FaCss3Alt, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiMongodb, SiRabbitmq, SiHtml5, SiDocker, SiKubernetes, SiVite, SiStripe, SiNetlify, SiLeaflet } from 'react-icons/si';
import { useLanguage } from '../../context/LanguageContext';

const projects = [
    {
        title: "Casa da Ponta Negra",
        descKey: "casaPontaNegraDesc",
        tags: ["React", "Vite", "Netlify Functions", "Stripe", "Leaflet"],
        source: "https://github.com/jsousa11/Casa_da_Ponta_Negra_Website",
        live: "https://casadapontanegra.com",
        image: casaPontaNegraImage
    },
    {
        title: "Residências Avenida",
        descKey: "residenciasAvenidaDesc",
        tags: ["React", "Vite", "CSS", "Netlify"],
        source: null,
        live: "https://residencias-avenida.netlify.app",
        image: residenciasAvenidaImage
    },
    {
        title: "Easy Farming",
        descKey: "easyFarmingDesc",
        tags: ["React", "CSS", "HTML", "MySQL", "Java", "Spring Boot"],
        source: "https://github.com/jsousa11/IES_Project",
        image: easyFarmingImage
    },
    {
        title: "TimeWise",
        descKey: "timeWiseDesc",
        tags: ["React", "JavaScript", "CSS", "Python", "MongoDB", "RabbitMQ"],
        source: "https://github.com/TimeWise-PI",
        image: timewiseImage
    },
    {
        title: "DinenDash",
        descKey: "dinenDashDesc",
        tags: ["Python", "JavaScript", "Docker", "Kubernetes"],
        source: "https://github.com/jsousa11/DinenDash-EGS",
        image: null,
        placeholder: "linear-gradient(135deg, #f97316 0%, #1e293b 100%)"
    }
];

const techIcons = {
    React: <FaReact />,
    CSS: <FaCss3Alt />,
    HTML: <SiHtml5 />,
    MySQL: <SiMysql />,
    Java: <FaJava />,
    "Spring Boot": <SiSpringboot />,
    JavaScript: <FaJs />,
    Python: <FaPython />,
    MongoDB: <SiMongodb />,
    RabbitMQ: <SiRabbitmq />,
    Docker: <SiDocker />,
    Kubernetes: <SiKubernetes />,
    Vite: <SiVite />,
    Stripe: <SiStripe />,
    Netlify: <SiNetlify />,
    "Netlify Functions": <SiNetlify />,
    Leaflet: <SiLeaflet />
};

const Projects = () => {
    const { t } = useLanguage();
    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">{t.projects.title}</h2>


            <div className="projects__container container grid">
                {projects.map((project, index) => (
                    <article className="project__card" key={index}>
                        <div className="project__image-wrapper">
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project__image"
                                    loading="lazy"
                                />
                            ) : (
                                <div
                                    className="project__image-placeholder"
                                    style={{ background: project.placeholder }}
                                >
                                    <span className="project__placeholder-title">{project.title}</span>
                                </div>
                            )}
                            <div className="project__overlay">
                                <div className="project__overlay-links">
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project__overlay-btn"
                                            title={t.projects.liveBtn}
                                        >
                                            <FaExternalLinkAlt />
                                            <span>{t.projects.liveBtn}</span>
                                        </a>
                                    )}
                                    {project.source && (
                                        <a
                                            href={project.source}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project__overlay-btn"
                                            title="Source Code"
                                        >
                                            <FaGithub />
                                            <span>{t.projects.codeBtn}</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="project__info">
                            <h3 className="project__title">{project.title}</h3>
                            <p className="project__description">{t.projects[project.descKey]}</p>

                            <div className="project__tags">
                                {project.tags.map((tag, i) => (
                                    <span className="project__tag" key={i}>
                                        <span className="project__tag-icon">{techIcons[tag]}</span>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="project__footer">
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project__btn button button--flex"
                                    >
                                        <FaExternalLinkAlt className="button__icon" />
                                        {t.projects.liveBtn}
                                    </a>
                                )}
                                {project.source && (
                                    <a
                                        href={project.source}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={project.live ? "project__btn project__btn--demo button button--flex" : "project__btn button button--flex"}
                                    >
                                        <FaGithub className="button__icon" />
                                        {t.projects.codeBtn}
                                    </a>
                                )}

                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;