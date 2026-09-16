import heroPortrait from "../../packages/images/AdMaker_13042023_183626.png";
import aboutPortrait from "../../packages/images/pras-2.png";
import eLearningImage from "../../packages/images/E-Learning Management System.png";
import qurtubiksMobileImage from "../../packages/images/Mobile App - Qurtubiks.jpeg";
import kaixenflowImage from "../../packages/images/Kaixenflow.png";
import digitalShoppingCentreImage from "../../packages/images/Digital Shopping Centre.png";
import maidportImage from "../../packages/images/Maidport.png";
import meerathPublishersImage from "../../packages/images/Meerath Publishers.png";
import capitalCommunityImage from "../../packages/images/The Capital Community.png";
import qoaOpenDayImage from "../../packages/images/QOA Open Day App 2023.png";
import articleOneImage from "../../packages/images/article-1.png";
import articleTwoImage from "../../packages/images/article-2.png";
import articleThreeImage from "../../packages/images/article-3.png";
import articleFourImage from "../../packages/images/article-4.webp";
import arunImage from "../../packages/images/arun.jpg";
import yugaImage from "../../packages/images/yuga.jpg";
import kaixenNalediImage from "../../packages/images/naledikaixenflow.jpg";
import shenanImage from "../../packages/images/shenan.png";
import ritoImage from "../../packages/images/Rito.jpeg";
import cvPdf from "../../Brochure-Jabu-Kekana.pdf?url";

export const assets = {
  heroPortrait,
  aboutPortrait,
  cvPdf,
};

export const contact = {
  email: "Jabukekana59@gmail.com",
  phone: "(+27) 79 056 8506",
  whatsapp: "https://api.whatsapp.com/send?phone=27790568506",
  linkedin: "https://www.linkedin.com/in/jabu-kekana-dev/",
  github: "https://github.com/JabuKekana",
  medium: "https://medium.com/@JabuKekana",
  location: "Johannesburg, South Africa",
};

export const projects = [
  {
    title: "Mobile App - Qurtubiks",
    stack: "React Native 0.81 > Expo SDK 54 > TypeScript > Auth0 > PayFast > AWS",
    image: qurtubiksMobileImage,
    description:
      "Architected and deployed the official production mobile app single-handedly across iOS, Android, and Huawei AppGallery. Built with React Native's New Architecture and Expo SDK 54, the app features native Apple & Google OAuth with PKCE, PayFast tuition and wallet payments, dynamic PDF report rendering, and multi-provider push notifications (APNs, FCM, Huawei Push Kit) for thousands of active parents.",
    storeLinks: [
      {
        store: "apple",
        label: "Download Qurtubiks from the Apple App Store",
        url: "https://apps.apple.com/us/app/qurtubiks/id6794163835",
      },
      {
        store: "google-play",
        label: "Download Qurtubiks from Google Play",
        url: "https://play.google.com/store/apps/details?id=com.imtiyaazh.qurtubamobile&pcampaignid=web_share",
      },
      {
        store: "huawei",
        label: "Download Qurtubiks from Huawei AppGallery",
        url: "https://appgallery.huawei.com/app/C118408983",
      },
    ],
  },
  {
    title: "E-Learning Management System",
    stack: "React > MUI > TypeScript > NestJS > PostgreSQL > AWS (EC2/S3/RDS)",
    image: eLearningImage,
    description:
      "Engineered core features and backend APIs within a production monorepo powering a high-traffic learning platform for 8,000+ active users. Managed PostgreSQL database schemas, optimized complex SQL queries, and executed a seamless cloud migration from DigitalOcean to AWS (EC2, S3, RDS) to eliminate performance bottlenecks and ensure high availability.",
    link: "https://auth.qurtubiks.com/",
  },
  {
    title: "Kaixenflow",
    stack: "React > WordPress > Payment Gateway > Ticket Automation",
    image: kaixenflowImage,
    description:
      "I led the digital transformation for Kaixenflow, replacing an expensive and rigid AI-generated website with a custom, high-performance platform. I initially rebuilt the site using React to optimize performance and significantly slash operational overhead. To give the team complete control over their digital presence, I then transitioned the site to a tailored WordPress architecture, empowering them to manage and update content on the go without technical support. To streamline their core business processes, I also integrated a secure payment gateway alongside an automated ticket generation system.",
    link: "https://kaixenflow.co.za/",
  },
  {
    title: "Digital Shopping Centre",
    stack: "Marketplace Platform > Custom Storefronts > Inventory Management > Cart Flow",
    image: digitalShoppingCentreImage,
    description:
      'I developed a "Digital Shopping Centre" designed to give local creators and thrifters their own customizable online storefronts. The platform allows shop owners to manage their inventory and appearance in real-time while providing a seamless "add-to-cart" experience for shoppers. I originally built this on a JavaScript-heavy stack but eventually led a migration to a more robust framework to improve security and speed up development. This project showcases my ability to build complex, multi-user marketplaces from the ground up.',
    link: "https://creatives-sa-git-main-creatives-sas-projects.vercel.app/",
  },
  {
    title: "Maidport",
    stack: "Platform Modernization > Component Architecture > Serverless Communication",
    image: maidportImage,
    description:
      'I led the modernization of the Maidport platform, moving it from an older framework to a modern, component-based architecture. The focus was on creating a fast, "app-like" feel that improved the overall user experience. I also integrated serverless communication tools to handle emails and inquiries, which removed the need for a complex backend and made the entire system easier to maintain and faster to load.',
    link: "https://maidport.vercel.app/",
  },
  {
    title: "Meerath Publishers",
    stack: "Platform Migration > E-Commerce > Payment Gateway > Newsletter Automation",
    image: meerathPublishersImage,
    description:
      "I executed a full platform migration for this publishing house to give them more room to grow. I moved their entire digital presence to a more flexible system that could handle custom e-commerce features and secure payment gateways for their book catalog. The result was a scholarly, professional site that automated their newsletter sign-ups and gave them a centralized way to manage their growing collection of biographies and projects.",
    link: "https://meerathpublishers.co.za/",
  },
  {
    title: "The Capital Community",
    stack: "Fintech Platform > SME Funding > Risk Assessment > Responsive UI",
    image: capitalCommunityImage,
    description:
      "I engineered the web platform for The Capital Community, a fintech initiative dedicated to streamlining SME funding and capital deployment. I translated their complex financial model, spanning business risk assessments, funding readiness tracking, and portfolio oversight, into an intuitive, highly responsive digital experience. By converting intricate financial workflows into clean user interfaces, the platform provides a transparent, data-driven bridge between investment-ready businesses and responsible investors.",
    link: "https://www.lgbusinessolutions.com/",
  },
  {
    title: "QOA Open Day App 2023",
    stack: "React > Firebase > QR Codes > Admin Dashboard > Push Notifications",
    image: qoaOpenDayImage,
    description:
      "I engineered a high-performance web application for a major event in Johannesburg that handled over 154,000 interactions. The app was the backbone of the event, providing users with automatic QR code profiles, 3D venue maps, and live schedules. On the management side, I built a custom admin dashboard that allowed staff to scan user codes in real-time, send push notifications, and track event statistics. This project demonstrated my ability to build reliable tools that perform under the pressure of live, high-traffic environments.",
    link: "https://open-day-18e43.web.app/",
  },
];

export const stories = [
  {
    title: "Beyond the Tech Stack: Why the Industry You Code For Shapes Your Entire Career",
    stack: "10 August 2026",
    image: articleOneImage,
    description: "By Jabu Kekana",
    link: "https://medium.com/@jabukekana59/beyond-the-tech-stack-why-the-industry-you-code-for-shapes-your-entire-career-1637f35cf6f4?sharedUserId=jabukekana59",
  },
  {
    title: "4 Books to Read Before You Start Building: Practical Lessons Most Founders Miss",
    stack: "10 August 2026",
    image: articleTwoImage,
    description: "By Jabu Kekana",
    link: "https://medium.com/@jabukekana59/4-books-to-read-before-you-start-building-practical-lessons-most-founders-miss-8660cb1789a7?sharedUserId=jabukekana59",
  },
  {
    title: "The Real Toll of Software Engineering and How to Stay Human in a 24/7 Industry",
    stack: "11 August 2026",
    image: articleThreeImage,
    description: "By Jabu Kekana",
    link: "https://medium.com/@jabukekana59/the-real-toll-of-software-engineering-and-how-to-stay-human-in-a-24-7-industry-4582a5c98276?sharedUserId=jabukekana59",
  },
  {
    title: "Is Learning to Code Still Important in the Age of AI?",
    stack: "30 August 2026",
    image: articleFourImage,
    description: "By Jabu Kekana",
    link: "https://medium.com/@jabukekana59/is-learning-to-code-still-important-in-the-age-of-ai-843c950cff72?sharedUserId=jabukekana59",
  },
];

export const services = [
  {
    icon: "uil uil-globe",
    title: "Business & E-Commerce Websites",
    modalTitle: "Business & E-Commerce Websites",
    points: [
      "WordPress & Content Management: Flexible, customized WordPress websites that allow your team to easily update content, news, and pages without needing technical skills.",
      "E-Commerce & Online Stores: Full online store setups complete with secure payment gateway integrations, product catalog management, and automated checkout flows.",
      "Platform Migrations: Seamlessly moving existing websites from basic site builders to flexible, scalable platforms like WordPress or custom code without losing data.",
      "Search & Mobile Optimization: Fast-loading, responsive designs optimized to look and work great on all mobile screens and desktop browsers.",
    ],
  },
  {
    icon: "uil uil-mobile-android",
    title: "Mobile App Development",
    modalTitle: "Mobile App Development",
    points: [
      "Multi-Platform Availability: Single app builds published across the Apple App Store, Google Play Store, and Huawei AppGallery.",
      "Real-Time Communication: Push notification setups to keep users engaged, along with live messaging or real-time data updates.",
      "Feature Integrations: Secure user logins, video streaming capabilities, interactive maps, and in-app payment checkouts.",
      "App Store Management: Handling the entire publishing and release process to ensure your app gets approved and updated smoothly on all major app stores.",
    ],
  },
  {
    icon: "uil uil-create-dashboard",
    title: "Custom Web Applications & Business Dashboards",
    modalTitle: "Custom Web Applications & Business Dashboards",
    points: [
      "Custom Customer & Staff Portals: Build secure web portals where clients can log in, view account statements, submit requests, or track progress.",
      "Management Dashboards: Real-time administrative controls to manage users, generate reports, and track business metrics in one central place.",
      "High-Traffic Event Apps: High-performance web tools built to handle large spikes in user traffic without slowing down or crashing.",
      "Platform Modernization: Upgrading outdated or slow websites into fast, modern platforms that offer a better experience for your users.",
    ],
  },
  {
    icon: "uil uil-robot",
    title: "Smart Business Automation & AI Solutions",
    modalTitle: "Smart Business Automation & AI Solutions",
    points: [
      "Intelligent Customer Support Assistants: Custom AI chatbots trained on your business documents to handle routine client inquiries 24/7 and escalate complex cases to your staff.",
      "Workflow Automation: Connecting repetitive back-office tasks, like sending automated notifications, generating documents, or updating records, so they run automatically.",
      "Practical AI Prototypes: Exploring and building custom internal tools using language models to analyze company data and improve operational speed.",
    ],
  },
  {
    icon: "uil uil-plug",
    title: "System Integration & API Connections",
    modalTitle: "System Integration & API Connections",
    points: [
      "Software Synchronization: Connecting separate systems, such as your CRM, accounting software, or internal databases, to eliminate manual copy-pasting and human error.",
      "Third-Party Service Add-ons: Integrating specialized third-party tools like courier tracking systems, payment gateways, or communication tools into your website.",
      "Data Migration: Safely extracting, cleaning, and transferring data from old software into modern business tools.",
    ],
  },
  {
    icon: "uil uil-cloud",
    title: "Cloud Infrastructure & Workplace IT Support",
    modalTitle: "Cloud Infrastructure & Workplace IT Support",
    points: [
      "Cloud Hosting & Server Setup: Configuring secure, high-uptime cloud hosting environments tailored to your platform's size and budget.",
      "Workplace Digitalization: Setting up and managing enterprise email, storage, and collaboration tools across Microsoft 365 and Google Workspace environments.",
      "User & Security Management: Controlling user access, implementing security policies, and managing company devices to protect business data.",
      "Ongoing Systems Support: Troubleshooting technical issues, managing domains, maintaining hosting, and providing hands-on support to keep operations running smoothly.",
    ],
  },
];

export const skillGroups = [
  {
    icon: "uil uil-mobile-android",
    title: "Frontend & Mobile Development",
    subtitle: "Building responsive web platforms and native mobile apps",
    skills: [
      ["React & React Native", "85%", "skills__react"],
      ["TypeScript & JavaScript", "85%", "skills__typescript"],
      ["Expo & Mobile Development", "80%", "skills__expo"],
      ["HTML5 & CSS3 / Bootstrap", "90%", "skills__htmlcss"],
      ["jQuery & Web UI", "75%", "skills__jquery"],
    ],
  },
  {
    icon: "uil uil-server-network",
    title: "Backend & Databases",
    subtitle: "Designing scalable APIs, microservices, and database systems",
    skills: [
      ["Node.js & Express.js", "85%", "skills__nodejs"],
      ["NestJS Framework", "75%", "skills__nestjs"],
      ["PostgreSQL & SQL", "80%", "skills__postgresql"],
      ["RESTful APIs & Webhooks", "85%", "skills__apis"],
      ["Python & C#", "65%", "skills__python"],
    ],
  },
  {
    icon: "uil uil-cloud-computing",
    title: "Cloud, DevOps & CMS",
    subtitle: "Cloud hosting, containerization, and platform deployment",
    skills: [
      ["AWS & DigitalOcean", "75%", "skills__aws"],
      ["Docker & Environments", "70%", "skills__docker"],
      ["Firebase & Auth0", "80%", "skills__firebase"],
      ["WordPress & CMS Solutions", "85%", "skills__wordpress"],
      ["Git & GitHub Workflow", "85%", "skills__git"],
    ],
  },
  {
    icon: "uil uil-robot",
    title: "AI & System Integrations",
    subtitle: "LLM integrations, AI agents, and third-party API pipelines",
    skills: [
      ["OpenAI API & LangChain.js", "75%", "skills__openai"],
      ["Custom RAG & Data Q&A", "75%", "skills__rag"],
      ["TensorFlow.js", "65%", "skills__tensorflow"],
      ["Payment & Push Services (PayFast, FCM/HMS)", "80%", "skills__integrations"],
    ],
  },
];

export const education = [
  ["Bachelor Of Science Information Technology", "Systems & Software Engineering", "Dec 2023"],
  ["Higher Certificate Information Technology", "Information Systems & Systems Administration", "Dec 2020"],
  ["Artificial Intelligence Fundamentals", "IBM SkillsBuild", "Nov 2023"],
  ["Web Development Fundamentals", "IBM SkillsBuild", "Oct 2023"],
  ["AWS Knowledge: Cloud Essentials", "AWS Skills Builder", "Nov 2023"],
  ["User Experience Design Fundamentals", "IBM SkillsBuild", "Dec 2023"],
  ["Javascript Algorithms & Data Structures", "freeCodeCamp", "Aug 2022"],
  ["Responsive Web Design", "freeCodeCamp", "Jul 2022"],
];

export const work = [
  ["Software Developer", "Hybrid/Johannesburg, South Africa", "2024 - Present"],
  ["Freelance Systems & Software Developer", "Remote", "2022 - Present"],
  ["IT Technician & Support", "Johannesburg, South Africa", "2023"],
  ["Jnr IT Technician & Support", "Johannesburg, South Africa", "2022 - 2023"],
  ["Facilities Manager", "Johannesburg, South Africa", "2018 - 2022"],
];

export const testimonials = [
  {
    name: "Thato Sodi",
    title: "Actuarial Scientist & Entrepreneur",
    image: yugaImage,
    quote:
      "I reached out to Jabu on LinkedIn after seeing some of his work. He has a client-focused approach that really makes it easier to collaborate with him on any project, and his work is impressive.",
  },
  {
    name: "Naledi Malise",
    title: "physiotherapist & wellness entrepreneur",
    image: kaixenNalediImage,
    quote:
      "Jabu was referred to me by a friend, and I was impressed by his professionalism and dedication. He took the time to understand my business needs and delivered a website that exceeded my expectations.",
  },
  {
    name: "Mkhiva Mkiva",
    title: "Entrepreneur",
    image: arunImage,
    quote:
      'We had been searching for a developer who could successfully revamp our website as per our design expecations for months without success. Thankfully, a friend recommended Jabu, who improved the website and provided cost-effective solutions.',
  },
  {
    name: "Ronald Ngwenya",
    title: "Full Stack Software Enginner",
    image: shenanImage,
    quote:
      "I collaborated with Jabu on a business website project. He was responsible for the front end, researched solutions carefully and adjusted the interface to accommodate the back end's needs.",
  },
  {
    name: "Dr. R Shidzinga",
    title: "S-L Pathologist & Audiologist",
    image: ritoImage,
    quote:
      "When it is time to work, Jabu is highly professional and communicates effectively throughout projects. He is accommodating and willing to make changes when required.",
  },
];

export const contactScriptUrl =
  "https://script.google.com/macros/s/AKfycbxfiw_9bl4tFHVk9T-RJ-u83gsU4kIwEqunolsZEGU4Mo8s9GSYjJwG-w8yckppb6WhsA/exec";
