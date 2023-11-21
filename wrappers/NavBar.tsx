import React, { Fragment } from "react";
import styles from "@/wrappers/NavBar.module.css";
import { AnimatePresence, motion } from "framer-motion";
import NavItems from "@/components/NavItems";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <Fragment>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ x: "-50" }}
          animate={{ x: 0 }}
          exit={{ x: "-50" }}
          transition={{ duration: 0.5 }}
          className={styles.sidebar}
        >
          <div className={styles["sidebar-title"]}>
            <h1>SLIK Monitoring Dashboard</h1>
          </div>
          <NavItems href="/" title="Search" />
          <NavItems href="/tes" title="TES" />
          <Link href="https://phabricator.muf.co.id" target="_blank">
            <img className={styles.image} src="/muf.png" alt="Logo MUF" />
          </Link>
        </motion.div>
      </AnimatePresence>
    </Fragment>
  );
};

export default NavBar;
