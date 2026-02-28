import React, { createContext, useState, useContext } from 'react';

const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            qualification: 'Qualification',
            projects: 'Projects',
            contact: 'Contact',
        },
        home: {
            subtitle: 'Computer Engineer',
            description: "I'm a Computer Science Master's student at the University of Aveiro. My academic journey has sharpened my ability to tackle challenges and work effectively within teams.",
            contactBtn: 'Contact Me',
            scrollDown: 'Scroll down',
        },
        about: {
            title: 'About Me',
            box1Title: "Master's Student in Computer Science",
            box1Sub: "Currently pursuing a Master's in Computer Science at the University of Aveiro, having completed a Bachelor's in Computer Science and Engineering.",
            box2Title: 'My preferences',
            box2Sub: "Throughout my degree I had the opportunity to work with various technologies, but I've always been more drawn to backend development — solving complex problems and building the core functionalities of applications.",
            box3Title: 'Soft Skills',
            box3Sub: "Being part of a student association enhanced my teamwork and communication skills, preparing me to work effectively in diverse environments.",
            downloadCV: 'Download CV',
        },
        skills: {
            title: 'Skills',
            subtitle: 'My technical level',
            languages: 'Languages',
            frontend: 'Front-end',
            backend: 'Back-end',
            devops: 'DevOps',
            testing: 'Testing',
        },
        qualification: {
            title: 'Qualification',
            subtitle: 'My personal journey',
            educationTab: 'Education',
            experienceTab: 'Experience',
            edu1Title: "Master's in Computer Science",
            edu1School: 'University of Aveiro',
            edu1Date: '2025 - Present',
            edu2Title: "Master's in Computer and Telematics Engineering (not finished)",
            edu2School: 'University of Aveiro',
            edu2Date: '2024 - 2025',
            edu3Title: "Bachelor's in Computer Science",
            edu3School: 'University of Aveiro',
            edu3Date: '2020 - 2024',
            edu4Title: 'Marketing Team, AETTUA',
            edu4Sub: 'Contributing to the promotion of events and initiatives within the association, enhancing teamwork, communication, and project management skills.',
            edu4Date: '2022 - 2025',
            exp1Title: 'Fellow Researcher',
            exp1Company: 'ILLIANCE Agenda',
            exp1Date: 'Feb 2025 - Present',
            exp1Desc: 'Collaborating on a research project within a multidisciplinary team, applying Machine Learning techniques, algorithm development, and Data Science methodologies.',
            exp2Title: 'Rent-a-Car Assistant',
            exp2Company: 'SolBrava Rent-a-Car',
            exp2Date: 'Jun 2025 - Sep 2025',
            exp2Desc: 'Responsible for customer service, vehicle handovers and returns, contract management, and ensuring efficient daily operations.',
            exp3Title: 'Customer Service',
            exp3Company: 'Universidade de Aveiro',
            exp3Date: 'Feb 2024 - Jun 2024',
            exp3Desc: 'Providing direct assistance to the public at atUA, addressing inquiries and ensuring a positive customer experience.',
        },
        projects: {
            title: 'Projects',
            subtitle: 'What I have built',
        },
        contact: {
            title: 'Get in touch',
            subtitle: 'Contact Me',
            emailTitle: 'Email',
            emailBtn: 'Write me',
            githubTitle: 'GitHub',
            githubBtn: 'Visit me',
            linkedinTitle: 'LinkedIn',
            linkedinBtn: 'Connect with me',
        },
        footer: {
            about: 'About',
            skills: 'Skills',
            portfolio: 'Portfolio',
        },
    },
    pt: {
        nav: {
            home: 'Início',
            about: 'Sobre',
            skills: 'Competências',
            qualification: 'Qualificação',
            projects: 'Projetos',
            contact: 'Contacto',
        },
        home: {
            subtitle: 'Engenheiro Informático',
            description: "Sou estudante de Mestrado em Engenharia Informática na Universidade de Aveiro. O meu percurso académico aprimorou a minha capacidade de resolver desafios e trabalhar eficazmente em equipa.",
            contactBtn: 'Contacta-me',
            scrollDown: 'Desliza',
        },
        about: {
            title: 'Sobre Mim',
            box1Title: 'Mestrando em Engenharia Informática',
            box1Sub: 'A frequentar o Mestrado em Engenharia Informática na Universidade de Aveiro, após concluir a Licenciatura em Engenharia Informática e de Computadores.',
            box2Title: 'As minhas preferências',
            box2Sub: 'Ao longo do meu curso, trabalhei com diversas tecnologias, mas sempre me senti mais atraído pelo desenvolvimento backend — resolver problemas complexos e construir as funcionalidades centrais das aplicações.',
            box3Title: 'Soft Skills',
            box3Sub: 'A participação numa associação estudantil desenvolveu as minhas competências de trabalho em equipa e comunicação, preparando-me para ambientes diversificados.',
            downloadCV: 'Descarregar CV',
        },
        skills: {
            title: 'Competências',
            subtitle: 'O meu nível técnico',
            languages: 'Linguagens',
            frontend: 'Front-end',
            backend: 'Back-end',
            devops: 'DevOps',
            testing: 'Testes',
        },
        qualification: {
            title: 'Qualificação',
            subtitle: 'O meu percurso',
            educationTab: 'Educação',
            experienceTab: 'Experiência',
            edu1Title: 'Mestrado em Engenharia Informática',
            edu1School: 'Universidade de Aveiro',
            edu1Date: '2025 - Presente',
            edu2Title: 'Mestrado em Engenharia de Computadores e Telemática',
            edu2School: 'Universidade de Aveiro',
            edu2Date: '2024 - 2025',
            edu3Title: 'Licenciatura em Engenharia Informática',
            edu3School: 'Universidade de Aveiro',
            edu3Date: '2020 - 2024',
            edu4Title: 'Equipa de Marketing, AETTUA',
            edu4Sub: 'Contribuição para a promoção de eventos e iniciativas da associação, desenvolvendo competências de trabalho em equipa, comunicação e gestão de projetos.',
            edu4Date: '2022 - 2025',
            exp1Title: 'Investigador Bolseiro',
            exp1Company: 'ILLIANCE Agenda',
            exp1Date: 'Fev 2025 - Presente',
            exp1Desc: 'Colaboração num projeto de investigação multidisciplinar, aplicando técnicas de Machine Learning, desenvolvimento de algoritmos e metodologias de Data Science.',
            exp2Title: 'Assistente de Rent-a-Car',
            exp2Company: 'SolBrava Rent-a-Car',
            exp2Date: 'Jun 2025 - Set 2025',
            exp2Desc: 'Atendimento ao cliente, entrega e receção de viaturas, gestão de contratos e garantia de operações diárias eficientes.',
            exp3Title: 'Atendimento ao Público',
            exp3Company: 'Universidade de Aveiro',
            exp3Date: 'Fev 2024 - Jun 2024',
            exp3Desc: 'Assistência direta ao público no atUA, resposta a questões e resolução de problemas, garantindo uma experiência positiva.',
        },
        projects: {
            title: 'Projetos',
            subtitle: 'O que construí',
        },
        contact: {
            title: 'Contacta-me',
            subtitle: 'Entra em contacto',
            emailTitle: 'Email',
            emailBtn: 'Escreve-me',
            githubTitle: 'GitHub',
            githubBtn: 'Visita-me',
            linkedinTitle: 'LinkedIn',
            linkedinBtn: 'Conecta comigo',
        },
        footer: {
            about: 'Sobre',
            skills: 'Competências',
            portfolio: 'Portfólio',
        },
    },
};

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const toggleLanguage = () => setLanguage(l => (l === 'en' ? 'pt' : 'en'));
    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
