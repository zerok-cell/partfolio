import { motion } from "framer-motion";

const Header = () => {
 return (
  <motion.div className={"header-panel"} initial={{ width: 0 }} animate={{ width: "100%" }}>

  </motion.div>
 );
};

export default Header;
