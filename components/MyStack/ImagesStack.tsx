"use server";

import { dataStack } from "@/lib/data";
import Image from "next/image";

const ImageStack = ({ sizeIcon }: { sizeIcon: number }) => {
 return (
  <>
   {dataStack.map((item) => (
    <div key={item.className} className={item.className}>
     {item.icons.map((icon, idx) => (
      <Image key={icon.src + idx} src={icon.src} alt={icon.alt} width={sizeIcon} />
     ))}
    </div>
   ))}
  </>
 );
};


export default ImageStack;
