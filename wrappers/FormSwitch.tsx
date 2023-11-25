import { AnimatePresence, motion } from "framer-motion";
import FormPG from "../components/pg/FormPG";
import FormMongo from "../components/FormMongo";
import styles from "@/styles/Home.module.css";

const FormSwitch: React.FC<{
  formIsPG: boolean;
  onClickSwitchForm: (state: boolean) => void;
}> = ({ formIsPG, onClickSwitchForm }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={formIsPG ? "PG" : "Mongo"}
        className={styles.container}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ duration: 0.3, flip: 0.3 }}
      >
        {formIsPG ? (
          <FormPG switchHandler={onClickSwitchForm} />
        ) : (
          <FormMongo switchHandler={onClickSwitchForm} />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default FormSwitch;
