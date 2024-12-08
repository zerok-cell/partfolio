import "./styles.scss";
import { funnel_sans } from "@/app/fonts/fonts";


export default function Button({ children, onMouseUp }: { children: string, onMouseUp?: () => void }) {
 return (
  <button onMouseUp={onMouseUp} className={`mini-button ${funnel_sans.className}`}>
   {children}
  </button>
 );
};