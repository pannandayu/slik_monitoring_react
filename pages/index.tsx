import React, { FormEvent, useRef, useState } from "react";
import Title from "@/components/Title";
import FormSwitch from "@/wrappers/FormSwitch";
import DashboardSwitch from "@/wrappers/DashboardSwitch";
import { motion } from "framer-motion";
import Input from "@/components/Input";
import styles from "@/styles/Input.module.css";

export default function Home(props: { password: string }) {
  const [formIsPG, setFormIsPG] = useState<boolean>(true);

  const [auth, setAuth] = useState<boolean>(false);

  const authHandler: React.FormEventHandler = (event: FormEvent) => {
    event.preventDefault();
    if (authRef.current?.value === props.password) {
      setAuth(true);
    }
  };

  const authRef = useRef<HTMLInputElement>(null);

  const setFormIsPGHandler = (state: boolean) => {
    setFormIsPG(state);
  };

  return !auth ? (
    <div
      style={{
        height: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={authHandler}>
        <Input
          labelName="Whisper me the magic words"
          idForName="auth"
          type="password"
          className={styles.input}
          ref={authRef}
        />
        <motion.button
          style={{
            backgroundColor: "#4caf50",
            color: "white",
            cursor: "pointer",
            border: "none",
            margin: "20px",
            padding: "10px",
            borderRadius: "8px",
          }}
          whileHover={{ backgroundColor: "#91c493", scale: 1.1 }}
          whileTap={{ backgroundColor: "#91c493", scale: 0.9 }}
        >
          Submit
        </motion.button>
      </form>
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
