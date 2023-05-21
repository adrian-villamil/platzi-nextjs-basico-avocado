import React from "react";
import styles from './cardlist.module.css';

type Props = {
  children: JSX.Element[];
};

export const CardList = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};