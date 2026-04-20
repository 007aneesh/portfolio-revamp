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

const dev = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}`;

export const skillCategories = [
    {
        category: "Languages",
        items: [
            { name: "TypeScript", imageUrl: dev("typescript/typescript-original.svg") },
            { name: "JavaScript", imageUrl: dev("javascript/javascript-original.svg") },
            { name: "Python", imageUrl: dev("python/python-original.svg") },
            { name: "SQL", imageUrl: dev("mysql/mysql-original.svg") },
            { name: "C++", imageUrl: dev("cplusplus/cplusplus-original.svg") },
        ],
    },
    {
        category: "Frameworks & Libraries",
        items: [
            { name: "React", imageUrl: dev("react/react-original.svg") },
            { name: "Next.js", imageUrl: dev("nextjs/nextjs-original.svg") },
            { name: "React Native", imageUrl: dev("react/react-original.svg") },
            { name: "Redux", imageUrl: dev("redux/redux-original.svg") },
            { name: "Node.js", imageUrl: dev("nodejs/nodejs-original.svg") },
            { name: "Express", imageUrl: dev("express/express-original.svg") },
            { name: "Hono", imageUrl: "https://hono.dev/images/logo.svg" },
            { name: "FastAPI", imageUrl: dev("fastapi/fastapi-original.svg") },
            { name: "Tailwind CSS", imageUrl: dev("tailwindcss/tailwindcss-original.svg") },
        ],
    },
    {
        category: "Databases & Caching",
        items: [
            { name: "PostgreSQL", imageUrl: dev("postgresql/postgresql-original.svg") },
            { name: "MySQL", imageUrl: dev("mysql/mysql-original.svg") },
            { name: "MongoDB", imageUrl: dev("mongodb/mongodb-original.svg") },
            { name: "Redis", imageUrl: dev("redis/redis-original.svg") },
            { name: "Elasticsearch", imageUrl: dev("elasticsearch/elasticsearch-original.svg") },
            { name: "Prisma", imageUrl: dev("prisma/prisma-original.svg") },
        ],
    },
    {
        category: "Cloud & DevOps",
        items: [
            { name: "AWS", imageUrl: dev("amazonwebservices/amazonwebservices-plain-wordmark.svg") },
            { name: "Docker", imageUrl: dev("docker/docker-original.svg") },
            { name: "Jenkins", imageUrl: dev("jenkins/jenkins-original.svg") },
            { name: "Turborepo", imageUrl: "https://cdn.simpleicons.org/turborepo/white" },
            { name: "BullMQ", imageUrl: dev("redis/redis-original.svg") },
        ],
    },
    {
        category: "Tools & Observability",
        items: [
            { name: "Git", imageUrl: dev("git/git-original.svg") },
            { name: "GitHub", imageUrl: dev("github/github-original.svg") },
            { name: "Postman", imageUrl: dev("postman/postman-original.svg") },
            { name: "Webpack", imageUrl: dev("webpack/webpack-original.svg") },
            { name: "Sentry", imageUrl: "https://cdn.worldvectorlogo.com/logos/sentry-3.svg" },
        ],
    },
];

// Flat list kept for backwards compatibility (if imported elsewhere)
export const skills = skillCategories.flatMap((g) => g.items);

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "WizCommerce",
        icon: wizcommerce,
        iconBg: "#f3f4f6",
        date: "July 2024 - Present",
        points: [
            "Built the frontend for WizCommerce's JSON Logic-based discount rule engine — a premium-tier feature adopted by 20+ enterprise clients — surfacing 50+ configurable rule types with live cart-state updates.",
            "Improved LCP by 44% (3.2s → 1.8s) on the product listing route via route-level code splitting, dynamic imports, and image lazy loading — verified in PageSpeed Insights.",
            "Designed and shipped the wishlist feature end-to-end in Redux — normalized entity state, memoized selectors, and action design across a codebase serving 50+ enterprise clients.",
            "Led integration of Sentry, Mixpanel, and Klaviyo across the WizCommerce platform — instrumenting 25+ key user events and delivering the first unified view of frontend reliability and funnel behaviour.",
            "Reduced user-visible AI image generation failures by 38% on WizStudio by implementing frontend retry logic with exponential backoff, error boundaries, and API contract alignment."
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
        theme: 'btn-back-blue',
        name: 'CasaLux — Luxury Short-Term Rental Platform',
        description: 'Turborepo monorepo (4 apps, 8 shared packages) with a DI container enabling one-line provider swaps. Built a Redis-locked booking state machine over a 21-model Prisma schema, a webhook-driven Stripe payment pipeline with BullMQ workers, and an Elasticsearch 8.x geo-faceted search layer with dual-tier rate limiting and Clerk RBAC.',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
        tags: ['Full Stack', 'System Design'],
        source_code_link: 'https://github.com/007aneesh',
    },
    {
        theme: 'btn-back-yellow',
        name: 'Vital Vault — Healthcare Data Platform',
        description: 'Secure, multi-tenant healthcare data management system with AI-powered voice transcription. Built with Node.js, Express, PostgreSQL, and Prisma ORM — config-driven tenancy isolates records per clinic.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
        demo_link: 'https://vital-vault-plus.vercel.app/',
        tags: ['Full Stack'],
        source_code_link: 'https://github.com/007aneesh/vital-vault-backend'
    },
    {
        theme: 'btn-back-pink',
        name: 'AI Call Agent',
        description: 'Voice assistant that handles appointment scheduling over phone calls — real-time speech-to-text, booking extraction, and AI-driven conversation flow.',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
        source_code_link: 'https://github.com/007aneesh/ai-call-agent',
        tags: ['Artificial Intelligence']
    },
    {
        theme: 'btn-back-green',
        name: 'Documentation Chatbot',
        description: 'Streamlit + Google Generative AI chatbot that answers strictly from selected documentation sources — retrieval-grounded responses, no hallucinations.',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80',
        source_code_link: 'https://github.com/007aneesh/web-chatbot',
        tags: ['Artificial Intelligence'],
        demo_link: 'https://aneesh-chatbot.streamlit.app/'
    },
];
