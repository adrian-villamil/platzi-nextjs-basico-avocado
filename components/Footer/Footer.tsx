import React from 'react';
import styles from './footer.module.css';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Find me on social media.</p>
      <p className={styles.smIcons}>
        <Link href='https://www.instagram.com/adrian_villamil_art/'>
          <FaInstagram />
        </Link> 
      </p>
      <p>Powered by <Link className={styles.linkGithub} href='https://github.com/adrian-villamil'>Adrian Villamil</Link></p>
    </footer>
  );
};