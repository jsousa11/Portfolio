import React from "react";
import "./projects.css";
import easyFarmingImage from "../../assets/easyFarming.png";
import timewiseImage from "../../assets/timewise.png";
import { FaReact, FaJava, FaJs, FaPython, FaCss3Alt } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiMongodb, SiRabbitmq, SiHtml5 } from 'react-icons/si';

const projects = [
    {   
        title: "Easy Farming",
        description: "This platform allows users to input information about their crops and receive timely notifications, helping optimize crop management and farming efficiency.",
        tags: ["React", "CSS", "HTML", "MySQL", "Java", "Spring Boot"],
        source: "https://github.com/jsousa11/IES_Project",
        image: easyFarmingImage
    },
    {
        title: "TimeWise",
        description: "This project designs a system that automates appointment scheduling and suggests complementary activities, enhancing time management for individuals and groups, ultimately improving overall well-being.",
        tags: ["React", "JavaScript", "CSS", "Python", "MongoDB", "RabbitMQ"],
        source: "https://github.com/TimeWise-PI",
        image: timewiseImage
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
    RabbitMQ: <SiRabbitmq />
};

const Projects = () => {
    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <div className="projects__container container grid">
                {projects.map((project, index) => (
                    <div className="project__box" key={index}>
                        <img src={project.image} alt={project.title} className="project__image" />
                        <h3 className="project__title">{project.title}</h3>
                        <p className="project__description">{project.description}</p>
                        <div className="project__tags">
                            {project.tags.map((tag, index) => (
                                <span className="project__tag" key={index}>
                                    {techIcons[tag]}
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a href={project.source} className="project__button">Source</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;