"use server";

import "./welcome_style.scss";
import { funnel_sans } from "@/app/fonts/fonts";
import Image from "next/image";
import Noise from "@/public/Noise grid(5).svg";
import WelcomeTable from "@/components/welcome/WelcomeTable";
import GithubPage from "@/components/welcome/GithubPage";
import AboutMe from "@/components/welcome/AboutMe";

const Welcome = () => {


 return (
  <div className={`container ${funnel_sans.className}`}>
   <div className={`rectangle onerc`} />
   <WelcomeTable />
   <GithubPage />
   <AboutMe />
   <Image className={"noise-grid"} width={3000} src={Noise} alt={"My avatar"}></Image>
  </div>
 );
};

export default Welcome;