"use server";

import { dataStack } from "@/lib/data";
import Image from "next/image";
import FlexBoxHorizontal from "@/components/MiniComponents/FlexBox";

const ImageStack = ({ sizeIcon }: { sizeIcon: number }) => {
 return (
  <FlexBoxHorizontal direction="row">
   {dataStack.map((item) => (
    <div key={item.className} className={`${item.className}  `}>
     {item.icons.map((icon, idx) => (
      <Image key={icon.src + idx} src={icon.src} className={"base-image"} alt={icon.alt} />
     ))}
    </div>
   ))}
  </FlexBoxHorizontal>
 );
};


export default ImageStack;
