import { Fragment, ReactNode } from "react";
import NavBar from "./NavBar";
import Content from "./Content";
import Head from "next/head";

const Layout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>SLIK Monitoring</title>
      </Head>
      <NavBar />
      <Content>{children}</Content>
    </Fragment>
  );
};

export default Layout;
