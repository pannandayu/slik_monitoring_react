import { ReactNode } from "react";
import styles from "@/styles/CardDataBox.module.css";

const CardDataBox: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-content"]}>{children}</div>
    </div>
  );
};

export default CardDataBox;
