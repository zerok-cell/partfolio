import "./styles.scss";

export default function Button({ children, onMouseUp }: { children: string, onMouseUp?: () => void }) {
 return (
  <button onMouseUp={onMouseUp} className="mini-button">
   {children}
  </button>
 );
};