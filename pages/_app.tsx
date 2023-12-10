import { AuthContextProvider } from "@/context/auth-context";
import { CBASContextProvider } from "@/context/cbas-context";
import { DataContextProvider } from "@/context/data-context";
import "@/styles/globals.css";
import Layout from "@/wrappers/Layout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Layout>
        <DataContextProvider>
          <CBASContextProvider>
            <Component {...pageProps} />
          </CBASContextProvider>
        </DataContextProvider>
      </Layout>
    </AuthContextProvider>
  );
}
