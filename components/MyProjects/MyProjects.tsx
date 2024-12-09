import "./my-projects.scss";
import { funnel_sans } from "@/app/fonts/fonts";
import Image from "next/image";
import grid_curve from "@/public/Noise grid(7).svg";
import CardProject from "@/components/MyProjects/CardProject";

const МyProjects = () => {

 return (
  <div className={`${funnel_sans.className}`} id="my-projects">
   <Image className={"grid-curve"} width={3000}
          src={grid_curve} alt={"Curve grid"} />
   <h1 className={"h1-myproject"}>My projects</h1>
   <CardProject />
  </div>
 );
};

export default МyProjects;