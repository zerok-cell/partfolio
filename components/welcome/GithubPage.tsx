"use client";

import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import avatar from "@/public/profilegit.webp";
import { funnel_sans } from "@/app/fonts/fonts";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { redirect } from "next/navigation";

const GithubPage = () => {
 const [hidden, setHidden] = useState(false);
 const [scope, animate] = useAnimate();
 const urlMyGithub = "https://github.com/zerok-cell";
 const thanksOrRedirect = () => {
  setHidden(true);
  animate(scope.current, { opacity: 1 });
  setTimeout(() => redirect(urlMyGithub), 300);
 };
 return (
  <motion.div initial={{ x: 1000 }} animate={{ x: 0 }} id={"avatar"}>
   <Image width={700} src={avatar} alt={"My avatar"}></Image>
   <div id={"clip-git"} className={`${funnel_sans.className}`}>
    <Link className={`${funnel_sans.className}`} href={urlMyGithub}>Visit my GitHub
     page <GitHubIcon /></Link>

    <motion.div ref={scope} initial={{ opacity: 0 }} className={"favorite"}
                style={{ display: hidden ? "block" : "none" }}>

     <motion.p
     >Thanks
      you❤️
     </motion.p>

    </motion.div>

    <ArrowForwardIcon onMouseUp={thanksOrRedirect} className={"arrow"} />

   </div>
  </motion.div>
 );
};

export default GithubPage;