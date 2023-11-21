import { AnimatePresence, motion } from "framer-motion";
import styles from "./SearchParameters.module.css";
import { Fragment, useContext } from "react";
import DataContext from "@/context/data-context";

const SearchParameters: React.FC<{ form: string }> = ({ form }) => {
  const dataContext = useContext(DataContext);
  const searchParameters =
    form === "PG"
      ? dataContext.searchParametersPG
      : dataContext.searchParametersMongo;

  return (
    <Fragment>
      <AnimatePresence>
        <motion.div
          className={styles["search-parameters-list"]}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
        >
          <motion.h2
            animate={{
              opacity: [0, 1, 0],
              transition: { duration: 1, repeat: Infinity },
            }}
          >
            Now searching...
          </motion.h2>
          <h4>
            <b>Parameters:</b>
          </h4>
          {searchParameters &&
            searchParameters.map((item, index) => {
              return (
                <h4 key={Object.keys(item)[0]}>{`• ${Object.keys(item)[0]} = ${
                  Object.values(item)[0]
                }`}</h4>
              );
            })}
        </motion.div>
      </AnimatePresence>
    </Fragment>
  );
};

export default SearchParameters;
