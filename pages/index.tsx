import React, { FormEvent, useRef, useState } from "react";
import Title from "@/components/Title";
import FormSwitch from "@/wrappers/FormSwitch";
import DashboardSwitch from "@/wrappers/DashboardSwitch";
import { motion } from "framer-motion";
import Input from "@/components/Input";
import styles from "@/styles/Input.module.css";
import authStyles from "@/styles/Auth.module.css";

export default function Home(props: { password: string }) {
  const [formIsPG, setFormIsPG] = useState<boolean>(true);

  const [auth, setAuth] = useState<boolean | null>(null);

  const authHandler: React.FormEventHandler = (event: FormEvent) => {
    event.preventDefault();
    if (authRef.current?.value === props.password) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  };

  const authRef = useRef<HTMLInputElement>(null);

  const setFormIsPGHandler = (state: boolean) => {
    setFormIsPG(state);
  };

  return !auth ? (
    <div className={authStyles.auth}>
      <div style={{ display: "block" }}>
        <div>
          <form onSubmit={authHandler}>
            <Input
              labelName="Whisper me the magic word"
              idForName="auth"
              type="password"
              className={styles.input}
              ref={authRef}
            />
            <motion.button
              className={authStyles["auth-button"]}
              whileHover={{ backgroundColor: "#91c493", scale: 1.1 }}
              whileTap={{ backgroundColor: "#91c493", scale: 0.9 }}
            >
              Submit
            </motion.button>
          </form>
        </div>
        <div>
          {auth === false && (
            <motion.h4
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              style={{ color: "red", margin: 0 }}
            >
              Wrong password.
            </motion.h4>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h1>Find your client here.</h1>
      <h2>You can search by...</h2>
      <Title form={formIsPG ? "PG" : "Mongo"} />
      <div style={{ display: "flex" }}>
        <FormSwitch
          formIsPG={formIsPG}
          onClickSwitchForm={setFormIsPGHandler}
        />
        <DashboardSwitch formIsPG={formIsPG} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      password: process.env.PASSWORD,
    },
  };
}
