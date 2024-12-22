import testimonialAvatar1 from "@/assets/images/testimonial-ava-1.jpg";
import testimonialAvatar2 from "@/assets/images/testimonial-ava-2.jpg";
import testimonialAvatar3 from "@/assets/images/testimonial-ava-3.jpg";
import testimonialAvatar4 from "@/assets/images/testimonial-ava-4.jpg";
import testimonialAvatar5 from "@/assets/images/testimonial-ava-5.jpg";

import ShopLux from "@/assets/images/shoplux.png";
import TheUnforsaken from "@/assets/images/theunforsaken.png";
import Calendly from "@/assets/images/calendly.png";
import Prisma from "@/assets/icons/prisma.png";
import Next from "@/assets/icons/next-js.png";
import ReactIcon from "@/assets/icons/react.png";
import Tailwind from "@/assets/icons/tailwind.png";
import TypeScript from "@/assets/icons/typescript.png";
import CalendlyIcon from "@/assets/icons/Calendly-icon.png";
import Nodejs from "@/assets/icons/node-js-icon.png";
import Stripe from "@/assets/icons/stripe.webp";


import { 
  FaReact,
  FaHtml5,
  FaSquareGithub,
  FaCss3,
} from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

import { VscVscode } from "react-icons/vsc";
import { LuNotebookPen } from "react-icons/lu";
import { FaFigma, FaGithub } from "react-icons/fa6";
import { SiAdobe } from "react-icons/si";


export const footerLinks = [
  {
    LinkItem: "Github",
    href: "https://github.com/Sammy212"
  },
  {
    LinkItem: "LinkeIn",
    href: "https://www.linkedin.com/in/samuel-afo/"
  },
  {
    LinkItem: "X",
    href: "https://x.com/datadocs_ng"
  },
  {
    LinkItem: "Instgram",
    href: "https://www.instagram.com/sammyafo/"
  },
  {
    LinkItem: "Facebook",
    href: "https://www.facebook.com/sammy.afo"
  },
]

// Tool Stack data
export const techStack = [
  {
    tool: "React",
    icon: FaReact,
  },
  {
    tool: "JavaScript",
    icon: SiJavascript,
  },
  {
    tool: "Github",
    icon: FaSquareGithub,
  },
  {
    tool: "HTML5",
    icon: FaHtml5,
  },
  {
    tool: "CSS3",
    icon: FaCss3,
  },
  {
    tool: "Nextjs",
    icon: RiNextjsFill,
  },
  // {
  //   tool: "Vite",
  //   icon: "",
  // },
  // {
  //   tool: "VUE",
  //   icon: "",
  // },
  // {
  //   tool: "Redux",
  //   icon: "",
  // },
  // {
  //   tool: "Nodejs",
  //   icon: "",
  // },
  // {
  //   tool: "MongoDB",
  //   icon: "",
  // },
  // {
  //   tool: "Firebase",
  //   icon: "",
  // },
  // {
  //   tool: "Prisma",
  //   icon: "",
  // },
  // {
  //   tool: "Jest",
  //   icon: "",
  // },
  // {
  //   tool: "Redis",
  //   icon: "",
  // },
]


// Tools
export const tools = [
  {
    tool: "Vs Code",
    image: VscVscode,
    left: "45%",
    top: "30%",
  },
  {
    tool: "Note and Pen",
    image: LuNotebookPen,
    left: "5%",
    top: "5%",
  },
  {
    tool: "Figma",
    image: FaFigma,
    left: "5%",
    top: "30%",
  },
  {
    tool: "GitHub",
    image: FaGithub,
    left: "61%",
    top: "5%",
  },
  {
    tool: "Adobe Suite",
    image: SiAdobe,
    left: "46%",
    top: "52%",
  },
]


// Projects Data
export const myProjects = [
  {
    id: 3,
    title: "A Calendly Replica",
    company: "Calendly",
    year: "2024",
    description: "A replica of Calendly built with Next 14, Nylas, Prisma, Postgres, Tailwind, Shadcn, Auth, Supabase",
    techStacks: [
      {
        title: "React",
        icon: ReactIcon,
      },
      {
        title: "Calendly API",
        icon: CalendlyIcon,
      },
      {
        title: "Prisma",
        icon: Prisma,
      },
      {
        title: "Nodejs",
        icon: Nodejs,
      },
      {
        title: "Stripe API",
        icon: Stripe,
      },
    ],
    link: "https://calendly-theta.vercel.app/",
    githubLink: "https://github.com/Sammy212/calendly",
    image: Calendly,
  },
  {
    id: 1,
    title: "TheUnforsaken House Website Redesign",
    company: "TheUnforsaken House",
    year: "2024",
    description: "Redesigned a clinical psychology website in React, enhancing user experience, brand identity, and client engagement. As Product Manager and Lead Developer, I led a team to craft a welcoming, accessible interface with improved navigation and a new logo.",
    techStacks: [
      {
        title: "React",
        icon: ReactIcon,
      },
      {
        title: "Calendly API",
        icon: CalendlyIcon,
      },
      {
        title: "Prisma",
        icon: Prisma,
      },
      {
        title: "Nodejs",
        icon: Nodejs,
      },
      {
        title: "Stripe API",
        icon: Stripe,
      },
    ],
    link: "https://theunforsaken.org",
    githubLink: "https://github.com/Sammy212/shoplux-next",
    image: TheUnforsaken,
  },
  {
    id: 2,
    title: "shopLux Fullstack Development Project",
    company: "shopLux",
    year: "2024",
    description: "Build a fullstack ecommerce web application using Next, Tailwind, Prisma, Redis, Neon, Stripe to accept payment and zod for form validation ",
    techStacks: [
      {
        title: "React",
        icon: ReactIcon,
      },
      {
        title: "Calendly API",
        icon: CalendlyIcon,
      },
      {
        title: "Prisma",
        icon: Prisma,
      },
      {
        title: "Nodejs",
        icon: Nodejs,
      },
      {
        title: "Stripe API",
        icon: Stripe,
      },
    ],
    link: "https://shoplux-next.vercel.app/",
    githubLink: "https://github.com/Sammy212/shoplux-next",
    image: ShopLux,
  },
];


// Strengths data
export const myStrengths = [
  "Communicative",
  "Active Listener",
  "Creativity",
  "Scrupulous",
  "Versatility",
  "Trustworthiness",
  "Punctuality",
  "Detail-oriented",
  "Logical thinking",
  "Results driven",
  "Teamwork",
  "Project management",
  "Time management",
]


// testimonials data
export const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager",
    company: "TechStartups",
    text: "Sam was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: testimonialAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design",
    company: "GreenLeaf",
    text: "Working with Sam was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: testimonialAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO",
    company: "InnovateCo",
    text: "Sam's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: testimonialAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager",
    company: "GlobalTech",
    text: "Sam is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: testimonialAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT",
    company: "MegaCorp",
    text: "Sam's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: testimonialAvatar5,
  },
];

