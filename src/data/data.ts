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
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: testimonialAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: testimonialAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: testimonialAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: testimonialAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: testimonialAvatar5,
  },
];
