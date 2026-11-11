import React, { createContext, useState, useContext, useEffect } from 'react';

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
            description: "I'm a Computer Science Master's student at the University of Aveiro, and I also build websites for real clients, from booking platforms to real estate showcases. My academic journey has sharpened my ability to tackle challenges and work effectively within teams.",
            contactBtn: 'Contact Me',
            scrollDown: 'Scroll down',
        },
        about: {
            title: 'About Me',
            box1Title: "Master's Student in Computer Science",
            box1Sub: "Currently pursuing a Master's in Computer Science at the University of Aveiro, having completed a Bachelor's in Computer Science and Engineering.",
            box2Title: 'My preferences',
            box2Sub: "Throughout my degree I had the opportunity to work with various technologies, but I've always been more drawn to backend development - solving complex problems and building the core functionalities of applications.",
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
            exp1Date: 'Feb 2025 - Jun 2026',
            exp1Desc: 'Collaborated on a research project within a multidisciplinary team, applying Machine Learning techniques, algorithm development, and Data Science methodologies.',
            exp2Title: 'Rent-a-Car Assistant',
            exp2Company: 'SolBrava Rent-a-Car',
            exp2Date: 'Jun 2025 - Sep 2025',
            exp2Desc: 'Responsible for customer service, vehicle handovers and returns, contract management.',
            exp3Title: 'Customer Service',
            exp3Company: 'Universidade de Aveiro',
            exp3Date: 'Feb 2024 - Jun 2024',
            exp3Desc: 'Providing direct assistance to the public at atUA, addressing inquiries to students and staff about university matters and ensuring a positive customer experience.',
        },
        projects: {
            title: 'Projects',
            codeBtn: 'Code',
            liveBtn: 'Live site',
            casaPontaNegraDesc: 'Live website for a holiday rental in the Azores. Bilingual (PT/EN), with direct bookings paid through Stripe, availability synced with Airbnb and Booking.com, automatic emails and an interactive map, powered by Netlify serverless functions.',
            residenciasAvenidaDesc: 'Website for the off-plan sale of two new apartments in Vila do Porto, Azores. Presents each unit with floor plans, room-by-room areas, a photo gallery with lightbox and location, with a direct contact channel for buyers.',
            easyFarmingDesc: 'A platform that allows users to input information about their crops and receive timely notifications, helping optimize crop management and farming efficiency.',
            timeWiseDesc: 'A system that automates appointment scheduling and suggests complementary activities, enhancing time management for individuals and groups.',
            dinenDashDesc: 'A food delivery platform built on a microservices architecture with dedicated services for authentication, payments, real-time order tracking, and route optimisation.',
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
            description: "Sou estudante de Mestrado em Engenharia Informática na Universidade de Aveiro e desenvolvo também sites para clientes reais, de plataformas de reservas a montras imobiliárias. Ao longo do meu percurso académico, desenvolvi a capacidade de resolver problemas complexos e colaborar eficazmente em equipa.",
            contactBtn: 'Contacta-me',
            scrollDown: 'Scroll down',
        },
        about: {
            title: 'Sobre Mim',
            box1Title: 'Mestrando em Engenharia Informática',
            box1Sub: 'Estou atualmente a frequentar o Mestrado em Engenharia Informática na Universidade de Aveiro, após ter concluído a Licenciatura em Engenharia Informática e de Computadores.',
            box2Title: 'As minhas preferências',
            box2Sub: 'Ao longo do meu curso, trabalhei com diversas tecnologias, mas tenho uma preferência clara pelo desenvolvimento backend — construir a lógica central das aplicações e resolver os problemas mais desafiantes por detrás dos bastidores.',
            box3Title: 'Soft Skills',
            box3Sub: 'A participação numa associação de estudantes desenvolveu as minhas competências de trabalho em equipa e comunicação, preparando-me para diferentes tipos de ambientes.',
            downloadCV: 'Download do meu CV',
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
            edu2Title: 'Mestrado em Engenharia de Computadores e Telemática (não concluído)',
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
            exp1Date: 'Fev 2025 - Jun 2026',
            exp1Desc: 'Colaboração num projeto de investigação multidisciplinar, aplicando técnicas de Machine Learning, desenvolvimento de algoritmos e metodologias de Data Science.',
            exp2Title: 'Assistente de Rent-a-Car',
            exp2Company: 'SolBrava Rent-a-Car',
            exp2Date: 'Jun 2025 - Set 2025',
            exp2Desc: 'Atendimento ao cliente, entrega e receção de viaturas, gestão de contratos.',
            exp3Title: 'Atendimento ao Público',
            exp3Company: 'Universidade de Aveiro',
            exp3Date: 'Fev 2024 - Jun 2024',
            exp3Desc: 'Assistência direta ao público no atUA, resposta a questões e resolução de problemas dos alunos/docentes com a universidade.',
        },
        projects: {
            title: 'Projetos',
            codeBtn: 'Code',
            liveBtn: 'Live site',
            casaPontaNegraDesc: 'Live website for a holiday rental in the Azores. Bilingual (PT/EN), with direct bookings paid through Stripe, availability synced with Airbnb and Booking.com, automatic emails and an interactive map, powered by Netlify serverless functions.',
            residenciasAvenidaDesc: 'Website for the off-plan sale of two new apartments in Vila do Porto, Azores. Presents each unit with floor plans, room-by-room areas, a photo gallery with lightbox and location, with a direct contact channel for buyers.',
            easyFarmingDesc: 'Plataforma que permite aos utilizadores introduzir informações sobre as suas culturas e receber notificações atempadas, ajudando a otimizar a gestão agrícola.',
            timeWiseDesc: 'Sistema que automatiza o agendamento de compromissos e sugere atividades complementares, melhorando a gestão do tempo.',
            dinenDashDesc: 'Plataforma de entrega de comida assente numa arquitetura de microsserviços, com serviços para autenticação, pagamentos, rastreamento de pedidos em tempo real e otimização de rotas.',
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

const STORAGE_KEY = 'portfolio-language';

// Saved choice first, then the browser language (PT if it starts with "pt"), else EN.
const getInitialLanguage = () => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'en' || saved === 'pt') return saved;
    } catch (e) { /* storage unavailable */ }
    const browserLang = (navigator.languages && navigator.languages[0]) || navigator.language || '';
    return browserLang.toLowerCase().startsWith('pt') ? 'pt' : 'en';
};

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(getInitialLanguage);
    const toggleLanguage = () => setLanguage(l => (l === 'en' ? 'pt' : 'en'));

    useEffect(() => {
        document.documentElement.lang = language;
        try { localStorage.setItem(STORAGE_KEY, language); } catch (e) { /* storage unavailable */ }
    }, [language]);
    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
