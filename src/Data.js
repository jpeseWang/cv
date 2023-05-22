import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaGitAlt,
  FaBootstrap,
  FaNodeJs,
  FaAngular
  
} from "react-icons/fa";
import { SiJquery, SiJavascript, SiTailwindcss, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { VscJson } from "react-icons/vsc";
import { DiScrum, DiMongodb } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";


export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  {
    id: 1,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/jpesewangwork/",
  },
  {
    id: 2,
    icon: <FaGithub />,
    link: "https://github.com/jpeseWang",
  },
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Le Nhat Quang",
  },
  {
    id: 2,
    icon: <FaGithub />,
    key: "Github",
    value: "@jpeseWang",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "jpesewangwork@gmail.com",
  },
];

export const icons = [
  {
    id: 1,
    icon:  <FaHtml5 />,
    bio: "HTML"
  },
  {
    id: 2,
    icon:  <FaCss3 />,
    bio: "CSS"
  },
  {
    id: 3,
    icon:  <FaSass />,
    bio: "SASS"
  },
  {
    id: 4,
    icon:  <SiTailwindcss />,
    bio: "TailwindCSS"
  },
  {
    id: 4,
    icon:  <FaGitAlt />,
    bio: "GIT"
  },
  {
    id: 5,
    icon:  <FaBootstrap />,
    bio: "Boostrap"
  },
  {
    id: 6,
    icon:  <SiJavascript />,
    bio: "JavaScript"
  },
  {
    id: 7,
    icon:  <SiTypescript />,
    bio: "Typesript"
  },
  {
    id: 9,
    icon:  <FaNodeJs />,
    bio: "ExpressJS"
  },
  
  {
    id: 10,
    icon:  <SiMongodb />,
    bio: "MongoDB"
  },
  
  
  {
    id: 11,
    icon:  <FaReact />,
    bio: "ReactJS"
  },

  {
    id: 12,
    icon:  <FaAngular />,
    bio: "Angular"
  },
 
];

export const experiences = [
  {
    id: 1,
    year: "2022/2023",
    position: "Front-End Developer",
    company: "FPT University",
  },
];

// export const finishes = [
//   {
//     id: 1,
//     number: "6+",
//     itemName: "Years Of Experience",
//   },
//   {
//     id: 2,
//     number: "150+",
//     itemName: "Satisfied Customers",
//   },
//   {
//     id: 3,
//     number: "669+",
//     itemName: "Designed Items",
//   },
//   {
//     id: 4,
//     number: "117+",
//     itemName: "Clients Served",
//   },
// ];
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "CodeWithMe",
    category: "CodeWithMe",
    gitLab: "https://github.com/jpeseWang/Code-With-Me2",
    demo: "https://cuisines.netlify.app/",
  },
  {
    id: 2,
    img: work2,
    name: "ReactJS 2",
    category: "SherlockTory",
    gitLab: "https://gitlab.com/stefantrenda/brainsterchallenges_stefantrendafilovskife7/-/tree/Challenge_19-React",
    demo: "https://sherlocktory.vercel.app/",
  },
  {
    id: 3,
    img: work3,
    name: "ReactJS 3",
    category: "ReactJS",
    gitLab: "https://github.com/jakesdev/cwp-web",
    demo: "https://bike-store-steph-dev.vercel.app/",
  },
  {
    id: 4,
    img: work4,
    name: "JavaScript 1",
    category: "JavaScript",
    gitLab: "https://gitlab.com/stefantrenda/brainsterchallenges_stefantrendafilovskife7/-/tree/Challenge_19-React",
    demo: "https://ajax-steph-dev.vercel.app/#",
  },
  {
    id: 5,
    img: work5,
    name: "JavaScript 2",
    category: "JavaScript",
    gitLab: "https://gitlab.com/stefantrenda/brainsterchallenges_stefantrendafilovskife7/-/tree/Challenge15-jQuery",
    demo: "https://jquery-racegame-steph-dev.vercel.app/",
  },
  {
    id: 6,
    img: work6,
    name: "JavaScript 3",
    category: "JavaScript",
    gitLab: "https://gitlab.com/stefantrenda/brainsterchallenges_stefantrendafilovskife7/-/tree/Challenges_14",
    demo: "https://budget-app-steph-dev.vercel.app/",
  }
];

export const workNavs = ["All", "ReactJS", "JavaScript", "SASS/Boostrap", "NextJS"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Da Nang, Viet Nam",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "jpesewangwork@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+84 393 983 339",
  },
];
