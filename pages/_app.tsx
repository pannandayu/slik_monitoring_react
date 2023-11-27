import Input from "@/components/Input";
import { DataContextProvider } from "@/context/data-context";
import "@/styles/globals.css";
import Layout from "@/wrappers/Layout";
import type { AppProps } from "next/app";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Input.module.css";

export default function App({ Component, pageProps }: AppProps) {
  const [auth, setAuth] = useState<boolean>(false);

  const authRef = useRef<HTMLInputElement>(null);

  const authHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (authRef.current?.value === process.env.PASSWORD) {
      setAuth(true);
    }
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
    <Layout>
      <DataContextProvider>
        <Component {...pageProps} />
      </DataContextProvider>
    </Layout>
  );
}
