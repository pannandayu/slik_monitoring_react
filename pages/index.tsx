import FormPG from "@/components/FormPG";
import React, { Fragment, useState } from "react";
import styles from "@/styles/Home.module.css";
import DataBox from "@/components/DataBox";
import FormMongo from "@/components/FormMongo";
import { AnimatePresence, motion } from "framer-motion";
import Card from "@/wrappers/Card";
import Title from "@/components/Title";

export default function Home() {
  const [formIsPG, setFormIsPG] = useState<boolean>(true);

  const setFormIsPGHandler = (state: boolean) => {
    setFormIsPG(state);
  };

  return (
    <Fragment>
      <h1>Find your client here.</h1>
      <h2>You can search by...</h2>
      <Title form={formIsPG ? "PG" : "Mongo"} />
      <div style={{ display: "flex" }}>
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
              <FormPG switchHandler={setFormIsPGHandler} />
            ) : (
              <FormMongo switchHandler={setFormIsPGHandler} />
            )}
          </motion.div>
        </AnimatePresence>
        <div className={styles["data-box"]}>
          <Card>
            <DataBox />
          </Card>
        </div>
      </div>
    </Fragment>
  );
}
