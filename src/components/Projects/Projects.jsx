import React, { useState, useEffect, useCallback } from "react";
import "./projects.css";
import casa1 from "../../assets/projects/casa-1.jpg";
import casa2 from "../../assets/projects/casa-2.jpg";
import casa3 from "../../assets/projects/casa-3.jpg";
import casa4 from "../../assets/projects/casa-4.jpg";
import avenida1 from "../../assets/projects/avenida-1.jpg";
import avenida2 from "../../assets/projects/avenida-2.jpg";
import avenida3 from "../../assets/projects/avenida-3.jpg";
import avenida4 from "../../assets/projects/avenida-4.jpg";
import easyfarming1 from "../../assets/projects/easyfarming-1.png";
import easyfarming2 from "../../assets/projects/easyfarming-2.jpg";
import easyfarming3 from "../../assets/projects/easyfarming-3.jpg";
import easyfarming4 from "../../assets/projects/easyfarming-4.jpg";
import timewise1 from "../../assets/projects/timewise-1.png";
import timewise2 from "../../assets/projects/timewise-2.jpg";
import dinendash1 from "../../assets/projects/dinendash-1.jpg";
import dinendash2 from "../../assets/projects/dinendash-2.jpg";
import dinendash3 from "../../assets/projects/dinendash-3.jpg";
import { FaReact, FaJava, FaJs, FaPython, FaCss3Alt, FaGithub, FaExternalLinkAlt, FaImages, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiMongodb, SiRabbitmq, SiHtml5, SiDocker, SiKubernetes, SiVite, SiStripe, SiNetlify, SiLeaflet } from 'react-icons/si';
import { useLanguage } from '../../context/LanguageContext';

const projects = [
    {
        title: "Casa da Ponta Negra",
        descKey: "casaPontaNegraDesc",
        tags: ["React", "Vite", "Netlify Functions", "Stripe", "Leaflet"],
        source: "https://github.com/jsousa11/Casa_da_Ponta_Negra_Website",
        live: "https://casadapontanegra.com",
        images: [casa1, casa2, casa3, casa4]
    },
    {
        title: "Residências Avenida",
        descKey: "residenciasAvenidaDesc",
        tags: ["React", "Vite", "CSS", "Netlify"],
        source: "https://github.com/jsousa11/residencias-avenida",
        live: "https://residencias-avenida.netlify.app",
        images: [avenida1, avenida2, avenida3, avenida4]
    },
    {
        title: "Easy Farming",
        descKey: "easyFarmingDesc",
        tags: ["CSS", "HTML", "MySQL", "Java", "Spring Boot", "RabbitMQ"],
        source: "https://github.com/jsousa11/IES_Project",
        images: [easyfarming1, easyfarming2, easyfarming3, easyfarming4]
    },
    {
        title: "TimeWise",
        descKey: "timeWiseDesc",
        tags: ["React", "JavaScript", "CSS", "Python", "MongoDB", "RabbitMQ"],
        source: "https://github.com/TimeWise-PI",
        images: [timewise1, timewise2]
    },
    {
        title: "DinenDash",
        descKey: "dinenDashDesc",
        tags: ["React", "Python", "Docker", "Kubernetes", "MongoDB", "RabbitMQ"],
        source: "https://github.com/jsousa11/DinenDash-EGS",
        images: [dinendash1, dinendash2, dinendash3]
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

/*----- Fullscreen gallery for one project's screenshots -----*/
const Lightbox = ({ project, start, onClose, labels }) => {
    const [index, setIndex] = useState(start);
    const total = project.images.length;
    const go = useCallback(step => setIndex(i => (i + step + total) % total), [total]);

    useEffect(() => {
        const onKey = e => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") go(1);
            if (e.key === "ArrowLeft") go(-1);
        };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [go, onClose]);

    return (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={project.title} onClick={onClose}>
            <div className="lightbox__content" onClick={e => e.stopPropagation()}>
                <div className="lightbox__header">
                    <span className="lightbox__title">{project.title}</span>
                    <span className="lightbox__counter">{index + 1} / {total}</span>
                    <button className="lightbox__close" onClick={onClose} aria-label={labels.close}><FaTimes /></button>
                </div>

                <div className="lightbox__stage">
                    <img key={index} src={project.images[index]} alt={`${project.title} ${index + 1}`} className="lightbox__image" />
                    {total > 1 && (
                        <>
                            <button className="lightbox__nav lightbox__nav--prev" onClick={() => go(-1)} aria-label={labels.prev}><FaChevronLeft /></button>
                            <button className="lightbox__nav lightbox__nav--next" onClick={() => go(1)} aria-label={labels.next}><FaChevronRight /></button>
                        </>
                    )}
                </div>

                {total > 1 && (
                    <div className="lightbox__thumbs">
                        {project.images.map((img, i) => (
                            <button key={i} className={i === index ? "lightbox__thumb lightbox__thumb--active" : "lightbox__thumb"} onClick={() => setIndex(i)} aria-label={`${i + 1}`}>
                                <img src={img} alt="" />
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const Projects = () => {
    const { t } = useLanguage();
    const [open, setOpen] = useState(null); // { project, start }
    const close = useCallback(() => setOpen(null), []);

    return (
        <section className="projects section" id="projects">
            <h2 className="section__title" data-reveal>{t.projects.title}</h2>

            <div className="projects__container container grid">
                {projects.map((project, index) => (
                    <article className="project__card" key={project.title} data-reveal style={{ "--reveal-delay": `${(index % 3) * 120}ms` }}>
                        <div className="project__image-wrapper">
                            <img
                                src={project.images[0]}
                                alt={project.title}
                                className="project__image"
                                loading="lazy"
                            />
                            {project.images.length > 1 && (
                                <span className="project__count"><FaImages /> {project.images.length}</span>
                            )}
                            <div className="project__overlay" onClick={() => setOpen({ project, start: 0 })}>
                                <div className="project__overlay-links">
                                    <button
                                        type="button"
                                        className="project__overlay-btn"
                                        onClick={e => { e.stopPropagation(); setOpen({ project, start: 0 }); }}
                                    >
                                        <FaImages />
                                        <span>{t.projects.galleryBtn}</span>
                                    </button>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project__overlay-btn"
                                            onClick={e => e.stopPropagation()}
                                        >
                                            <FaExternalLinkAlt />
                                            <span>{t.projects.liveBtn}</span>
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

            {open && (
                <Lightbox
                    project={open.project}
                    start={open.start}
                    onClose={close}
                    labels={{ close: t.projects.close, prev: t.projects.prev, next: t.projects.next }}
                />
            )}
        </section>
    );
}

export default Projects;
