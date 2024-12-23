import nextjs from "@/public/nextjs-icon.svg";
import typescript from "@/public/typescript-programming-language-icon.svg";
import javascript from "@/public/javascript-programming-language-icon.svg";
import redux from "@/public/redux-icon.svg";
import django from "@/public/django-icon.svg";
import python from "@/public/python-programming-language-icon.svg";
import tailwindcss from "@/public/tailwind-css-icon.svg";
import react from "@/public/react-js-icon.svg";
import sass from "@/public/sass-icon.svg";
import { DataHeaderLink } from "@/app/types";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import TerminalIcon from "@mui/icons-material/Terminal";
import supernova from "@/public/supernova.webp";

export const dataStack = [
 {
  className: "next-ts-js",
  icons: [
   { src: nextjs, alt: "Next.js logotype" },
   { src: typescript, alt: "TypeScript logotype" },
   { src: javascript, alt: "JavaScript logotype" }
  ]
 },
 {
  className: "redux-dj-python",
  icons: [
   { src: redux, alt: "Redux logotype" },
   { src: django, alt: "Django logotype" },
   { src: python, alt: "Python logotype" }
  ]
 },
 {
  className: "sass-tail-css",
  icons: [
   { src: sass, alt: "Sass logotype" },
   { src: tailwindcss, alt: "Tailwind CSS logotype" },
   { src: react, alt: "CSS logotype" }
  ]
 }
];

export const dataFromHeader: DataHeaderLink[] = [{
 text: "Contact", url: "#contact", icon: <ContactEmergencyIcon />
},
 {
  text: "About my stack", url: "#my-stack", icon: <HorizontalSplitIcon />
 },
 {
  text: "My projects", url: "#my-projects", icon: <TerminalIcon />
 }];

export const cardProject = [{
 description: "Supernova is a project for communicating with a chatbot, this is my pet project. At the moment, it is not functional because it does not reach the hands to make a backend.",
 photo: supernova,
 col: 1,
 row: 2,
 colP: 2,
 alt: "supernova",
 width: 1000

}];