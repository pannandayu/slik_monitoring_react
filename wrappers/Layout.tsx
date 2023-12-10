import { Fragment, ReactNode, useContext } from "react";
import NavBar from "./NavBar";
import Content from "./Content";
import Head from "next/head";
import AuthContext from "@/context/auth-context";

const Layout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const authContext = useContext(AuthContext);

  return (
    <Fragment>
      <Head>
        <title>SLIK Monitoring</title>
      </Head>
      {authContext.isAuth && (
        <header>
          <NavBar />
        </header>
      )}
      <Content>{children}</Content>
    </Fragment>
  );
};

export default Layout;
