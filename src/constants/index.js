import { wizcommerce } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    tailwindcss,
    typescript,
    golang,
    docker,
    aws
} from "../assets/icons";
export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: golang,
        name:"GoLang",
        type: "Backend",
    },
    {
        imageUrl: docker,
        name:"Docker",
        type: "Backend",
    },
    {
        imageUrl: aws,
        name:"AWS",
        type: "Cloud",
    },
    
];

export const experiences = [
    {
        title: "Software Engineer I",
        company_name: "Wizcommerce",
        icon: wizcommerce,
        iconBg: "#f3f4f6",
        date: "July 2025 - Present",
        points: [
            "Driving migration from React to a PHP-based ecosystem, ensuring backward compatibility, zero downtime, and optimized performance for enterprise clients.",
            "Leading development of a core B2B product, increasing release velocity by 30% through efficient sprint planning, execution and taking ownership of architecture decisions",
            "Contributed to product roadmap planning and led feature development across teams, impacting 30+ clients.",
            "Customized WordPress components and plugins, enhancing marketing automation and SEO-driven content delivery.",
            "Mentored peers on React best practices and code quality, fostering a culture of clean, modular, and efficient development."
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Wizcommerce",
        icon: wizcommerce,
        iconBg: "#f3f4f6",
        date: "July 2024 - June 2025",
        points: [
            "Reduced database load by 30% by eliminating unnecessary API requests, improving system efficiency.",
            "Fixed multiple critical bugs, leading to a 20% improvement in overall system stability.",
            "Leveraged user-centric design principles to create intuitive features, boosting user satisfaction by 30%.",
            "Spearheaded end-to-end product development to streamline workflows resulting in a 25% faster go-to-market for websites.",
            "Collaborated with cross-functional teams to develop highly responsive web applications using React.js and TypeScript.",
            "Built a JSON-driven rule engine to handle complex cart discount calculations and validations, improving checkout efficiency and boosting overall performance by 30%."
        ],
    }
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'mailto:aneeshx000@gmail.com',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/007aneesh/',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/aneeshaggarwal/',
    }
];

export const projects = [
    
    {
        theme: 'btn-back-yellow',
        name: 'Vital Vault - Healthcare Data Management System',
        description: 'Vital Vault is a secure and scalable healthcare data management system that ensures privacy and efficiency in handling medical records. This backend service is built using Node.js, Express.js, PostgreSQL, and Prisma ORM, with a config-based multi-tenant system and AI-powered voice transcription.',
        demo_link: 'https://vital-vault-plus.vercel.app/', 
        tags: ['Full Stack'],
        source_code_link: 'https://github.com/007aneesh/vital-vault-backend'
    },
    {
        theme: 'btn-back-red',
        name: 'Chatify',
        description: 'Chatify is a Firebase maintained real time chat Application that allows users to chat and send images securely.',
        source_code_link: 'https://github.com/007aneesh/chatify', 
        tags: ['Frontend'],
        demo_link: 'https://chatify-beta.vercel.app/'
    },
    {
        theme: 'btn-back-blue',
        name: 'AI Call Agent',
        description: 'AI Call Agent is an intelligent voice assistant that handles appointment scheduling via phone calls. It interacts with users in real-time, processes speech-to-text conversion, extracts booking details, and schedules appointments using an AI-driven conversation flow.',
        source_code_link: 'https://github.com/007aneesh/ai-call-agent', 
        tags: ['Artificial Intelligence']
    },
    {
        theme: 'btn-back-green',
        name: 'Documentation Chatbot',
        description: 'Documentation Chatbot built with Streamlit and Google Generative AI. It helps users query specific documentation datasets and provides responses strictly based on the selected documentation source.',
        source_code_link: 'https://github.com/007aneesh/web-chatbot', 
        tags: ['Artificial Intelligence'],
        demo_link: 'https://aneesh-chatbot.streamlit.app/'
    },
];
