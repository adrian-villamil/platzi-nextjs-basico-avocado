import React from "react";
import { Navbar } from "components/Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import styles from './layout.module.css';

type Props = {
  children: JSX.Element;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;