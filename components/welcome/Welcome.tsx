"use client";
import { motion } from "framer-motion";
import "./welcome_style.scss";
import { Ledger } from "next/font/google";
import { useEffect, useState } from "react";

const ledger = Ledger({
 subsets: ["latin"],
 weight: "400"
});

const Welcome = () => {
 const startWelcome: string = "Welcome to my";
 const [disable, setDisable] = useState(false);
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

 }, [startWelcome]);
 return (
  <motion.div className={`container ${ledger.className}`}>
   <motion.div className={`rectangle onerc`} />
   <motion.div className={`rectangle tworc`} />
   <motion.h3
    initial={{ x: -1000 }}
    animate={{ x: 0 }}
    transition={{ delay: 1 }}
   >
    by: Shakhsinov Murad 💤
   </motion.h3>

   <motion.h1
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    
   >
    {value} <span
    style={{ color: "#9595e6", opacity: disable ? "100%" : "0" }}>portfolio</span>
    <hr />
   </motion.h1>
  </motion.div>
 );
};

export default Welcome;