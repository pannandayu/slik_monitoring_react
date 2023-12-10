import DataContext from "@/context/data-context";
import { Fragment, useContext } from "react";
import SearchParameters from "./SearchParameters";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const imageStyle = { width: "3%", height: "auto" };

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
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={imageStyle}
            src={"/postgre.png"}
            alt="PostgreSQL Logo"
          />
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
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={imageStyle}
            src={"/mongo.png"}
            alt="MongoDB Logo"
          />
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
