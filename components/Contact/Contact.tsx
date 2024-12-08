"use client";
import { motion, useAnimate } from "framer-motion";
import "./contact.scss";
import CodeIcon from "@mui/icons-material/Code";
import { funnel_sans } from "@/app/fonts/fonts";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Link from "next/link";

const Contact = () => {
 const [scope, animate] = useAnimate();
 const inViewFooter = () => {
  setTimeout(() => {
   animate(scope.current, { width: "100%" });
  }, 100);
 };

 return (
  <motion.div className={`${funnel_sans.className}`} onViewportEnter={inViewFooter}
              initial={{ width: 10, height: "100px" }} ref={scope} id="contact">
   <div>
    <CodeIcon />
    <p>Developed by Murad Shakhsinov</p>
   </div>
   <div>
    <EmailIcon />

    <p>My mail: <Link href={"mailto:swiftkey382@gmail.com"}>swiftkey382@gmail.com</Link></p>
   </div>
   <Button style={{ borderRadius: "30px", marginLeft: 20, color: "var(--green-text)" }}><Link
    style={{
     textDecoration: "none",
     color: "var(--green-text)"
    }}
    href={"#avatar"}>
    <ArrowUpwardIcon />
   </Link></Button>
  </motion.div>
 );
};

export default Contact;