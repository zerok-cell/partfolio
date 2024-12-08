"use client";
import { motion } from "framer-motion";

const HeaderFromMyStack = () => {


 // const neon = () => {
 //  animate(scope.current, { boxShadow: "0 0 300px 0 rgba(49, 179, 139, 0.08)" });
 //
 //  setTimeout(() => (animate(scope.current, { boxShadow: "0 0px 1000px 0 rgba(49, 179, 139, 1)" })), 100);
 //  setTimeout(() => (animate(scope.current, { boxShadow: "0 0px 1000px 0 rgba(49, 179, 139, 0.3)" })), 300);
 //
 // };
 return (
  <>
   <motion.h1 initial={{}} className={"h1about"}>
    About
   </motion.h1>

   <motion.div initial={{ boxShadow: "" }} id={"mystackh1"}>
    <motion.h1>
     my stack
    </motion.h1>
   </motion.div>
  </>
 );
};
export default HeaderFromMyStack;