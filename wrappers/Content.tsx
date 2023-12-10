import { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/NavBar.module.css";

const Content: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <main>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.content}
      >
        {children}
      </motion.div>
    </main>
  );
};

export default Content;
