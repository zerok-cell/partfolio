"use server";
import "./my-stack.scss";
import { funnel_sans } from "@/app/fonts/fonts";
import HeaderFromMyStack from "@/components/MyStack/HeaderFromMyStack";
import ImageStack from "@/components/MyStack/ImagesStack";
import TerminalComponent from "@/components/MyStack/TerminalComponent";

const MyStack = () => {
 const sizeIcon = 150;


 return (
  <div className={`${funnel_sans.className}`} id="my-stack">
   <HeaderFromMyStack />
   <ImageStack sizeIcon={sizeIcon} />
   <TerminalComponent />

  </div>
 );
};

export default MyStack;