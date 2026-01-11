// TODO Add a couple lines about each project
const data = [
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
