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
    name: 'Websquad Solution Private Limited',
    position: 'Full Stack Developer',
    url: 'https://www.linkedin.com/company/websquad-solution-private-limited/',
    startDate: '2024-06-01',
    summary: 'As a Full Stack Developer Intern at WEBSQUAD SOLUTION PRIVATE LIMITED, I contributed to the development and maintenance of web applications, leveraging my skills in both front-end and back-end technologies. This experience allowed me to work on real-world projects, collaborate with a professional development team, and enhance my technical and problem-solving abilities.',
    highlights: [
      'Developed and maintained web applications using technologies such as Angular, Node.js, and MongoDB.',
      'Implemented responsive and user-friendly front-end designs to ensure a seamless user experience across different devices.',
      'Worked on back-end development involving RESTful APIs, database design, and server-side logic.',
      'Collaborated with cross-functional teams to gather requirements, discuss project progress, and deliver high-quality software solutions.',
      'Participated in code reviews and debugging sessions to maintain code quality and resolve issues efficiently.',
      'Gained hands-on experience with version control systems like Git for source code management.',
      'Enhanced problem-solving skills by addressing complex technical challenges and finding optimal solutions.',
    ],
  },
];

export default work;
