import React from 'react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Find me on social media.</p>
      <p className={styles.smIcons}>
        <Link
          href='https://www.linkedin.com/in/adrian-felipe-villamil-arias-260736222/'
          target='_blank'
        >
          <FaLinkedin />
        </Link>
      </p>
      <p>
        {'Powered by '}
        <Link
          className={styles.linkGithub}
          href='https://github.com/adrian-villamil'
          target='_blank'
        >
          Adrian Villamil
        </Link>
      </p>
    </footer>
  );
};