"use client";
import { motion } from "framer-motion";
import Button from "../MiniComponents/Button";
import { useState } from "react";
import { ledger } from "@/app/fonts/fonts";

export default function AboutMe() {
 const [value, setValue] = useState("");
 const data: string = "Hi! My name is murad, and I am a full—stack developer with experience in working with React, Django and Next.js.During the time\n" +
  "In my career, I have managed to gather a wide range of skills and knowledge that allow me to develop complex and\n" +
  "effective web applications.".split(" ");

 const addword = () => {
  for (let i = 0; i < data.length; i++) {
   setTimeout(() => {
    setValue((prev) => prev + data[i]); // Добавляем текущий символ
   }, 1000 + (i + 2) * 20); // Интервал между символами в миллисекундах
  }
 };
 return (
  <motion.div id="aboutMe">
   <motion.div>
    <p className={`text ${ledger.className}`}>
     {value}
    </p>

   </motion.div>

   <Button onMouseUp={addword}>
    About me
   </Button>
  </motion.div>
 );
}