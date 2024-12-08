"use client";

import { motion } from "framer-motion";
import { funnel_sans } from "@/app/fonts/fonts";
import { useEffect, useState } from "react";

const WelcomeTable = () => {

 const startWelcome: string = "Welcome to my";
 const [, setDisable] = useState(false);
 const [value, setValue] = useState("");

 useEffect(() => {
  const totalTime = startWelcome.length * 100;
  for (let i = 0; i < startWelcome.length; i++) {
   setTimeout(() => {
    setValue((prev) => prev + startWelcome[i]); // Добавляем текущий символ
   }, 1000 + (i + 2) * 50); // Интервал между символами в миллисекундах
  }
  setTimeout(() => {
   setDisable(true);

  }, totalTime);
 }, []);

 return (
  <motion.h1
   className={`${funnel_sans.className}`}
   initial={{ scale: 0, x: -500 }}
   animate={{ x: 0, scale: 1 }}
  >
   {value}
   <motion.span initial={{ opacity: 0 }} transition={{ delay: 2 }}
                animate={{ opacity: 1 }}> portfolio
   </motion.span>
  </motion.h1>
 );
};

export default WelcomeTable;