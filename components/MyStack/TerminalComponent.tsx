"use client";

import TerminalInput from "@/components/MiniComponents/TerminalInput";
import { motion, useAnimate } from "framer-motion";


const TerminalComponent = () => {
 const [scope, animate] = useAnimate();
 const side = (state: boolean) => {
  animate(scope.current, {
   height: state ? "90%" : 0, x: state ? 0 : 600
  });
 };


 return (
  <motion.div initial={{ height: 0, x: 600 }} className="about-tech" ref={scope} onViewportEnter={() => {
   side(true);
  }}

  >
   <TerminalInput />
   <motion.p
   >
    React: A library for creating user interfaces with a component approach, suitable for building dynamic spas.
    Next.js: A framework for React with support for server rendering, routing and static generation. Great for
    SEO-optimized applications.
    Django: A high-level Python framework for the backend, providing convenient tools for developing web applications
    with an emphasis on speed, security and scalability.
    Python: A universal programming language used for server development, scripting, data analytics, and machine
    learning.
    Tailwind CSS: A utilitarian CSS framework that allows you to quickly style components using classes directly in
    HTML/JSX.
    Redux: A third-party state management tool for React applications, often used for complex states that need to be
    shared between components.
    TypeScript: An add-on to JavaScript that adds strong typing, which helps to avoid errors and improves readability
    and code support.
    <motion.span
     animate={{ opacity: [0, 1, 0] }}
     transition={{ repeat: Infinity, duration: 1, type: "keyframes" }}>|
    </motion.span>
   </motion.p>
  </motion.div>
 );
};

export default TerminalComponent;