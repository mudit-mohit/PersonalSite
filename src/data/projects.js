// TODO Add a couple lines about each project
const data = [
  {
    title: 'Task Management System',
    subtitle: 'Full-Stack GraphQL Task Manager with JWT Auth and Role-Based Access Control',
    link: 'https://github.com/mudit-mohit/task-management-system',
    image: '/images/projects/taskmanagementsystem.png',
    desc:
      'A full-stack task management application built with FastAPI, Strawberry GraphQL, and PostgreSQL 17 on the backend, and React 18 + TypeScript with Apollo Client and Tailwind CSS on the frontend. Implements JWT authentication with role-based access control, project/task management, and real-time subscriptions, following a layered Repository -> Service -> GraphQL resolver architecture built around SOLID principles. Fully containerized with Docker Compose, with Alembic migrations run automatically on startup.',
  },
  {
    title: 'SpaceWora Interiors',
    subtitle: 'Lead-Generation Website for a Mumbai Interior Design Studio',
    link: 'https://spacewora.com/',
    image: '/images/projects/spacewora.png',
    desc:
      'A conversion-focused marketing site for SpaceWora Interiors, a premium Mumbai interior design studio. Features an embedded consultation-booking form with property type and budget qualification, before/after project galleries, brand partner logos, trust signals like warranty and move-in guarantees, and WhatsApp-integrated lead capture, deployed as a fully responsive static site.',
  },
  {
    title: 'ISKCON Vrindavan Seva',
    subtitle: 'Temple Website with Live Darshan, Donations, and an Admin CMS',
    link: 'https://iskcon-vrindavan-kbcc-350s7nwuk-mudit-mohits-projects-f1d0f3ab.vercel.app/',
    image: '/images/projects/iskcontemplewebsite.png',
    desc:
      'A full temple website for ISKCON Vrindavan Seva (Sri Krishna Balaram Mandir), built as a static HTML/CSS/JS site with Vercel serverless functions for the backend. Features live darshan streaming, Razorpay-integrated donation flows, festival calendars, CSR and international outreach pages, and a custom admin panel backed by Supabase for managing site content, festivals, and donation records.',
  },
  {
    title: 'Saras AI Landing',
    subtitle: 'Marketing Landing Page for Saras AI Institute\'s Master of Science in AI Engineering',
    link: 'https://saras-ai-landing.netlify.app/',
    image: '/images/projects/sarasailanding.png',
    desc:
      'A conversion-focused marketing landing page for Saras AI Institute\'s project-only Master of Science in AI Engineering program. Highlights cohort details, pricing, and outcomes with a hero section, enterprise-project callouts, and social proof stats, built as a fully responsive static site and deployed on Netlify.',
  },
  {
    title: 'File Explorer',
    subtitle: 'VS Code-style Browser File Explorer with Live Nested Editing',
    link: 'https://file-explorer-lac-ten.vercel.app/',
    image: '/images/projects/fileexplorer.png',
    desc:
      'A VS Code-style file explorer built with React and Vite that lets users create, rename, delete, and edit nested files and folders directly in the browser. Workspace state persists via localStorage, giving a smooth, live-editing workspace feel entirely on the client side with no backend required.',
  },
  {
    title: 'DPDP Compliance Checker',
    subtitle: 'AI-Powered Privacy Policy Compliance Analysis for India\'s DPDP Act 2023',
    link: 'https://github.com/mudit-mohit/dpdp-compliance-checker',
    image: '/images/projects/dpdpcompliancechecker.png',
    desc:
      'A full-stack web application that analyzes privacy policies for compliance with India\'s Digital Personal Data Protection (DPDP) Act 2023. Built with a FastAPI backend and React 19/Vite frontend, it uses Sentence Transformers for semantic clause-matching against DPDP requirements, producing automatic compliance scoring, Low/Medium/High risk classification, and downloadable PDF reports with clause-by-clause visual breakdowns. Supports both file upload and URL-based policy analysis, backed by SQLAlchemy persistence and a Dockerized, Jenkins-driven CI/CD pipeline.',
  },
  {
    title: 'Overnight Intelligence Platform',
    subtitle: 'AI-First Overnight Activity Review and Morning Briefing System',
    link: 'https://overnight-intelligence-platform.vercel.app/',
    image: '/images/projects/overnightintelligenceplatform.png',
    desc:
      'An AI-first overnight activity review and morning briefing system that helps operations leads investigate overnight security events before leadership arrives. Uses Groq Llama 3 with a transparent, tool-calling agent architecture to gather event context, evaluate risk, and detect cross-event patterns, surfacing its full reasoning process and uncertainty while keeping humans in control of final decisions on escalation and drone patrol dispatch.',
  },
  {
    title: 'Smart Bookmarks',
    subtitle: 'Full-Stack Bookmark Manager with Google OAuth and Real-Time Sync',
    link: 'https://smart-bookmarks-seven.vercel.app/',
    image: '/images/projects/smartbookmarks.png',
    desc:
      'A full-stack bookmark management application built with Next.js 14, Supabase, and Tailwind CSS. Users sign in with Google OAuth, save and organize bookmarks with per-user isolation enforced through Row Level Security, and see changes sync instantly across browser tabs via Supabase real-time subscriptions.',
  },
  {
    title: 'Fact-Check App',
    subtitle: 'Local-First PDF Claim Extraction & Verification with Ollama and Web Search',
    link: 'https://mudit-mohit-fact-checking-web-app-app-3klw6v.streamlit.app/',
    image: '/images/projects/factcheckingwebapp.png',
    desc:
      'A privacy-focused Streamlit application that extracts verifiable factual claims from PDF documents using LangChain and a local Ollama LLM, then verifies each claim against the web via Tavily search and Ollama reasoning. Generates an interactive fact-check report with Verified/Inaccurate/False verdicts, confidence scores, and downloadable txt/json/html output, running entirely on local inference with no cloud API keys required for extraction or verification.',
  },
  {
    title: 'Worker Productivity Dashboard',
    subtitle: 'Real-Time Factory Monitoring Dashboard Powered by AI-Detected CCTV Events',
    link: 'https://ai-powered-worker-productivity-dashboard-ccs2.onrender.com/',
    image: '/images/projects/workerproductivitydashboard.png',
    desc:
      'A full-stack web application for monitoring worker activity and productivity metrics in a manufacturing factory using AI-powered CCTV events. Built with a Python Flask API backend and a React dashboard frontend, it tracks per-worker and per-workstation utilization, active/idle time, and production rates, with configurable date-range filtering and sortable worker cards for at-a-glance factory oversight.',
  },
  {
    title: 'The Mini-Wallet Service',
    subtitle: 'Production-Ready Financial Transaction System with ACID Compliance',
    link: 'https://github.com/mudit-mohit/mini-wallet-service',
    image: '/images/projects/The Mini-Wallet Service.png',
    date: '2023-11-01',
    desc:
      'A full-stack digital wallet application built with Node.js and PostgreSQL, featuring atomic money transfers, real-time balance updates, and comprehensive transaction management. Implements industry-standard financial software patterns including ACID-compliant database transactions, row-level locking for race condition prevention, and decimal-precise calculations using NUMERIC data types.',
  },
  {
    title: 'Realtime Q&A Dashboard',
    subtitle: 'Full-Stack Real-Time Collaboration Platform with WebSocket Live Updates',
    link: 'https://github.com/mudit-mohit/Real-Time-Q-A-Dashboard',
    image: '/images/projects/realtimeqandadashboard.png',
    date: '2023-11-01',
    desc:
      'A production-ready Q&A platform built with Next.js and FastAPI that enables real-time collaboration between users and moderators. The application features WebSocket-based live updates for instant question/answer synchronization across 100+ concurrent users, JWT authentication with role-based access control, and SQLAlchemy ORM for managing relational database operations. Implements AJAX XMLHttpRequest for form validation, automated question escalation workflows with status tracking, and webhook integration for external service notifications. The system includes an admin dashboard with privileged moderation actions and real-time notification system for new submissions.',
  },
  {
    title: 'Flow Forge',
    subtitle: 'Drag-and-Drop Visual Pipeline Builder with Real-Time DAG Validation',
    link: 'https://github.com/mudit-mohit/FlowForge',
    image: '/images/projects/flowforge.png',
    date: '2023-11-01',
    desc:
      'A visual node-based pipeline editor built with React and FastAPI that allows users to create complex data processing workflows through an intuitive drag-and-drop interface. Features include 9 customizable node types, dynamic handle positioning based on content, real-time edge connections with smooth animations, and backend validation using Kahns algorithm to detect cycles and ensure directed acyclic graph compliance. The application uses Zustand for state management, React Flow for canvas rendering, and provides instant visual feedback with toast notifications.',
  },
  {
    title: 'Human-in-the-Loop AI Supervisor',
    subtitle: 'Real-Time Voice AI Agent with Intelligent Human Escalation',
    link: 'https://github.com/mudit-mohit/Human-in-the-Loop-AI-Supervisor',
    image: '/images/projects/humanintheloopaisupervisor.png',
    date: '2023-11-01',
    desc:
      'An intelligent voice receptionist system that autonomously handles customer calls while seamlessly escalating complex queries to human supervisors in real-time. Built using LiveKit WebRTC for voice communication, Groq Whisper for speech-to-text, and Llama 3.3 70B for natural language understanding, the system features a custom audio processing pipeline with sub-second latency.',
  },
  {
    title: 'Multimodal RAG',
    subtitle: 'A unified AI assistant that understands text, tables, and images within documents.',
    link: 'https://github.com/mudit-mohit/AI-Chatbot',
    image: '/images/projects/multimodalrag.png',
    desc:
      'I designed and developed a sophisticated Multimodal RAG application using Streamlit to intelligently process and query complex documents. The system ingests PDFs, PowerPoints, and images, converting them into a unified vector store within Milvus.',
  },
  {
    title: 'Jessy Manager',
    subtitle: 'A unified workplace safety platform leveraging AI for proactive risk management.',
    link: 'https://github.com/mudit-mohit/Jessy-Manager',
    image: '/images/projects/jessymanager.png',
    desc:
      'I architected and developed "Jessy Manager," a comprehensive Streamlit application designed to consolidate and modernize workplace safety operations. The platform integrates five distinct modules—safety analytics, AI inspection, audit management, and training coordination—into a single, cohesive system.',
  },
  {
    title: 'Handwritten Digit Recognition',
    subtitle: 'A full-stack web application for handwritten digit recognition using a Convolutional Neural Network and ONNX runtime.',
    link: 'https://digit-recognition-front.vercel.app/',
    image: '/images/projects/handwrittendigitrecognition.png',
    desc:
      'This project is a full-stack web application that recognizes handwritten digits in real-time or from uploaded images. The frontend is built with React and Tailwind CSS, providing a responsive and intuitive interface. The backend, powered by Flask, preprocesses images and runs a CNN model converted to ONNX format for efficient inference. The model was trained on the MNIST dataset and achieves high accuracy in digit classification.',
  },
  {
    title: 'Jessy Personal Assistant',
    subtitle: 'A Local-First, Cross-Platform AI Assistant. Powerful, Private, and Cost-Effective.',
    link: 'https://github.com/mudit-mohit/Jessy-Personal-Assistant',
    image: '/images/projects/jessypersonalassistant.png',
    desc:
      'Jessy is a cross-platform personal assistant built with a React/Vite frontend and a Node.js/n8n backend, all containerized with Docker. Its core innovation is a unified architecture powered by a single, locally-run Llama 3.1 model, eliminating API costs and ensuring consistent, private intelligence. I engineered critical autonomous features including a local voice processing pipeline and an emergency contact system, proving the assistants capability to handle sensitive, real-world tasks independently.',
  },
  {
    title: 'Chinese Foodies Menu',
    subtitle: 'Interactive restaurant menu with real-time cart and smart filtering',
    link: 'https://mudit-mohit.github.io/chinese-foodies-menu/',
    image: '/images/projects/chinesefoodiesmenu.png',
    desc:
      'A fully responsive digital menu system built for Chinese Foodies Family Restaurant. Features a dynamic shopping cart, live search functionality, category-based filtering, and variant selection for different portion sizes. The application provides an intuitive ordering experience with real-time price calculations and mobile-optimized design.',
  },
  {
    title: 'Reduced Scope Prototype',
    subtitle: 'NLP-powered quality assurance system for French article transitions',
    link: 'https://mudit-mohit-reduced-scope-prototype-appmain-jm8ury.streamlit.app/',
    image: '/images/projects/reducedscopeprototype.png',
    desc:
      'An intelligent quality assurance tool that evaluates the quality of transition phrases in French articles using advanced NLP techniques. The system analyzes PDF and text documents to detect transitions, assess thematic cohesion, identify repeated lemmas, and validate structural integrity. Built with Streamlit for an intuitive web interface, it provides real-time evaluation results with detailed failure analysis and downloadable reports.',
  },
  {
    title: 'Similarity Checker',
    subtitle: 'Plagiarism Detection Tool - Compare Documents for Similarity',
    link: 'https://mudit-mohit-similarity-checker-app-ptswho.streamlit.app/',
    image: '/images/projects/similaritychecker.png',
    desc:
      'This project is a comprehensive Plagiarism Detection Tool that allows users to compare two documents and calculate their similarity score using machine learning. The tool features both a web interface built with Streamlit and a desktop application built with Tkinter. It uses TF-IDF vectorization and cosine similarity to determine the similarity between documents. Additional features include the ability to export detailed reports in PDF format and email integration for sharing results.',
  },
  {
    title: 'Mortgage Calculator',
    subtitle: 'Interactive Mortgage Payment Calculator & Amortization Visualizer',
    link: 'https://mortgage-calculator-kxffqr7kexzw67iuvtysit.streamlit.app/',
    image: '/images/projects/mortgagecalculator.png',
    desc:
      'An interactive web-based mortgage calculator that provides real-time repayment analysis and amortization scheduling. This Streamlit application calculates monthly payments, total interest costs, and generates dynamic payment schedules with visual charts. Features include adjustable loan terms, interest rates, and deposit amounts, with instant metric updates and comprehensive financial breakdowns for informed home-buying decisions.',
  },
  {
    title: 'Threat Detection',
    subtitle: 'Real-time Security Alerting & Log Classification API',
    link: 'https://github.com/mudit-mohit/Intelligent-Threat-Detection-System',
    image: '/images/projects/threatdetection.png',
    desc:
      'A high-performance Node.js/Express backend system designed for automated security threat management. This project features a core utility for real-time classification of raw security log data into predefined threat types using pattern matching and regex analysis.',
  },
  {
    title: 'Job Squad',
    subtitle: 'JobSquad - Connecting Talent with Opportunity',
    link: 'https://github.com/mudit-mohit/Job-Squad',
    image: '/images/projects/jobsquad.png',
    desc:
      'JobSquad is a dynamic job portal designed to bridge the gap between job seekers and employers',
  },
];

export default data;
