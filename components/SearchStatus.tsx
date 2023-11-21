import { useContext } from "react";
import styles from "./SearchStatus.module.css";
import DataContext from "@/context/data-context";
import InputDataInterface from "@/interfaces/InputDataInterface";
import { AnimatePresence, motion } from "framer-motion";

const SearchStatus: React.FC<{
  searchParams: InputDataInterface[] | [{}];
  form: string;
}> = ({ searchParams, form }) => {
  const dataContext = useContext(DataContext);
  const dataFound =
    form === "PG" ? dataContext.searchStatusPG : dataContext.searchStatusMongo;

  const lastSearchParameters = (
    <div style={{ textAlign: "center" }}>
      <h4 style={{ fontWeight: "bold" }}>Last Search Parameter(s)</h4>
      {searchParams.map((items, index) => (
        <h5 key={Object.keys(items)[0]}>{Object.values(items)[0]}</h5>
      ))}
    </div>
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className={styles["search-status"]}
      >
        <hr />
        <h2>Status</h2>
        {dataFound ? (
          <h3>FOUND</h3>
        ) : (
          <h3 className={`${styles["not-found"]}`}>NOT FOUND</h3>
        )}
        {lastSearchParameters}
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchStatus;
