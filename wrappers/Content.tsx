import { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "@/wrappers/NavBar.module.css";

const Content: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.content}
    >
      {children}
    </motion.div>
  );
};

export default Content;
