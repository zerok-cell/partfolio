"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { funnel_sans } from "@/app/fonts/fonts";

export default function AboutMe() {
 const [value, setValue] = useState("");
 const data: string = "Hi! My name is murad, and I am a full—stack developer with experience in working with React, Django and Next.js.During the time\n" +
  "In my career, I have managed to gather a wide range of skills and knowledge that allow me to develop complex and\n" +
  "effective web applications.".split(" ");

 const addword = () => {
  for (let i = 0; i < data.length; i++) {
   setTimeout(() => {
    setValue((prev) => prev + data[i]);
   }, 1000 + (i + 2) * 20);
  }


 };
 useEffect(() => {
  addword();
 }, []);
 return (
  <motion.div animate={{ y: [0, 2, 5, 8, 10, 8, 5, 2, 0] }}
              transition={{ ease: "easeInOut", type: "keyframes", repeat: Infinity, duration: 2 }}
              style={{ display: value.length > 0 ? "block" : "none" }} id="aboutMe">

   <motion.p className={`text ${funnel_sans.className}`}>
    {value}
   </motion.p>


  </motion.div>
 );
}