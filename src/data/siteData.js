import heroPortrait from "../../packages/images/AdMaker_13042023_183626.png";
import aboutPortrait from "../../packages/images/pras-2.jpeg";
import creativeSaImage from "../../packages/images/creative-sa-pic.png";
import qhagamshelaImage from "../../packages/images/portfolio1.png";
import qoaImage from "../../packages/images/qoa-project.png";
import openDayImage from "../../packages/images/open-day-app.png";
import botImage from "../../packages/images/botv2.png";
import sharePointImage from "../../packages/images/SharePoint-site.png";
import intuneImage from "../../packages/images/Intune.png";
import attendanceImage from "../../packages/images/TimeAndAttendance.png";
import ecommerceImage from "../../packages/images/portfolio3.png";
import interiorImage from "../../packages/images/portfolio4.png";
import arunImage from "../../packages/images/arun.jpg";
import yugaImage from "../../packages/images/yuga.jpg";
import shenanImage from "../../packages/images/shenan.png";
import ritoImage from "../../packages/images/Rito.jpeg";
import cvPdf from "../../CV - Jabulani Prince Kekana.pdf?url";

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
    title: "Qurtuba Open Day Web App",
    stack: "React JS > Firebase > Cloud Firestore > Authentication > QR Code Scanner",
    image: openDayImage,
    description:
      "A mobile-first event platform for Qurtuba Online Academy's Open Day. Users signed up, received QR code profiles and coupons, while admins scanned QR codes, rewarded users, managed profiles, sent notifications and tracked event activity. The app recorded 154,014 total interactions on the day.",
    link: "https://open-day-18e43.web.app/signup",
  },
  {
    title: "Support Agent AI Chatbot",
    stack: "React JS > TensorFlow.js > LangChain.js > OpenAI API > Custom Data",
    image: botImage,
    description:
      "An AI and machine learning support project built around custom data. The goal is to answer frequent queries automatically, reduce repetitive support workload and escalate complex cases to a human agent when needed.",
  },
  {
    title: "E-Learning Management System",
    stack: "TypeScript > React > Material UI > Nest.js > Node.js",
    image: qoaImage,
    description:
      "An e-learning management system for Qurtuba Online Academy developed by a Ukraine-based company in collaboration with an India-based company. I contributed to the front-end team by developing features and modules for the platform.",
  },
  {
    title: "Digital Shopping Centre",
    stack: "React JS > SQL > PostgreSQL > Node.js > Express.js",
    image: creativeSaImage,
    description:
      "A digital shopping centre built to accommodate multiple shops in one platform. Shop owners can customize their stores, manage products and update content, while users browse products and add selected items to cart.",
  },
  {
    title: "Qhagamshela Agency Website",
    stack: "HTML > CSS > JavaScript > JQuery",
    image: qhagamshelaImage,
    description:
      "A website revamp for a South African marketing agency focused on paid advertising. The work improved the agency's online presence and gave the business a more credible client-facing digital platform.",
    link: "https://jabukekana.github.io/Qhagamshela/",
  },
  {
    title: "SharePoint Site",
    stack: "SharePoint > Microsoft Azure Active Directory",
    image: sharePointImage,
    description:
      "A SharePoint site created within the Microsoft cloud environment as part of workplace digitalization, collaboration and document-management support.",
  },
  {
    title: "Intune Software Deployment",
    stack: "Microsoft Intune > Endpoint Manager > Azure Active Directory > PowerShell",
    image: intuneImage,
    description:
      "Application deployment and Intune policy support across Microsoft tenant environments, including PowerShell scripting, software deployment and Azure Active Directory administration.",
  },
  {
    title: "Time & Attendance System",
    stack: "HTML > CSS > JavaScript > Google Sheets API",
    image: attendanceImage,
    description:
      "A web-based attendance application with an admin section and Google Spreadsheet integration for storing attendance records.",
    link: "https://jabukekana.github.io/Time-And-Attendance-System/",
  },
  {
    title: "E-commerce Online Store",
    stack: "HTML > CSS > JavaScript > JQuery > Bootstrap",
    image: ecommerceImage,
    description:
      "A front-end e-commerce store template with product browsing and add-to-cart functionality.",
    link: "https://jabukekana.github.io/AUTH-e-commerce-website/",
  },
  {
    title: "Inoterior Design Website",
    stack: "HTML > CSS > JavaScript > JQuery > Bootstrap",
    image: interiorImage,
    description:
      "A client website for a Johannesburg-based custom furniture, repairs, woodwork and carpentry business.",
    link: "https://jabukekana.github.io/IntoreriorDesign---FrontEndOnly/",
  },
];

export const stories = [
  {
    title: "Digital Presence Is Business Infrastructure",
    stack: "Business > Technology > Entrepreneurship",
    image: creativeSaImage,
    description:
      "A Medium story slot for thoughts on why modern entrepreneurs should treat websites, content and automated workflows as serious business assets.",
  },
  {
    title: "What AI Support Agents Mean For Small Teams",
    stack: "AI > Support > Automation",
    image: botImage,
    description:
      "A Medium story slot for practical lessons on how AI assistants can reduce repetitive support work while keeping human escalation available.",
  },
  {
    title: "From Idea To Usable Web Product",
    stack: "Software Development > Product Thinking",
    image: qoaImage,
    description:
      "A Medium story slot for explaining how raw business ideas become responsive web applications and measurable digital systems.",
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
    name: "Mkhiva",
    title: "Entrepreneur",
    image: arunImage,
    quote:
      'We had been searching for a developer who could successfully revamp our website "Qhagamshela" for months without success. Thankfully, a friend recommended Jabu, who improved the website and provided cost-effective solutions.',
  },
  {
    name: "Thato",
    title: "Actuarial Scientist",
    image: yugaImage,
    quote:
      "I reached out to Jabu on LinkedIn after seeing some of his work. He has a client-focused approach that really makes it easier to collaborate with him on any project, and his work is impressive.",
  },
  {
    name: "Ronald",
    title: "Full Stack Web Developer",
    image: shenanImage,
    quote:
      "I collaborated with Jabu on a business website project. He was responsible for the front end, researched solutions carefully and adjusted the interface to accommodate the back end's needs.",
  },
  {
    name: "Dr. Shidzinga",
    title: "S-L Pathologist & Audiologist",
    image: ritoImage,
    quote:
      "When it is time to work, Jabu is highly professional and communicates effectively throughout projects. He is accommodating and willing to make changes when required.",
  },
];

export const contactScriptUrl =
  "https://script.google.com/macros/s/AKfycbxfiw_9bl4tFHVk9T-RJ-u83gsU4kIwEqunolsZEGU4Mo8s9GSYjJwG-w8yckppb6WhsA/exec";
