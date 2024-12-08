"use client";
import { motion } from "framer-motion";

const HeaderFromMyStack = () => {
 return (
  <>
   <motion.h1 initial={{}} className={"h1about"}>
    About
   </motion.h1>

   <div id={"mystackh1"}>
    <motion.h1>
     my stack
    </motion.h1>
   </div>
  </>
 );
};
export default HeaderFromMyStack;