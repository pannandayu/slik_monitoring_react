import DataContext from "@/context/data-context";
import CardDataBox from "@/wrappers/CardDataBox";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useContext, useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import DashboardPG from "../components/pg/DashboardPG";

const DashboardSwitch: React.FC<{ formIsPG: boolean }> = ({ formIsPG }) => {
  const dataContext = useContext(DataContext);
  const dataPG = dataContext.resultDataPG;
  const dataMongo = dataContext.resultDataMongo;

  const [intro, setIntro] = useState<ReactNode>();

  useEffect(() => {
    const welcome = "Welcome, MUF Person!".split("");
    const tryy = "Try to search something.".split("");

    setIntro(
      <AnimatePresence>
        <div className={styles.intro}>
          {welcome.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              exit={{}}
            >
              {char}
            </motion.span>
          ))}
          <br />
          {tryy.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </AnimatePresence>
    );
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={formIsPG ? "PG" : "Mongo"}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ duration: 0.3, flip: 0.3 }}
        className={styles["data-box-card"]}
      >
        {!dataPG && !dataMongo && intro}

        {formIsPG && dataPG?.form === "PG" && dataPG && (
          <CardDataBox>
            <DashboardPG data={dataPG} />
          </CardDataBox>
        )}
        {/* {!formIsPG && dataMongo && (
          <CardDataBox>
            <DataBox data={dataMongo} />
          </CardDataBox> TODO BUAT SEARCH BY MONGO
        )} */}
      </motion.div>
    </AnimatePresence>
  );
};

export default DashboardSwitch;
