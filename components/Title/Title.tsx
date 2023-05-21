import React from "react";
import styles from './title.module.css';
import { CiAvocado } from 'react-icons/ci';

export const Title = () => {
  return (
    <h1 className={styles.title}>Avocado {<CiAvocado />} Store</h1>
  );
};