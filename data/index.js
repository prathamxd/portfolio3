export const projects = [
  {
    id: 1,
    title: "Stress Analysis",
    route: "stress-analysis",
    img1: "/images/stress1.png",
    img2: "/images/stress2.png",
    img3: "/images/stress3.jpeg",
    tag: "Stress Analyzer",
    year: "2024",
    description:
      "This project will explore different machine learning algorithms, feature selection methodologies, and data preprocessing techniques to develop a reliable stress prediction model. Furthermore, it aims to evaluate the model's accuracy, sensitivity, and specificity to ascertain its efficiency in real-world scenarios.",
    link: "https://stress-analyzer.vercel.app/",
    github: "https://github.com/prathamxd/stress-analyzer",
    techStack: [
      { tech: "Next", icon: "/images/nextjs.svg" },
      { tech: "Javascript", icon: "/images/javascript.svg" },
      { tech: "Tailwind CSS", icon: "/images/tailwind.svg" },
      { tech: "Python", icon: "/images/python.svg" },
    ],
  },
  {
    id: 2,
    title: "Complete Admin Dashboard",
    route: "admin-dashboard",
    img1: "/images/dashboard1.png",
    img2: "/images/dashboard2.png",
    img3: "/images/dashboard3.png",
    tag: "Dashboard",
    year: "2023",
    description:
      "The Complete Admin Dashboard is a versatile tool designed to streamline administrative tasks. It features interactive bar, line, pie, and geography charts for dynamic data analysis. The dashboard includes a comprehensive list of employee contact details and a robust registration form with Zod-powered validation for data integrity. Additionally, it offers a calendar scheduler, enabling users to add and manage events effortlessly. This combination of features makes it an essential solution for optimizing administrative efficiency and data management.",
    link: "https://admin-dashboard-olive-delta.vercel.app/",
    github: "https://github.com/prathamxd/admin-dashboard",
    techStack: [
      { tech: "React", icon: "/images/react.svg" },
      { tech: "Javascript", icon: "/images/javascript.svg" },
      { tech: "Tailwind CSS", icon: "/images/tailwind.svg" },
      { tech: "Material UI", icon: "/images/materialui.svg" },
    ],
  },

  {
    id: 3,
    title: "Travel App Landing Page",
    route: "landing-page",
    img1: "/images/landing1.png",
    img2: "/images/landing2.png",
    img3: "/images/landing3.png",
    tag: "Landing Page",
    year: "2024",
    description:
      "The Travel App Landing Page is designed to captivate and engage users from the moment they arrive. This landing page features a sleek and intuitive interface that highlights the option to download the app, making it easy for users to access travel services on the go. It also showcases a comprehensive guide to adventure, providing travelers with exciting ideas and tips for their journeys. Additionally, the landing page outlines the key features provided by the website, ensuring visitors understand the full range of services available to enhance their travel experience. This blend of functionality and visual appeal makes the Travel App Landing Page an ideal starting point for any travel enthusiast.",
    link: "https://travel-landing-page-lilac.vercel.app/",
    github: "https://github.com/prathamxd/travel-landing-page",
    techStack: [
      { tech: "Next.js", icon: "/images/nextjs.svg" },
      { tech: "Typescript", icon: "/images/typescript.svg" },
      { tech: "Tailwind CSS", icon: "/images/tailwind.svg" },
    ],
  },

  {
    id: 4,
    title: "Car Rental Showcase App",
    route: "car-showcase",
    img1: "/images/showcase1.png",
    img2: "/images/showcase2.png",
    img3: "/images/showcase3.png",
    tag: "Showcase",
    year: "2023",
    description:
      "The Car Rental Showcase App is a user-friendly website designed for renting cars. It includes a robust filtering feature that allows users to search by make and model. Additionally, it provides advanced details such as mileage, fuel type, transmission, and drive mode, ensuring renters can find the perfect car to meet their needs. This comprehensive approach makes the Car Rental Showcase App an ideal choice for anyone looking to rent a car with confidence and ease.",
    link: "https://car-showcase-gules-alpha-77.vercel.app/",
    github: "https://github.com/prathamxd/car-showcase",
    techStack: [
      { tech: "Next.js", icon: "/images/nextjs.svg" },
      { tech: "Typescript", icon: "/images/typescript.svg" },
      { tech: "Tailwind CSS", icon: "/images/tailwind.svg" },
    ],
  },

  {
    id: 5,
    title: "Weather App",
    route: "weather-app",
    img1: "/images/weather1.png",
    img2: "/images/weather2.png",
    img3: "/images/weather3.jpeg",
    tag: "Weather",
    year: "2023",
    description:
      "The Weather Application is a comprehensive tool for staying updated on current weather conditions. It displays the weather and a 7-day forecast for various cities, including detailed conditions, minimum and maximum temperatures, humidity, and wind information. This app ensures users are well-informed and prepared for any weather scenario.",
    link: "https://weather-react-app-ochre.vercel.app/",
    github: "https://github.com/prathamxd/weather-react-app",
    techStack: [
      { tech: "React", icon: "/images/react.svg" },
      { tech: "Javascript", icon: "/images/javascript.svg" },
      { tech: "Tailwind CSS", icon: "/images/tailwind.svg" },
    ],
  },
];

import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

export const skills = [
  {
    skill: "Javascript",
    icon: <RiJavascriptLine size={32} style={{ color: "#ECD74D" }} />,
  },
  {
    skill: "Typescript",
    icon: <TbBrandTypescript size={32} style={{ color: "#3178C6" }} />,
  },
  {
    skill: "Next.js",
    icon: <TbBrandNextjs size={32} />,
  },
  { skill: "React", icon: <FaReact size={32} style={{ color: "#00D8FF" }} /> },
  {
    skill: "Tailwind CSS",
    icon: <RiTailwindCssLine size={32} style={{ color: "#1AB9BC" }} />,
  },
  {
    skill: "HTML",
    icon: <AiOutlineHtml5 size={32} style={{ color: "#F46A39" }} />,
  },
  { skill: "CSS", icon: <FaCss3 size={32} style={{ color: "#29A9DF" }} /> },
  { skill: "Redux", icon: <SiRedux size={32} style={{ color: "#764ABC" }} /> },
];

export const experience = [
  {
    company: "RightChoice.ai",
    role: "Frontend Developer Intern",
    duration: "Feb 2024 - April 2024",
  },
  {
    company: "Achintya Solutions",
    role: "Fullstack Developer Intern",
    duration: "Sept 2023 - Dec 2023",
  },
];
