// TODO Add a couple lines about each project
const data = [
  {
    title: 'Multimodal RAG',
    subtitle: 'A unified AI assistant that understands text, tables, and images within documents.',
    link: '',
    image: '/images/projects/multimodalrag.png',
    date: '2023-11-01',
    desc:
      'I designed and developed a sophisticated Multimodal RAG application using Streamlit to intelligently process and query complex documents. The system ingests PDFs, PowerPoints, and images, converting them into a unified vector store within Milvus.',
  },
  {
    title: 'Jessy Manager',
    subtitle: 'A unified workplace safety platform leveraging AI for proactive risk management.',
    link: '',
    image: '/images/projects/jessymanager.png',
    desc:
      'I architected and developed "Jessy Manager," a comprehensive Streamlit application designed to consolidate and modernize workplace safety operations. The platform integrates five distinct modules—safety analytics, AI inspection, audit management, and training coordination—into a single, cohesive system.',
  },
  {
    title: 'Jessy Personal Assistant',
    subtitle: 'A Local-First, Cross-Platform AI Assistant. Powerful, Private, and Cost-Effective.',
    link: '',
    image: '/images/projects/jessypersonalassistant.png',
    desc:
      'Jessy is a cross-platform personal assistant built with a React/Vite frontend and a Node.js/n8n backend, all containerized with Docker. Its core innovation is a unified architecture powered by a single, locally-run Llama 3.1 model, eliminating API costs and ensuring consistent, private intelligence. I engineered critical autonomous features including a local voice processing pipeline and an emergency contact system, proving the assistants capability to handle sensitive, real-world tasks independently.',
  },
  {
    title: 'Similarity Checker',
    subtitle: 'A Desktop Application for Plagiarism Detection using TF-IDF and Cosine Similarity.',
    image: '/images/projects/similaritychecker.png',
    desc:
      'Developed a Python desktop application with a Tkinter GUI for detecting textual similarity between PDF and DOCX documents. The core algorithm utilizes Scikit-Learn TF-IDF vectorization to convert documents into numerical vectors and calculates a precise plagiarism percentage using Cosine Similarity. The application includes a feature to generate a detailed PDF report of the results, complete with similarity scores and relevant document excerpts, using the FPDF library.',
  },
];

export default data;
