"use client";
import "./header.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import { funnel_sans } from "@/app/fonts/fonts";
import { dataFromHeader as data } from "@/lib/data";
import zerok_logo from "@/public/logozerok.svg";
import Image from "next/image";

const Header = () => {

 return (
  <motion.div id={"header-panel"} className={` ${funnel_sans.className}`} initial={{ width: 0, height: 0 }}
              animate={{ height: 60, width: "100%" }}>
   <Image src={zerok_logo} alt={"Logo site"} width={32} />
   <div className="header-panel-links">
    {data.map((item, key) => {
     return (
      <Link key={item.text + key} className={"base-flex"} href={item.url}>
       {item.text}
       {item.icon}
      </Link>
     );
    })}
   </div>
  </motion.div>
 );
};

export default Header;
