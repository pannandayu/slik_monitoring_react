import { ReactNode } from "react";
import styles from "@/wrappers/Card.module.css";

const Card: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-content"]}>{children}</div>
    </div>
  );
};

export default Card;
