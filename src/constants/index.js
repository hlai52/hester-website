import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  brainstation,
  jayson,
  tmu,
  ideapulse,
  ira,
  sass,
  github,
  bandsite,
  coffeeshop,
  reset,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Business",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Github",
    icon: github,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Sass",
    icon: sass,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "QA Tester",
    company_name: "Jayson Digital MCC[Contract]",
    icon: jayson,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Ensure design accuracy, verify component behavior, viewport responsiveness and browser compatibility",
      "Create detailed bug reports, providing comprehensive explanations, relevant screenshots or recordings, to ensure thoroughness and accuracy in documenting findings",
      "Contribute to website quality enhancement through constructive feedback and recommendations",
    ],
  },
  {
    title: "Graduate",
    company_name: "Brainstation",
    icon: brainstation,
    iconBg: "#383E56",
    date: "Dec 2022",
    points: [
      "An intensive coding bootcamp to gain all required industry skills for a role in web development",
      "Technologies : Postman API · NPM · Agile Web Development · Front-End Development · HTML · Cascading Style Sheets (CSS) · HTML5 · Node.js · React.js · JavaScript · JSON · Express.js · Git  ",
    ],
  },
  {
    title: "Business Analyst",
    company_name: "IdeaPulse",
    icon: ideapulse,
    iconBg: "#383E56",
    date: "August 2020- November 2022",
    points: [
      "Managed end-to-end project lifecycle with a focus on risk mitigation and transparent communication, driving successful campaigns",
      "Collaborated with teams to analyze business needs and processes, identifying areas for process enhancement and strategic decision-making",
      "Oversaw project deliverables by devising action plans, facilitating meetings among  executives, clients, and contractors, and ensuring comprehensive fulfillment of  all requirements",
      "Regularly presented data-driven reports to stakeholders to support strategic planning and decision-making",
    ],
  },

  {
    title: "Co-Founder",
    company_name: "iReadAloud",
    icon: ira,
    iconBg: "#E6DEDD",
    date: "Toronto",
    points: [
      "Developed an artificial intelligence mobile application to help the visually impaired read that landed as a finalist out of nine in the Ontario’s IDeA competition (Innovative for Design Accessibility)",
    ],
  },
  {
    title: "Bachelor of Commerce",
    company_name: "TMU(previously Ryerson University)",
    icon: tmu,
    iconBg: "#E6DEDD",
    date: "Toronto Metropolitan University",
    points: [" Bachelor of Commerce from Ted Rogers School of Management."],
  },
];

const testimonials = [
  {
    testimonial:
      "Hardworking, team player, problem solver are some of the few traits I could describe about Hester. Hester's dedication, commitment to doing her best and perseverance are truly admirable.Working with her in a team was such a delight since she always find a way through and was fun to work with. ",
    name: "Alex Marquina",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Hester does.",
    name: "Mindy Kaling",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "Hester is the best web developer in the world. ",
    name: "A",
    designation: "VVVV-V-VIP",
    company: "Humanity",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

const projects = [
  {
    name: "Bandsite",
    description:
      "Web-based platform that allows users to check the band's concerts and information and to leave a comment.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: bandsite,
    source_code_link: "https://github.com/hlai52/hester-lai-bandsite",
  },
  {
    name: "Coffee Shop",
    description:
      "Web application that lets users view the coffee store menu and peruse the online shop for items.",
    tags: [
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: coffeeshop,
    source_code_link: "https://github.com/hlai52/coffee-shop/tree/dev",
  },
  {
    name: "Reset",
    description:
      "The to-do list function allows users to store tasks and provides CRUD (create, read, update, delete) functionality. The work corner provides a designated space with a timer for users to accomplish their tasks, and displays the last completed task. Additionally, there is a customizable pomodoro timer and a music section to aid in focus and relaxation.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "REACT",
        color: "orange-text-gradient",
      },
    ],
    image: reset,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
