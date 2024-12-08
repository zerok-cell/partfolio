import { cardProject } from "@/lib/data";
import Image from "next/image";

const CardProject = () => {

 return (
  cardProject.map((item, key) => (
   <>
    <Image key={item.alt + key} style={{
     borderRadius: 10,
     border: "2px solid grey",
     marginTop: 20,
     gridRow: item.row,
     gridColumn: item.col
    }}
           src={item.photo}
           alt={item.alt}
           width={item.width} />
    <p className={"describe"} style={{ gridRow: item.row, gridColumn: item.colP }}>
     {item.description}
    </p>
   </>

  ))
 );
};
export default CardProject;