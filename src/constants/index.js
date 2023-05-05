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
  // sass,
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
  // {
  //   name: "Sass",
  //   icon: sass,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

// console.log(technologies.`${name}`);

// const technologiesList = technologies
//   .map((technology) => `<li>${technology.name}</li>`)
//   .join("");

// const technologiesElement = document.getElementById("technologies");
// technologiesElement.innerHTML = `<ul>${technologiesList}</ul>`;

const experiences = [
  {
    title: "Graduate",
    company_name: "Brainstation",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Dec 2022",
    points: [
      "A 3-month intensive coding bootcamp to gain all required industry skills for a role in web development.",
      "Technologies : Postman API · NPM · Agile Web Development · Front-End Development · HTML · Cascading Style Sheets (CSS) · HTML5 · Node.js · React.js · JavaScript · JSON · Express.js · Git · ",
    ],
  },
  {
    title: "Q&A Tester",
    company_name: "Jayson Digital MCC",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "IdeaPulse",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2019- August 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      ,
    ],
  },
  {
    title: "Co-Founder",
    company_name: "iReadAloud",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2015",
    points: [
      "Developed an artificial intelligence mobile application to help the visually impaired read that landed as a finalist out of nine in the Ontario’s IDeA competition (Innovative for Design Accessibility)",
      " Secured funding of $13k from the Norman Esch Awards with a working prototype",
    ],
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
