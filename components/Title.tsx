import DataContext from "@/context/data-context";
import { Fragment, useContext } from "react";
import SearchParameters from "./SearchParameters";
import { AnimatePresence, motion } from "framer-motion";

const Title: React.FC<{ form: string }> = ({ form }) => {
  const dataContext = useContext(DataContext);

  const formSearching =
    form === "PG" ? dataContext.isSearchingPG : dataContext.isSearchingMongo;

  const PGDetail = (
    <AnimatePresence mode="wait">
      <motion.div
        key={"PG"}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ duration: 0.3, flip: 0.3 }}
      >
        <span>
          Searching in PostgreSQL
          <img style={{ width: "3%" }} src="/postgre.png" />
        </span>
      </motion.div>
    </AnimatePresence>
  );

  const mongoDetail = (
    <AnimatePresence mode="wait">
      <motion.span
        key={"Mongo"}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ duration: 0.3, flip: 0.3 }}
      >
        <span>
          Searching in MongoDB
          <img style={{ width: "3%" }} src="/mongo.png" alt="MongoDB" />
        </span>
      </motion.span>
    </AnimatePresence>
  );
  return (
    <Fragment>
      {formSearching && <SearchParameters form={form} />}
      {form === "PG" ? PGDetail : mongoDetail}
    </Fragment>
  );
};

export default Title;
