import { Fragment, useContext } from "react";
import styles from "@/styles/SearchStatus.module.css";
import DataContext from "@/context/data-context";
import InputDataInterface from "@/interfaces/InputDataInterface";
import { AnimatePresence, motion } from "framer-motion";

const SearchStatus: React.FC<{
  searchParams: InputDataInterface[];
  form: string;
}> = ({ searchParams, form }) => {
  const dataContext = useContext(DataContext);
  const dataFound =
    form === "PG" ? dataContext.searchStatusPG : dataContext.searchStatusMongo;

  const searchParameters = (
    <div className={styles["last-search-parameters"]}>
      {searchParams.map((items, index) => (
        <Fragment key={Object.keys(items)[0]}>
          <h4>{Object.values(items)[0]}</h4>
        </Fragment>
      ))}
    </div>
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 0.3,
        }}
        className={styles["search-status"]}
      >
        <hr />
        <h2>Status</h2>
        {!dataFound && searchParams[0]?.noParams && (
          <Fragment>
            <h3 className={styles["no-params"]}>OOPS!</h3>
            {searchParameters}
          </Fragment>
        )}
        {dataFound && !searchParams[0]?.noParams && (
          <Fragment>
            <h3>FOUND</h3>
            <h4>Search Parameter(s)</h4>
            {searchParameters}
          </Fragment>
        )}
        {!dataFound && !searchParams[0]?.noParams && (
          <Fragment>
            <h3 className={styles["not-found"]}>NOT FOUND</h3>
            <h4>Search Parameter(s)</h4>
            {searchParameters}
          </Fragment>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchStatus;
