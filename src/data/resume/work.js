/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Cyberbells ITES Services Pvt Ltd',
    position: 'Jr. Software Engineer (AI/ML)',
    url: 'https://www.cyberbells.com/',
    startDate: '2025-08-04',
    endDate: '2025-11-15',
    summary: 'A results-driven professional specializing in Python automation, full-stack AI application development, and end-to-end machine learning workflows. I have a proven track record of engineering scalable solutions for complex data processing, system migration, and AI integration, consistently focusing on performance optimization and robust deployment.',
    highlights: [
      'Engineered Python automation scripts to process and migrate over 10,000 products across 20+ categories to the Shopify platform.',
      'Established automated validation pipelines to ensure data integrity and accuracy throughout the large-scale migration process.',
      'Developed and optimized a suite of AI systems, including anomaly detection models, computer vision applications, and speech-to-text solutions.',
      'Enhanced model performance and leveraged synthetic data generation techniques to improve system robustness and accuracy.',
      'Built and deployed full-stack applications using Streamlit, integrating multiple third-party AI APIs to create powerful, user-friendly tools.',
      'Architected end-to-end machine learning workflows, incorporating MongoDB for data management and implementing automated deployment systems for efficient CI/CD.',
    ],
  },
  {
    name: 'Infinx Services Pvt Ltd',
    position: 'Python Developer Intern',
    url: 'https://www.infinx.com/',
    startDate: '2025-01-02',
    endDate: '2025-07-02',
    summary: 'A full-stack developer and data engineer focused on building secure, scalable systems and real-time data solutions. I have expertise in developing configuration management platforms with Streamlit and FastAPI, engineering robust data pipelines with Elasticsearch, and creating operational dashboards that provide critical business insights.',
    highlights: [
      'Developed a full-stack configuration management system from the ground up using Streamlit for the frontend and FastAPI for a robust backend API.',
      'Implemented a secure authentication system and engineered an automated tenant database creation process, enabling secure and scalable multi-tenancy with PostgreSQL.',
      'Engineered and managed real-time data ingestion pipelines into Elasticsearch, enabling immediate data availability for search and analysis.',
      'Created comprehensive operational dashboards in Kibana to visualize key metrics, providing deep project insights and enabling data-driven decision-making across teams.',
      'Enabled powerful advanced search capabilities across project data, significantly improving information discovery and operational efficiency.',
    ],
  },
];

export default work;
