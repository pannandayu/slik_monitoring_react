import styles from "./DataBox.module.css";
import { motion } from "framer-motion";
import PersonalInfo from "./PersonalInfo";
const DataBox: React.FC<{ data: any }> = ({ data }) => {
  const { personalInfo } = data;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles["data-box"]}
    >
      <h2>Client's Data </h2>
      <hr />
      <div className={styles.frame}>
        <div className={styles["client-data"]}>
          <PersonalInfo data={personalInfo} />
        </div>
        <div className={styles["client-data"]}>
          <PersonalInfo data={personalInfo} />
        </div>
      </div>
    </motion.div>
  );
};

export default DataBox;
