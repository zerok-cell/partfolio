import { CSSProperties, ReactNode } from "react";

const FlexBoxHorizontal = ({ children, className, direction, fillEverything, customStyle }: {
 children: ReactNode,
 className?: string,
 direction: "row" | "column"
 fillEverything?: boolean
 customStyle?: CSSProperties
}) => {
 const style: CSSProperties = {
  display: "flex",
  flexDirection: direction,
  alignItems: "center",
  justifyItems: "center",
  width: fillEverything ? "100%" : "100%",
  ...customStyle
 };
 return (
  <div className={className} style={style}>
   {children}
  </div>
 );
};

export default FlexBoxHorizontal;