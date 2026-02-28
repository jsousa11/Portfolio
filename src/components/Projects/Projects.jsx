import React from "react";
import "./projects.css";
import easyFarmingImage from "../../assets/easyFarming.png";
import timewiseImage from "../../assets/timewise.png";
import { FaReact, FaJava, FaJs, FaPython, FaCss3Alt, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiMongodb, SiRabbitmq, SiHtml5, SiTypescript, SiDocker, SiKubernetes, SiD3Dotjs } from 'react-icons/si';
import { useLanguage } from '../../context/LanguageContext';

const projects = [
    {
        title: "Easy Farming",
        description: "A platform that allows users to input information about their crops and receive timely notifications, helping optimize crop management and farming efficiency.",
        tags: ["React", "CSS", "HTML", "MySQL", "Java", "Spring Boot"],
        source: "https://github.com/jsousa11/IES_Project",
        demo: null,
        image: easyFarmingImage
    },
    {
        title: "TimeWise",
        description: "A system that automates appointment scheduling and suggests complementary activities, enhancing time management for individuals and groups.",
        tags: ["React", "JavaScript", "CSS", "Python", "MongoDB", "RabbitMQ"],
        source: "https://github.com/TimeWise-PI",
        demo: null,
        image: timewiseImage
    },
    {
        title: "Spotystats",
        description: "An interactive music analytics dashboard that visualises Spotify listening patterns, top tracks, artists, and audio features using dynamic data visualisations.",
        tags: ["JavaScript", "TypeScript", "CSS", "HTML", "D3.js"],
        source: "https://github.com/jsousa11/VI-spotify-music-analytics",
        demo: null,
        image: null,
        placeholder: "linear-gradient(135deg, #1DB954 0%, #191414 100%)"
    },
    {
        title: "DinenDash",
        description: "A food delivery platform built on a microservices architecture with dedicated services for authentication, payments, real-time order tracking, and route optimisation.",
        tags: ["Python", "JavaScript", "Docker", "Kubernetes"],
        source: "https://github.com/jsousa11/DinenDash-EGS",
        demo: null,
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
    TypeScript: <SiTypescript />,
    Docker: <SiDocker />,
    Kubernetes: <SiKubernetes />,
    "D3.js": <SiD3Dotjs />
};

const Projects = () => {
    const { t } = useLanguage();
    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">{t.projects.title}</h2>
            <span className="section__subtitle">{t.projects.subtitle}</span>

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
                                    {project.source && (
                                        <a
                                            href={project.source}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project__overlay-btn"
                                            title="Source Code"
                                        >
                                            <FaGithub />
                                            <span>Code</span>
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project__overlay-btn"
                                            title="Live Demo"
                                        >
                                            <FaExternalLinkAlt />
                                            <span>Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="project__info">
                            <h3 className="project__title">{project.title}</h3>
                            <p className="project__description">{project.description}</p>

                            <div className="project__tags">
                                {project.tags.map((tag, i) => (
                                    <span className="project__tag" key={i}>
                                        <span className="project__tag-icon">{techIcons[tag]}</span>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="project__footer">
                                {project.source && (
                                    <a
                                        href={project.source}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project__btn button button--flex"
                                    >
                                        <FaGithub className="button__icon" />
                                        Source
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project__btn button button--flex project__btn--demo"
                                    >
                                        <FaExternalLinkAlt className="button__icon" />
                                        Live Demo
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