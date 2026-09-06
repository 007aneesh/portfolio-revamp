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
        date: "July 2025 - Present",
        points: [
            "Co-architected a multi-brand headless storefront platform (React 19, Next.js 16, Node.js, PostgreSQL) with a 4 engineer platform team, compiling merchant-authored JSON into server-rendered React across 87 configurable modules and 800+ routes, letting merchants ship storefront changes with zero redeploys.",
            "Designed 174 REST APIs on a Node.js REST APIs layer with cookie-based sessions, Redis caching, and typed data-access modules over PostgreSQL/Prisma, isolating per-buyer pricing from a shared multi-tenant cache and keeping tenant credentials out of the browser.",
            "Modeled the storefront’s page and theme data as versioned JSON documents with draft/publish state machines, designing the schema and query layer so a merchant edit resolves to a rendered page in a single read without joins across 20+ relational tables.",
            "Improved storefront performance through server-side data resolution and a tag-based cache invalidation hierarchy that shrank a product update’s blast radius from 828 routes to 1 — improving LCP 65% (3.4s → 1.2s) and cutting shopper JS bundle by 35% at 95% cache hit rate.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "WizCommerce",
        icon: wizcommerce,
        iconBg: "#f3f4f6",
        date: "July 2024 - June 2025",
        points: [
            "Delivered core storefront features powering 60+ live merchant sites generating $1M+ in annual revenue, including a JSON Logic-based discount rule engine adopted by 20+ enterprise clients.",
            "Owned SEO and observability across 30+ merchant sites — migrated product-ID URLs to dynamic slugs with structured metadata and canonical tags, and instrumented 25+ key user events (Sentry, Mixpanel, Klaviyo) with alerting thresholds, giving the product team its first unified view of frontend reliability.",
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
        name: 'Aivoy | Multi-tenant AI Concierge SaaS',
        description: 'A multi-tenant AI concierge platform as a single-script embeddable widget (published to npm), reducing integration to under 5 minutes and enabling any site to add streaming AI chat.',
        image: 'https://aneeshaggarwal.vercel.app/aivoy.png',
        demo_link: 'https://aivoy.vercel.app/',
        tags: ['Artificial Intelligence', 'NPM'],
        source_code_link: 'https://github.com/007aneesh/aivoy',
    },
    {
        theme: 'btn-back-blue',
        name: 'CasaLux — Luxury Short-Term Rental Platform',
        description: 'Turborepo monorepo (4 apps, 8 shared packages) with a DI container enabling one-line provider swaps. Built a Redis-locked booking state machine over a 21-model Prisma schema, a webhook-driven Stripe payment pipeline with BullMQ workers, and an Elasticsearch 8.x geo-faceted search layer with dual-tier rate limiting and Clerk RBAC.',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
        tags: ['Full Stack', 'System Design'],
        demo_link: 'https://casalux-web.vercel.app/',
        source_code_link: 'https://github.com/007aneesh/casalux',
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
