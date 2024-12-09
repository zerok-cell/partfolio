"use server";
import "./my-stack.scss";
import { funnel_sans } from "@/app/fonts/fonts";
import HeaderFromMyStack from "@/components/MyStack/HeaderFromMyStack";
import ImageStack from "@/components/MyStack/ImagesStack";
import TerminalComponent from "@/components/MyStack/TerminalComponent";
import FlexBoxHorizontal from "@/components/MiniComponents/FlexBox";
import { CSSProperties } from "react";

const MyStack = () => {
 const sizeIcon = 200;
 const headerStyle: CSSProperties = {
  justifyContent: "space-between"
 };

 return (
  <div className={`${funnel_sans.className}`} id="my-stack">
   <FlexBoxHorizontal direction={"column"}>
    <FlexBoxHorizontal direction={"row"} customStyle={headerStyle}><HeaderFromMyStack /></FlexBoxHorizontal>
    <FlexBoxHorizontal customStyle={{
     height: "612px",
     flexGrow: 1,
     zIndex: 3

    }} direction={"row"}>
     <ImageStack sizeIcon={sizeIcon} />
     <TerminalComponent />
    </FlexBoxHorizontal>
   </FlexBoxHorizontal>

  </div>
 );
};

export default MyStack;