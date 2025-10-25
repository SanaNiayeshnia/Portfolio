import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { TbPhoneFilled, TbTargetArrow } from "react-icons/tb";
import { getGmailRedirectUrl } from "./utils";
import {
  PiCompassRoseFill,
  PiLaptopFill,
  PiRocketLaunchFill,
} from "react-icons/pi";

export const projects = [
  {
    title: "Project Title Title title title title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis labore possimus voluptatibus aliquam voluptate beatae consectetur, at quidem iusto ad, deserunt eos ut dolorum ab minima assumenda soluta quo qui!",
    img: "/images/projects/1.png",
    link: "/projects/something",
  },
  {
    title: "Project Title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis labore possimus voluptatibus aliquam voluptate beatae consectetur, at quidem iusto ad, deserunt eos ut dolorum ab minima assumenda soluta quo qui!",
    img: "/images/projects/1.png",
    link: "/projects/something",
  },
  {
    title: "Project Title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis labore possimus voluptatibus aliquam voluptate beatae consectetur, at quidem iusto ad, deserunt eos ut dolorum ab minima assumenda soluta quo qui!",
    img: "/images/projects/1.png",
    link: "/projects/something",
  },
  {
    title: "Project Title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis labore possimus voluptatibus aliquam voluptate beatae consectetur, at quidem iusto ad, deserunt eos ut dolorum ab minima assumenda soluta quo qui!",
    img: "/images/projects/1.png",
    link: "/projects/something",
  },
  {
    title: "Project Title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis labore possimus voluptatibus aliquam voluptate beatae consectetur, at quidem iusto ad, deserunt eos ut dolorum ab minima assumenda soluta quo qui!",
    img: "/images/projects/1.png",
    link: "/projects/something",
  },
  {
    title: "Project Title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis labore possimus voluptatibus aliquam voluptate beatae consectetur, at quidem iusto ad, deserunt eos ut dolorum ab minima assumenda soluta quo qui!",
    img: "/images/projects/1.png",
    link: "/projects/something",
  },
];

export const workExperiences = [
  {
    role: "WordPress Developer",
    company: "Raei Institute",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    startDate: new Date("2023-11-01T00:00:00.000Z"),
    endDate: new Date("2024-06-01T00:00:00.000Z"),
  },
  {
    role: "Front-end Developer",
    company: "Vira Segal Karo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    startDate: new Date("2024-09-26T00:00:00.000Z"),
    endDate: new Date("2025-09-22T00:00:00.000Z"),
  },
];

export const languages = [
  { name: "Persian", description: "Native Language" },
  {
    name: "English",
    description: "Good English proficiency for technical and professional use",
  },
];

export const contactMethods = [
  {
    label: "PhoneNumber",
    value: "09368600906",
    icon: TbPhoneFilled,
    link: "tel:+989368600906",
  },
  {
    label: "Gmail",
    value: process.env.NEXT_PUBLIC_MY_GMAIL,
    icon: SiGmail,
    link: getGmailRedirectUrl(),
  },
  {
    label: "Linkedin",
    value: "sana-niayeshnia",
    icon: SiLinkedin,
    link: "https://www.linkedin.com/in/sana-niayeshnia",
  },
  {
    label: "Github",
    value: "SanaNiayeshnia",
    icon: SiGithub,
    link: "https://github.com/SanaNiayeshnia",
  },
];

export const aboutContent = [
  {
    title: "My Journey",
    icon: <PiCompassRoseFill />,
    description:
      "I began learning front-end development in 2022, marking the start of a path that combined two things I’ve always loved — creativity and technology. With an artistic mindset and a passion for programming, front-end quickly became the perfect space for me to express ideas visually and logically.",
  },
  {
    title: "Gaining Experience",
    icon: <PiLaptopFill />,
    description:
      "During my studies, I worked for a year as a WordPress developer, which gave me a solid foundation in building and managing websites. Later, I transitioned into working professionally as a Front-End Developer using React and Next.js, where I gained hands-on experience developing dynamic, responsive, and performance-focused web applications.",
    img: "/images/doodles/doodle40.png",
  },
  {
    title: "Always Learning",
    icon: <PiRocketLaunchFill />,
    description:
      "I’m not afraid of learning new technologies — actually, I enjoy it. The web moves fast, and staying curious keeps me motivated. Whether it’s experimenting with new tools or optimizing performance, I love exploring better ways to build clean, efficient, and user-friendly interfaces.",
    img: "/images/doodles/doodle43.png",
  },
  {
    title: "Today",
    icon: <TbTargetArrow />,
    description:
      "Today, I continue improving my skills and exploring new ideas in front-end development. My goal is to build meaningful digital experiences that feel smooth, fast, and engaging — and to always keep learning along the way.",
    img: "/images/doodles/doodle44.png",
  },
];

export const colors = ["green", "sky", "pink", "amber"];

export const randomFacts = [
  "My MBTI type is INFJ.",
  "I LOVE reading fantasy books (knights, elves, dragons, etc.)",
  "I enjoy doing yoga.",
  "My favorite singer is Halsey.",
  "I used to draw realistic art when I was younger.",
  "I write poems that I rarely share with anyone.",
  "My favorite color is blue. (So yeah, I'd like to paint the whole web blue!)",
  "I have a younger sister.",
  "I'm a Marvel fan. (Loki is my favorite character.)",
  "My dream job is to own a flower shop.",
];
