const courses = [
  // 1st Semester Courses
  {
    title: 'Calculus',
    number: 'MAT 112',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Communication Skills',
    number: 'TA 102',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Engineering Graphics',
    number: 'TA 202',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Fundamentals of Computer Programming',
    number: 'TA 111',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Fundamentals of Electronics',
    number: 'EL 111',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Community Connect',
    number: 'NU 111',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Physics',
    number: 'PHY 101',
    link: '',
    university: 'NIIT University',
  },
  // 2nd Semester Courses
  {
    title: 'Discovering Self',
    number: 'AOC 1101',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Photography',
    number: 'AOC 141',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Algebra & Differential Equations',
    number: 'MAT 101',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Chemistry',
    number: 'CHM 111',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Data Structures',
    number: 'CS 102',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Economics',
    number: 'ECON 102',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Environmental Science',
    number: 'ENV 301',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Workshop Practice',
    number: 'TA 212',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Community Connect',
    number: 'NU 112',
    link: '',
    university: 'NIIT University',
  },
  // 3rd Semester Courses
  {
    title: 'Digital Logic & Circuit',
    number: 'EL 101',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Introduction to Communication System',
    number: 'CS 241',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Discrete Mathematics',
    number: 'CS 232',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Object Oriented Programming',
    number: 'CS 251',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Probability & Random Access',
    number: 'MAT 221',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Learning Technology for Skills Futures',
    number: 'ET 201',
    link: '',
    university: 'NIIT University',
  },
  // 4th Semester Courses
  {
    title: 'Health Exercise and Sports',
    number: 'AOC 151',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Database Management Systems',
    number: 'CS 231',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Operating System',
    number: 'CS 211',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Theory of Computation',
    number: 'CS 302',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Selected Readings',
    number: 'HSS 301',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Design & Analysis of Algorithms',
    number: 'CS 201',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Computer Architecture & Organisation',
    number: 'CS 122',
    link: '',
    university: 'NIIT University',
  },
  // 5th Semester Courses
  {
    title: 'Computer Network',
    number: 'CS 261',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Software Engineering',
    number: 'CS 301',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Compiler Design',
    number: 'CS 332',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Photography',
    number: 'AOC 141',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Introduction to Linear and Non-Linear Optimization',
    number: 'CS 4101',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Digital Image Processing',
    number: 'EL 302',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Professional Ethics and Values',
    number: 'HSS 201',
    link: '',
    university: 'NIIT University',
  },
  // 6th Semester Courses
  {
    title: 'Artificial Intelligence',
    number: 'CS 322',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Capstone Project I',
    number: 'CS 392',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Health exercise and Sports',
    number: 'AOC 151',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Machine Learning',
    number: 'CS 4131',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Natural Language Processing & Text Analytics',
    number: 'CS 4261',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'R & D Project',
    number: 'NU 302',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Professional Life Skills I',
    number: 'TA 302',
    link: '',
    university: 'NIIT University',
  },
  // 7th Semester Courses
  {
    title: 'Computer Vision',
    number: 'CS 4111',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Learning Technologies Project Course',
    number: 'ET 401',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Capstone Project II',
    number: 'CS 4191',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Internet of Things - Design Fundamentals',
    number: 'CS 4291',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Deep Learning and Generative AI',
    number: 'CS 4341',
    link: '',
    university: 'NIIT University',
  },
  {
    title: 'Data Mining',
    number: 'CS 451',
    link: '',
    university: 'NIIT University',
  },
  // 8th Semester Courses
  {
    title: 'Industry Practice/Project',
    number: 'NU 402',
    link: '',
    university: 'NIIT University',
  },
];

export default courses;
