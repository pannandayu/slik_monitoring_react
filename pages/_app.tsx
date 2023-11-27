import { DataContextProvider } from "@/context/data-context";
import "@/styles/globals.css";
import Layout from "@/wrappers/Layout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DataContextProvider>
        <Component {...pageProps} />
      </DataContextProvider>
    </Layout>
  );
}